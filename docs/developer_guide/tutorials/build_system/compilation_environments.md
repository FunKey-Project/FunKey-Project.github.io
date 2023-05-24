Even if the resulting disk image and firmware update files are
relatively small (350MB and 110MB, respectively), the size of the
corresponding sources and the compilation by-products tend to be
rather large, such that an available disk space of at least 12GB is
required during the build.

And even if the resulting FunKey-OS boots in less than 5s, it still
requires a fair amount of time to compile: please account for
1/2 hour on a modern multi-core CPU with SSD drives and a decent
Internet bandwidth.

The FunKey-OS is meant to be built on a native Ubuntu or Debian Linux
host machine (Ubuntu 20.04 LTS in our case, but this should also work
with other versions, too). And with only a few changes to the
prerequisites, it can certainly be adapted to build on other common
Linux distros.

However, if your development machine does not match this setup, there
are still several available solutions:

 -  use a lightweight container system such as [Docker][1] and run an
    Ubuntu or Debian Linux container in it

 - use a VM (Virtual Machine), such as provided by [VirtualBox][2] and
   run an Ubuntu or Debian Linux in it

 - for Windows 10 users, use the [WSL2][3] (Windows System for Linux
   2) subsystem and run an Ubuntu Linux distro in it

In order to install one of these virtualized environments on your
machine, please refer to the corresponding documentation.

## Build on a Physical/Virtual Machine

### Prerequisites

While Buildroot itself will build most host packages it needs for the
compilation, some standard Linux utilities are expected to be already
installed on the host system. If not already present, you will need to
install the following packages beforehand:

 - bash
 - bc
 - binutils
 - build-essential
 - bzip2
 - ca-certificates
 - cpio
 - cvs
 - expect
 - file
 - g++
 - gcc
 - git
 - gzip
 - liblscp-dev
 - libncurses5-dev
 - locales
 - make
 - mercurial
 - openssh-client
 - patch
 - perl
 - procps
 - python
 - python-dev
 - python3
 - python3-dev
 - python3-distutils
 - python3-setuptools
 - rsync
 - rsync
 - sed
 - subversion
 - sudo
 - tar
 - unzip
 - wget
 - xxd

On Ubuntu/Debian Linux, this is achieved by running the following
command:

```bash
$ sudo apt install bash bc binutils build-essential bzip2 ca-certificates cpio cvs expect file g++ gcc git gzip liblscp-dev libncurses5-dev locales make mercurial openssh-client patch perl procps python python-dev python3 python3-dev python3-distutils python3-setuptools rsync rsync sed subversion sudo tar unzip wget xxd
```

## Build in a Docker Container

### Prerequisites

When using a Docker container, all the prerequisites are automatically
installed.

## Build on Windows 10/11 with WSL2

### Prerequisites

First, make sure your version of Windows 10 is new enough (any version of Windows 11 should be fine). Press **Win** + **R** to open the *Run* window and type in `winver` to check your Windows version and build number. The version should be **2004** or higher, the build number **19041** or higher.

#### Enabling Windows Features

![Enable Virtual Machine Platform and Windows Subsystem for Linux.](/assets/images/WSL2_Windows_features.png)

Some addition Windows features need to be enabled. Open the Windows Features window either by searching for "Windows Features" in the Start Menu, or by opening **Settings** -> **Apps & features** -> **Optional features** -> **More Windows features**. There ensure that both **Virtual Machine Platform** and **Windows Subsystem for Linux** are enabled. After pressing OK to confirm, Windows will ask you to reboot your computer to complete installation.

#### Download the Linux kernel update package

An additional update is required to run WSL2. Download and install the following package from Microsoft:

- [WSL2 Linux kernel update package for x64 machines][4]
#### Set WSL2 as your default version (optional)
You can run the following command in PowerShell to make WSL2 the default version. New installations of Linux distributions on Windows will then automatically use WSL2. Otherwise they will use WSL version 1 by default.

```
wsl --set-default-version 2
```

#### Install Ubuntu using the Microsoft Store

Now that WSL2 is ready to be used you can download a Linux distribution from the Microsoft Store. For this guide, it is recommended to install [Ubuntu 20.04 LTS][5]. After installing, Ubuntu can be started by either selecting it from the Start Menu or typing `ubuntu2004` on the command prompt. The first time you run Ubuntu you will be asked to create a new user account with a username and password. These do not have to be the same as your Windows account.

If you've enabled WSL2 as the default version in the previous step, Ubuntu will be automatically configured to use that version. If you haven't set WSL2 as default, or if you've installed Ubuntu before setting WSL2 as default, it's possible to manually change the version for this distro. First, open a PowerShell window and type the following command to list all installed Linux distributions:

```
wsl --list --verbose
```

Check the name of the distribution you want to upgrade and run:

```
wsl --set-version <distribution name> <versionNumber>
```

With `<versionNumber>` set to `2` to use WSL2. You can use the same command with version number `1` to return to WSL 1.

#### WSL2 is now ready to be used

Your Ubuntu installation is now ready to be used. Starting Ubuntu from the Start Menu will open a terminal with a Bash prompt. Everything you type here will be executed in Ubuntu. You can run and install applications within Ubuntu as you would on a complete installation or virtual machine.

Follow the instructions in the **Build on a Physical/Virtual Machine** section to install the requirements needed to build FunKey-OS.

You can access the Windows filesystem via `/mnt`; the C: drive is mounted as `/mnt/c`. From Windows you can access the Linux filesystem via the special path `\\wsl$`. Note that you can only access the files there when Ubuntu is running on WSL2.


[1]: https://www.docker.com/
[2]: https://www.virtualbox.org/
[3]: https://docs.microsoft.com/en-us/windows/wsl/install-win10
[4]: https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi
[5]: https://www.microsoft.com/store/productId/9N6SVWS3RX71

--8<--
includes/glossary.md
--8<--
