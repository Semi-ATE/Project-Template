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
		 2u2_0805_300mA_5%_125C (Inductance; 2.2uH; SMD; 0805; 300mA; 5%; 125°C)
		 2u2_5x4mm_300mA_5%_125C (Inductance; 2.2uH; TH; Body 5x4mm; 300mA; 5%; 125°C)
        
- Connectors should follow - CON_TYPE_PINCOUNT_GENDER_DIRECTION_FAMILY

	    Examples:
	     CON_TH_64_F_00_41612 (Connector; 64 pins; female; straight (0\ |deg|\ ); DIN41612 Family)
	     CON_TH_64_F_00_41612_LL (Connector; 64 pins; female; straight (0\ |deg|\ ); DIN41612 Family; Long leads)
	     CON_SMD_120_F_00_ERF8 (Connector; 120 pins; female, straight (0\ |deg|\ ); Samtec ERF8 Family)
	     CON_PF_120_M_00_ERNI (Connector; 120 pins; male; straight (0 deg); ERNI Family)
	     CON_TH_25_F_90_DSUB (Connector; 25 pins; female; 90 deg angled; DSUB)
		 HDR_TH_1X25_M_00 (Header; 1x25 pins; male; straight (0\ |deg|\ ))
		 HDR_SMD_2X25_M_90_1.27mm (Header; 2x25 pins; male; 90 deg angled; 1.27mm pitch)

- Cyrstals

		Examples
		 12M000_SMD_6x3.5mm_10ppm (Crystal; SMD; 6x3.5mm; 10ppm)
		 65000k_TH_7x3mm (Crystal; TH; 7x3mm)
		
- Semiconductor, Relais - TYPE *[MFG P/N]*

	    Examples:
         AD8512ARMZ
         AD8221ARM
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
|K|Relais|Relais|
|L|Inductances|Inductances|
|MP|Mechanical Part (including screws and fasteners)|Mechanical_Parts|
|Q|Transistors, Contactors, Semiconductor Contactors, Thyristors, Triac|Transistors|
|R|Resistors, Potentiometers|Resistors|
|S|Swtiches, Switch Buttons|Switches|
|T|Transformers|Transformers|
|TP|Test Points|Test_Points|
|U|Analog, Digital and Mix *[A/D or D/A]* ICs, Oscillators, Clocks|Integrated_Curcuits|
|W|Cables, Wires|-|
|X|Connections *[Connectors, Sockets]*, Plugs, Terminals|Connections|
|Y|Crystals|Cyrstals|
|Z|Miscellaneous|Miscellaneous|

## SCHEMATIC View

### Symbol definitions

***not final - under constriction***

- As a basic principle, a symbol should be drawn in logical way (signals goes from left to right, potential from top to bottom - inputs on the left, outputs on the right, power on top and ground on bottom). But exceptions are allowed;
- All pins have to be visible (e.g. no hidden power pins);
- The symbol has to show the logical name and the physical pin number;
- Schematic view for ICs ...
- 


### Standard parameters

- Value *[for passive components is the value, for active is the MFG P/N]*
- Manufacturer
- Manufacturer Part Number
- Supplier
- Supplier Part Number
- Datasheet *[As reference link]*
- Supplier Info *[As reference link]*

## FOOTPRINT View

### Mechanical Layers

| Name | TOP | BOT | Description |
|:---------|:---:|:---:|:---------|
| Board Outline | M1 | - | Data for mill out of the board |
| Board Cutout | M2 | - | Data for inner mill out of the board |
| Courtyard | M3 | M11 | Used to define the placement space required for a component | --> 0.075mm wider (center line) than the component outline
| Designator | M4 | M12 | Designator of component |
| 3D Body | M5 | M13 | 3D view of the component |
| Component Center | M6 | M14 | Center of the component | --> 'center of gravity' of the solder pads
| Component Outline | M7 | M15 | Outline of the component body | 
| Dimensions | M8 | M16 | Additional information for board manufacturer |
| Gold Plating | M9 | M17 | Used to define component selective gold plating requirements |
| Design Guides | M10 | M18 | Additional information for design process |

## FONT

preferences in altium ?
--> Arial Narrow 10 ?!?

## Discussion

Courtyard on mechanical parts ?!?

### Mechanical Layers Drawing Specifications

- *Board Outline* and *Board Cutout* line width - 0.15-0.2mm;
- *Courtyard*, *Component Center*, *Component Outline* and other line width - 0.05mm;
- *Courtyard* to be **0.1mm** larger than the footprint (depending on the case - either the component body or the edge of the pads) - distance measured between the edge of the *pad* or *component outline* and the edge of the *courtyard line* should be **0.075mm**;
- *Component Center* should show midpoint of component.
- *Designator* text to fit inside the component outline;
- *Gold Plating* is to explain specific surface finish requirements (e.g. hard gold finish on dedicated landing areas and pads);
