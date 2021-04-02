# Semi-ATE Altium Libraries

## GENERAL

### Naming of components

- Passive components should be named following this structure - TYPE_VALUE_CASE/FOOTPRINT_*[SPECIFICATION]*

        Examples:
            RESC_2k7_0805 (Resistor, 2.7 k, SMD, footprint 0805)
            RES_1R2_0207_1% (Resistor, 1.2 Ohm, TH, footprint 0207, 1%)
			CAPC_1n_0603_50V_1% (Capacitor, 1 n, SMD, footprint 0603, 50 V, 1 %)
            CAP_2U2_500MIL_Tan_35V (Capacitor, 2.2 uF, TH 500mil distance between holes, Tantalum, 35V)
            INDC_4m7_0603 (Inductance, 4.7 mH, SMD, footprint 0603)
			IND_4m7_5x4mm_300mA (Inductance, 4.7 mH, TH, body size 5x4mm, 300 mA)
        
- Connectors should follow - CON_TYPE_PINCOUNT_GENDER_DIRECTION_FAMILY

	    Examples:
		    CON_TH_64_F_00_41612	(Connector, 64 pin, female, straight (0\ |deg|\ ), DIN41612 Family)
			CON_TH_64_F_00_41612_LL	(Connector, 64 pin, female, straight (0\ |deg|\ ), DIN41612 Family, Long leads)
		    CON_SMD_120_F_00_ERF8 	(Connector, 120 pin, female, straight (0\ |deg|\ ), Samtec ERF8 Family)
		    CON_PF_120_M_00_ERNI	(Connector, 120 pin, male, straight (0 deg), ERNI Family)
		    CON_TH_25_F_90_DSUB		(Connector, 25 pins, female, 90 deg angled, DSUB)
		
- Semiconductor - TYPE

	    Examples:
		    AD8512ARMZ
		    AD8221ARM
		    LED_1MM8_GN (LED, throughhole 100mil distance between holes, green)

- Other - Depending on case
	    
		Examples to discuss:
		    Relay MECH - 118-1-A-5/2D or REL_118-1-A-5/2D
		    Relay SSR - G3VM-61HR1 or SSR_G3VM-61HR1
		    Cyrstal - XTAL_TH_65M_7x3mm
					- XTAL_SMD_25M_5x3.2mm

### Naming of footprints

IPC-7351 standard is used for SMT. For TH components we stay as close to the standard as possible.

### Designators of components

**not final**

| Designator | Component type/group |
|:---------:|:---|
|A|Assemblies|
|B|Sensors of all kinds [including IC's U will be B]|
|C|Capacitors|
|D|Diodes, Zener Diodes, Rectifiers, LEDs|
|F|Fuses|
|G|Supplies, DC/DC Converters|
|J|Jumpers|
|K|Relays|
|L|Inductances|
|Q|Transistors, Contactors, Semiconductor Contactors, Thyristors, Triac|
|R|Resistors, Potentiometers|
|S|Swtiches, Switch Buttons|
|T|Transformers|
|TP|Test Points|
|U|Analog, Digital and Mix ICs (A/D or D/A)|
|W|Cables, Wires|
|X|Connections [Connectors, Sockets], Plugs, Terminals|
|Y|Crystals **new proposal by DTAL**|
| |?? for Oscillators, Clocks|
|Z|Mechanical Fastenings|
|MP| Mechanical Part (including screws and fasteners)|
|SCR, ST, N/NT, WS| Screws, Standoffs, Nuts, Washers|
|H| Pin headers **new proposal by DTAL**|
|Z| Miscellaneous **new proposal by DTAL**|
	

## SCHEMATIC View

### Symbol definitions

**not final**
As a basic principle, a symbol should be drawn in logical way (signals goes from left to right, potential from top to bottom). But exceptions are allowed;
All pins have to be visible (e.g. no hidden power pins);
The symbol has to show the logical name and the physical pin number;

### Standard parameters

- Value *[for passive components is the value, for active is the MFG P/N]*
- Manufacturer
- Manufacturer Part Number
- Supplier
- Supplier Part Number
- Part/Component Type 
- Datasheet *[As reference link]*
- Supplier Info *[As reference link]*

## FOOTPRINT View

### Mechanical Layers

| Name | TOP | BOT | Description |
|:---------|:---:|:---:|:---------|
| Board Outline | M1 | - | Data for mill out of the board |
| Board Cutout | M2 | - | Data for inner mill out of the board |
| Courtyard | M3 | M10 | Used to define the placement space required for a component |
| Designator | M4 | M11 | Designator of component |
| 3D Body | M5 | M12 | 3D view of the component |
| Component Center | M6 | M13 | Center of the component |
| Dimensions | M7 | M14 | Additional information for board manufacturer |
| Gold Plating | M8 | M15 | Used to define component selective gold plating requirements |
| Design Guides | M9 | M16 | Additional information for design process |
