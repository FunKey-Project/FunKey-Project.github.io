The **FunKey S** retro-gaming console software contains a set of
console emulators, standalone games, applications and utilities using
a custom Operating System (OS) that from now on will be referenced as
**_FunKey-OS_**.

The **FunKey-OS** is a Linux-based operating system, optimized for the
**FunKey-S** hardware, with a special focus on performance and fast
boot time.

## Instant Action

The **FunKey S** introduces a unique feature called **_Instant
Action_**, which enables automatically saving the running state when
closing the console before turning it off, and restoring this state
when opening and turning it back on in a matter of seconds.

This feature is only possible because of the optimized fast boot time
detailed in the [Boot Process][1] section.

## Storage

The only storage system available in the **FunKey S** is its
integrated MicroSD card. Most of its contents is made available to a
host computer when connected over USB.

## Video Processing

The **FunKey-S** CPU does not feature a GPU. For this reason, the
**FunKey-S** cannot use a hardware-accelerated OpenGL engine, and
adding a software-emulated OpenGL-ES engine is not efficient, given
the limited CPU performance.

However, because of the small screen size and the fact that all
applications are used in full-screen mode only, there is no need for a
full-blown windowing system like X11, which greatly simplifies the
video processing as no window overlapping or frame decoration is thus
required.

Instead, all graphical computations are performed by the CPU itself,
directly into the video frame buffer that will be sent to the screen
for display.

## User Input

The **FunKey S** has no standard keyboard but features common
console-oriented controls in the form of a D-Pad, A/B/X/Y Pad,
Menu/On/Off, Fn and Start buttons.

[1]: boot_process/index.md
[2]: sd_card_layout/partition_map.md

--8<--
includes/glossary.md
--8<--
