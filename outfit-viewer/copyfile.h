#pragma once

#include <vector>
#include <string>

namespace Utils
{
	DWORD GatherFiles(std::wstring& pathFrom, std::wstring& fileSpec, std::vector<std::wstring>& fileList);
};
