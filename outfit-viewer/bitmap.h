namespace internal
{
	struct impl;
}

class bitmap
{
public:
	bitmap(const TCHAR* fileName);
	~bitmap();
	bool get_data(int* width, int* height, void** data);
private:
	internal::impl* _impl;
};
