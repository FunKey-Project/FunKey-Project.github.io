## How to Flash the Firmware to the SD Card

You can copy the bootable `images/sdcard.img` onto an SD card using
"dd":

```bash
$ sudo dd if=images/FunKey-sdcard-X.Y.Z.img of=/dev/sdX
```
<ins>Warning</ins>: Please make sure that */dev/sdX* device
corresponds to your SD Card, otherwise you may wipe out one of your
hard drive partitions!

Alternatively, you can use the Balena-Etcher graphical tool to burn
the image to the SD card safely and on any platform:

https://www.balena.io/etcher/

Once the SD card is burnt, insert it into the **FunKey S** console
slot, and power it up. Your new system should come up now and start a
console on the UART0 serial port and display the RetroFE game launcher
on the graphical screen.

## How to Update the FunKey S Firmware

It is possible to update the **FunKey S** over USB, please follow the
steps described in the [Firmware Upgrade][1] section.

[1]: /user_manual/tutorials/software/firmware_update/

--8<--
includes/glossary.md
--8<--
