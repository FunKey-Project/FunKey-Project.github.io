# Flashing a new micro-SD card

The following steps describe how to flash a micro-SD card with the latest version of FunKey-OS. This must be done before switching micro-SD cards inside the console.

Note: Everything on the micro-SD card will be lost, be sure to save your data.

## Download the latest FunKey-OS image file

Get the latest "***FunKey-rootfs-x.y.z.img***" SD card image file directly from [here](https://github.com/FunKey-Project/FunKey-OS/releases/download/FunKey-OS-2.0.0/FunKey-sdcard-2.0.0.img) or from the bottom of the latest release page in the "assets" section:

<a href="https://github.com/FunKey-Project/FunKey-OS/releases/latest" target="_blank">https://github.com/FunKey-Project/FunKey-OS/releases/latest</a>

![Github Release](/assets/images/github_sd_card_image.png){: .lightbox}

## Flash the micro-SD card with balenaEtcher

- Download and install balenaEtcher for Windows/Mac OS/Linux from <a href="https://www.balena.io/etcher/" target="_blank">balena.io</a>.

- Run balenaEtcher and click on "Flash from file" to select the FunKey-OS image file

- Insert the micro-SD card in your computer and select the SD card drive (balenaEtcher should automatically detect it for you)

- Finally, click **Flash** 

- You'll see a progress bar. Once complete, **make sure the flashing was successful, otherwise retry to flash the SD card**. The program will automatically unmount the SD card so it's safe to remove it from your computer.

  ![Github Release](/assets/images/Flashing_successful.png){: .lightbox}

# Switching micro-SD cards

On the FunKey S, the micro-SD card was voluntarily placed against the casing so that it has no degree of liberty and cannot move by accident during the eventful life of a keychain. Removing/switching the micro-SD card was nevertheless designed to be pretty straightforward and only require a standard **Phillips screwdriver (PH0)**. Please follow the steps below carefully. 


|                         **Display**                          | **Action**                                                   |
| :----------------------------------------------------------: | :----------------------------------------------------------- |
| ![removeScrews](/assets/images/disassembly/IMG_8800.jpg){: .lightbox width=240}![removeScrews](/assets/images/disassembly/IMG_8801.jpg){: .lightbox width=240}![removeScrews](/assets/images/disassembly/IMG_8803.jpg){: .lightbox width=240} | **STEP 1 - Removing the screws**<br />Using a standard **PH0 screwdriver**, remove the 2 screws on the back of your FunKey S.<br />Be careful to use the correct screwdriver head size not to damage the screws. |
| ![removeBack](/assets/images/disassembly/IMG_8848.jpg){: .lightbox width=240}![removeBack](/assets/images/disassembly/IMG_8844.jpg){: .lightbox width=240}![removeBack](/assets/images/disassembly/IMG_8813.jpg){: .lightbox width=240} | **STEP 2 - Opening up the console** <br />Carefully remove:<br />1) The plastic back of the console by pulling from the side of the hinge first.<br />2) The keychain lanyard and axis. <br />3) The LR plastic buttons by gently pulling them out of their axis. Be careful not to damage the switch on the circuit board. |
| ![removeBattery](/assets/images/disassembly/IMG_8818.jpg){: .lightbox width=240}![removeBattery](/assets/images/disassembly/IMG_8822.jpg){: .lightbox width=240} | **STEP 3 - Exposing the circuit board**<br />Pull back the battery to expose the circuit board. You can leave it connected to the console. |
| ![pullPCB](/assets/images/disassembly/IMG_8833.jpg){: .lightbox width=240} | **STEP 4 - Accessing the SD card**<br />By grabbing it **by the micro-USB port**, gently pull the circuit board towards you until you have access to the SD card. |
| ![removeSD](/assets/images/disassembly/IMG_8835.jpg){: .lightbox width=240}![removeSD](/assets/images/disassembly/IMG_8836.jpg){: .lightbox width=240} | **STEP 5 - Switching SD cards**<br />You can now remove the old SD card from its socket and insert the new one (previously flashed as described [in the 1st part of this tutorial](#flashing-a-new-micro-sd-card)). |
| ![checkSpeaker](/assets/images/disassembly/IMG_8865_YES.jpg){: .lightbox width=240}![checkSpeaker](/assets/images/disassembly/IMG_8862_NO.jpg){: .lightbox width=240} | **STEP 6 - Reassembly**<br />Before putting back down the circuit board in the case, please make sure the speaker on the circuit board is already inserted in the casing. If not, then insert it first like in the pictures.<br />Reassemble the console by following the previous steps backwards. |



--8<--
includes/glossary.md
--8<--