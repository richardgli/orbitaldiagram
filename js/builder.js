// Data of Elements
const Elements = {
    Hydrogen: {
        name: "Hydrogen",
        symbol: "H",
        atomicNumber: 1,
        fact: "Hydrogen is the lightest and most abundant element in the universe. It is a colourless, odourless gas that serves as the building block for all other elements. Found in water and organic compounds, it plays a crucial role in energy production and life processes.",
        electronConfig: ["1s1"],
        condensedConfig: ["1s1"]
    },

    Helium: {
        name: "Helium",
        symbol: "He",
        atomicNumber: 2,
        fact: "Helium is a colourless, odourless noble gas known for its low density and inert properties. It is used in balloons, as a coolant in cryogenics, and in various scientific applications due to its stability.",
        electronConfig: ["1s2"],
        condensedConfig: ["1s2"]
    },

    Lithium: {
        name: "Lithium",
        symbol: "Li",
        atomicNumber: 3,
        fact: "Lithium is a soft, silvery metal that is highly reactive. It is widely used in rechargeable batteries, mental health treatments, and certain alloys.",
        electronConfig: ["1s2", "2s1"],
        condensedConfig: ["[He]", "2s1"]
    },

    Beryllium: {
        name: "Beryllium",
        symbol: "Be",
        atomicNumber: 4,
        fact: "Beryllium is a lightweight, hard metal with excellent thermal conductivity. It is used in aerospace components, X-ray equipment, and nuclear reactors.",
        electronConfig: ["1s2", "2s2"],
        condensedConfig: ["[He]", "2s2"]
    },

    Boron: {
        name: "Boron",
        symbol: "B",
        atomicNumber: 5,
        fact: "Boron is a metalloid essential in the production of glass, ceramics and detergents. It also plays a role in strengthening materials and is vital for plant growth.",
        electronConfig: ["1s2", "2s2", "2p1"],
        condensedConfig: ["[He]", "2s2", "2p1"]
    },

    Carbon: {
        name: "Carbon",
        symbol: "C",
        atomicNumber: 6,
        fact: "Carbon is a versatile nonmetal found in all life forms. Its unique bonding ability allows for the formation of diverse compounds, from diamonds to organic molecules.",
        electronConfig: ["1s2", "2s2", "2p2"],
        condensedConfig: ["[He]", "2s2", "2p2"]
    },

    Nitrogen: {
        name: "Nitrogen",
        symbol: "N",
        atomicNumber: 7,
        fact: "Nitrogen is a colourless, odourless gas that makes up about 78% of Earth’s atmosphere. It is vital for life, forming proteins and nucleic acids, and is widely used in fertilizers and industrial processes.",
        electronConfig: ["1s2", "2s2", "2p3"],
        condensedConfig: ["[He]", "2s2", "2p3"]
    },

    Oxygen: {
        name: "Oxygen",
        symbol: "O",
        atomicNumber: 8,
        fact: "Oxygen is a reactive, life-sustaining gas making up 21% of Earth’s atmosphere. It is essential for respiration and combustion and plays a key role in water and organic molecules.",
        electronConfig: ["1s2", "2s2", "2p4"],
        condensedConfig: ["[He]", "2s2", "2p4"]
    },

    Fluorine: {
        name: "Fluorine",
        symbol: "F",
        atomicNumber: 9,
        fact: "Fluorine is a pale yellow, highly reactive gas. It is used in toothpaste, Teflon coatings, and various chemical applications due to its strong reactivity.",
        electronConfig: ["1s2", "2s2", "2p5"],
        condensedConfig: ["[He]", "2s2", "2p5"]
    },

    Neon: {
        name: "Neon",
        symbol: "Ne",
        atomicNumber: 10,
        fact: "Neon is a noble gas that emits a bright red/orange glow when electrified. It is commonly used in advertising signs, high-voltage indicators, and lasers.",
        electronConfig: ["1s2", "2s2", "2p6"],
        condensedConfig: ["[He]", "2s2", "2p6"]
    },

    Sodium: {
        name: "Sodium",
        symbol: "Na",
        atomicNumber: 11,
        fact: "Sodium is a soft, reactive metal that forms salts when combined with chlorine. It is essential for life, particularly in nerve function, and is widely used in industry and food preparation.",
        electronConfig: ["1s2", "2s2", "2p6", "3s1"],
        condensedConfig: ["[Ne]", "3s1"]
    },

    Magnesium: {
        name: "Magnesium",
        symbol: "Mg",
        atomicNumber: 12,
        fact: "Magnesium is a lightweight metal critical for biological functions, including photosynthesis. It is used in uction, fireworks, and medicine.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2"],
        condensedConfig: ["[Ne]", "3s2"]
    },

    Aluminum: {
        name: "Aluminum",
        symbol: "Al",
        atomicNumber: 13,
        fact: "Aluminum is a lightweight, corrosion-resistant metal. It is extensively used in packaging, uction, and transportation.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p1"],
        condensedConfig: ["[Ne]", "3s2", "3p1"]
    },

    Silicon: {
        name: "Silicon",
        symbol: "Si",
        atomicNumber: 14,
        fact: "Silicon is a metalloid critical to electronics and computing. It is also a primary component of glass, concrete, and various minerals.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p2"],
        condensedConfig: ["[Ne]", "3s2", "3p2"]
    },

    Phosphorus: {
        name: "Phosphorus",
        symbol: "P",
        atomicNumber: 15,
        fact: "Phosphorus is a nonmetal essential for life, playing a key role in DNA, ATP, and bones. It is used in fertilizers, detergents, and fireworks.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p3"],
        condensedConfig: ["[Ne]", "3s2", "3p3"]
    },

    Sulfur: {
        name: "Sulfur",
        symbol: "S",
        atomicNumber: 16,
        fact: "Sulfur is a yellow nonmetal with a distinct odor. It is used in fertilizers, gunpowder, and rubber production and is essential for amino acids.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p4"],
        condensedConfig: ["[Ne]", "3s2", "3p4"]  
    },

    Chlorine: {
        name: "Chlorine",
        symbol: "Cl",
        atomicNumber: 17,
        fact: "Chlorine is a green/yellow gas used in welding, lighting, and preserving historical documents due to its non-reactive nature.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p5"],
        condensedConfig: ["[Ne]", "3s2", "3p5"]
    },

    Argon: {
        name: "Argon",
        symbol: "Ar",
        atomicNumber: 18,
        fact: "Argon is an inert noble gas used in welding, lighting, and preserving historical documents due to its non-reactive nature.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6"],
        condensedConfig: ["[Ne]", "3s2", "3p6"]
    },

    Potassium: {
        name: "Potassium",
        symbol: "K",
        atomicNumber: 19,
        fact: "Potassium is a reactive metal essential for cellular functions and plant growth. It is widely used in fertilizers and dietary supplements.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s1"],
        condensedConfig: ["[Ar]", "4s1"]
    },

    Calcium: {
        name: "Calcium",
        symbol: "Ca",
        atomicNumber: 20,
        fact: "Calcium is a soft metal vital for bone health and cellular processes. It is found in limestone, cement, and various dietary sources.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2"],
        condensedConfig: ["[Ar]", "4s2"]
    },

    Scandium: {
        name: "Scandium",
        symbol: "Sc",
        atomicNumber: 21,
        fact: "Scandium is a rare, lightweight metal used in aerospace components and high-intensity lighting.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d1"],
        condensedConfig: ["[Ar]", "4s2", "3d1"]
    },

    Titanium: {
        name: "Titanium",
        symbol: "Ti",
        atomicNumber: 22,
        fact: "Titanium is a strong, lightweight metal resistant to corrosion. It is used in aerospace, medical implants, and sporting goods.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d2"],
        condensedConfig: ["[Ar]", "4s2", "3d2"]
    },

    Vanadium: {
        name: "Vanadium",
        symbol: "V",
        atomicNumber: 23,
        fact: "Vanadium is a metal used to strengthen steel alloys. It also plays a role in certain chemical catalysts.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d3"],
        condensedConfig: ["[Ar]", "4s2", "3d3"]
    },

    Chromium: {
        name: "Chromium",
        symbol: "Cr",
        atomicNumber: 24,
        fact: "Chromium is a shiny, corrosion-resistant metal used in stainless steel and decorative plating.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s1", "3d5"],
        condensedConfig: ["[Ar]", "4s1", "3d5"]
    },

    Manganese: {
        name: "Manganese",
        symbol: "Mn",
        atomicNumber: 25,
        fact: "Manganese is a hard metal essential in steel production and battery technology. It also plays a role in enzyme production.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d5"],
        condensedConfig: ["[Ar]", "4s2", "3d5"]
    },

    Iron: {
        name: "Iron",
        symbol: "Fe",
        atomicNumber: 26,
        fact: "Iron is a strong, abundant metal crucial for uction, tools, and biological processes like oxygen transport.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d6"],
        condensedConfig: ["[Ar]", "4s2", "3d6"]
    },

    Cobalt: {
        name: "Cobalt",
        symbol: "Co",
        atomicNumber: 27,
        fact: "Cobalt is a magnetic metal used in batteries, alloys, and pigments. It is also important for vitamin B12.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d7"],
        condensedConfig: ["[Ar]", "4s2", "3d7"]
    },

    Nickel: {
        name: "Nickel",
        symbol: "Ni",
        atomicNumber: 28,
        fact: "Nickel is a corrosion-resistant metal used in coins, batteries, and stainless steel.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d8"],
        condensedConfig: ["[Ar]", "4s2", "3d8"]
    },

    Copper: {
        name: "Copper",
        symbol: "Cu",
        atomicNumber: 29,
        fact: "Copper is a reddish metal known for its excellent electrical and thermal conductivity. It is used in wiring, plumbing, and coins.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s1", "3d10"],
        condensedConfig: ["[Ar]", "4s1", "3d10"]
    },

    Zinc: {
        name: "Zinc",
        symbol: "Zn",
        atomicNumber: 30,
        fact: "Zinc is a corrosion-resistant metal used in galvanization, batteries, and health supplements.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10"],
        condensedConfig: ["[Ar]", "4s2", "3d10"]
    },

    Gallium: {
        name: "Gallium",
        symbol: "Ga",
        atomicNumber: 31,
        fact: "Gallium is a soft metal with a low melting point. It is used in semiconductors, LEDs, and solar panels.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p1"],
        condensedConfig: ["[Ar]", "4s2", "3d10", "4p1"]
    },

    Germanium: {
        name: "Germanium",
        symbol: "Ge",
        atomicNumber: 32,
        fact: "Germanium is a metalloid used in semiconductors, fiber optics, and infrared optics.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p2"],
        condensedConfig: ["[Ar]", "4s2", "3d10", "4p2"]
    },

    Arsenic: {
        name: "Arsenic",
        symbol: "As",
        atomicNumber: 33,
        fact: "Arsenic is a metalloid with toxic properties. It is used in semiconductors, pesticides, and wood preservatives.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p3"],
        condensedConfig: ["[Ar]", "4s2", "3d10", "4p3"]
    },

    Selenium: {
        name: "Selenium",
        symbol: "Se",
        atomicNumber: 34,
        fact: "Selenium is a nonmetal used in electronics, glassmaking, and as a dietary supplement.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p4"],
        condensedConfig: ["[Ar]", "4s2", "3d10", "4p4"]
    },

    Bromine: {
        name: "Bromine",
        symbol: "Br",
        atomicNumber: 35,
        fact: "Bromine is a reddish-brown liquid used in flame retardants, photography, and water treatment.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p5"],
        condensedConfig: ["[Ar]", "4s2", "3d10", "4p5"]
    },

    Krypton: {
        name: "Krypton",
        symbol: "Kr",
        atomicNumber: 36,
        fact: "Krypton is a noble gas used in lighting and photography due to its bright white emission when electrified.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6"],
        condensedConfig: ["[Ar]", "4s2", "3d10", "4p6"]
    },

    Rubidium: {
        name: "Rubidium",
        symbol: "Rb",
        atomicNumber: 37,
        fact: "Rubidium is a highly reactive metal used in atomic clocks and specialized glass production.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s1"],
        condensedConfig: ["[Kr]", "5s1"]
    },

    Strontium: {
        name: "Strontium",
        symbol: "Sr",
        atomicNumber: 38,
        fact: "Strontium is a soft metal used in fireworks, flares, and medical imaging.", 
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2"],
        condensedConfig: ["[Kr]", "5s2"]
    },

    Yttrium: {
        name: "Yttrium",
        symbol: "Y",
        atomicNumber: 39,
        fact: "Yttrium is a metal used in superconductors, lasers, and phosphors for LEDs.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d1"],
        condensedConfig: ["[Kr]", "5s2", "4d1"]
    },

    Zirconium: {
        name: "Zirconium",
        symbol: "Zr",
        atomicNumber: 40,
        fact: "Zirconium is a corrosion-resistant metal used in nuclear reactors, ceramics, and surgical instruments.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d2"],
        condensedConfig: ["[Kr]", "5s2", "4d2"]
    },

    Niobium: {
        name: "Niobium",
        symbol: "Nb",
        atomicNumber: 41,
        fact: "Niobium is a metal used in steel alloys, superconductors, and medical implants.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d3"],
        condensedConfig: ["[Kr]", "5s2", "4d3"]
    },

    Molybdenum: {
        name: "Molybdenum",
        symbol: "Mo",
        atomicNumber: 42,
        fact: "Molybdenum is a hard metal used in steel production and as a catalyst in chemical reactions.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s1", "4d5"],
        condensedConfig: ["[Kr]", "5s1", "4d5"]
    },

    Technetium: {
        name: "Technetium",
        symbol: "Tc",
        atomicNumber: 43,
        fact: "Technetium is a radioactive metal used in medical imaging and research.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d5"],
        condensedConfig: ["[Kr]", "5s2", "4d5"]
    },

    Ruthenium: {
        name: "Ruthenium",
        symbol: "Ru",
        atomicNumber: 44,
        fact: "Ruthenium is a rare metal used in electronics, jewelry, and as catalysts.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d6"],
        condensedConfig: ["[Kr]", "5s2", "4d6"]
    },

    Rhodium: {
        name: "Rhodium",
        symbol: "Rh",
        atomicNumber: 45,
        fact: "Rhodium is a reflective metal used in catalytic converters, jewelry, and mirrors.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d7"],
        condensedConfig: ["[Kr]", "5s2", "4d7"]
    },

    Palladium: {
        name: "Palladium",
        symbol: "Pd",
        atomicNumber: 46,
        fact: "Palladium is a precious metal used in electronics, catalytic converters, and jewelry.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d8"],
        condensedConfig: ["[Kr]", "5s2", "4d8"]
    },

    Silver: {
        name: "Silver",
        symbol: "Ag",
        atomicNumber: 47,
        fact: "Silver is a shiny metal known for its conductivity and antibacterial properties. It is used in jewelry, electronics, and photography.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s1", "4d10"],
        condensedConfig: ["[Kr]", "5s1", "4d10"]
    },

    Cadmium: {
        name: "Cadmium",
        symbol: "Cd",
        atomicNumber: 48,
        fact: "Cadmium is a toxic metal used in batteries, pigments, and coatings.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10"],
        condensedConfig: ["[Kr]", "5s2", "4d10"]
    },

    Indium: {
        name: "Indium",
        symbol: "In",
        atomicNumber: 49,
        fact: "Indium is a soft metal used in touchscreens, semiconductors, and coatings.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p1"],
        condensedConfig: ["[Kr]", "5s2", "4d10", "5p1"]
    },

    Tin: {
        name: "Tin",
        symbol: "Sn",
        atomicNumber: 50,
        fact: "Tin is a malleable metal used in solder, alloys, and coatings.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p2"],
        condensedConfig: ["[Kr]", "5s2", "4d10", "5p2"]
    },

    Antimony: {
        name: "Antimony",
        symbol: "Sb",
        atomicNumber: 51,
        fact: "Antimony is a metalloid used in flame retardants, alloys, and semiconductors.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p3"],
        condensedConfig: ["[Kr]", "5s2", "4d10", "5p3"]
    },

    Tellurium: {
        name: "Tellurium",
        symbol: "Te",
        atomicNumber: 52,
        fact: "Tellurium is a metalloid used in alloys, thermoelectrics, and solar panels.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p4"],
        condensedConfig: ["[Kr]", "5s2", "4d10", "5p4"]
    },

    Iodine: {
        name: "Iodine",
        symbol: "I",
        atomicNumber: 53,
        fact: "Iodine is a nonmetal essential for thyroid function. It is used in disinfectants and medical imaging.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p5"],
        condensedConfig: ["[Kr]", "5s2", "4d10", "5p5"]
    },

    Xenon: {
        name: "Xenon",
        symbol: "Xe",
        atomicNumber: 54,
        fact: "Xenon is a noble gas used in lighting, medical imaging, and propulsion systems.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6"],
        condensedConfig: ["[Kr]", "5s2", "4d10", "5p6"]
    },

    Cesium: {
        name: "Cesium",
        symbol: "Cs",
        atomicNumber: 55,
        fact: "Cesium is a highly reactive metal used in atomic clocks, electronics, and oil exploration.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s1"],
        condensedConfig: ["[Xe]", "6s1"]

    },

    Barium: {
        name: "Barium",
        symbol: "Ba",
        atomicNumber: 56,
        fact: "Barium is a soft metal used in medical imaging, fireworks, and drilling fluids.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2"],
        condensedConfig: ["[Xe]", "6s2"]
    },

    Lanthanum: {
        name: "Lanthanum",
        symbol: "La",
        atomicNumber: 57,
        fact: "Lanthanum is a soft metal used in optics, catalysts, and rechargeable batteries.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "5d1"],
        condensedConfig: ["[Xe]", "6s2", "5d1"]
    },

    Cerium: {
        name: "Cerium",
        symbol: "Ce",
        atomicNumber: 58,
        fact: "Cerium is a rare earth metal used in glass polishing and alloys.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "5d1", "4f1"],
        condensedConfig: ["[Xe]", "6s2", "5d1", "4f1"]
    },

    Praseodymium: {
        name: "Praseodymium",
        symbol: "Pr",
        atomicNumber: 59,
        fact: "Praseodymium is a metal used in magnets, alloys and glass colouring.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "5d1", "4f2"],
        condensedConfig: ["[Xe]", "6s2", "5d1", "4f2"]
    },

    Neodymium: {
        name: "Neodymium",
        symbol: "Nd",
        atomicNumber: 60,
        fact: "Neodymium is a magnetic metal used in powerful magnets, lasers, and electronics.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "5d1", "4f3"],
        condensedConfig: ["[Xe]", "6s2", "5d1", "4f3"]
    },

    Promethium: {
        name: "Promethium",
        symbol: "Pm",
        atomicNumber: 61,
        fact: "Promethium is a radioactive metal used in luminescent paint and research.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "5d1", "4f4"],
        condensedConfig: ["[Xe]", "6s2", "5d", "4f4"]
    },

    Samarium: {
        name: "Samarium",
        symbol: "Sm",
        atomicNumber: 62,
        fact: "Samarium is a metal used in magnets, nuclear reactors, and lasers.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "5d1", "4f5"],
        condensedConfig: ["[Xe]", "6s2", "5d1", "4f5"]

    },

    Europium: {
        name: "Europium",
        symbol: "Eu",
        atomicNumber: 63,
        fact: "Europium is a rare earth metal that enhances the brightness of phosphors in TVs, LEDs, and fluorescent lamps. It is also used in anti-counterfeiting measures for currency.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "5d1", "4f6"],
        condensedConfig: ["[Xe]", "6s2", "5d1", "4f6"]
    },

    Gadolinium: {
        name: "Gadolinium",
        symbol: "Gd",
        atomicNumber: 64,
        fact: "Gadolinium is a metal used in MRI contrast agents, magnets, and alloys. Its magnetic and thermal properties make it valuable in medical and industrial fields.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "5d1", "4f7"],
        condensedConfig: ["[Xe]", "6s2", "5d1", "4f7"]
    },

    Terbium: {
        name: "Terbium",
        symbol: "Tb",
        atomicNumber: 65,
        fact: "Terbium is a metal used in phosphors for lighting and displays, magnets, and fuel cells. It also enhances the efficiency of green technology applications.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "5d1", "4f8"],
        condensedConfig: ["[Xe]", "6s2", "5d1", "4f8"]
    },

    Dysprosium: {
        name: "Dysprosium",
        symbol: "Dy",
        atomicNumber: 66,
        fact: "Dysprosium is a metal used in powerful magnets, lasers, and nuclear reactors. Its role in advanced energy solutions underscores its growing demand.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "5d1", "4f9"],
        condensedConfig: ["[Xe]", "6s2", "5d1", "4f9"]
    },

    Holmium: {
        name: "Holmium",
        symbol: "Ho",
        atomicNumber: 67,
        fact: "Holmium is a metal with strong magnetic properties used in magnets and medical lasers. It also has niche applications in nuclear and spectroscopic research.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "5d1", "4f10"],
        condensedConfig: ["[Xe]", "6s2", "5d1", "4f10"]
    },

    Erbium: {
        name: "Erbium",
        symbol: "Er",
        atomicNumber: 68,
        fact: "Erbium is a metal used in fiber optics, lasers, and alloys. Its ability to amplify light makes it critical for telecommunications and high-tech applications.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "5d1", "4f11"],
        condensedConfig: ["[Xe]", "6s2", "5d1", "4f11"]
    },

    Thulium: {
        name: "Thulium",
        symbol: "Tm",
        atomicNumber: 69,
        fact: "Thulium is a rare metal used in portable X-ray machines, lasers, and research. Its unique properties make it valuable in specialized fields.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "5d1", "4f12"],
        condensedConfig: ["[Xe]", "6s2", "5d1", "4f12"]
    },

    Ytterbium: {
        name: "Ytterbium",
        symbol: "Yb",
        atomicNumber: 70,
        fact: "Ytterbium is a metal used in lasers, electronics, and alloys. It is also employed in quantum computing and advanced scientific research.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "5d1", "4f13"],
        condensedConfig: ["[Xe]", "6s2", "5d1", "4f13"]
    },

    Lutetium: {
        name: "Lutetium",
        symbol: "Lu",
        atomicNumber: 71,
        fact: "Lutetium is a dense metal used in PET scanners, catalysts, and high-tech applications. Its rarity makes it one of the most expensive elements.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "5d1", "4f14"],
        condensedConfig: ["[Xe]", "6s2", "5d1", "4f14"]
    },

    Hafnium: {
        name: "Hafnium",
        symbol: "Hf",
        atomicNumber: 72,
        fact: "Hafnium is a corrosion-resistant metal used in nuclear reactors, jet engines, and electronics. It has the ability to withstand extreme environments.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "4f14", "5d2"],
        condensedConfig: ["[Xe]", "6s2", "4f14", "5d2"]
    },

    Tantalum: {
        name: "Tantalum",
        symbol: "Ta",
        atomicNumber: 73,
        fact: "Tantalum is a metal used in electronics, surgical implants, and high-performance alloys. It is prized for its durability and resistance to corrosion.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "4f14", "5d3"],
        condensedConfig: ["[Xe]", "6s2", "4f14", "5d3"]
    },

    Tungsten: {
        name: "Tungsten",
        symbol: "W",
        atomicNumber: 74,
        fact: "Tungsten is a dense, heat-resistant metal used in filaments, cutting tools, and electronics. ",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s1", "4f14", "5d5"],
        condensedConfig: ["[Xe]", "6s1", "4f14", "5d5"]
    },

    Rhenium: {
        name: "Rhenium",
        symbol: "Re",
        atomicNumber: 75,
        fact: "Rhenium is a rare metal used in jet engines and thermocouples. It has exceptional heat resistance which makes it a staple for aerospace and chemical industries.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "4f14", "5d5"],
        condensedConfig: ["[Xe]", "6s2", "4f14", "5d5"]
    },

    Osmium: {
        name: "Osmium",
        symbol: "Os",
        atomicNumber: 76,
        fact: "Osmium is a dense, hard metal used in alloys, electrical contacts, and fountain pens.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "4f14", "5d6"],
        condensedConfig: ["[Xe]", "6s2", "4f14", "5d6"]
    },

    Iridium: {
        name: "Iridium",
        symbol: "Ir",
        atomicNumber: 77,
        fact: "Iridium is an extremely dense and corrosion-resistant metal, ranking among the rarest elements in Earth’s crust. Its durability makes it a perfect metal for spark plugs, crucibles, and devices exposed to extreme environments. Iridium is also used for cancer treatment.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "4f14", "5d7"],
        condensedConfig: ["[Xe]", "6s2", "4f14", "5d7"]
    },

    Platinum: {
        name: "Platinum",
        symbol: "Pt",
        atomicNumber: 78,
        fact: "Platinum is a dense, precious metal known for its resistance to corrosion and oxidation. It is widely used in catalytic converters to reduce vehicle emissions. It also plays a vital role in fuel cells and medical devices.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "4f14", "5d8"],
        condensedConfig: ["[Xe]", "6s2", "4f14", "5d8"]
    },

    Gold: {
        name: "Gold",
        symbol: "Au",
        atomicNumber: 79,
        fact: "Gold is a highly malleable and ductile metal with a characteristic bright yellow luster. Gold is also essential in electronics for its conductivity and resistance to corrosion, as well as in dentistry for medical applications.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s1", "4f14", "5d10"],
        condensedConfig: ["[Xe]", "6s1", "4f14", "5d10"]
    },

    Mercury: {
        name: "Mercury",
        symbol: "Hg",
        atomicNumber: 80,
        fact: "Mercury is a heavy metal - shiny, silvery, and is the only metal that is liquid at room temperature. It is toxic to humans, and is used in agriculture as a fungicide. It can also be used for fluorescent lighting.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "4f14", "5d10"],
        condensedConfig: ["[Xe]", "6s2", "4f14", "5d10"]
    },

    Thallium: {
        name: "Thallium",
        symbol: "Tl",
        atomicNumber: 81,
        fact: "Thallium is a silvery-white metal that tarnishes easily - turns gray when exposed to air. Used in the manufacture of electronics, optical lenses, and low temperature thermometers.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "4f14", "5d10", "6p1"],
        condensedConfig: ["[Xe]", "6s2", "4f14", "5d10", "6p1"]
    },

    Lead: {
        name: "Lead",
        symbol: "Pb",
        atomicNumber: 82,
        fact: "Lead is a heavy metal that is toxic to humans. It was previously used in water pipes and plates (with negative consequences), but now is used in paint, ceramics, and car batteries.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "4f14", "5d10", "6p2"],
        condensedConfig: ["[Xe]", "6s2", "4f14", "5d10", "6p2"]
    },

    Bismuth: {
        name: "Bismuth",
        symbol: "Bi",
        atomicNumber: 83,
        fact: "Bismuth is a post-transition metal. It is brittle, silvery-white, and has a metallic luster. It is the heaviest of the heavy metals and the only non-toxic one. Bismuth subsalicylate is an over-the-counter pharmaceutical used for treating diarrhea and digestive issues.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "4f14", "5d10", "6p3"],
        condensedConfig: ["[Xe]", "6s2", "4f14", "5d10", "6p3"]
    },

    Polonium: {
        name: "Polonium",
        symbol: "Po",
        atomicNumber: 84,
        fact: "Polonium is a radioactive metal used to make static eliminators and neutrons in nuclear weapons. All commercially produced polonium is made in Russia.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "4f14", "5d10", "6p4"],
        condensedConfig: ["[Xe]", "6s2", "4f14", "5d10", "6p4"]
    },

    Astatine: {
        name: "Astatine",
        symbol: "At",
        atomicNumber: 85,
        fact: "Astatine is a radioactive element - the rarest naturally occurring element in the Earth’s crust! It has no stable isotopes, and isn’t used outside of research. The name comes from the Greek word astatos, meaning “unstable”.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "4f14", "5d10", "6p5"],
        condensedConfig: ["[Xe]", "6s2", "4f14", "5d10", "6p5"]
    },

    Radon: {
        name: "Radon",
        symbol: "Rn",
        atomicNumber: 86,
        fact: "Radon is a radioactive gas with no smell, colour, nor taste. It is produced from the natural radioactive decay of uranium. Commonly used to track air masses and predict earthquakes.",
        electronConfig: ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d10", "4p6", "5s2", "4d10", "5p6", "6s2", "4f14", "5d10", "6p6"],
        condensedConfig: ["[Xe]", "6s2", "4f14", "5d10", "6p6"]
    }
}

const orbitalStates = {
    "6p": [{ up: false, down: false }, { up: false, down: false }, { up: false, down: false }],
    "5d": [{ up: false, down: false }, { up: false, down: false }, { up: false, down: false }, { up: false, down: false }, { up: false, down: false }],
    "4f": [{ up: false, down: false }, { up: false, down: false }, { up: false, down: false }, { up: false, down: false }, { up: false, down: false }, { up: false, down: false }, { up: false, down: false }],
    "6s": [{ up: false, down: false }],
    "5p": [{ up: false, down: false }, { up: false, down: false }, { up: false, down: false }],
    "4d": [{ up: false, down: false }, { up: false, down: false }, { up: false, down: false }, { up: false, down: false }, { up: false, down: false }],
    "5s": [{ up: false, down: false }],
    "4p": [{ up: false, down: false }, { up: false, down: false }, { up: false, down: false }],
    "3d": [{ up: false, down: false }, { up: false, down: false }, { up: false, down: false }, { up: false, down: false }, { up: false, down: false }],
    "4s": [{ up: false, down: false }],
    "3p": [{ up: false, down: false }, { up: false, down: false }, { up: false, down: false }],
    "3s": [{ up: false, down: false }],
    "2p": [{ up: false, down: false }, { up: false, down: false }, { up: false, down: false }],
    "2s": [{ up: false, down: false }],
    "1s": [{ up: false, down: false }],
}

// Clicking on the orbitals to display the arrows
document.querySelectorAll('.orbital').forEach(orbital =>{
    orbital.addEventListener('click', (event) =>{
        const orbital = event.target.closest('.orbital');
        const subshell = orbital.getAttribute('data-subshell');
        const orbitalID = orbital.getAttribute('data-orbital');
        const orbitalIndex = parseInt(orbitalID.slice(-1), 10);
        const upSpin = orbital.querySelector(`.up-arrow[data-arrow="up-${orbitalID}"]`);
        const downSpin = orbital.querySelector(`.down-arrow[data-arrow="down-${orbitalID}"]`);
    
        const state = orbitalStates[subshell][orbitalIndex - 1];

        if (!state.up && !state.down) {
            upSpin.classList.add('show-electron');
            state.up = true;
        } else if (state.up && !state.down) {
            downSpin.classList.add('show-electron');
            state.down = true;
        } else if (state.up && state.down){
            upSpin.classList.remove('show-electron');
            downSpin.classList.remove('show-electron');
            state.up = false;   
            state.down = false;   
        }
    }); 
}); 

// Filling/clearing row on the orbital diagram
document.querySelectorAll('.level-name').forEach(button =>{
    button.addEventListener('click', (event) =>{
        const subshell = button.textContent;
        const orbitals = document.querySelectorAll(`.orbital[data-subshell="${subshell}"]`);

        let allFilled = true;
        orbitals.forEach(orbital =>{
            const orbitalID = orbital.getAttribute('data-orbital');
            const orbitalIndex = parseInt(orbitalID.slice(-1), 10);
            const upSpin = orbital.querySelector(`.up-arrow[data-arrow="up-${orbitalID}"]`);
            const downSpin = orbital.querySelector(`.up-arrow[data-arrow="down-${orbitalID}"]`);
            const state = orbitalStates[subshell][orbitalIndex - 1];
            
            if (!(state.up && state.down)) {
                allFilled = false;
            }
        });

        if (allFilled) {
            orbitals.forEach(orbital =>{
                const orbitalID = orbital.getAttribute('data-orbital');
                const orbitalIndex = parseInt(orbitalID.slice(-1), 10);
                const upSpin = orbital.querySelector(`.up-arrow[data-arrow="up-${orbitalID}"]`);
                const downSpin = orbital.querySelector(`.down-arrow[data-arrow="down-${orbitalID}"]`);
                const state = orbitalStates[subshell][orbitalIndex - 1];
    
                upSpin.classList.remove('show-electron');
                downSpin.classList.remove('show-electron');
                state.up = false;
                state.down = false;
            });

        } else {
            orbitals.forEach(orbital =>{
                const orbitalID = orbital.getAttribute('data-orbital');
                const orbitalIndex = parseInt(orbitalID.slice(-1), 10);
                const upSpin = orbital.querySelector(`.up-arrow[data-arrow="up-${orbitalID}"]`);
                const downSpin = orbital.querySelector(`.down-arrow[data-arrow="down-${orbitalID}"]`);
                const state = orbitalStates[subshell][orbitalIndex - 1];
                if (!state.up) {
                    upSpin.classList.add('show-electron');
                    state.up = true;
                }
    
                if (!state.down) {
                    downSpin.classList.add('show-electron');
                    state.down = true;
                }
            });
        };
    });
});

// Clear the orbital diagram
const clearOrbitalDiagram = () => {
    for (const [subshell, orbitals] of Object.entries(orbitalStates)) {
        orbitals.forEach((state, index) =>{
            state.up = false;
            state.down = false;

            const orbitalID = `${subshell}${index + 1}`;
            const orbital = document.querySelector(`.orbital[data-orbital="${orbitalID}"]`);
            const upSpin = orbital.querySelector(`.up-arrow[data-arrow="up-${orbitalID}"]`);
            const downSpin = orbital.querySelector(`.down-arrow[data-arrow="down-${orbitalID}"]`);

            upSpin.classList.remove('show-electron');
            downSpin.classList.remove('show-electron');
        });
    }
};

// Clear button
document.querySelectorAll('.clear').forEach(clear =>{
    clear.addEventListener('click', (event) =>{
        clearOrbitalDiagram();
    });
});

// Display data of the element
const displayData = (data) =>{
    if (data) {
        document.getElementById('element-name').textContent = data.name;
        document.getElementById('element-symbol').textContent = data.symbol;
        document.getElementById('element-atomic-number').textContent = `Atomic Number: ${data.atomicNumber}`;
        electronConfig = document.getElementById('element-config');
        document.getElementById('element-fact').textContent = data.fact;
        if (electronConfig.classList.contains('disabled')) {
            electronConfig.textContent = `${data.electronConfig.join(' ')}`;
        } else {
            electronConfig.textContent = `${data.condensedConfig.join(' ')}`;
        }
    }
}

//Switch to condensed electron configuration
document.querySelectorAll('.condensed-container').forEach(condensed =>{
    condensed.addEventListener('click', (event) =>{
        const elementName = document.getElementById('element-name').textContent;
        const data = Elements[elementName];
        const electronConfig = document.querySelector(`#element-config`);
        const container = document.querySelector(`.condensed-container`);
        if (document.getElementById('element-config').textContent !== 'Electron Configuration') {
            if (data) {
                if (electronConfig.classList.contains('disabled')) {
                    document.getElementById('element-config').textContent = `${data.condensedConfig.join(' ')}`;
                    electronConfig.classList.remove('disabled');
                    electronConfig.classList.add('enabled');
                    container.classList.add('enabled');
                } else {
                    document.getElementById('element-config').textContent = `${data.electronConfig.join(' ')}`;
                    electronConfig.classList.add('disabled');
                    electronConfig.classList.remove('enabled');   
                    container.classList.remove('enabled');
                }
            }
        }
    });
});

// Store the arrow states and display the orbital diagram
const fillOrbitals = (electronConfig) =>{
    clearOrbitalDiagram();

    electronConfig.forEach(config =>{
        const match = config.match(/(\d)([spdf])(\d+)/);

        if (match) {
            const [_, energyLevel, type, count] = match;
            const orbitalKey = `${energyLevel}${type}`;
            const maxElectrons = parseInt(count, 10);

            var electronsAdded = 0;

            if (Array.isArray(orbitalStates[orbitalKey])) {
                orbitalStates[orbitalKey].forEach((orbital) =>{
                    if (electronsAdded < maxElectrons && !orbital.up) {
                        orbital.up = true; 
                        electronsAdded++; 
                    }
                });

                orbitalStates[orbitalKey].forEach((orbital) =>{
                    if (electronsAdded < maxElectrons && !orbital.down) {
                        orbital.down = true; 
                        electronsAdded++; 
                    }
                });

            } else {
                if (maxElectrons > 0) orbitalStates[orbitalKey][0].up = true;
                if (maxElectrons > 1) orbitalStates[orbitalKey][0].down = true;
            }
        }
    });

    Object.keys(orbitalStates).forEach(key =>{
        const orbitals = document.querySelectorAll(`.orbital[data-subshell="${key}"]`);
        if (Array.isArray(orbitalStates[key])) {
            orbitalStates[key].forEach((state, index) =>{
                const orbital = orbitals[index];
                if (state.up) orbital.querySelector('.up-arrow').classList.add('show-electron');
                if (state.down) orbital.querySelector('.down-arrow').classList.add('show-electron');
            })
        } else {
            const orbital = orbitals[0];
            if (orbitalStates[key][0].up) orbital.querySelector('.up-arrow').classList.add('show-electron');
            if (orbitalStates[key][0].down) orbital.querySelector('.down-arrow').classList.add('show-electron');
        }
    });
};

// Click on element
document.querySelectorAll('.element').forEach(element =>{
    element.addEventListener('click', (event) =>{
        const elementName = element.getAttribute('data-element');
        const data = Elements[elementName];

        if (data) {
            const electronConfig = data.electronConfig;
            displayData(data);
            fillOrbitals(electronConfig);
        }
    });
});

// Determines element from the orbital diagram
const orbitalDiagramToElement = () =>{
    let electronCount = 0;
    
    Object.keys(orbitalStates).forEach(orbitalKey =>{
        orbitalStates[orbitalKey].forEach(orbital =>{
            if (orbital.up) electronCount++;
            if (orbital.down) electronCount++;
        });
    });

    for (const elementKey in Elements) {
        if (Elements[elementKey].atomicNumber === electronCount) {
            return elementKey;
        }
    }
    return null;
};

// Checking for any violations of the Hund's Rule
const checkHundsRule = () =>{
    const subshellOrbitals = {
        'p': 3, // 3 orbitals in p subshell
        'd': 5, // 5 orbitals in d subshell
        'f': 7  // 7 orbitals in f subshell
    };

    for (const [subshell, electrons] of Object.entries(orbitalStates)) {
        const subshellType = subshell.match(/[spdf]/)[0];
        const orbitals = electrons;

        let pairedCount = 0;
        let unpairedCount = 0;

        orbitals.forEach(orbital =>{
            if (orbital.up && orbital.down) {
                pairedCount++;
            } else if (orbital.up) {
                unpairedCount++;
            }
        })
        const totalCount = pairedCount * 2 + unpairedCount;

        if (subshellType !== 's' && (totalCount <= (subshellOrbitals[subshellType]) && pairedCount > 0) || (totalCount > (subshellOrbitals[subshellType]) && pairedCount > (totalCount - (subshellOrbitals[subshellType])))) {
            const violation = `Hund's Rule violated in ${subshell}: Electrons paired before all orbitals are singly occupied.`;
            return violation;
        }
    }
    return null;
}

const checkAufbauPrinciple = () => {
    const orbitalOrder = Elements["Radon"].electronConfig.map(config => {
        const match = config.match(/(\d[s,p,d,f])/); 
        return match[0];
    });
    
    const filledOrbitals = orbitalOrder.map(subshell => {
        const orbitals = orbitalStates[subshell];
        const electrons = orbitals.reduce((sum, orbital) => sum + (orbital.up ? 1 : 0) + (orbital.down ? 1 : 0), 0);
        return { subshell, electrons };
    });

    const completelyFilledOrbitals = filledOrbitals.filter(orbital => {
        const maxElectrons = subshellCapacity(orbital.subshell);
        return orbital.electrons === maxElectrons;
    });

    const partiallyFilledOrbitals = filledOrbitals.filter(orbital => orbital.electrons > 0 && orbital.electrons < subshellCapacity(orbital.subshell));

    const filledCount = completelyFilledOrbitals.length + partiallyFilledOrbitals.length;

    // Check if there are gaps in filling
    let highestFilledIndex = -1;
    for (let i = filledOrbitals.length - 1; i >= 0; i--) {
        if (filledOrbitals[i].electrons > 0) {
            highestFilledIndex = i;
            break;
        }
    }
    for (let i = 0; i < highestFilledIndex; i++) {
        if (filledOrbitals[i].electrons === 0) {
            return `Aufbau Principle violated: Subshell ${filledOrbitals[i].subshell} is empty while higher energy subshells are filled.`;
        }
    }

    // Check based on the number of filled subshells
    if (partiallyFilledOrbitals.length > 2) {
        return `Aufbau Principle violated: Too many higher orbitals are filled out of sequence.`;
    } else if (partiallyFilledOrbitals.length === 2) {
        return checkTransitionMetalAnomalies(completelyFilledOrbitals, partiallyFilledOrbitals);
    } else if (partiallyFilledOrbitals.length === 1) {
        const lastPartiallyFilled = partiallyFilledOrbitals[0]; 
        if (lastPartiallyFilled === filledOrbitals[highestFilledIndex]) {
            return checkTransitionMetalAnomalies(completelyFilledOrbitals, partiallyFilledOrbitals);
        } else {
            return checkSingleSubshellAnomalies(lastPartiallyFilled);
        }
    } else {
        if (completelyFilledOrbitals.length > 0) {
            return null;
        } else {
            return "No electrons detected.";
        }
    }
};

// Determines maximum electrons for a given subshell
const subshellCapacity = (subshell) => {
    const type = subshell.slice(-1); 
    switch (type) {
        case 's': return 2;
        case 'p': return 6;
        case 'd': return 10;
        case 'f': return 14;
        default: return 0;
    }
};

// Helper for transition metal anomalies
const checkTransitionMetalAnomalies = (completelyFilledOrbitals, partiallyFilledOrbitals) => {
    const orbitalOrder = ["1s", "2s", "2p", "3s", "3p", "4s", "3d", "4p", "5s", "4d", "5p", "6s", "4f", "5d", "6p"];
    const allOrbitals = [...completelyFilledOrbitals, ...partiallyFilledOrbitals];
    
    const incorrectAnomalies = [
        { subshell: "3d", electrons: 4 }, { subshell: "3d", electrons: 9 }, 
        { subshell: "4d", electrons: 4 }, { subshell: "4d", electrons: 9 }, 
        { subshell: "5d", electrons: 4 }, { subshell: "5d", electrons: 9 }
    ];

    const incorrectAnomaly = incorrectAnomalies.find(anomaly =>
        partiallyFilledOrbitals.some(orb => orb.subshell === anomaly.subshell && orb.electrons === anomaly.electrons)
    );

    console.log(incorrectAnomaly);
    const validAnomalies = [
        { low: { subshell: "3d", electrons: 5 }, high: { subshell: "4s", electrons: 1 } }, 
        { low: { subshell: "4d", electrons: 5 }, high: { subshell: "5s", electrons: 1 } }, 
        { low: { subshell: "5d", electrons: 5 }, high: { subshell: "6s", electrons: 1 } }
    ];

    const validAnomaly = validAnomalies.find(({ low, high }) =>
        partiallyFilledOrbitals.some(orb => orb.subshell === low.subshell && orb.electrons === low.electrons) &&
        partiallyFilledOrbitals.some(orb => orb.subshell === high.subshell && orb.electrons === high.electrons)
    );

    if (incorrectAnomaly !== undefined) {
        return `Aufbau Principle violated: Incorrect anomaly configuration.`;
    }

    for (let i = 0; i < orbitalOrder.length; i++) {
        const currentSubshell = orbitalOrder[i];
        const currentOrbital = allOrbitals.find(orb => orb.subshell === currentSubshell);
        if (currentOrbital !== undefined) {
            highestFilledIndex = i;
            
            for (let j = 0; j < i; j++) {
                const lowerOrbital = allOrbitals.find(orb => orb.subshell === orbitalOrder[j]);
                if (!lowerOrbital) {
                    return `Aufbau Principle violated: ${orbitalOrder[j]} is not completely filled while ${currentSubshell} has electrons.`;
                }
                const lowerElectrons = lowerOrbital.electrons;
                const lowerCapacity = subshellCapacity(orbitalOrder[j]);
                if (lowerElectrons < lowerCapacity) {
                    if (validAnomaly !== undefined) {
                        return null;
                    } else if (orbitalOrder[j] === '4f' && currentSubshell === '5d' && currentOrbital.electrons > 1) {
                        return `Aufbau Principle violated: Incorrect lanthanide configuration.`;
                    } else if (orbitalOrder[j] === '4f' && currentSubshell === '5d' && currentOrbital.electrons === 1) {
                        return null;
                    }
                    return `Aufbau Principle violated: ${orbitalOrder[j]} is not completely filled while ${currentSubshell} has electrons.`;
                }
            }
        }
    } 
};

// Determining single unfilled subshell anomalies
const checkSingleSubshellAnomalies = (lastPartiallyFilled) => {
    const validAnomalies = [{ subshell: '3d', electrons: 10 }, 
                            { subshell: '4s', electrons: 1 }, 
                            { subshell: '4d', electrons: 10 }, 
                            { subshell: '5s', electrons: 1 }, 
                            { subshell: '5d', electrons: 10 },  
                            { subshell: '6s', electrons: 1 }
    ];

    const isValidAnomaly = validAnomalies.some(
        anomaly => anomaly.subshell === lastPartiallyFilled.subshell && anomaly.electrons === lastPartiallyFilled.electrons
    );

    if (isValidAnomaly) {
        return null;
    } else {
        return "Aufbau Principle violated by unfilled subshell.";
    }
};

// Click on check button
document.querySelectorAll('.check').forEach(check =>{
    check.addEventListener('click', (event) =>{
        const element = orbitalDiagramToElement();
        const violation = document.querySelector('.violation-container');
        let AufbauText = violation.querySelector(`.violation-aufbau`);
        let HundsText = violation.querySelector(`.violation-hunds`);

        const AufbauViolation = checkAufbauPrinciple();
        var violated = false;
        console.log(AufbauViolation === undefined);
        if (AufbauViolation === undefined) {
            violated = false;
        } else if (AufbauViolation !== null) {
            violated = true;
            AufbauText.textContent = AufbauViolation;
            HundsText.textContent = '';
        } else if (AufbauViolation === 'No electrons detected.') {
            violated = true;
            AufbauText.textContent = AufbauViolation;
            HundsTextText.textContent = '';
        }

        const HundsViolation = checkHundsRule();
        if (HundsViolation !== null) {
            violated = true;
            HundsText.textContent = HundsViolation;
        }

        if (violated) {
            document.getElementById('element-name').textContent = "Element";
            document.getElementById('element-symbol').textContent = "Symbol";
            document.getElementById('element-atomic-number').textContent = "Atomic Number";
            document.getElementById('element-fact').textContent = "Fact";
            document.getElementById('element-config').textContent = "Electron Configuration";
        }

        if (!violated) {
            displayData(Elements[element]);
            AufbauText.textContent = '';
            HundsText.textContent = 'No violations. Looks good!';
        }
    });
});
