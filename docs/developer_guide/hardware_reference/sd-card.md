The **FunKey S** game console uses the SD Card both as its boot device
and its only storage device, so a good operation of this interface is
absolutely mandatory.

The Allwinner V3s provides 2x 4-bit MMC / SD Card / SDIO
interfaces. In the FunKey, only interface #0 is used.

If you look on the Web, you will find many contradictory SD Card
interface designs, with a combination of pull-up / pull-down
resistors, ESD devices and power supply filtering, with all pins wired
or not, such that it is very difficult to know what is really
required. To better understand the situation, we need to go back to
the specifications.

## Specifications

The SD Card physical interface is provided in the "<i>SD
specifications, part 1, Physical Layer Specification version 2.00, May
9, 2006</i>", for which a simplified version is available [here][1].

The MMC phyiscal interface can be found in the "<i>Multi Media Card
System Specification version 4.3, JESD84-A43, November 2007</i>",
available [here][2] (registration required).

But a good summary of the requirements is given in the "_[AN10911
SD(HC)-memory card and MMC Interface conditioning][3]_" application
note from NXP, from which this schematic is taken:

![SD MMC Interface](/assets/images/SD_MMC_Interface.png){.lightbox}

!!! Warning
    This schematic does not include details concerning card-supply and
    typical power-supply decoupling capacitors.

## Write Protect (WP)

A mechanical write protect switch is provided in the full-size SD
Card, but not in the mini or micro SD Card form factor. As we plan to
use a micro SD Card only, it is not used for the FunKey, along with
its pull-up resistor and ESD protection.

## Card Detection (CD)

As the SD Card is mandatory to boot the **FunKey S**, is always
inserted and opening the device is required for its removal, we don't
need the optional card detect mechanical switch feature (even if the
chosen connector provides it) and its related pull-up resistor and ESD
protection.

The SD Card specification provides another mean to detect the card
using a card built-in pull-up resistor on its DAT3 signal, that can be
later disconnected during normal operation using he
**SET_CLR_CARD_DETECT** (**ACMD42**) command. In order to correctly
detect if the card is inserted, a high value external pull-down
resistor (> 270 kΩ) is required to drive the detect signal low when no
card is inserted, while the card built-in 10-50 kΩ resistor will drive
this signal high when inserted.

However, this feature is not compatible with MMC cards, so its usage
should be avoided and the mechanical detection is preferred.

## Pull-Up Resistors

Both the SD Card and MMC specifications require not to leave the
interface signals floating, except for the CLK signal, where a pull
resistor would cause significant signal distortion because of the
required high speed and short rise/fall times. However, it is
recommended to add a series resistor on this CLK signal as close as
possible to the clock source (the CPU) to avoid ringing, as we already
discussed it in the page about the [CPU][4].

Fortunately, the Allwinner V3s CPU provides internal pull-up resistors
for all these signals, so we don't have to add external pull-up
resistors. These resistors are given with a typical value of 100 kΩ
(50 min, 150 max). Unfortunately, the CMD signal for MMC card features
an open-drain output mode, and its value should be undercut (down to
4.7 kΩ) to guarantee a sufficiently short rise time in this mode.

## Schematics

The FunKey SD Card interface schematic is the following:

![SD Card Schematics](/assets/images/SD_Card_Schematics.png){.lightbox}

![TF-110](/assets/images/TF-110.png){: align=left }

As can be expected, the main component is the [Micro SD (TF Card)
Push/Pull connector][5] **J4**, which has been selected for its
low-profile (1.3 mm height) characteristic and overall minimal
dimensions.

!!! Tip

    "Push-Pull" means that you have to "Push" to insert the card and
    to "Pull" to remove it, i.e. the operation is completely manual,
    whereas "Push/Push" implies that you have a bistable mechanism to
    remove the card.

Even if in the FunKey device the SD Card and its connector are not
accessible without opening the enclosure, there may be some situations
where the user may decide to do so. We thus attach an ESD protection
TVS diode (**D16**, **D17**, **D18**, **D25**, **D26**, **D27**,
**D28**) on each signal to avoid any ESD hazard.

As discussed above, a single pull-up resistor **R10** is used on the CMD
signal for MMC compatibility.

The micro SD Card connector built-in card detection switch is not
used, since the card must always be inserted for the **FunKey S** to
boot, and the corresponding pins are thus connected to GND.

The SD Card power supply is applied through an RC low-pass filter
**R9** / **C11** in order to provide a soft-start operation, as the
card built-in large bulk capacitor on its power rail may collapse the
supply voltage when initially powered up.

[1]: https://www.sdcard.org/downloads/pls/click.php?p=Part1_Physical_Layer_Simplified_Specification_Ver6.00.jpg&f=Part1_Physical_Layer_Simplified_Specification_Ver6.00.pdf&e=EN_SS1
[2]: https://www.jedec.org/document_search/field_keywords/emmc-3147
[3]: https://www.mouser.com/catalog/specsheets/an10911.pdf
[4]: /developer_guide/hardware_reference/cpu/#sd-card
[5]: https://github.com/FunKey-Project/FunKey-S-Hardware/blob/master/Datasheets/C266613_%E6%8A%BD%E6%8B%89%E5%BC%8FTF%E5%8D%A1%E5%BA%A7_2018-08-20.PDF

--8<--
includes/glossary.md
--8<--
