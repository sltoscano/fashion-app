#include "stdafx.h"

#include "opengl.h"

#include "debug.h"

#ifdef _DEBUG
int _tmain(int argc, _TCHAR* argv[])
{
	REF(argc);
	REF(argv);
#else
int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow)
{
	REF(hInstance);
	REF(hPrevInstance);
	REF(pCmdLine);
	REF(nCmdShow);
#endif
	int argc_ = 1;
	char* argv_[1];
	argv_[0] = "test";
	glmain(argc_, argv_);
}

#ifdef _DEBUG
// init CRT memory leak detection before main is called
struct init {
	init() { _CrtSetDbgFlag ( _CRTDBG_ALLOC_MEM_DF | _CRTDBG_LEAK_CHECK_DF ); }
} _init;
#endif
