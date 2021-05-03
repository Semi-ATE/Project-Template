# Semi-ATE Altium Libraries

https://img.shields.io/badge/Status-Alpha-red

## GENERAL

### Naming of components

- Passive components should be named following this structure - VALUE_CASE/FOOTPRINT_*[SPECIFICATION (e.g. Tolerance, Voltage)]*

        Examples:
		 2k7_0805 (Resistor, 2.7 k, SMD, footprint 0805)
		 1R2_0207_1% (Resistor, 1.2 Ohm, TH, footprint 0207, 1%)
		 1n_0603_50V_1% (Capacitor, 1 n, SMD, footprint 0603, 50 V, 1 %)
		 2U2_500MIL_Tan_35V (Capacitor, 2.2 uF, TH 500mil distance between holes, Tantalum, 35V)
		 4m7_0603 (Inductance, 4.7 mH, SMD, footprint 0603)
		 4m7_5x4mm_300mA (Inductance, 4.7 mH, TH, body size 5x4mm, 300 mA)
        
- Connectors should follow - CON_TYPE_PINCOUNT_GENDER_DIRECTION_FAMILY

	    Examples:
	     CON_TH_64_F_00_41612 (Connector, 64 pin, female, straight (0\ |deg|\ ), DIN41612 Family)
	     CON_TH_64_F_00_41612_LL (Connector, 64 pin, female, straight (0\ |deg|\ ), DIN41612 Family, Long leads)
	     CON_SMD_120_F_00_ERF8 (Connector, 120 pin, female, straight (0\ |deg|\ ), Samtec ERF8 Family)
	     CON_PF_120_M_00_ERNI (Connector, 120 pin, male, straight (0 deg), ERNI Family)
	     CON_TH_25_F_90_DSUB (Connector, 25 pins, female, 90 deg angled, DSUB)
		
- Semiconductor, Relais - TYPE *[MFG P/N]*

	    Examples:
         AD8512ARMZ
         AD8221ARM
         118-1-A-5/2D
         G3VM-61HR1

- Other - Depending on case
	    
	    Examples:
         LED_1MM8_GN (LED, through-hole 100mil distance between holes, green)
         Cyrstal - 65M_7x3mm

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
|MP|Mechanical_Parts Part (including screws and fasteners)|Mechanical_Parts|
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
| Courtyard | M3 | M11 | Used to define the placement space required for a component |
| Designator | M4 | M12 | Designator of component |
| 3D Body | M5 | M13 | 3D view of the component |
| Component Center | M6 | M14 | Center of the component |
| Component Outline | M7 | M15 | Outline of the component body |
| Dimensions | M8 | M16 | Additional information for board manufacturer |
| Gold Plating | M9 | M17 | Used to define component selective gold plating requirements |
| Design Guides | M10 | M18 | Additional information for design process |
