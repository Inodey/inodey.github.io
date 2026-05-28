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
