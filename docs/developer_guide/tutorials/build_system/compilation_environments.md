Even if the resulting disk image and firmware update files are
relatively small (202 MB and 55MB, respectively), the size of the
corresponding sources and the compilation by-products tend to be
rather large, such that an available disk space of at least 12GB is
required during the build.

And even if the resulting FunKey-OS boots in less than 5s, it still
requires a considerable amount of time to compile: please account for
1 1/2 hour on a modern multi-core CPU with SSD drives and a decent
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
 - which
 - xxd

On Ubuntu/Debian Linux, this is achieved by running the following
command:

```bash
$ sudo apt install bash bc binutils build-essential bzip2 ca-certificates cpio cvs expect file g++ gcc git gzip liblscp-dev libncurses5-dev locales make mercurial openssh-client patch perl procps python python-dev python3 python3-dev python3-distutils python3-setuptools rsync rsync sed subversion sudo tar unzip wget which xxd
```

## Build in a Docker Container

### Prerequisites

When using a Docker container, all the prerequisites are automatically
installed.

## Build on Windows 10 with WSL2

### Prerequisites


[1]: https://www.docker.com/
[2]:https://www.virtualbox.org/
[3]: https://docs.microsoft.com/en-us/windows/wsl/install-win10

--8<--
includes/glossary.md
--8<--
