This page will guide you through building a very simple application for FunKey using the SDK.

FunKey is an embedded Linux device with an ARM processor at its core. Programs made for other computers will not work on FunKey, and developing programs on the FunKey itself is rather impractical. Instead, development for embedded devices like FunKey almost always uses a method known as cross compilation: building software on one platform (such as a desktop computer) to be used on another (like FunKey).

The FunKey-SDK contains a cross-compilation environment based on GCC, including the compiler toolchain and the libraries available on the FunKey.

Before we can begin, setup a Linux-based compilation environment as shown on [this page][1].

# Installing the FunKey-SDK

The FunKey-SDK is included in releases of the FunKey-OS, starting from version 2.0.0, and can be found on [GitHub][2]. Alternatively, you can [compile the SDK yourself][3].

Unpack the SDK's .tar.gz file somewhere on your build system. Before you can use the SDK you must first run the **relocate-sdk.sh** script. This will update all references paths in the SDK to its current location. If you decide to move the SDK to another directory at a later point, don't forget to re-run the script.

The SDK is now ready to use. For additional convenience it is highly recommended to `source` the **environment-setup** of the SDK. This will add the SDK utilities to the *PATH*, setup standard variables such as *CC* and *LD* to refer to the SDK versions of the toolchain, setup standard options for *CFLAGS*, and create aliases for **configure** and **cmake** to work with the SDK.

# Your first application

## Building

Let's build a simple application to test that everything is working. Below is a small C program that will use SDL to display a green square for 5 seconds, and then exits.

```C
#include <SDL/SDL.h>

int main(int argc, char *argv[])
{   
    // Init SDL Video
    SDL_Init(SDL_INIT_VIDEO);

    // Open HW screen and set video mode 240x240, with double buffering 
    SDL_Surface* hw_surface =
        SDL_SetVideoMode(240, 240, 32,
                         SDL_HWSURFACE | SDL_DOUBLEBUF | SDL_FULLSCREEN);
    
    // Hide the cursor, FunKey doesn't come with a mouse
    SDL_ShowCursor(0);

    // Draw a green square in the middle of the screen
    SDL_Rect draw_rect = {.x=70, .y=70, .w=100, .h=100};
    Uint32 color = SDL_MapRGB(hw_surface->format, 0, 255, 0);
    SDL_FillRect(hw_surface, &draw_rect, color);
    
    // Switch buffers to show the square we just drew
    SDL_Flip(hw_surface);

    // Sleep for 5 seconds
    SDL_Delay(5000);

    /// Deinit SDL
    SDL_Quit();

    return 0;
}
```

Save this file as **hello.c** somewhere outside of the SDK directory. If you've sourced the **environment-setup** you can use the variable *CC* to refer to the C compiler in the SDK. Let's build our program as **hello**:

```bash
$CC hello.c -o hello -lSDL
```

## Packing

The **hello** program you've just created is a valid executable for FunKey, but in order for the launcher to find it we must first bundle the program in an *OPK* package. Create a new folder for the contents of the package and put into it:

- The **hello** program.
- An icon for your program in PNG format, 32 x 32 pixels in size, called **hello.png**.
- A *desktop* file called **hello.funkey-s.desktop**, containing the following text:

```ini
[Desktop Entry]
Type=Application
Name=Hello
Comment=A simple test app
Exec=hello
Icon=hello
Terminal=false
Categories=applications;
```

[This file describes your program to the launcher][4]:

- **Type**: Always set to "Application"
- **Name**: This is the name of the application shown in the launcher
- **Comment**: A description of the application
- **Exec**: This the command to execute your program
- **Icon**: The name of the icon file, without the .png extension
- **Terminal**: Always set to false, FunKey doesn't support terminal applications
- **Categories**: The categories under which the launcher will show the application, in a semicolon-separated list

Once you've got everything ready you can turn the folder into a package using the [OpenPackage Creator][5]. Select your folder with the **Open** button, or drag it over the window. The OpenPackage Creator will note that you've already created *.desktop* file. Choose the "Use existing as is" option. Finally, click the **Pack** button to create **hello.opk**, ready to be transferred to the FunKey.

## Installing

[Connect the FunKey to your computer via USB.][6] Open the menu on the FunKey, select Mount USB and press A twice to confirm. Your FunKey will now be visible as a USB drive on your computer. You can place your application in any 1st-level folder, and you can create as many as you want to organise your applications. Let's create a new folder called Applications and place hello.opk in there. Safely remove the USB drive from your computer, and in the FunKey menu select Eject USB and press A twice to confirm.

![Hello program is now visible in the Launcher](/assets/images/Hello_program_shown_in_launcher.png)

Your application is now installed on FunKey. Note that **only the GMENU2X launcher can open custom applications**. So switch to that launcher via the FunKey menu if you haven't already. You should find an application called **Hello** under the **applications** category in the launcher.

![The Hello program running on FunKey](/assets/images/Hello_program_running.png)

[1]: ../compilation_environments
[2]: https://github.com/FunKey-Project/FunKey-OS/releases/
[3]: ../compile_sdk
[4]: https://github.com/gcwnow/buildroot/wiki/Package-file-format
[5]: https://github.com/Harteex/OpenPackageCreator/releases
[6]: /user_manual/tutorials/software/add_opk

--8<--
includes/glossary.md
--8<--