# Palette description

The default **FunKey S** Game Boy emulator: _[gnuboy][1]_ allows to
set the palette used for grayscale when running DMG (original mono
Gameboy) ROMs.

There are four variables for this purpose, allowing the background,
window, and both sprite palettes to be colored differently. Each one
is made up of four numbers, the color to use for each shade of gray,
from lightest to darkest.

Colors are represented as 24-bit hexadecimal numbers, with red
component in the low (rightmost) 2 digits, green component in the
middle 2 digits and blue component in the upper (leftmost) 2 digits.

For example, to set the background to shades of white, the window to
shades of red, and the sprite palettes to shades of green and blue,
you could use:

```
set dmg_bgp  0xffffff 0xaaaaaa 0x555555 0x000000
set dmg_wndp 0x0000ff 0x0000aa 0x000055 0x000000
set dmg_obp0 0x00ff00 0x00aa00 0x005500 0x000000
set dmg_obp1 0xff0000 0xaa0000 0x550000 0x000000
```

This will of course look rather ugly, but it does the job illustrating
how you set various colors.

Here is a list of example palettes proposed by the gnuboy emulator:

```
# Default palette used in the FunKey S.
set dmg_bgp  0x98d0e0 0x68a0b0 0x60707C 0x2C3C3C
set dmg_wndp 0x98d0e0 0x68a0b0 0x60707C 0x2C3C3C
set dmg_obp0 0x98d0e0 0x68a0b0 0x60707C 0x2C3C3C
set dmg_obp1 0x98d0e0 0x68a0b0 0x60707C 0x2C3C3C

# Old default palette from 0.8.0 thru 0.9.13.
# This was designed for use on a laptop display, 
# so it's probably way too yellowish.
set dmg_bgp  0x78f0f0 0x58b8b8 0x487878 0x184848
set dmg_wndp 0x78f0f0 0x58b8b8 0x487878 0x184848
set dmg_obp0 0x78f0f0 0x58b8b8 0x487878 0x184848
set dmg_obp1 0x78f0f0 0x58b8b8 0x487878 0x184848

# Old dim grayscale.
set dmg_bgp  0xc0c0c0 0x808080 0x404040 0x000000
set dmg_wndp 0xc0c0c0 0x808080 0x404040 0x000000
set dmg_obp0 0xc0c0c0 0x808080 0x404040 0x000000
set dmg_obp1 0xc0c0c0 0x808080 0x404040 0x000000

# Light grayscale.
set dmg_bgp  0xffffff 0xc0c0c0 0x808080 0x404040
set dmg_wndp 0xffffff 0xc0c0c0 0x808080 0x404040
set dmg_obp0 0xffffff 0xc0c0c0 0x808080 0x404040
set dmg_obp1 0xffffff 0xc0c0c0 0x808080 0x404040

# Full contrast grayscale.
set dmg_bgp  0xffffff 0xaaaaaa 0x555555 0x000000
set dmg_wndp 0xffffff 0xaaaaaa 0x555555 0x000000
set dmg_obp0 0xffffff 0xaaaaaa 0x555555 0x000000
set dmg_obp1 0xffffff 0xaaaaaa 0x555555 0x000000

# Debug palette. 
# Each of the four layers is colored differently, 
# making it easier to debug visual glitches in 
# roms that use them all together cleverly.
set dmg_bgp  0xf898c8 0xf83098 0xc80060 0x600030
set dmg_wndp 0xd0c0c0 0xa88080 0x785050 0x382828
set dmg_obp0 0x9898f8 0x3030f8 0x0000c8 0x000060
set dmg_obp1 0xc8f898 0x98f830 0x60c800 0x306000

# Sprites standout. 
# Similar to above, but the colors are more subdued and 
# the window and background are the same. This palette
# may actually be suitable for playing some games...
set dmg_bgp  0xd0c0c0 0xa88080 0x785050 0x382828
set dmg_wndp 0xd0c0c0 0xa88080 0x785050 0x382828
set dmg_obp0 0xc8e0f8 0x90a8e8 0x4878a8 0x183850
set dmg_obp1 0x98b8f8 0x3050f8 0x2040a8 0x002060

# LCD yellows and grays. 
# An earlier version of the new default palette.
set dmg_bgp  0x88e0f0 0x68a8b8 0x586878 0x283838
set dmg_wndp 0x88e0f0 0x68a8b8 0x586878 0x283838
set dmg_obp0 0x88e0f0 0x68a8b8 0x586878 0x283838
set dmg_obp1 0x88e0f0 0x68a8b8 0x586878 0x283838

# LCD yellowscale. 
# And another similar one.
set dmg_bgp  0x88e0f0 0x68a8b8 0x486878 0x203838
set dmg_wndp 0x88e0f0 0x68a8b8 0x486878 0x203838
set dmg_obp0 0x88e0f0 0x68a8b8 0x486878 0x203838
set dmg_obp1 0x88e0f0 0x68a8b8 0x486878 0x203838

# Slightly colorful. 
# Not just a plain lightness gradient, but some 
# change in hue as well. Looks ok with some games; 
# designed in particular for the FFL series.
set dmg_bgp  0x98e0f8 0x78a0c0 0x747080 0x604038
set dmg_wndp 0x98e0f8 0x78a0c0 0x747080 0x604038
set dmg_obp0 0x98e0f8 0x78a0c0 0x747080 0x604038
set dmg_obp1 0x98e0f8 0x78a0c0 0x747080 0x604038

# Optionally use these with the above palette to 
# make sprites stand out a bit.
set dmg_obp0 0x98e0f8 0x5090c0 0x507898 0x583838
set dmg_obp1 0x98e0f8 0x5090c0 0x686078 0x383838

# R-Type 1 palette from R-Type DX
set dmg_bgp  0xc0ffff 0x408080 0x204040 0x000000
set dmg_wndp 0xc0ffff 0x408080 0x204040 0x000000
set dmg_obp0 0xc0ffff 0x408080 0x204040 0x000000
set dmg_obp1 0xc0ffff 0x408080 0x204040 0x000000`
```

# Changing the palette

|                         **Display**                                               | **Action**                                                                                                                  |
| :-------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------|
| ![Connection PC](/assets/images/Connection_PC.png){: .lightbox}                   | Connect the **FunKey S** to your computer using the provided micro USB cable, then open it to turn it on                    |
| ![RetroFE](/assets/images/RetroFE.png){: .lightbox}                               | At the launcher's main screen (example here with RetroFE), press the **MENU** key                                           |
| ![Mount USB](/assets/images/Mount_USB.png){: .lightbox}                           | Press the **UP**/**DOWN** keys until you see "**MOUNT USB**"                                                                |
| ![Mount USB Are you sure](/assets/images/Mount_USB_are_you_sure.png){: .lightbox} | Press the **A** key twice to confirm                                                                                        |
| ![Eject USB](/assets/images/Eject_USB.png){: .lightbox}                           | "**EJECT USB**" is now displayed instead, now go to your host computer and open a File Explorer window                      |
| ![USB Drive](/assets/images/USB_Drive.png){: .lightbox}                           | You should see the **FunKey S** appear as an USB drive on your computer in the File Explorer (example here with Windows 10) |
| ![create _gnuboy](/assets/images/create_gnuboy_folder.png){: .lightbox}           | In the FunKey folder, create a new folder .gnuboy if it does not already exist.                                             |
| ![create gnuboy_rc](/assets/images/create_gnuboy_rc_file.png){: .lightbox}        | In the FunKey/.gnuboy folder create a file gnuboy.rc if it does not already exist.                                          |
| ![modify gnuboy_rc](/assets/images/set_palette.png){: .lightbox}                  | Open the gnuboy.rc file with a text editor and add the palette you want.                                                    |
| ![Eject Drive](/assets/images/Eject_Drive.png){: .lightbox}                       | Eject cleanly the USB drive from your computer                                                                              |
| ![Eject USB Are you sure](/assets/images/Eject_USB_are_you_sure.png){: .lightbox} | Back on the **FunKey S**, at the "**EJECT USB**" menu entry, press the "**A**" key twice to confirm                         |
| ![Unmount USB](/assets/images/Mount_USB.png){: .lightbox}                         | Press the **MENU** key to return to the launcher screen                                                                     |
| ![palette results](/assets/images/results_palette.png){: .lightbox}               | Launch any Gameboy game to see the results of your new palette settings.                                                    |

[1]: https://github.com/rofl0r/gnuboy

--8<--
includes/glossary.md
--8<--
