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
    pros: ["Test", "Test", "Test", "Test"],
    cons: ["Test", "Test"],
    description: "Test",
    videoUrl: "https://www.youtube.com/watch?v=LgDn8MwR2es",
    specs: {
      Test1: "Test1",
      Test2: "Test2",
      Test3: "Test3",
      Test4: "Test4",
      Test5: "Test5",
    },
  },
];
