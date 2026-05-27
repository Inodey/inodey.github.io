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
    name: "G84 HE",
    brand: "Epomaker",
    tier: "0",
    category: "Keyboard",
    pros: [
      "1. Quite cheap in most countries",
      "2. Sweet spot of being between 75% and TKL (80%)",
      "3. Really good for typing.",
      "4. Best sound for keyboard under (usually) 100£",
      "5. Pretty decent build.",
    ],
    cons: [
      "1. Can be really hard to find in stock from third-party sellers.",
      "2. Copy-paste software.",
    ],
    description:
      "Currently Epomaker best keyboard yet. It even surpasses their more expensive variants. If you enjoy the layout, want or don't mind wireless while also not paying more than 100£, this is no-brainer.",
    videoUrl: "https://www.youtube.com/watch?v=LgDn8MwR2es",
    specs: {
      "Webdriver?": "Yes",
      "Keycaps from box": "PBT Double-shot",
      "Duskrise Switches specifications (White-Blue variant)":
        "3.3±1mm Travel,\n30-32gf Minimum,\n53-50gf Maximum,\nUses materials like PC, PA66 and POM\nPre-lubed? Yes.",
      "Hz (Marketed)": "8000Hz",
      "Hz (Actual)": "~1350Hz",
      "Latency (Minimum & Wired)": "~0.65ms",
      "Latency (Average & Wired)": "~0.75ms",
      "Latency (Maximum & Wired": "~0.95ms",
      "Latency (Minimum & Wireless)": "~1.00ms",
      "Latency (Average & Wireless)": "~1.10ms",
      "Latency (Maximum & Wireless": "~1.40ms",
      "Wireless (2.4G)?": "Yes",
      "Wireless (Bluetooth)?": "Yes",
    },
  },
];
