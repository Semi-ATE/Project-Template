# Semi-ATE Altium Libraries

![Status](https://img.shields.io/badge/Status-Alpha%20(under%20construction)-red)

## GENERAL

### Naming of components

- Passive components should be named following this structure - VALUE_CASE/FOOTPRINT_*[SPECIFICATION (e.g. Tolerance, Voltage)]*

        Examples:
		 2u2_0603_6.3V_X7R_10% (Capacitor; Ceramic; 2.2u; 0603; 6.3V; X7R; 10%; -55°C ~ 125°C)
		 330p_0603_50V_C0G/NP0_5% (Capacitor; Ceramic; 330p; 0603; 50V; C0G/NP0; 5%; -55°C ~ 125°C)
		 100R_0402_63mW_1%_100ppm (Resistor; Chip; 100R; 0402; 50V; 1%; 100ppm; 63mW; -55°C ~ 155°C)
		 48R7_0805_125mW_0.1%_25ppm (Resistor; Chip; 48.7R; 0805; 150V; 0.1%; 25ppm; 125mW; -55°C ~ 155°C)
		 INDC_56n_0603_360mA_5% (Inductance; Chip; 56nH; 0603; 360mA; 5%)
		 INDM_2u2_5.28x5.48mm_9.2A_20% (Inductance; Molded; 2.2uH; SMD; Body 5.28x5.48mm; 9.2A; 20%)
		 FB_Z110_0603 (Ferrite Bead; Z=110R; 1 Line; DCR=20mR; 0603)
        
- Connectors should follow - CON_TYPE_PINCOUNT_GENDER_DIRECTION_FAMILY

	    Examples:
	     CON_TH_64_F_00_41612 (Connector; DIN41612 Family; 64 pins; Female; Straight (0\ |deg|\ ))
	     CON_TH_64_F_00_41612_LL (Connector; DIN41612 Family; 64 pins; Female; Straight (0\ |deg|\ ); Long leads)
	     CON_SMD_120_F_00_ERF8 (Connector; 120 pins; Female, Straight (0\ |deg|\ ); Samtec ERF8 Family)
	     CON_PF_120_M_00_ERNI (Connector; 120 pins; Male; Straight (0 deg); ERNI Family)
	     CON_TH_25_F_90_DSUB (Connector; DSUB; 25 pins; Female; 90 deg angled)
		 HDR_TH_1X25_M_00 (Header; 1x25 pins; Male; Straight (0\ |deg|\ ); Pitch 2.54mm)
		 HDR_SMD_2X25_M_90_1.27mm (Header; 2x25 pins; Male; 90 deg angled; Pitch 1.27mm)

- Crystals

		Examples
		 12M000_SMD_6x3.5mm_10ppm (Crystal; SMD; 6x3.5mm; 10ppm)
		 65000k_TH_7x3mm (Crystal; TH; 7x3mm)
		
- Semiconductors (ICs, Diodes, Transistors, Sensors, Supplies, etc.), Relays - TYPE *[MFG P/N]*

	    Examples:
         AD8512ARMZ
         AD8221ARM
		 NSBA144EF3T5G
		 TMP461AIRUNR-S
		 PMEG4010EJ,115
         118-1-A-5/2D
         G3VM-61HR1
		 
- Mechanical - TYPE_*[SPECIFICATION (e.g. SMD/TH, Thread, Length)]*

	    Examples:
         STANDOFF_SMD_M3_12MM_F-F_BRASS (Standoff; SMD; M3; 12mm; female-female; Brass)
		 NUT_M3_STEEL (Nut; M3; Steel)
		 SCREW_HEX_CAP_M3_6MM_STEEL (Screw; Hexagon Cap; M3; 6mm; Steel)

- Other - Depending on case
	    
	    Examples:
         LED_GN_MFGPN (LED; Green; MFG P/N)
		 BATTERY_HOLDER_KEYSTONE_502 (Connection; Battery Holder; Coin; 16mm; Through Hole)
		 TP_SMD_1mm (Test Point, SMD Pad, 1 mm)
		 TP_TH_1.6mm_BLACK (Test Point, TH, Black, 1.6mm hole)

### Naming of footprints

- As a generic rule IPC-7351 standard is used for SMT footprints
- For TH components we stay as close to the standard as possible

### Designators of components

| Designator | Component type/group | Library Name (.SCHLIB)|
|:---:|:---|:---|
|A|Assemblies|Assemblies|
|B|Sensors of all kinds [including IC's U will be B]|Sensors|
|C|Capacitors|Capacitors|
|D|Diodes, Zener Diodes, Rectifiers, LEDs|Diodes|
|F|Fuses|Fuses|
|G|Supplies, DC/DC Converters|Supplies|
|J|Jumpers|Jumpers|
|K|Mechanical Relays|Relays|
|L|Inductances|Inductances|
|MP|Mechanical Part (including screws and fasteners)|Mechanical_Parts|
|Q|Transistors, Contactors, Semiconductor Contactors, Thyristors, Triac|Transistors|
|R|Resistors, Potentiometers|Resistors|
|S|Mechanical Switches and Buttons|Switches|
|T|Transformers|Transformers|
|TP|Test Points|Test_Points|
|U|Analog, Digital and Mix *[A/D or D/A]* ICs, Solid State Relays, Oscillators, Clocks|Integrated_Circuits|
|XA|Addons [Cables, Wires and Accessories]|Addons|
|X|Connections *[Connectors, Sockets]*, Plugs, Terminals|Connections|
|Y|Crystals|Crystals|
|Z|Miscellaneous|Miscellaneous|

## SCHEMATIC View

### Symbol definitions

- As a basic principle, a symbol should be drawn in logical way (signals goes from left to right, potential from top to bottom - inputs on the left, outputs on the right, power on top and ground on bottom). But exceptions are allowed;
- All pins have to be visible (e.g. no hidden power pins);
- The symbol has to show the logical name and the physical pin number;
- Schematic view for ICs and similar component types:
   = Function block as a separate subgroup;
   = Power pins block are dedicated subgroup;
   = Communication pins (if available) can be included with the power pins subgroup;
   = Exposed Pad (EP) to be included in the power pins subpart.
- Everything is drawn in a 100 mil grid. Pitch between pads is also on this grid.

## FONT

Preferred font on all visible texts in components is *"Arial Narrow" with size 10*

### Standard parameters

- Manufacturer
- Manufacturer Part Number
- Supplier
- Supplier Part Number
- Value *[for passive components is the value, for active is the MFG P/N]* - **This parameter is visible on the schematic**
- Datasheet *[As reference link]*
- Supplier Info *[As reference link]*

## FOOTPRINT View

### Symbol definitions

- Pin 1 orientation - top left;
- Pin shapes - 1st pin to be rectangular and other pins to be rounded rectangular;
- Solder Mask opening/clearance - 50um by default unless otherwise requested;
- Paste Mask - same as pad size unless otherwise requested;
- First pin marking to be available in the courtyard layer as well;
- 3D body should be available for all footprints. If a STEP model is not available add a basic (rectangular) model;

### Mechanical Layers

| Name | TOP | BOT | Description |
|:---------|:---:|:---:|:---------|
| Board Outline | M1 | - | Data for mill out of the board |
| Board Cutout | M2 | - | Data for inner mill out of the board |
| Courtyard | M3 | M11 | Used to define the placement space required for a component |
| Designator | M4 | M12 | Designator of component |
| 3D Body | M5 | M13 | 3D view of the component |
| Component Center | M6 | M14 | Center of the component |
| Component Outline | M7 | M15 | Outline of the component body | 
| Dimensions | M8 | M16 | Additional information for board manufacturer |
| Gold Plating | M9 | M17 | Used to define component selective gold plating requirements |
| Design Guides | M10 | M18 | Additional information for design process |

### Mechanical Layers Drawing Specifications

- *Board Outline* and *Board Cutout* line width - 0.15-0.2mm;
- *Courtyard*, *Component Center*, *Component Outline* and others line width - 0.05mm;
- *Courtyard* to be **0.1mm** larger than the footprint (depending on the case - either the component body or the edge of the pads) - distance measured between the edge of the *pad* or *component outline* and the edge of the *courtyard line* should be **0.075mm**.
On angled components, the are should be around the mounting area on the PCB;
- *Component Center* should show midpoint of component. For angled components it should be in the center of the mounting area;
- *Designator* text to fit inside the component outline and 4 digits centered to be inside the courtyard;
- *Gold Plating* is to explain specific surface finish requirements (e.g. hard gold finish on dedicated landing areas and pads);



---
*For more information or questions - Daniel Talev [dtal@semi-ate.com]*