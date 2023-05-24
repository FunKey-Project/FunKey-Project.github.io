As the FunKey-OS is based on Linux, it conforms with a few exceptions
to the [Filesystem Hierarchy Standard (FHS)][1].

## Hierarchies

The FHS defines 3 hierarchies of directories:

 1. The _primary hierarchy_ is mandatory and contains all required
 directories and essential binaries, as well as the other hierarchies

 2. The _secondary hierarchy_ contains read-only, shareable user data
 and incldues the majority of user utilities and applications

 3. The _tertiary hierarchy_ contains local data specific to a host

|Directory             |Description|
|----------------------|-----------|
|`/`                   |_Primary hierarchy_ root and root directory of the entire file system hierarchy.|
|`/bin`                |Essential command binaries that need to be available in single-user mode, including to bring up the system or repair it, for all users (e.g., cat, ls, cp).|
|`/boot`               |Boot loader files: the Linux kernel and its Device Tree blob (configuration file for the Linux kernel).|
|`/dev`                |Device files (e.g., `/dev/null`, `/dev/disk0`,  `/dev/sda1`, `/dev/tty`, `/dev/random`).|
|`/etc`                |Host-specific system-wide configuration files.|
|`/lib`                |Run-time libraries essential for the binaries in `/bin` and `/sbin`.|
|`/media`              |Mount points for removable media such as CD-ROMs (appeared in FHS-2.3 in 2004).|
|`/mnt`                |Temporarily mounted filesystems.|
|`/opt`                |Optional application software packages.|
|`/proc`               |Virtual filesystem providing process and kernel information as files. In Linux, corresponds to a procfs mount. Generally, automatically generated and populated by the system, on the fly.|
|`/root`               |Home directory for the root user.|
|`/run`                |Run-time variable data: Information about the running system since last boot, e.g., currently logged-in users and running daemons. Files under this directory must be either removed or truncated at the beginning of the boot process, but this is not necessary on systems that provide this directory as a temporary filesystem (tmpfs).|
|`/sbin`               |Essential system binaries (e.g., fsck, init, route).|
|`/sys`                |Contains information about devices, drivers, and some kernel features.|
|`/tmp`                |Temporary folder|Directory for temporary files (see also `/var/tmp`). Often not preserved between system reboots and may be severely size-restricted. |
|`/usr`                |_Secondary hierarchy_ for read-only user data; contains the majority of (multi-)user utilities and applications.  Should be shareable and read-only.|
|`/usr/bin`            |Non-essential command executable|binaries (not needed in single-user mode); for all users.|
|`/usr/lib`            |Library (computer science)|Libraries for the binaries in `/usr/bin` and `/usr/sbin`.|
|`/usr/local`          |_Tertiary hierarchy_ for local data, specific to this host. Typically has further subdirectories (e.g., `bin`, `lib`, `share`).|
|`/usr/sbin`           |Non-essential system binaries (e.g., Daemon (computer software)|daemons for various network services).|
|`/usr/share`          |Architecture-independent (shared) data.|
|`/var`                |Variable files: files whose content is expected to continually change during normal operation of the system, such as logs, spool files, etc.|
|`/var/cache`          |Application cache data. Such data are locally generated as a result of time-consuming I/O or calculation. The application must be able to regenerate or restore the data. The cached files can be deleted without loss of data.|
|`/var/lib`            |State information. Persistent data modified by programs as they run (e.g., databases, packaging system metadata, etc.).|
|`/var/lock`           |Lock files. Files keeping track of resources currently in use.|
|`/var/log`            |Log files. Various logs.|
|`/var/opt`            |Variable data from add-on packages that are stored in `/opt`.|
|`/var/run`            |Run-time variable data. This directory contains system information data describing the system since it was booted.<br />In FHS 3.0, `/var/run` is replaced by `/run`; a system should either continue to provide a `/var/run` directory or provide a symbolic link from `/var/run` to `/run` for backwards compatibility.|
|`/var/spool`          |Spool for tasks waiting to be processed (e.g., print queues and outgoing mail queue).|
|`/var/tmp`            |Temporary files to be preserved between reboots|

|Directory             |Description|
|----------------------|-----------|
|`/etc/opt`            |Configuration files for add-on packages that are stored in `/opt`.|
|`/etc/sgml`           |Configuration files, such as catalogs, for software that processes SGML.|
|`/etc/X11`            |Configuration files for the X Window System, version 11.|
|`/etc/xml`            |Configuration files, such as catalogs, for software that processes XML.|
|`/home`               |Users' home directory|home directories, containing saved files, personal settings, etc.|
|`/lib<qual>`          |Alternate format essential libraries. These are typically used on systems that support more than one executable code format, such as systems supporting 32-bit and 64-bit versions of an instruction set.  Such directories are optional, but if they exist, they have some requirements.|
|`/srv`                |Site-specific data served by this system, such as data and scripts for web servers, data offered by FTP servers, and repositories for version control systems (appeared in FHS-2.3 in 2004).|
|`/usr/include`        |Standard header file|include files.|
|`/usr/lib<qual>`      |Alternative-format libraries (e.g., `/usr/lib32` for 32-bit libraries on a 64-bit machine (optional)).|
|`/usr/src`            |Source code (e.g., the kernel source code with its header files).|
|`/usr/X11R6`          |X Window System, Version 11, Release 6 (up to FHS-2.3, optional).|
|`/var/mail`           |Mailbox files. In some distributions, these files may be located in the deprecated `/var/spool/mail`.|
|`/var/spool/mail`     |Deprecated location for users' mailboxes. |

```
/
├── bin
├── boot
├── dev
│   ├── pts
│   └── shm
├── etc
│   ├── cron.d
│   ├── default
│   ├── dropbear -> /tmp
│   ├── init.d
│   ├── libnl
│   ├── network
│   │   ├── if-down.d
│   │   ├── if-post-down.d
│   │   ├── if-pre-up.d
│   │   ├── if-up.d
│   │   └── interfaces.d
│   ├── profile.d
│   └── sysconfig
├── lib
│   ├── dhcpcd
│   │   └── dhcpcd-hooks
│   ├── lsb
│   └── modules
│       └── 4.14.14-funkey
│           └── kernel
│               ├── crypto
│               └── drivers
│                   ├── usb
│                   │   └── gadget
│                   │       ├── function
│                   │       └── legacy
│                   └── video
│                       └── backlight
├── lib32 -> lib
├── media -> /mnt
├── mnt
│   ├── Applications
│   ├── Atari lynx
│   ├── Emulators
│   ├── FunKey
│   │   ├── .gmenu2x
│   │   │   ├── sections
│   │   │   │   ├── applications
│   │   │   │   ├── emulators
│   │   │   │   └── games
│   │   │   └── skins
│   │   │       └── 240x240
│   │   │           ├── Default
│   │   │           │   └── wallpapers
│   │   │           └── ScanlinesBlue
│   │   ├── Launchers
│   │   ├── .mednafen
│   │   ├── .pcsx
│   │   ├── .sm64-port
│   │   └── snapshots
│   ├── Game Boy
│   ├── Game Boy Advance
│   ├── Game Boy Color
│   ├── Game Gear
│   ├── Games
│   ├── Neo Geo Pocket
│   ├── NES
│   ├── PCE-TurboGrafx
│   ├── PS1
│   │   ├── bios
│   │   └── memcards
│   ├── Sega Genesis
│   ├── Sega Master System
│   ├── SNES
│   ├── System Volume Information
│   └── WonderSwan
├── opk
├── opt
├── proc
├── root
├── run
├── sbin
├── sys
├── tmp
│   └── sa
├── usr
│   ├── bin
│   ├── games
│   │   ├── collections
│   │   │   ├── Atari lynx
│   │   │   │   └── system_artwork
│   │   │   ├── Game Boy
│   │   │   │   └── system_artwork
│   │   │   ├── Game Boy Advance
│   │   │   │   └── system_artwork
│   │   │   ├── Game Boy Color
│   │   │   │   └── system_artwork
│   │   │   ├── Game Gear
│   │   │   │   └── system_artwork
│   │   │   ├── Main
│   │   │   ├── Neo Geo Pocket
│   │   │   │   └── system_artwork
│   │   │   ├── NES
│   │   │   │   └── system_artwork
│   │   │   ├── PCE-TurboGrafx
│   │   │   │   └── system_artwork
│   │   │   ├── PS1
│   │   │   │   └── system_artwork
│   │   │   ├── Sega Genesis
│   │   │   │   └── system_artwork
│   │   │   ├── Sega Master System
│   │   │   │   └── system_artwork
│   │   │   ├── SNES
│   │   │   │   └── system_artwork
│   │   │   └── WonderSwan
│   │   │       └── system_artwork
│   │   ├── core
│   │   ├── launchers
│   │   ├── layouts
│   │   │   ├── Classic
│   │   │   │   ├── collections
│   │   │   │   │   ├── Atari lynx
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Game Boy
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Game Boy Advance
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Game Boy Color
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Game Gear
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Neo Geo Pocket
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── NES
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── PCE-TurboGrafx
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── PS1
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Sega Genesis
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Sega Master System
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── SNES
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   └── WonderSwan
│   │   │   │   │       └── system_artwork
│   │   │   │   ├── images
│   │   │   │   └── sounds
│   │   │   ├── Flat
│   │   │   │   ├── collections
│   │   │   │   │   ├── Atari lynx
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Game Boy
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Game Boy Advance
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Game Boy Color
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Game Gear
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Neo Geo Pocket
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── NES
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── PCE-TurboGrafx
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── PS1
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Sega Genesis
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Sega Master System
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── SNES
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   └── WonderSwan
│   │   │   │   │       └── system_artwork
│   │   │   │   ├── images
│   │   │   │   └── sounds
│   │   │   ├── FunKey
│   │   │   │   ├── collections
│   │   │   │   │   ├── Atari lynx
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Game Boy
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Game Boy Advance
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Game Boy Color
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Game Gear
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Neo Geo Pocket
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── NES
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── PCE-TurboGrafx
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── PS1
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Sega Genesis
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── Sega Master System
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   ├── SNES
│   │   │   │   │   │   └── system_artwork
│   │   │   │   │   └── WonderSwan
│   │   │   │   │       └── system_artwork
│   │   │   │   ├── images
│   │   │   │   └── sounds
│   │   │   └── TFT
│   │   │       ├── collections
│   │   │       │   ├── Atari lynx
│   │   │       │   │   └── system_artwork
│   │   │       │   ├── Game Boy
│   │   │       │   │   └── system_artwork
│   │   │       │   ├── Game Boy Advance
│   │   │       │   │   └── system_artwork
│   │   │       │   ├── Game Boy Color
│   │   │       │   │   └── system_artwork
│   │   │       │   ├── Game Gear
│   │   │       │   │   └── system_artwork
│   │   │       │   ├── Neo Geo Pocket
│   │   │       │   │   └── system_artwork
│   │   │       │   ├── NES
│   │   │       │   │   └── system_artwork
│   │   │       │   ├── PCE-TurboGrafx
│   │   │       │   │   └── system_artwork
│   │   │       │   ├── PS1
│   │   │       │   │   └── system_artwork
│   │   │       │   ├── Sega Genesis
│   │   │       │   │   └── system_artwork
│   │   │       │   ├── Sega Master System
│   │   │       │   │   └── system_artwork
│   │   │       │   ├── SNES
│   │   │       │   │   └── system_artwork
│   │   │       │   └── WonderSwan
│   │   │       │       └── system_artwork
│   │   │       ├── images
│   │   │       └── sounds
│   │   ├── menu_resources
│   │   └── opk
│   ├── lib
│   │   ├── e2fsprogs
│   │   ├── gstreamer-1.0
│   │   ├── icu
│   │   │   ├── 67.1
│   │   │   └── current -> 67.1
│   │   ├── lua
│   │   │   └── 5.3
│   │   ├── mpg123
│   │   ├── sa
│   │   └── terminfo -> ../share/terminfo
│   ├── lib32 -> lib
│   ├── libexec
│   │   └── gstreamer-1.0
│   ├── local
│   │   ├── lib
│   │   ├── sbin
│   │   └── share
│   │       └── ProdResources
│   ├── sbin
│   └── share
│       ├── alsa
│       │   ├── cards
│       │   ├── init
│       │   ├── pcm
│       │   └── speaker-test
│       ├── aumix
│       ├── dhcpcd
│       │   └── hooks
│       ├── et
│       ├── fonts
│       │   ├── dejavu
│       │   ├── droid
│       │   └── truetype -> .
│       ├── gettext
│       │   └── its
│       ├── glib-2.0
│       │   ├── schemas
│       │   └── valgrind
│       ├── gmenu2x
│       │   ├── sections
│       │   │   └── games
│       │   ├── skins
│       │   │   ├── 1280x720
│       │   │   │   └── Default
│       │   │   │       ├── icons -> ../../320x240/Default/icons
│       │   │   │       ├── imgs -> ../../320x240/Default/imgs
│       │   │   │       ├── sections -> ../../320x240/Default/sections
│       │   │   │       └── wallpapers
│       │   │   ├── 240x160
│       │   │   │   └── Default
│       │   │   │       ├── icons -> ../../320x240/Default/icons
│       │   │   │       ├── imgs -> ../../320x240/Default/imgs
│       │   │   │       ├── sections -> ../../320x240/Default/sections
│       │   │   │       └── wallpapers
│       │   │   ├── 240x240
│       │   │   │   ├── Default
│       │   │   │   │   ├── icons
│       │   │   │   │   ├── imgs
│       │   │   │   │   │   ├── battery
│       │   │   │   │   │   └── buttons
│       │   │   │   │   ├── sections
│       │   │   │   │   └── wallpapers
│       │   │   │   ├── GCW
│       │   │   │   │   └── imgs
│       │   │   │   │       ├── battery
│       │   │   │   │       └── buttons
│       │   │   │   ├── ScanlinesBlue
│       │   │   │   │   ├── fonts
│       │   │   │   │   ├── icons
│       │   │   │   │   ├── imgs
│       │   │   │   │   │   ├── battery
│       │   │   │   │   │   └── buttons
│       │   │   │   │   ├── sections
│       │   │   │   │   └── wallpapers
│       │   │   │   └── ScanlinesRed
│       │   │   │       ├── fonts
│       │   │   │       ├── icons
│       │   │   │       ├── imgs
│       │   │   │       │   ├── battery
│       │   │   │       │   └── buttons
│       │   │   │       ├── sections
│       │   │   │       └── wallpapers
│       │   │   ├── 320x240
│       │   │   │   ├── Default
│       │   │   │   │   ├── icons
│       │   │   │   │   ├── imgs
│       │   │   │   │   │   ├── battery
│       │   │   │   │   │   └── buttons
│       │   │   │   │   ├── sections
│       │   │   │   │   └── wallpapers
│       │   │   │   ├── GCW
│       │   │   │   │   └── imgs
│       │   │   │   │       ├── battery
│       │   │   │   │       └── buttons
│       │   │   │   ├── ScanlinesBlue
│       │   │   │   │   ├── fonts
│       │   │   │   │   ├── icons
│       │   │   │   │   ├── imgs
│       │   │   │   │   │   ├── battery
│       │   │   │   │   │   └── buttons
│       │   │   │   │   ├── sections
│       │   │   │   │   └── wallpapers
│       │   │   │   └── ScanlinesRed
│       │   │   │       ├── fonts
│       │   │   │       ├── icons
│       │   │   │       ├── imgs
│       │   │   │       │   ├── battery
│       │   │   │       │   └── buttons
│       │   │   │       ├── sections
│       │   │   │       └── wallpapers
│       │   │   ├── 640x480
│       │   │   │   └── Default
│       │   │   │       ├── icons -> ../../320x240/Default/icons
│       │   │   │       ├── imgs -> ../../320x240/Default/imgs
│       │   │   │       └── sections -> ../../320x240/Default/sections
│       │   │   └── 800x480
│       │   │       └── Default
│       │   │           ├── icons -> ../../320x240/Default/icons
│       │   │           ├── imgs -> ../../320x240/Default/imgs
│       │   │           ├── sections -> ../../320x240/Default/sections
│       │   │           └── wallpapers
│       │   └── translations
│       ├── gst-plugins-base
│       │   └── 1.0
│       ├── gstreamer-1.0
│       │   └── gdb
│       ├── locale
│       ├── lua
│       │   └── 5.3
│       ├── mime
│       ├── sounds
│       │   └── alsa
│       ├── ss
│       ├── terminfo
│       │   ├── a
│       │   ├── d
│       │   ├── l
│       │   ├── p
│       │   ├── s
│       │   ├── v
│       │   └── x
│       └── udhcpc
│           └── default.script.d
└── var
├── cache -> ../tmp
├── lib
│   ├── alsa
│   ├── dhcp -> /tmp
│   └── misc -> ../../tmp
├── lock -> ../tmp                  
├── log -> ../tmp                                                                                
├── run -> ../run                                                                                
├── spool -> ../tmp                                                                                
└── tmp -> ../tmp                                                                                
```

[1]: https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard

--8<--
includes/glossary.md
--8<--
