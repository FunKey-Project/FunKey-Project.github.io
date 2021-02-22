The **FunKey-S** console is based on a sophisticated [Allwinner V3s
ARM Cortex-A7 1.2GHz CPU][2], an Operating System is mandatory in
order to access all the hardware resources without re-inventing the
wheel.

Programs made for other computers will not work on the **FunKey S**,
and developing programs on the **FunKey S** itself is rather
impractical (too slow, not enough RAM, etc.).

Instead, development for embedded devices like the **FunKey S** uses a
method known as [cross compilation][2] for building software on a host
platform (such as a desktop computer) to be used on another target
platform (like the **FunKey S**).

The [FunKey-OS repository on Github][3] contains all the sources
required to build the Open-Source firmware at the heart of the [FunKey
S retro-gaming console][4].

This repository also contains a standalone SDK, which is a
cross-compilation environment based on the GNU GCC compiler and
binutils binary object tools, including the compiler toolchain and all
the required libraries available on the **FunKey S** in order to build
software for it.

FunKey-OS is based on Linux, and is built from scratch using the
[buildroot][5] tool that simplifies and automates the process of
building a complete Linux system for an embedded system like this.

Technically speaking, Funkey-OS is a [buildroot (v2) based external
tree][6] for building the bootloader, the Linux kernel and user
utilities, as well as the optimized retro-game launchers and console
emulators.

For detailed explanations on how to use buildroot itself, please refer
to the [Buildroot Manual][7].

[1]: http://www.allwinnertech.com/index.php?c=product&a=index&id=38
[2]: https://en.wikipedia.org/wiki/Cross_compiler
[3]: https://github.com/FunKey-Project/FunKey-OS
[4]: https://www.funkey-project.com/
[5]: http://nightly.buildroot.org/
[6]: https://buildroot.org/downloads/manual/manual.html#outside-br-custom
[7]: https://buildroot.org/downloads/manual/manual.html

--8<--
includes/glossary.md
--8<--
