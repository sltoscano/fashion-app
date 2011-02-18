#include "stdafx.h"

#include <comdef.h>

#include "populate.h"

#include "copyfile.h"

#include <iostream>
#include <string>
#include <sstream>
#include <algorithm>
#include <iterator>

#include "debug.h"

extern bool g_cancel;
extern bool g_first_item_ready;
extern int g_itemPosition;

void add(list* itemList, item* newItem)
{
	newItem->next = NULL;
	if (itemList->tail == NULL)
	{
		itemList->tail = newItem;
	}
	else
	{
		itemList->tail->next = newItem;
		itemList->tail = newItem;
	}
	if (itemList->head == NULL)
		itemList->head = newItem;

	itemList->count++;
}

void cleanup(list* itemList)
{
	item* iter = itemList->head;
	while(iter)
	{
		item* tmp = iter;
		iter = iter->next;
		delete tmp;
	}
	itemList->head = NULL;
	itemList->tail = NULL;
	itemList->count = 0;
}

DWORD WINAPI populateFileListProc(LPVOID params)
{
	threadParams* thread_params = (threadParams*) params;
	std::wstring directory(thread_params->directory);
	list* itemList = thread_params->itemList;

	HeapFree(GetProcessHeap(), 0, params);

	std::vector<std::wstring> list;
	std::wstring spec(_T("*.txt"));
	DWORD result = Utils::GatherFiles(directory, spec, list);
	if (result != ERROR_SUCCESS)
		return result;

	for (std::vector<std::wstring>::const_iterator iter = list.begin();
		iter != list.end();
		iter++)
	{
		const std::wstring& file = *iter;

		TCHAR product_name[MAX_PATH];
		GetPrivateProfileString(_T("product_detail"), _T("product_name"), NULL, product_name, MAX_PATH, file.c_str());
		TCHAR product_color[MAX_PATH];
		GetPrivateProfileString(_T("product_detail"), _T("product_color"), NULL, product_color, MAX_PATH, file.c_str());
		TCHAR product_price[MAX_PATH];
		GetPrivateProfileString(_T("product_detail"), _T("product_price"), NULL, product_price, MAX_PATH, file.c_str());
		TCHAR article_type[MAX_PATH];
		GetPrivateProfileString(_T("product_detail"), _T("article_type"), NULL, article_type, MAX_PATH, file.c_str());
		TCHAR base_data_name[MAX_PATH];
		GetPrivateProfileString(_T("product_detail"), _T("base_data_name"), NULL, base_data_name, MAX_PATH, file.c_str());
		TCHAR article_perspectives[MAX_PATH];
		GetPrivateProfileString(_T("product_detail"), _T("article_perspectives"), NULL, article_perspectives, MAX_PATH, file.c_str());

		item* p = new item;
		p->product_name = std::wstring(product_name);
		p->product_color = std::wstring(product_color);
		p->product_price = std::wstring(product_price);
		p->article_type = std::wstring(article_type);
		p->item_base_name = std::wstring(base_data_name);

		std::vector<std::wstring> perspectives;
		perspectives.push_back(_T("front"));
		perspectives.push_back(_T("side"));
		perspectives.push_back(_T("back"));
		perspectives.push_back(_T("side"));
		for (std::vector<std::wstring>::const_iterator perspective = perspectives.begin();
			perspective != perspectives.end();
			perspective++)
		{
			p->image_list.push_back(
				*perspective + 
				std::wstring(_T("_")) + 
				p->article_type + 
				std::wstring(_T("_")) + 
				p->item_base_name + 
				std::wstring(_T(".bmp")));
		}
		
		add(itemList, p);

		int loadedPosition = iter - list.begin();
		if (g_itemPosition <= loadedPosition)
			g_first_item_ready = true;

		dbgprint(_T("."));

		if (g_cancel)
			return ERROR_CANCELLED;
	}

	dbgprint(_T("Finished loading %d items"), list.size());

	return ERROR_SUCCESS;
}
