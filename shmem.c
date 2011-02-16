#include <stdio.h>
#include <unistd.h>

#include <sys/resource.h>
#include <sys/syslimits.h>
#include <sys/mman.h>

#include <fcntl.h>
#include <string.h>

#include <errno.h>

typedef int BOOL;
#define TRUE 1
#define FALSE 0

static BOOL map_memory(const char* shared_name, __int64_t sizeBytes, void** addr, int* pfd)
{
	shm_unlink(shared_name);
	
	*pfd = shm_open(shared_name, O_RDWR|O_CREAT, S_IRWXG, S_IRWXU, S_IRWXO);
	if (*pfd == -1 || ftruncate(*pfd, sizeBytes) == -1)
	{
		printf( "\nError opening/trunc file: %s (%s)\n", shared_name, strerror(errno));
		return FALSE;
	}

	//mmap(void *addr, size_t len, int prot, int flags, int fd, off_t offset);
	
	int align = getpagesize() - 1;
	sizeBytes = (sizeBytes + align) & ~align;
	int offset = 0;
	offset = (offset + align) & ~align;
	
	*addr = mmap(NULL, sizeBytes, PROT_READ|PROT_WRITE, MAP_SHARED, *pfd, offset);
	
	//*addr = mmap(NULL, sizeBytes, PROT_READ|PROT_WRITE, MAP_ANON|MAP_SHARED, VM_FLAGS_FIXED, 0);
	
	if (*addr == MAP_FAILED)
	{
		printf("\nError opening memmap: %s (%s)\n", shared_name, strerror(errno));
		return FALSE;
	}
	return TRUE;
}

static BOOL unmap_memory(void* addr, __int64_t sizeBytes)
{
	if (munmap(addr, sizeBytes) == 0)
		return TRUE;
	
	return FALSE;
}

static int get_allocation_granularity()
{
	return getpagesize();
}
		 
static BOOL increase_limit()
{
	struct rlimit rlp;
	if (getrlimit(RLIMIT_NOFILE, &rlp) != 0)
		return FALSE;
	rlp.rlim_cur = rlp.rlim_max < OPEN_MAX ? rlp.rlim_max : OPEN_MAX; 
	if (setrlimit(RLIMIT_NOFILE, &rlp) != 0)
		return FALSE;
	
	return TRUE;
}

#define MAX_SHARED_COUNT 10000

int main (int argc, const char * argv[])
{	
	int i=0;
	void* addrs[MAX_SHARED_COUNT];
	int fds[MAX_SHARED_COUNT];
	
	struct rlimit rlp;
	getrlimit(RLIMIT_NOFILE, &rlp);
	printf("rlimit=%lld\n", rlp.rlim_cur);
	
	printf("page size=%d\n", get_allocation_granularity());
	
	printf("increasing resource limit.\n");
    if (increase_limit() == TRUE)
		printf("\tcall succeeded.\n");
	else
		printf("\tcall failed.\n");

	getrlimit(RLIMIT_NOFILE, &rlp);
	printf("rlimit=%lld\n", rlp.rlim_cur);
	
	for (i=0; i < MAX_SHARED_COUNT; i++)
	{
		char filename[100];
		filename[0] = 0;
		sprintf(filename, "/shfile_%d", i);
		
		if (map_memory(filename, 16384*1024, &addrs[i], &fds[i]) == FALSE)
		{
			printf("map (%d) failed\n", i);
			return 1;
		}
		char* data = addrs[i] + 9;
		*data = 0xFF;
	}
	
	for (i=0; i < MAX_SHARED_COUNT; i++)
	{
		char filename[100];
		filename[0] = 0;
		sprintf(filename, "/shfile_%d", i);
		
		if (unmap_memory(addrs[i], 16384*1024) == FALSE)
		{
			printf("unmap failed (%d)\n", i);
			return 1;
		}
		
		if (close(fds[i]) != 0)
		{
			printf("close failed (%d)\n", i);
			return 1;
		}
		
		if (shm_unlink(filename) != 0)
		{
			printf("unlink failed (%d)\n", i);
			return 1;
		}
	}
	
	return 0;
}
