export type Category = "Keyboard" | "Mouse" | "Mousepad" | "Skates" | "IEMs";
export type Tier = "0" | "1" | "2";

export interface Peripheral {
  name: string;
  brand: string;
  tier: Tier;
  category: Category;
  pros: string[];
  cons: string[];
  description: string;
  videoUrl?: string;
  specs: Record<string, string>;
}

export const peripherals: Peripheral[] = [
  {
    category: "Mouse",
    tier: "0",
    brand: "ATK Gear",
    name: "Blazing Sky Zero",
    description:
      "Nothing much to say, simply a bit improved version of VXE Mad R.",
    pros: [
      "1. Lightweight (44±3g)",
      "2. Quite cheap in most countries.",
      "3. Though made of plastic, it's very sturdy.",
      "4. Gog tier driver",
      "5. Pretty good coating",
    ],
    cons: ["1. Coating can be a bit better."],
    specs: {
      "Webdriver?": "Yes",
      Battery: "300mAh",
      "Battery life (1000Hz)?": "~200h",
      "Battery life (8000Hz)?": "Unknown?",
      MCU: "Nordic 54L15 (2024)",
      "Sensor (Optical)": "Paw3950",
      "Sensor position": "Near centre (53%)",
      "IPS (Tracking speed)": "750",
      "Comes with 8000Hz dongle?": "Yes",
      "Click latency (Minimum & Wireless) ": "~1.1ms",
      "Click latency (Average & Wireless) ": "~1.3ms",
      "Click latency (Maximum & Wireless) ": "~1.5ms",
      "Mouse movement latency (Minimum & Wireless) ": "~0.8ms",
      "Mouse movement latency (Average & Wireless) ": "~1.2ms",
      "Mouse movement latency (Maximum & Wireless) ": "~1.5ms",
      "Shape category": "Symmetrical",
      "Hand compatibility": "Right",
      "Hump placement": "Back - moderate",
      "Front flare": "Flat",
      "Side curvature": "Flat",
      "Thumb rest": "No",
      "Ring finger rest": "No",
      Dimensions: "~120x63x81mm",
      Weight: "44±3g",
      Scroller: "TTC Gold",
      "Switches?": "ATK Optical switches",
      "Hot-swap switches?": "No",
    },
    videoUrl: "https://www.youtube.com/watch?v=C7F0Uo84smo",
  },

  {
    category: "Mouse",
    tier: "2",
    brand: "Logitech",
    name: "PRO X2 SUPERSTRIKE",
    description:
      "First ever mouse that utilises HE technology in mouse scene. Simply G PRO X Superlight 2 except with HE switches. Utter garbage, I don't recommend it to anyone (including rich fucks).",
    pros: [
      "1. The only pro that it has is that it's sensor for movement doesn't suck, that's all.",
    ],
    cons: [
      "1. Has a fatal flaw where it can accidentally start constantly firing M1 if held way too hard (in it's measure)",
      "2. Overpriced, just like G PRO X Superlight 2.",
      "3. Bloatware driver.",
      "4. Click latency is bigger than other mechanical switch/optical switch mices even though uses superiour HE switches. Shitty implementation.",
    ],
    specs: {
      "Webdriver?": "Yes",
      Battery: "Unknown?",
      "Battery life (???Hz)": "~90h",
      MCU: "Unknown?",
      "Sensor (Optical)": "Reused 'Hero 2'",
      "Sensor position": "Near centre (54%)",
      "IPS (Tracking speed)": "888",
      "Comes with 8000Hz dongle?": "Yes",
      "Click latency (Minimum & Wireless)": "~1.3ms",
      "Click latency (Average & Wireless)": "~1.4ms",
      "Click latency (Maximum & Wireless)": "~1.7ms",
      "Mouse movement (Minimum & Wireless)": "~1.3ms",
      "Mouse movement (Average & Wireless)": "~1.6ms",
      "Mouse movement (Maximum & Wireless)": "~1.9ms",
      "Shape category": "Symmetrical",
      "Hand compatibility": "Right",
      "Hump placement": "Centre",
      "Front flare": "Outward - slight",
      "Side curvature": "Flat",
      "Thumb rest": "No",
      "Ring finger rest": "No",
      Dimensions: "~125x63x40mm",
      Weight: "~61g",
      Scroller: "TTC Silver",
      "Switches?": "Inductive Logitech SUPERSTRIKE",
      "Hot-swap?": "No",
    },
    videoUrl: "https://www.youtube.com/watch?v=lre83JzxC-w",
  },

  {
    category: "Keyboard",
    tier: "0",
    brand: "Epomaker",
    name: "G84 HE",
    description:
      "Currently Epomaker best keyboard yet. It even surpasses their more expensive variants. If you enjoy the layout, want or don't mind wireless while also not paying more than 100£, this is no-brainer.",
    pros: [
      "1. Quite cheap in most countries",
      "2. Best sound for keyboard under (usually) 100£",
      "3. Pretty decent build quality.",
      "4. High QC",
    ],
    cons: [
      "1. Can be really hard to find in stock from third-party sellers.",
      "2. Copy-paste driver.",
    ],
    specs: {
      "Webdriver?": "Yes",
      "Keycaps out of box": "PBT Double-shot",
      "Case material": "ABS",
      "Duskrise Switches specifications (White-blue coloured variant)":
        "3.3±0.1mm total travel distance,\n30gf minimum force,\n55gf maximum force,\nUses materials like PC, PA66 and POM in switches,\nTotal magnetic flux ~620Gs\nPre-lubed? — Yes.",
      "Creamy Switches specifications (White coloured variant)":
        "3.5±0.1mm total travel distance,\n30gf minimum force,\n55gf maximum force,\nUnknown materials?\nTotal magnetic flus ~620Gs\nPre-lubed? — Yes.",
      "Hz (Marketed for wired and 2.4G)": "8000Hz",
      "Hz (Actual for wired and 2.4G)": "~1350Hz",
      "Latency (Minimum & Wired)": "~0.65ms",
      "Latency (Average & Wired)": "~0.75ms",
      "Latency (Maximum & Wired": "~0.95ms",
      "Latency (Minimum & Wireless 2.4G)": "~1.00ms",
      "Latency (Average & Wireless 2.4G)": "~1.10ms",
      "Latency (Maximum & Wireless 2.4G": "~1.40ms",
      "Wireless (2.4G)?": "Yes",
      "Wireless (Bluetooth)?": "Yes",
    },
    videoUrl: "https://www.youtube.com/watch?v=LgDn8MwR2es",
  },

  {
    category: "Keyboard",
    tier: "0",
    brand: "Gamakay",
    name: "TK75 TMR",
    description:
      "First actually decent keyboard from Gamakay. It's not that special to be honest, except it's really, and I mean really silent. And no, typing is not mushed, it feels just like regular HE/TMR keyboard. If you really crave from silent keyboard that also great for gaming, this is definitely the one.",
    pros: [
      "1. 'Fine' price in most countries.",
      "2. Really silent sound.",
      "3. Okay build quality.",
      "4. Okay QC.",
      "5. Supports both mechanical and magnetic switches.",
      "6. Has volume knob.",
      "7. Has small customisable LCD display.",
    ],
    cons: [
      "1. Produced in low batches. Thus really rare appears in stock.",
      "2. Copy-paste driver.",
    ],
    specs: {
      "Webdriver?": "Yes",
      "Keycaps out of box": "PBT Double-shot",
      "Case material": "ABS",
      "Mercury V3 switches specifications":
        "3.5±0.1mm total travel distance,\n30gf minimum force,\n55gf maximum force,\nUnknown materials?\nTotal magnetic flux ~620Gs\nPre-lubed? — Yes.",
      "Pheonix V3 switches specifications":
        "3.5±0.2mm total travel distance,\n35gf minimum force,\n58gf maximum force,\nUnknown materials?\nTotal magnetic flux ~620Gs\nPre-lubed? — Yes.",
      "Hz (Marketed for wired and 2.4G)": "8000Hz",
      "Hz (Actual for wired and 2.4G)": "~1650Hz",
      "Latency (Minimum & Wired)": "~0.45ms",
      "Latency (Average & Wired)": "~0.60ms",
      "Latency (Maximum & Wired)": "~0.80ms",
      "Latency (Minimum & 2.4G)": "~0.85ms",
      "Latency (Average & 2.4G)": "~1.00ms",
      "Latency (Maximum & 2.4G)": "~1.20ms",
      "Wireless (2.4G)": "Yes",
      "Wireless (Bluetooth)": "Yes",
    },
    videoUrl: "https://www.youtube.com/watch?v=B48kpv19NKk",
  },

  {
    category: "Keyboard",
    tier: "2",
    brand: "Wooting",
    name: "60HE v2 (Pre-assembled variant specifically)",
    description:
      "Wooting's latest keyboard, and overpriced buns just like rest, especially when ordering module variant and customising it. I have to say, this one priced a bit better, but still shitty. Not that it would make you worse or better at gaming compare to other HE/TMR keyboards, but it's definitely not worth buying if we look besides just gaming capabilities.",
    pros: [
      "1. Best customer service.",
      "2. High CQ.",
      "3. Very easy to return and get a refund.",
      "4. One of the few keyboards to have an option for 'Joysticks input'",
      "5. Best driver out there.",
    ],
    cons: [
      "1. Insanely overpriced nowadays.",
      "2. Really cheaps out on design, by cutting corners in some places.",
      "3. Marketing is beyond saving.",
      "4. Overhyped, thus gaslighting people into buying overpriced tech like this.",
    ],
    specs: {
      "Webdriver?": "Yes",
      "Keycaps out of box": "PBT Double-shot",
      "Case material": "ABS",
      "Lekker Tikken Medium specifications":
        "4.0mm total travel distance,\n42gf minimum force,\n54gf maximum force,\nUses materials like PC, PA and POM in switches,\nTotal magnetic flux?\nPre-lubed? — Yes.",
      "Hz (Marketed, so called 'true 8 kHz polling, scanning every key at that same rate and in perfect sync')":
        "8000Hz",
      "Hz (Actual)": "~1250Hz",
      "Latency (Minimum & Wired)": "~0.6ms",
      "Latency (Average & Wired)": "~0.8ms",
      "Latency (Maximum & Wired)": "~1ms",
      "Wireless?": "No",
    },
    videoUrl: "https://www.youtube.com/watch?v=yISbZh4nVNg",
  },
];
