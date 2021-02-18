!!! quote

    _Analyzing the boot processes of systems that are functioning well
    prepares users and developers to deal with the inevitable
    failures._

    _Alison Chaiken in "[Analyzing the Linux boot process][1]"_

Learning how the **FunKey S** boots and shuts down is not required in
order to develop for this platform, but it is certainly an interesting
experience in order to understand the way to optimize a Linux embedded
system.

And then, when something goes wrong, it provides some useful insight
on where to find the solution...

## Startup Process

The startup process for a Linux machine is like a space rocket launch,
but in reverse order: you start small and end up big, each stage
helping to launch the next one.

The reason for this is because many resources are involved when
booting a Linux system, that require a significant amount of set up
before you can use them, as they are not available right from the
beginning; the most critical ones are probably memory and system
clocks.

When the **FunKey S** is started, its CPU is merely as powerful as an
Arduino board: what is available is a 32-bit ARM CPU running @ 24MHz,
with no reliable memory besides its 30 internal registers and a 32KB
boot ROM.

In order to get up to full speed (1.2GHz) and with all its memory
(64MB DRAM, access to the 8GB SDcard) requires several steps, in
order:

 - The [Boot ROM][2]

 - The [SPL][3] (Secondary Program Loader)

 - The [U-Boot bootloader][4]

 - The [Linux kernel][5]

 - The userland [System V init scripts][6]

## Shutdown Process

Unlike the startup process, the [shutdown process][7] is much more
straightforward, but it must be optimized to run as quiclky as
possible, as the time from when the shutdown is initiated when the
user press the <i class="funkey-menu"></i> key or close the **FunKey
S** lid to actual poweroff is extremely short (3 s).

[1]: https://opensource.com/article/18/1/analyzing-linux-boot-process
[2]: boot_rom
[3]: spl
[4]: bootloader
[5]: kernel
[6]: init_scripts
[7]: shutdown_process

--8<--
includes/glossary.md
--8<--
