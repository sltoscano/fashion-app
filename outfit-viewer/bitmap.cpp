#include "stdafx.h"

#include <GdiPlus.h>

#include "bitmap.h"

using namespace Gdiplus;
using namespace internal;

struct bitmap_data
{
	Bitmap* bitmap;
	BitmapData* bitmapData;
};

bitmap::~bitmap()
{
	if (_impl == NULL)
		return;

	bitmap_data* bd = (bitmap_data*) _impl;
	bd->bitmap->UnlockBits(bd->bitmapData);
	delete bd->bitmapData;
	delete bd->bitmap;
	delete bd;
	_impl = NULL;
}

bitmap::bitmap(const TCHAR* fileName) : 
	_impl(NULL)
{
	using namespace Gdiplus;

	bitmap_data* data = new bitmap_data;

	data->bitmap = new Bitmap(fileName);
	if (!data->bitmap)
		return;
	data->bitmapData = new BitmapData();

	_impl = (impl*) data;
}

bool bitmap::get_data(int* width, int* height, void** data)
{
	if (_impl == NULL)
		return false;

	bitmap_data* bd = (bitmap_data*) _impl;

	RectF srcRect;
	Unit srcUnit;
	Gdiplus::Status status;
	status = bd->bitmap->GetBounds(&srcRect, &srcUnit);
	if (status != Gdiplus::Ok)
		return false;

	Rect rect((INT)srcRect.X, (INT)srcRect.Y, (INT)srcRect.Width, (INT)srcRect.Height);
	status = bd->bitmap->LockBits(&rect, ImageLockModeRead, PixelFormat24bppRGB, bd->bitmapData);
	if (status != Gdiplus::Ok)
		return false;

	*width = bd->bitmapData->Height;
	*height = bd->bitmapData->Width;
	*data = bd->bitmapData->Scan0;
	return true;
}
