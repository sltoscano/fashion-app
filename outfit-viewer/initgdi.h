namespace internal
{
	struct impl;
}

class initgdi
{
public:
	initgdi();
	~initgdi();
private:
	internal::impl* _impl;
};
