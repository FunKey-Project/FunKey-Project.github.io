# Flashing a new micro-SD card

The following steps describe how to flash a micro-SD card with the
latest version of FunKey-OS. This must be done before switching
micro-SD cards inside the console.

Note: Everything on the micro-SD card will be lost, be sure to save
your data.

## Download the latest FunKey-OS image file

Get the latest "***FunKey-rootfs-x.y.z.img***" SD card image file
directly from [here][1] or from the bottom of the latest release page
in the "assets" section:

[https://github.com/FunKey-Project/FunKey-OS/releases/latest][2]{target=_blank}

![Github Release](/assets/images/github_sd_card_image.png){.lightbox}

## Flash the micro-SD card with balenaEtcher

- Download and install balenaEtcher for Windows/Mac OS/Linux from
  [balena.io][3]{target=_blank}

- Run balenaEtcher and click on "Flash from file" to select the
  FunKey-OS image file

- Insert the micro-SD card in your computer and select the SD card
  drive (balenaEtcher should automatically detect it for you)

- Finally, click **Flash** 

- You'll see a progress bar. Once complete, **make sure the flashing
  was successful, otherwise retry to flash the SD card**. The program
  will automatically unmount the SD card so it's safe to remove it
  from your computer.

  ![balenaEtcher](/assets/images/Flashing_successful.png){.lightbox}

  <br />

# Switching micro-SD cards

On the **FunKey S**, the micro-SD card was voluntarily placed against
the casing so that it has no degree of freedom and cannot move by
accident during the eventful life of a keychain.

Removing/switching the micro-SD card was nevertheless designed to be
pretty straightforward and only require a standard **Phillips
screwdriver (PH0)** and optionally some **tweezers**.

Please follow the steps below carefully:

### **STEP 1 - Removing the screws** {.step-title}
![Before opening](/assets/images/disassembly/IMG_8800.jpg){.step-thumb}
![Remove the screws](/assets/images/disassembly/IMG_8801.jpg){.step-thumb}
![Screws removed](/assets/images/disassembly/IMG_8803.jpg){.step-thumb}

Using a standard **Phillips PH0 screwdriver**, remove the 2 screws on
the back of your FunKey S.

!!! warning
	Be careful to use the correct screwdriver head size and type to
	prevent damaging the screws (do not use JIS screwdrivers!). 
	FunKey Project is not responsible for replacing damaged screws.

### **STEP 2 - Opening up the console** {.step-title}
![Pull up hinge first](/assets/images/disassembly/IMG_8848.jpg){.step-thumb}
![Pull up the plastic buttons](/assets/images/disassembly/IMG_8844.jpg){.step-thumb}
![Console opened](/assets/images/disassembly/IMG_8813.jpg){.step-thumb}

Carefully remove:

1. The plastic back of the console by pulling up the hinge side first
3. The L/R plastic buttons by gently pulling them up out of their axis
2. The keychain lanyard and axis

!!! warning
    Be careful not to damage the L/R switches on the circuit board!

### **STEP 3 - Exposing the circuit board** {.step-title}
![Lanyard Axis](/assets/images/disassembly/IMG_8994.jpg){.step-thumb}
![Lift the battery](/assets/images/disassembly/IMG_8818.jpg){.step-thumb}
![Get the battery out of the way](/assets/images/disassembly/IMG_8822.jpg){.step-thumb}

Remove the keychain lanyard axis, as it may fall off when opening.

Lift the battery (but leave it connected) to expose the circuit board.

### **STEP 4 - Accessing the SD card** {.step-title}
![Pull PCB by its micro-USB port](/assets/images/disassembly/IMG_8833.jpg){.step-thumb}

By grabbing it **by the micro-USB port**, gently pull up the circuit
board until you have access to the SD card.

### **STEP 5 - Switching SD cards** {.step-title}
![Remove the micro-SD](/assets/images/disassembly/IMG_8835.jpg){.step-thumb}
![Insert the new micro-SD](/assets/images/disassembly/IMG_8836.jpg){.step-thumb}

You can now remove the old micro-SD card from its socket and insert
the new one (previously flashed as described [in the 1st part of this
tutorial][4]).

!!! note
    You may need to use some tweezers and pull with some strength in
    order to remove the micro-SD card from its socket, as it is
    strongly inserted to prevent loose connections.

### **STEP 6 - Reassembly** {.step-title}
![Insert speaker first](/assets/images/disassembly/IMG_9013_YES.jpg){.step-thumb}
![Do not insert hinge first](/assets/images/disassembly/IMG_9015_NO.jpg){.step-thumb}

Insert first the speaker into its location in the casing before
putting the circuit board back in the case, like in the pictures.

Reassemble the console by following the previous steps in reverse order.

!!! warning
    Be careful not to damage the switches on the circuit board when
    putting back the L/R plastic buttons.

[1]: https://github.com/FunKey-Project/FunKey-OS/releases/download/FunKey-OS-2.0.0/FunKey-sdcard-2.0.0.img
[2]: https://github.com/FunKey-Project/FunKey-OS/releases/latest
[3]: https://www.balena.io/etcher/
[4]: #flashing-a-new-micro-sd-card

--8<--
includes/glossary.md
--8<--
