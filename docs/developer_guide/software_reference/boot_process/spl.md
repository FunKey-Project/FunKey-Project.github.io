The SPL is the Secondary Program Loader (the Primary Program Loader
being the code in the [Boot ROM][1]), it is the first
user-customizable piece of code run on the CPU.

The SPL is built as part of the U-Boot bootlader. Actually, it shares
most of its code with it.

The SPL is loaded by the Boot ROM at address `0x00000000` in SRAM A1
and C, and has a maximum size of 32KB. It contains a "**BOOT0
Header**" that has been checked previously by the Boot ROM, and its
byte at offset 40 has been updated with the SD card interface used to
boot, with its bit 5 set to `1` if it was loaded from offset 128KB
from the SD Card, or `0` if was loaded from offset 8KB.

The role of the SPL stage is to set up the CPU clocks to their nominal
speeds and set up the main SDRAM memory in order to load into it the
next boot stage: either the U-Boot bootloader or the Linux kernel, as
these are too large to fit into the small SRAM memory.

[1]: ../boot_rom

--8<--
includes/glossary.md
--8<--
