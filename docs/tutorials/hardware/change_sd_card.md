# Flashing a new micro-SD card

The following steps describe how to flash a micro-SD card with the
latest version of FunKey-OS. This must be done before switching
micro-SD cards inside the console.

Note: Everything on the micro-SD card will be lost, be sure to save
your data.

## Download the latest FunKey-OS image file

Get the latest "***FunKey-rootfs-x.y.z.img***" SD card image file
directly from
[here](https://github.com/FunKey-Project/FunKey-OS/releases/download/FunKey-OS-2.0.0/FunKey-sdcard-2.0.0.img)
or from the bottom of the latest release page in the "assets" section:

<a href="https://github.com/FunKey-Project/FunKey-OS/releases/latest" target="_blank">https://github.com/FunKey-Project/FunKey-OS/releases/latest</a>

![Github Release](/assets/images/github_sd_card_image.png){: .lightbox}

## Flash the micro-SD card with balenaEtcher

- Download and install balenaEtcher for Windows/Mac OS/Linux from <a
  href="https://www.balena.io/etcher/" target="_blank">balena.io</a>.

- Run balenaEtcher and click on "Flash from file" to select the
  FunKey-OS image file

- Insert the micro-SD card in your computer and select the SD card
  drive (balenaEtcher should automatically detect it for you)

- Finally, click **Flash** 

- You'll see a progress bar. Once complete, **make sure the flashing
  was successful, otherwise retry to flash the SD card**. The program
  will automatically unmount the SD card so it's safe to remove it
  from your computer.

  ![balenaEtcher](/assets/images/Flashing_successful.png){: .lightbox}

  <br />

# Switching micro-SD cards

On the FunKey S, the micro-SD card was voluntarily placed against the
casing so that it has no degree of liberty and cannot move by accident
during the eventful life of a keychain. Removing/switching the
micro-SD card was nevertheless designed to be pretty straightforward
and only require a standard **Phillips screwdriver (PH0)**. Please
follow the steps below carefully.

### **STEP 1 - Removing the screws** {: .step-title}
![removeScrews](/assets/images/disassembly/IMG_8800.jpg){: .step-thumb}
![removeScrews](/assets/images/disassembly/IMG_8801.jpg){: .step-thumb}
![removeScrews](/assets/images/disassembly/IMG_8803.jpg){: .step-thumb}

Using a standard **PH0 screwdriver**, remove the 2 screws on the back
of your FunKey S.<br />Be careful to use the correct screwdriver head
size not to damage the screws.

### **STEP 2 - Opening up the console** {: .step-title}
![removeBack](/assets/images/disassembly/IMG_8848.jpg){: .step-thumb}
![removeBack](/assets/images/disassembly/IMG_8844.jpg){: .step-thumb}
![removeBack](/assets/images/disassembly/IMG_8813.jpg){: .step-thumb}

Carefully remove:

1. The plastic back of the console by pulling from the side of the
hinge first.
2. The keychain lanyard and axis.
3. The L/R plastic buttons by gently pulling them out of their
axis. Be careful not to damage the switch on the circuit board.

### **STEP 3 - Exposing the circuit board** {: .step-title}
![removeBattery](/assets/images/disassembly/IMG_8818.jpg){: .step-thumb}
![removeBattery](/assets/images/disassembly/IMG_8822.jpg){: .step-thumb}

Pull back the battery (leave it connected) to expose the circuit board.

### **STEP 4 - Accessing the SD card** {: .step-title}
![pullPCB](/assets/images/disassembly/IMG_8833.jpg){: .step-thumb}

By grabbing it **by the micro-USB port**, gently pull the circuit
board towards you until you have access to the SD card.

### **STEP 5 - Switching SD cards** {: .step-title}
![removeSD](/assets/images/disassembly/IMG_8835.jpg){: .step-thumb}
![removeSD](/assets/images/disassembly/IMG_8836.jpg){: .step-thumb}

You can now remove the old micro-SD card from its socket and insert
the new one (previously flashed as described [in the 1st part of this
tutorial](#flashing-a-new-micro-sd-card)).

### **STEP 6 - Reassembly** {: .step-title}
![checkSpeaker](/assets/images/disassembly/IMG_8865_YES.jpg){: .step-thumb}
![checkSpeaker](/assets/images/disassembly/IMG_8862_NO.jpg){: .step-thumb}

Before putting back down the circuit board in the case, please make
sure the speaker on the circuit board is already inserted in the
casing. If not, then insert it first like in the pictures.

Reassemble the console by following the previous steps backwards.

Be careful not to damage the switches on the circuit board when
putting back the L/R plastic buttons.

--8<--
includes/glossary.md
--8<--
