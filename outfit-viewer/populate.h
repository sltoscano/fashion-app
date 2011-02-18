
#include <vector>
#include <string>

struct item
{
	std::wstring product_name;
	std::wstring product_color;
	std::wstring product_price;
	std::wstring article_type;
	std::wstring item_base_name;
	std::vector<std::wstring> image_list;
	item* next;
};

struct list
{
	item* head;
	item* tail;
	int count;
	list() : count(0), 
		head(NULL),
		tail(NULL)
	{}
};

struct threadParams
{
	list* itemList;
	TCHAR directory[MAX_PATH];
};

void add(list* itemList, item* i);

void cleanup(list* itemList);

DWORD WINAPI populateFileListProc(LPVOID params);
