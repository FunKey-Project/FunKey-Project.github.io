Looking back at the section on the [CPU schematics][1], the **FunKey
S** device clearly needs a sophisticated power supply in order to
fulfill the CPU power requirements. They are recalled below, along
with the maximum current requirements found in the [Allwinner V3s
reference design][2] (page 3):

 - +3.3V / 1.2A for the I/O power supply
 - +3.3V_AO / 30 mA for the Always-On power supply (RTC timer)
 - +3.0V / 200 mA for the analog power supply
 - +1.8V / 1A for the DDR2 DRAM power supply
 - +1.25V / 1.6 A for the core power supply

But why in the first place are there so many different power supply
voltages required?

## Power Efficiency

A first answer is: for better power efficiency.

As P = U x I (Electrical power is the product of voltage level by
current intensity), you can reduce power by decreasing the required
current or by reducing the operating voltage. Assuming you already do
your best to reduce the required current, you can still reduce power
by reducing the voltage.

## Reducing Power Supply Voltage

### Voltage Drop

But how far can you go? Over long distance, you have the voltage drop
from the conductor linear resistance, but this effect can be neglected
for small boards.

### Noise Margin

You have inductive and capacitive coupling between conductive wires
and planes too, but within a PCB, these coupling only have a limited
direct effect on voltage. However, these coupling play a role in that
they will pick up external electromagnetic noise from the surroundings
and inject it into the circuit.

And with digital circuits, a critical limit when lowering the
operating voltage is the "noise margin" or difference in absolute
voltage levels between a logical '0' and logical '1', which determines
the maximum amplitude of spurious voltage spikes that a conductor can
pick up that will trigger an erroneous logic level change.

This phenomenon mostly depends on the circuit scale: a long-distance
circuit between boards will require higher voltages (typically +12V or
+24V) to limit this effect, whereas a circuit between boards a few
meters apart or using through-hole chips on the same board wile
require a lower voltage (typically +5V like the old Arduinos). Using
SMT chips will allow even smaller boards and lower voltages (+3.3V is
typical today), and with wires running on the same silicon die, it is
possible to go down to +1.2V, given the current technological limits.

### Voltage Swing

There are other reasons why you should try to minimize voltages: the
core CPU for example needs to run as fast as possible, and lowering
its operating voltage will shorten the signal rise and fall duration
as the voltage swing is reduced.

## Other Power Supply Considerations

Besides reducing the operating voltage, there are other considerations
that may push to multiply the number of power supplies in a design:

### Quiescent Current

As for power supply used for standby operation providing small
currents, a very-low leakage current ("quiescent current") is required
as it can no longer be neglected compared to the current required by
the light load and even more importantly because this current
consumption is permanent.

### Ripple Voltage

For sensitive circuits such as ADCs (Analog to Digital Converters) or
PLLs (Phase-Locked Loops) which rely on comparing very small voltage
differences, a "clean" power supply featuring very low ripple voltage
amplitude is required to achieve a good resolution and/or
accuracy. This characteristic is only possible to obtain using LDOs
and not SMPS, and the figure to pay attention to is then the PSRR
(Power Supply Rejection Ratio) or how much a variation in the input
voltage will affect the output voltage: the higher, the better! A
value > 50 dB is a good starting point.

## Application to the FunKey Design

Based on these considerations, it is now clear that each V3s power
supply voltage has a good reason to exist:

 - +3.3V / 1.2A is used for powering the I/Os to connect between chips
   on the board. Given the required current, a SMPS is required for
   reaching a good efficiency
 - +3.3V_AO / 30 mA for the Always-On power supply (RTC timer)
   requires a low quiescent-current, so an LDO is used
 - +3.0V / 200 mA for the analog power supply also requires an LDO,
   this time to minimize the ripple voltage
 - +1.8V / 1A for the DDR2 DRAM power supply: this strange voltage
   level is typical for DDR2 DRAM memory chips, and is the result of
   driving the large memory array inside the chip
- +1.25V / 1.6 A for powering the CPU core to minimize the voltage
  swing and increase the possible CPU frequency. Given the required
  current, a SMPS is required for reaching a good efficiency, too

[1]: /developer_guide/hardware_reference/cpu/#cpu-schematics
[2]: https://github.com/Squonk42/V3s_Documentation/blob/master/V3S_CDR_STD_V1_0_20150514.pdf

--8<--
includes/glossary.md
--8<--
