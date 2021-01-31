In the **FunKey S** device, the USB interface has 2 functions:

 - provide an external power supply source for both powering the
   device and charging the built-in LiPo battery
- provide a data interface to transfer firmware upgrades,
  configuration files, game emulators and game ROMs

The first function only requires the +5V USB power and GND pins. The
second function requires to wire the additional differential data
lines D+ and D-. As we only need to operate as an USB device and
although the V3s is able to work as either an USB host or USB device
using the USB OTG protocol, we don't need the ID pin to determine by
the cable wiring which role we must take.

![U02-BFD3111B0-009](/assets/images/U02-BFD3111B0-009.png){: align=left }

The main part is of course the [Micro USB edge-mounted connector][1]
**J2**, which we chose in order to "mask out" its already low-profile
height into the PCB thickness. And with its "harpoon-like"
through-hole legs, it should avoid tearing it off the board if the
user don't pull the chord straight.

The USB schematic is the following:

![USB Schematics](/assets/images/USB_Schematics.png){.lightbox}

Before connecting 2 devices using an USB cable, they may be at
completely different absolute voltages, and during cable insertion,
the shield will be in contact before the other pins, including
GND. The **C6** capacitor between the Protective Earth (Shield) and
GND is here to provide an AC path for sinking this difference in
voltage and align the GND levels when plugin the cable.

The resistor **R4** on the USB ID connector pin should probably not be
mounted: as we act only as an USB device, this pin should be left
floating.

The capacitors **C7**, **C8**, **C10** and ferrite bead **L2** form a
constant-k 3 pole CLC low pass filter to remove any spurious in/out on
the USB power supply wire. The USB 2.0 specification limits the
maximum bulk capacitance value to 10 µF in order to avoid power supply
excessive droops when plugin in a device with a discharged large bulk
capacitor.

**D15** is a [NXP PRTR5V0U2X,215][2] combined TVS protection diode for
the VBUS pin and a set of clamping diodes that will limit the voltage
on D+ and D- pins to stay between GND and VBUS levels to in order to
protect the V3s USB driver from under / over-voltages.

[1]: https://github.com/FunKey-Project/FunKey-S-Hardware/blob/master/Datasheets/C40958_MICRO5P%E6%B2%89%E6%9D%BF%E5%BC%8F0.8%E5%9B%9B%E8%84%9A%E5%85%A8%E6%8F%92%E6%97%A0%E5%AF%BC%E4%BD%8D%E6%9C%89%E5%AD%94%E8%80%90%E9%AB%98%E6%B8%A9_2016-05-20.PDF
[2]: https://github.com/FunKey-Project/FunKey-S-Hardware/blob/master/Datasheets/C12333_PRTR5V0U2X%2C215_2017-10-31.PDF

--8<--
includes/glossary.md
--8<--
