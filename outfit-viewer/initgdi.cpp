#include "stdafx.h"

#include <GdiPlus.h>

#include "initgdi.h"

using namespace Gdiplus;
using namespace internal;

struct gdiplus_data
{
	ULONG_PTR gdiToken;
	ULONG_PTR gdiHookToken;
	GdiplusStartupInput* gdiSI;
	GdiplusStartupOutput* gdiSO;
};

initgdi::initgdi() : 
	_impl(NULL)
{
	gdiplus_data* gd = new gdiplus_data;

	gd->gdiSI = new GdiplusStartupInput;
	gd->gdiSO = new GdiplusStartupOutput;

	gd->gdiSI->SuppressBackgroundThread = 1;
	GdiplusStartup(&gd->gdiToken, gd->gdiSI, gd->gdiSO);
	gd->gdiSO->NotificationHook(&gd->gdiHookToken);

	_impl = (impl*) gd;
}

initgdi::~initgdi()
{
	if (_impl == NULL)
		return;

	gdiplus_data* gd = (gdiplus_data*) _impl;

	gd->gdiSO->NotificationUnhook(gd->gdiHookToken);
	GdiplusShutdown(gd->gdiToken);

	delete gd->gdiSI;
	delete gd->gdiSO;
	delete gd;
	_impl = NULL;
}
