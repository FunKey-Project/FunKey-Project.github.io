The Recovery Mode is a special boot mode that can be entered when
booting the **FunKey S** console.

Its main purpose is to handle system updates, but it can also be used
to recover the main system when it is no longer accessible, or to
access some advanced test or developement features.

## Enter the Recovery Mode

There are 2 different ways to enter Recovery Mode:

 - by holding both the <i class="funkey-start"></i> and the <i
   class="funkey-fn"></i> keys at the same time while booting the
   **FunKey S** console

 - by typing the following command at the Shell prompt, either
      using ssh over USB Ethernet or the serial console:

```
$ recovery_mode
```

While booting, the system will display the following logo instead of
the familiar **FunKey S** logo:

![Recovery Logo](/assets/images/Recovery_Logo.png){.lightbox}

## Recovery mode commands

The Recovery Mode automatically enables the USB network client upon
startup, allowing ssh connection over the USB cable for debug
purposes. For more information, please check the [SSH Connection over
USB section][1].

At the same time, the Recovery mode provides a simple text menu, with
the current menu item displayed at the top of the screen.

Navigation through the menu commands is using the <i
class="funkey-up"></i> and <i class="funkey-down"></i> keys, and
validation is using the <i class="funkey-A"></i> key.

### INFO

This command displays useful information regarding the **FunKey S**:

 - the Recovery Mode version

 - the rootfs (e.g. "Normal" Mode) version

 - if connected to a host through USB network, the device IP address

    ```
    Recovery: 2.0.0
	rootfs  : 2.0.0
	IP addr : 192.168.137.20
    ```
	
### USB MOUNT/UNMOUNT

This toggle commands performs the same way as the FunKey menu command,
except that no confirmation is asked.

### USB CHECK

This command performs a check of the FAT32 USB partition, and try to
repair it if it finds some errors, such as when the partition was not
cleanly unmounted from a host computer.

### USB FORMAT

This commands formats the FAT32 USB partition.

!!! warning

    This function will delete all the files on the USB partition, so be careful!

### NETWORK ENABLE/DISABLE

This toggle command will enable/disable the USB network upon next
boot.

### QR CODE

This command will display a full screen QR Code containing the
**FunKey S** serial number:

![QR Code](/assets/images/qrcode.png){.lightbox}

### FACTORY TEST ENABLE/DISABLE

This toggle command will enable/disable the factory tests upon next
boot.

### FIRST BOOT ENABLE/DISABLE

This toggle command will enable/disable the "first boot" sequence that:

 - expands the rootfs "Normal" system partition

 - create the swap partition

 - create the USB shared partition

 - install the free built-in games

### EXIT RECOVERY

This comand exits the Recovery Mode and reboots in Normal Mode.

[1]: ../ssh_connection

--8<--
includes/glossary.md
--8<--
