# Semi-ATE Altium Libraries

## GENERAL

### Naming of components

Passive components should be named following this structure - TYPE_VALUE_CASE/FOOTPRIN_*[SPECIFICATION]*

	Examples:
	
		RES_2k7_0805 (Resistor, 2.7k, SMD, footprint 0805)
		
		RES_1R2_0207_1% (Resistor, 1.2Ohm, TH, footprint 0207, 1%)
		
		CAP_2U2_500MIL_Tan_35V (Capacitor, 2.2\ |micro|\ F, TH 500mil distance between holes, Tantalum, 35V)
		
		IND_4m7_0603 (Inductance, 4.7 mH, SMD, footprint 0603)

Connectors should follow - CON_SPECIFIACTION_PINCOUNT_GENDER_DIRECTION 

	Examples
	
		CON_41612_64_F_00	(Connector DIN41612, 64 pin, female, straight (0\ |deg|\ ))
		
		CON_SMB_M_90		(Connector SMB, male, 90\ |deg|\  angled)
		
		CON_H&S_SMD_M_00	(Connector Huber&Suhner, SMD interface, male, straight (0\ |deg|\ )
		
		CON_SUB-D25_F_90	(Connector Sub-D, 25 pins, female, 90\ |deg|\  angled )
		
Semiconductor - TYPE

	Examples
	
		AD8512ARMZ
		
		AD8221ARM
		
		LED_1MM8_GN (LED, throughhole 100mil distance between holes, green)

Other - Depending on case


### Naming of footprints

IPC-7351 standard is used for SMT. For TH components we stay as close to the standard as possible.

### Designators of components

- R for resistors
- C for capacitors
- L for inductances
- U for Semiconductor discrete devices and integrated IC
- D for Diodes
- CON for Connectors 
- Y for crystal
- CLOCK for Oscillators
- S for electro mechanical and SSR relays
- SOC for sockets
- N for nuts
- SCR for screws
- ST for standoffs
	

## SCHEMATIC View

### Symbol definitions

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
- Supplier Infor *[As reference link]*

## FOOTPRINT View

### Mechanical Layers

| Name | TOP | BOT | Description |
|:---------|:---:|:---:|:---------|
| Board Outline | M1 | - | Data for mill out of the board |
| Board Cutout | M2 | - | Data for inner mill out of the board |
| Courtyard | M3 | M10 |  |
| Designator | M4 | M11 | Designator of component |
| 3D Body | M5 | M12 | 3D view of the component |
| Component Center | M6 | M13 | Center of the component |
| Dimensions | M7 | M14 | Additional information for board manufacturer |
| Hard Gold | M8 | M15 | Marking of area for hard gold |
| Design Guides | M9 | M16 | Additional information for design process |
