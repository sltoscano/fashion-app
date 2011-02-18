#include "stdafx.h"

#include "bitmap.h"
#include "thread.h"
#include "initgdi.h"

#include "GL/glut.h"

#include "populate.h"

#include "debug.h"

// Shared state across cpps
extern bool g_cancel = false;
extern bool g_first_item_ready = false;
extern int g_itemPosition = 0;

// State in this cpp
static list itemList;
static int g_windowWidth = 270;
static int g_windowHeight = 270;
static HANDLE g_hThread = NULL;
static initgdi* g_gdi = NULL;
static bool g_first_key_typed = false;

//TCHAR* g_image_dir = _T("C:\\Users\\Steve\\Documents\\ruby-scripts\\screen-scraper\\forever21-data\\images_bmp\\");
//TCHAR* g_metadata_dir = _T("C:\\Users\\Steve\\Documents\\ruby-scripts\\screen-scraper\\forever21-data\\metadata\\");

TCHAR* g_image_dir = _T("forever21-data\\images_bmp\\");
TCHAR* g_metadata_dir = _T("forever21-data\\metadata\\");

#define MAX_SIDES 4
GLuint texture[MAX_SIDES];

int auto_rotate = 1;

float xrot = 0.0f;
float yrot = 0.0f;

GLfloat box[] = {
	// FRONT
	-0.5f, -0.5f,  0.5f,
	 0.5f, -0.5f,  0.5f,
	-0.5f,  0.5f,  0.5f,
	 0.5f,  0.5f,  0.5f,
	// BACK
	-0.5f, -0.5f, -0.5f,
	-0.5f,  0.5f, -0.5f,
	 0.5f, -0.5f, -0.5f,
	 0.5f,  0.5f, -0.5f,
	// LEFT
	-0.5f, -0.5f,  0.5f,
	-0.5f,  0.5f,  0.5f,
	-0.5f, -0.5f, -0.5f,
	-0.5f,  0.5f, -0.5f,
	// RIGHT
	 0.5f, -0.5f, -0.5f,
	 0.5f,  0.5f, -0.5f,
	 0.5f, -0.5f,  0.5f,
	 0.5f,  0.5f,  0.5f,
	// TOP
	-0.5f,  0.5f,  0.5f,
	 0.5f,  0.5f,  0.5f,
	 -0.5f,  0.5f, -0.5f,
	 0.5f,  0.5f, -0.5f,
	// BOTTOM
	-0.5f, -0.5f,  0.5f,
	-0.5f, -0.5f, -0.5f,
	 0.5f, -0.5f,  0.5f,
	 0.5f, -0.5f, -0.5f,
};

GLfloat texCoords[] = {
	// FRONT
	 0.0f, 0.0f,
	 1.0f, 0.0f,
	 0.0f, 1.0f,
	 1.0f, 1.0f,
	// BACK
	 1.0f, 0.0f,
	 1.0f, 1.0f,
	 0.0f, 0.0f,
	 0.0f, 1.0f,
	// LEFT
	 1.0f, 0.0f,
	 1.0f, 1.0f,
	 0.0f, 0.0f,
	 0.0f, 1.0f,
	// RIGHT
	 1.0f, 0.0f,
	 1.0f, 1.0f,
	 0.0f, 0.0f,
	 0.0f, 1.0f,
	// TOP
	 0.0f, 0.0f,
	 1.0f, 0.0f,
	 0.0f, 1.0f,
	 1.0f, 1.0f,
	// BOTTOM
	 1.0f, 0.0f,
	 1.0f, 1.0f,
	 0.0f, 0.0f,
	 0.0f, 1.0f
};

float lightAmbient[] = { 0.8f, 0.8f, 0.8f, 1.0f };

float matAmbient[] = { 0.8f, 0.8f, 0.8f, 1.0f };

void load_save_data(const TCHAR* settingsFile)
{
	TCHAR itemPositionString[16];
	GetPrivateProfileString(_T("settings"), _T("place"), NULL, itemPositionString, 16, settingsFile);
	g_itemPosition = _wtoi(itemPositionString);
	TCHAR windowWidth[16];
	GetPrivateProfileString(_T("settings"), _T("windowWidth"), NULL, windowWidth, 16, settingsFile);
	g_windowWidth = _wtoi(windowWidth) ? _wtoi(windowWidth) : 270;
	TCHAR windowHeight[16];
	GetPrivateProfileString(_T("settings"), _T("windowHeight"), NULL, windowHeight, 16, settingsFile);
	g_windowHeight = _wtoi(windowHeight) ? _wtoi(windowHeight) : 270;
}

void save_data(int itemPosition, int windowWidth, int windowHeight)
{
	TCHAR path[MAX_PATH];
	GetModuleFileName(NULL, path, MAX_PATH);
	TCHAR *pos = wcsrchr(path, _T('\\'));
	*(pos + 1) = _T('\0');
	wcscat_s(path, MAX_PATH, _T("save.ini"));

	FILE* file;
	_wfopen_s(&file, path, _T("w"));
	fwprintf_s(file, _T("[settings]\n"));
	fwprintf_s(file, _T("place=%d\n"), itemPosition);
	fwprintf_s(file, _T("windowWidth=%d\n"), windowWidth);
	fwprintf_s(file, _T("windowHeight=%d\n"), windowHeight);
	fclose(file);
}

void unload_textures()
{
	for (int i=0; i < MAX_SIDES; i++)
	{
		glDeleteTextures(1, &texture[i]);
	}
}

bool load_texture(const TCHAR* filename, int index)
{
	if (filename == NULL || index >= MAX_SIDES)
		return false;

	bitmap bm(filename);

	GLvoid* data;
	int width;
	int height;
	if (!bm.get_data(&width, &height, &data))
		return false;
	
	glGenTextures(1, &texture[index]);

	glBindTexture(GL_TEXTURE_2D, texture[index]);

	glPixelStorei(GL_UNPACK_ROW_LENGTH, width);
	glPixelStorei(GL_UNPACK_ALIGNMENT, 0);
	
	glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, width, height, 0, GL_RGB,
		GL_UNSIGNED_BYTE, data);
	
	glTexParameterf(GL_TEXTURE_2D, 
		GL_TEXTURE_MIN_FILTER, GL_LINEAR);
	glTexParameterf(GL_TEXTURE_2D,
		GL_TEXTURE_MAG_FILTER, GL_LINEAR);

	return true;
}

bool load_scene(item* product)
{
	if (product == NULL)
		return false;

	unload_textures();

	dbgprint(_T("\nid = %d\n"), g_itemPosition);
	dbgprint(_T("\narticle_type = %s\n"), product->article_type.c_str());
	dbgprint(_T("product_name = %s\n"), product->product_name.c_str());
	dbgprint(_T("product_color = %s\n"), product->product_color.c_str());
	dbgprint(_T("product_price = $%s\n"), product->product_price.c_str());

	for (std::vector<std::wstring>::iterator image = product->image_list.begin();
		image != product->image_list.end();
		image++)
	{
		int index = image - product->image_list.begin();
		std::wstring fullpath = g_image_dir;
		fullpath.append(*image);
		if (!load_texture(fullpath.c_str(), index))
		{
			MessageBox(NULL, L"Error loading textures", L"Error", MB_OK);
			return false;
		}
	}
	glEnable(GL_TEXTURE_2D);

	glEnable(GL_LIGHTING);
	glEnable(GL_LIGHT0);

	glMaterialfv(GL_FRONT_AND_BACK, GL_AMBIENT, matAmbient);
	
	glLightfv(GL_LIGHT0, GL_AMBIENT, lightAmbient);

	glEnable(GL_DEPTH_TEST);
	glDepthFunc(GL_LEQUAL);

	glClearColor(0.0f, 0.0f, 0.0f, 0.0f);
	glClearDepth(1.0f);

	glVertexPointer(3, GL_FLOAT, 0, box);
	glTexCoordPointer(2, GL_FLOAT, 0, texCoords);
	glEnableClientState(GL_VERTEX_ARRAY);
	glEnableClientState(GL_TEXTURE_COORD_ARRAY);

	glEnable(GL_CULL_FACE);
	glShadeModel(GL_SMOOTH);

	return true;
}

bool load_item_into_scene(int index)
{
	item* pos = NULL;
	if (itemList.count == 0)
		return false;
	pos = itemList.head;
	for (int i=0; i<index; i++) pos = pos->next;
	return load_scene(pos);
}

void display()
{
   glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
   glLoadIdentity();

   gluLookAt(
		0.0f, 0.0f, 3.0f,
		0.0f, 0.0f, 0.0f,
		0.0f, 1.0f, 0.0f);

   glRotatef(xrot, 1.0f, 0.0f, 0.0f);
   glRotatef(yrot, 0.0f, 1.0f, 0.0f);

   glDisable(GL_TEXTURE_2D);
   glEnable(GL_TEXTURE_2D);
   glTexEnvf(GL_TEXTURE_ENV, GL_TEXTURE_ENV_MODE, GL_MODULATE);
   glBindTexture(GL_TEXTURE_2D, texture[0]); 

   // FRONT AND BACK
   glColor4f(1.0f, 0.0f, 0.0f, 1.0f);
   glNormal3f(0.0f, 0.0f, 1.0f);
   glDrawArrays(GL_TRIANGLE_STRIP, 0, 4);

   glDisable(GL_TEXTURE_2D);
   glEnable(GL_TEXTURE_2D);
   glTexEnvf(GL_TEXTURE_ENV, GL_TEXTURE_ENV_MODE, GL_MODULATE);
   glBindTexture(GL_TEXTURE_2D, texture[2]); 

   glNormal3f(0.0f, 0.0f, -1.0f);
   glDrawArrays(GL_TRIANGLE_STRIP, 4, 4);

   glDisable(GL_TEXTURE_2D);
   glEnable(GL_TEXTURE_2D);
   glTexEnvf(GL_TEXTURE_ENV, GL_TEXTURE_ENV_MODE, GL_MODULATE);
   glBindTexture(GL_TEXTURE_2D, texture[1]); 

   // LEFT AND RIGHT
   glColor4f(0.0f, 1.0f, 0.0f, 1.0f);
   glNormal3f(-1.0f, 0.0f, 0.0f);
   glDrawArrays(GL_TRIANGLE_STRIP, 8, 4);

   glDisable(GL_TEXTURE_2D);
   glEnable(GL_TEXTURE_2D);
   glTexEnvf(GL_TEXTURE_ENV, GL_TEXTURE_ENV_MODE, GL_MODULATE);
   glBindTexture(GL_TEXTURE_2D, texture[1]); 

   glNormal3f(1.0f, 0.0f, 0.0f);
   glDrawArrays(GL_TRIANGLE_STRIP, 12, 4);

   glDisable(GL_TEXTURE_2D);
   glFlush();
   glutSwapBuffers();
}

void idle()
{
	if (!auto_rotate)
		return;

	if (auto_rotate == 1)
		yrot += 1.0f;
	else if (auto_rotate == 2)
		yrot -= 1.0f;

	if (g_first_item_ready && !g_first_key_typed)
	{
		load_item_into_scene(g_itemPosition);
		g_first_key_typed = true;
	}

	glutPostRedisplay();
	Sleep(30);
}

void quit_app()
{
	g_cancel = true;
	save_data(g_itemPosition, g_windowWidth, g_windowHeight);
	Utils::WaitForThread(g_hThread);
	cleanup(&itemList);
	unload_textures();
	delete g_gdi;
	exit(0);
}

void decrement_item_position(int* itemPosition)
{
	--*itemPosition;
	if (*itemPosition < 0)
		*itemPosition = 0;
}

void increment_item_position(int* itemPosition)
{
	++*itemPosition;
	if (*itemPosition > itemList.count - 1)
		*itemPosition = itemList.count - 1;
}

void mouse(int button, int state, int x, int y)
{
	REF(x);
	REF(y);
	if (button == 0 && state == 1)
	{
		increment_item_position(&g_itemPosition);
		load_item_into_scene(g_itemPosition);
		glutPostRedisplay();
	}
}

void keyboard(unsigned char key, int x, int y)
{
	REF(x);
	REF(y);

	g_first_key_typed = true;

	switch(key)
	{
	case ',':
		decrement_item_position(&g_itemPosition);
		load_item_into_scene(g_itemPosition);
		glutPostRedisplay();
		break;
	case '.':
		increment_item_position(&g_itemPosition);
		load_item_into_scene(g_itemPosition);
		glutPostRedisplay();
		break;
	case 'x':
		auto_rotate = auto_rotate == 0 ? 2 : 0;
		break;
	case 's':
		auto_rotate = auto_rotate == 0 ? 1 : 0;
		break;
	case 'z':
		yrot -= 0.5f;
		glutPostRedisplay();
		break;
	case 'c':
		yrot += 0.5f;
		glutPostRedisplay();
		break;
	case 'q':
		quit_app();
		break;
	}
}

void reshape(int width, int height)
{
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();

	glViewport(0, 0, width, height);
	gluPerspective(25.0f, 2.0f * width / (height+0.30f), 1.0f, 100.0f);

	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();

	g_windowWidth = width;
	g_windowHeight = height;
}

void menu(int entry)
{
	switch(entry)
	{
	case 1 : 
		quit_app();
		break;
	case 2 : 
		if (glIsEnabled(GL_LIGHTING))
			glDisable(GL_LIGHTING);
		else
			glEnable(GL_LIGHTING);
		break;
	case 3 : 
		decrement_item_position(&g_itemPosition);
		load_item_into_scene(g_itemPosition);
		glutPostRedisplay();
		break;
	}
}

int glmain(int argc, char *argv[])
{
	g_gdi = new initgdi;

	TCHAR path[MAX_PATH];
	GetModuleFileName(NULL, path, MAX_PATH);
	TCHAR *pos = wcsrchr(path, _T('\\'));
	*(pos + 1) = _T('\0');
	wcscat_s(path, MAX_PATH, _T("save.ini"));
	

	load_save_data(path);

	glutInit(&argc, argv);

	glutInitWindowPosition(100, 100);
	glutInitWindowSize(g_windowWidth, g_windowHeight);

	glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGBA | GLUT_DEPTH);

	glutCreateWindow("Outfit Viewer");

	glutDisplayFunc(display);
	glutReshapeFunc(reshape);
	glutKeyboardFunc(keyboard);
	glutMouseFunc(mouse);

	glutIdleFunc(idle);

	glutCreateMenu(menu);
	glutAddMenuEntry("Previous Item", 3);
	glutAddMenuEntry("Toggle Lighting", 2);
	glutAddMenuEntry("Quit", 1);

	glutAttachMenu(GLUT_RIGHT_BUTTON);
	
	threadParams* params = (threadParams*) HeapAlloc(GetProcessHeap(), HEAP_ZERO_MEMORY, sizeof(threadParams));
	wcscpy_s(params->directory, MAX_PATH, g_metadata_dir);
	params->itemList = &itemList;
	Utils::StartThread(populateFileListProc, params, g_hThread);

	glutMainLoop();

	return 0;
}
