The **FunKey S** features no ON/OFF switch. Instead, a small magnet
placed near the LCD screen in the lid is detected using a magnetic
sensor that is placed in front of it when the lid is closed.

The magnetic sensor controls the PMIC N_OE (Negative logic Output
Enable) input, which turns off all voltage rails except the +3.3V
Always On when the signal is at the high level.

We thus need a sensor that will close when a magnetic field is
detected, and in order to reduce power consumption when the **FunKey
S** is turned off and preserve its battery when stored on a shelf, it
should be a fully passive device. This rules out magnetic Hall effect
sensors, wich require some power for their operation.

The only practical solution is to use a "Reed switch", which is a
relatively thin flexible piece of metal inside the switch envelope
that is sensitive to a magnetic field, which opens or closes a contact
accordingly.

Most of the Reed switch available are made of a tiny glass tube, which
is rather fragile and may break if the device falls on the floor,
something quite usual for a keychain...

We found only a unique plastic-molded model which almost meets our
low-profile requirements of 1.5 mm (1.6 mm height!): the [Standex
Meder MK24][1].

Here is the corresponding schematics, already covered in the PMIC discussion:

![Magnetic Sensor Schematics](/assets/images/Magnetic_Sensor_Schematics.png){: .lightbox}

The global PMIC chip enable signal N_OE is activated by default
through a 47kΩ resistor **R17** to GND, but the magnetic Reed switch
**S14** can disable it by forcing its level to +VOUT, with a filter
capacitor **C83**.

[1]: https://github.com/FunKey-Project/FunKey-S-Hardware/blob/master/Datasheets/MK24_V02.pdf

--8<--
includes/glossary.md
--8<--
