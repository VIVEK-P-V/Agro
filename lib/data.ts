import { Sprout, CloudRain, Sun, Bug, Tractor, ClipboardCheck, Droplets } from "lucide-react";

export interface CropData {
    id: string;
    name: string;
    type: string;
    image?: string;
    stages?: FarmingStage[];
}

export interface FarmingStage {
    id: string;
    title: string;
    description: string;
    icon: any;
    inputs: {
        name: string;
        quantityPerAcre: string;
        maxLimit: string;
        naturalAlternative: string;
        applicationTiming: string;
    }[];
    alerts?: {
        type: "warning" | "info" | "danger";
        message: string;
    }[];
}

export const CROPS: CropData[] = [
    { id: "wheat", name: "Wheat (Gehu)", type: "Cereal" },
    { id: "rice", name: "Rice (Chawal)", type: "Cereal" },
    { id: "corn", name: "Corn (Makka)", type: "Cereal" },
    { id: "barley", name: "Barley (Jau)", type: "Cereal" },
    { id: "sorghum", name: "Sorghum (Jowar)", type: "Cereal" },
    { id: "pearl_millet", name: "Pearl Millet (Bajra)", type: "Cereal" },
    { id: "finger_millet", name: "Finger Millet (Ragi)", type: "Cereal" },
    { id: "tomato", name: "Tomato (Tamatar)", type: "Vegetable" },
    { id: "potato", name: "Potato (Aloo)", type: "Vegetable" },
    { id: "onion", name: "Onion (Pyaaz)", type: "Vegetable" },
    { id: "eggplant", name: "Eggplant (Baingan)", type: "Vegetable" },
    { id: "okra", name: "Okra (Bhindi)", type: "Vegetable" },
    { id: "cauliflower", name: "Cauliflower (Gobi)", type: "Vegetable" },
    { id: "cabbage", name: "Cabbage (Patta Gobi)", type: "Vegetable" },
    { id: "spinach", name: "Spinach (Palak)", type: "Vegetable" },
    { id: "carrot", name: "Carrot (Gajar)", type: "Vegetable" },
    { id: "radish", name: "Radish (Mooli)", type: "Vegetable" },
    { id: "cucumber", name: "Cucumber (Kheera)", type: "Vegetable" },
    { id: "bottle_gourd", name: "Bottle Gourd (Lauki)", type: "Vegetable" },
    { id: "bitter_gourd", name: "Bitter Gourd (Karela)", type: "Vegetable" },
    { id: "pumpkin", name: "Pumpkin (Kaddu)", type: "Vegetable" },
    { id: "peas", name: "Peas (Matar)", type: "Vegetable" },
    { id: "chili", name: "Chili (Mirch)", type: "Vegetable" },
    { id: "capsicum", name: "Capsicum (Shimla Mirch)", type: "Vegetable" },
    { id: "cotton", name: "Cotton (Kapas)", type: "Cash Crop" },
    { id: "sugarcane", name: "Sugarcane (Ganna)", type: "Cash Crop" },
    { id: "soybean", name: "Soybean", type: "Pulse" },
    { id: "peanut", name: "Peanut (Mungfali)", type: "Pulse" },
    { id: "chickpea", name: "Chickpea (Chana)", type: "Pulse" },
    { id: "pigeon_pea", name: "Pigeon Pea (Arhar/Tur)", type: "Pulse" },
    { id: "black_gram", name: "Black Gram (Urad)", type: "Pulse" },
    { id: "green_gram", name: "Green Gram (Moong)", type: "Pulse" },
    { id: "lentil", name: "Lentil (Masoor)", type: "Pulse" },
    { id: "mustard", name: "Mustard (Sarson)", type: "Oilseed" },
    { id: "sunflower", name: "Sunflower (Surajmukhi)", type: "Oilseed" },
    { id: "sesame", name: "Sesame (Til)", type: "Oilseed" },
    { id: "mango", name: "Mango (Aam)", type: "Fruit" },
    { id: "banana", name: "Banana (Kela)", type: "Fruit" },
    { id: "guava", name: "Guava (Amrood)", type: "Fruit" },
    { id: "papaya", name: "Papaya (Papita)", type: "Fruit" },
    { id: "pomegranate", name: "Pomegranate (Anar)", type: "Fruit" },
    { id: "apple", name: "Apple (Seb)", type: "Fruit" },
    { id: "orange", name: "Orange (Santra)", type: "Fruit" },
    { id: "grapes", name: "Grapes (Angoor)", type: "Fruit" },
    { id: "lemon", name: "Lemon (Nimbu)", type: "Fruit" },
    { id: "coconut", name: "Coconut (Nariyal)", type: "Plantation" },
    { id: "tea", name: "Tea (Chai)", type: "Plantation" },
    { id: "coffee", name: "Coffee", type: "Plantation" },
    { id: "rubber", name: "Rubber", type: "Plantation" },
    { id: "turmeric", name: "Turmeric (Haldi)", type: "Spice" },
    { id: "ginger", name: "Ginger (Adrak)", type: "Spice" },
    { id: "garlic", name: "Garlic (Lahsun)", type: "Spice" },
];

export const MOCK_STAGES: Record<string, FarmingStage[]> = {
    default: [
        {
            id: "soil_prep",
            title: "Soil Preparation",
            description: "Prepare the land for sowing. Ensure soil is loose and rich in organic matter.",
            icon: Tractor,
            inputs: [
                {
                    name: "NPK (10:26:26)",
                    quantityPerAcre: "50 kg",
                    maxLimit: "60 kg/acre",
                    naturalAlternative: "Farm Yard Manure (2-3 tonnes)",
                    applicationTiming: "During last ploughing",
                },
            ],
        },
        {
            id: "sowing",
            title: "Sowing / Transplanting",
            description: "Planting the seeds or transplanting seedlings.",
            icon: Sprout,
            inputs: [],
            alerts: [
                { type: "info", message: "Maintain proper spacing between rows." },
            ],
        },
        {
            id: "irrigation",
            title: "Irrigation",
            description: "Ensure adequate water supply for crop establishment.",
            icon: Droplets,
            inputs: [],
        },
        {
            id: "harvest",
            title: "Harvest",
            description: "Harvest when the crop reaches maturity.",
            icon: ClipboardCheck,
            inputs: [],
        }
    ]
};

// Helper to get stages (fallback to default for now as we only have names for most)
export const getCropStages = (cropId: string): FarmingStage[] => {
    // In a real app, we would have specific stages for each crop.
    // For now, we return default stages for the new crops.
    return MOCK_STAGES.default;
};
