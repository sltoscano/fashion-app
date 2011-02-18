#include "StdAfx.h"
#include <comdef.h>

#include "copyfile.h"

namespace Utils
{
	DWORD GatherFiles(std::wstring& pathFrom, std::wstring& fileSpec, std::vector<std::wstring>& fileList)
	{
		WIN32_FIND_DATA findData;
		HANDLE hFile = FindFirstFileW((pathFrom + std::wstring(_T("\\")) + fileSpec).c_str(), &findData);

		if (hFile == INVALID_HANDLE_VALUE)
			return ERROR_FILE_INVALID;

		if (GetFileAttributesW(pathFrom.c_str()) && GetLastError() == ERROR_FILE_NOT_FOUND)
			return ERROR_FILE_NOT_FOUND;

		do
		{
			if (findData.dwFileAttributes & FILE_ATTRIBUTE_DIRECTORY)
			{
				if (_tcscmp(findData.cFileName, _T(".")) == 0 || _tcscmp(findData.cFileName, _T("..")) == 0)
					continue;

				std::wstring newPathFrom = pathFrom + std::wstring(_T("\\")) + std::wstring(findData.cFileName);
				GatherFiles(newPathFrom, fileSpec, fileList);
			}
			else
			{
				fileList.push_back(pathFrom + std::wstring(_T("\\")) + std::wstring(findData.cFileName));
			}
		} while (FindNextFileW(hFile, &findData) != FALSE);

		DWORD dwError = GetLastError();
		if (dwError == ERROR_NO_MORE_FILES)
			dwError = ERROR_SUCCESS;

		FindClose(hFile);
		return dwError;
	}
};
