A separate [Sylergy SY8088][1] Buck DC/DC SMPS chip is used to provide
the DDR2 +1V8 DDR2 DRAM power.

This is because the AXP20x is originally the PMU (Power Management
Unit) used by most Allwinner SoCs (A10, A13 and A20), which do not
integrate SDRAM, so the board designer has a wide choice of memory
option: DDR2, DDR3, DDR3L, LPDDR3, LPDDR4 with various voltage
requirements.

But no specific PMIC was created for the Allwinner V3s used in the
FunKey device which however integrates a fixed SiP (System In Package)
512Mbit (64MB) DDR2 SDRAM.

We thus have to design a separate SMPS (DC-DC) power supply for
providing the +1.8V 1A required for the DDR2 DRAM power supply.

For this purpose, we followed closely the [Allwinner Reference
Design][2].

Here is the corresponding DRAM Power schematics:

![DRAM Power Schematics](/assets/images/DRAM_Power_Schematics.png)

Nothing very fancy here: the SMPS chip **U4** has its required input
filter capacitor **C37** and output capacitors **C65** and **C73**.

The low-profile ferrite-core power inductor **L6** (rated with a
saturation current of 1.76A and low < 0.1 Ω resistance) provides the
DC-DC energy storage element.

The **R20**/**R23** precision voltage divider provides the required
+0.6V feedback voltage from the +1.8V output voltage by having a 1/3
resistor ratio.

The last component is a pull-up resistor **R19** which ties the SMPS
chip enable input to its active level permanently. The pull-up voltage
is +3.0V (just as in the original reference design), probably as it is
the next higher voltage available, in order to limit the current in it
to its lowest possible value.

[1]: https://github.com/FunKey-Project/FunKey-S-Hardware/blob/master/Datasheets/C79313_SY8088AAC_2017-03-29.PDF
[2]: https://github.com/Squonk42/V3s_Documentation/blob/master/V3S_CDR_STD_V1_0_20150514.pdf
[3]: https://datasheet.lcsc.com/szlcsc/Silergy-Corp-SY8088AAC_C79313.pdf
[4]: https://datasheet.lcsc.com/szlcsc/1901241230_LOWPOWER-LP3220S-AB5F_C324565.pdf
[5]: https://www.diodes.com/assets/Datasheets/AP3418.pdf

--8<--
includes/glossary.md
--8<--
