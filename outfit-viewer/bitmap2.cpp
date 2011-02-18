#include "stdafx.h"

#include <GdiPlus.h>

#include "bitmap.h"

#include "debug.h"

using namespace Gdiplus;
using namespace internal;

struct bitmap_data
{
	const TCHAR* filename;
	unsigned char* bmpImage;
};

bitmap::~bitmap()
{
	if (_impl == NULL)
		return;

	bitmap_data* bd = (bitmap_data*) _impl;
	delete[] bd->bmpImage;
	delete bd;
	_impl = NULL;
}

bitmap::bitmap(const TCHAR* fileName) : 
	_impl(NULL)
{
	using namespace Gdiplus;

	bitmap_data* bd = new bitmap_data;
	bd->filename = fileName;
	bd->bmpImage = NULL;
	_impl = (impl*) bd;
}

bool bitmap::get_data(int* width, int* height, void** data)
{
	if (_impl == NULL)
		return false;

	bitmap_data* bd = (bitmap_data*) _impl;

	FILE *file;
	BITMAPFILEHEADER bmpFile;
	BITMAPINFOHEADER bmpInfo;
	unsigned char tmpRGB;
	
	_wfopen_s(&file, bd->filename, _T("rb"));

	if (!file)
	{
		MessageBox(NULL, L"Can't Find Bitmap", L"Error", MB_OK);
		return false;
	}

	fread(&bmpFile,sizeof(BITMAPFILEHEADER),1,file);

	if (bmpFile.bfType != 0x4D42)
	{
		MessageBox(NULL, L"Incorrect texture type", L"Error", MB_OK);
		fclose(file);
		return false;
	}

	fread(&bmpInfo,sizeof(BITMAPINFOHEADER),1,file);

	fseek(file,bmpFile.bfOffBits,SEEK_SET);

	bd->bmpImage = new unsigned char[bmpInfo.biSizeImage];

	if (!bd->bmpImage)
	{
		MessageBox(NULL, L"Out of Memory", L"Error", MB_OK);
		fclose(file);
		return false;
	}

	fread(bd->bmpImage,1,bmpInfo.biSizeImage,file);

	if (!bd->bmpImage)
	{
		MessageBox(NULL, L"Error reading bitmap", L"Error", MB_OK);
		fclose(file);
		return false;
	}

	for (unsigned int i = 0; i < bmpInfo.biSizeImage; i+=3)
	{
		tmpRGB = bd->bmpImage[i];
		bd->bmpImage[i] = bd->bmpImage[i+2];
		bd->bmpImage[i+2] = tmpRGB;
	}

	fclose(file);
	*width = bmpInfo.biWidth;
	*height = bmpInfo.biHeight;
	*data = bd->bmpImage;
	return true;
}
