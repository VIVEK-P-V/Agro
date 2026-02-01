import { Sprout, CloudRain, Sun, Bug, Tractor, ClipboardCheck } from "lucide-react";

export interface CropData {
    id: string;
    name: string;
    image: string; // placeholder text or url
    stages: FarmingStage[];
}

export interface FarmingStage {
    id: string;
    title: string;
    description: string;
    icon: any; // Lucide icon
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
    {
        id: "tomato",
        name: "Tomato (Tamatar)",
        image: "🍅",
        stages: [
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
                    { type: "info", message: "Maintain 60cm spacing between rows." },
                ],
            },
            {
                id: "growth",
                title: "Vegetative Growth",
                description: "Active growth phase requiring nitrogen and frequent irrigation.",
                icon: Sun,
                inputs: [
                    {
                        name: "Urea",
                        quantityPerAcre: "45 kg",
                        maxLimit: "50 kg/acre",
                        naturalAlternative: "Jeevamrut / Vermiwash",
                        applicationTiming: "20-25 days after planting",
                    },
                ],
                alerts: [{ type: "warning", message: "Do not apply Urea if rain is forecast within 24 hours." }],
            },
            {
                id: "pest",
                title: "Pest Management",
                description: "Control of common pests like fruit borer and leaf miner.",
                icon: Bug,
                inputs: [
                    {
                        name: "Chlorantraniliprole",
                        quantityPerAcre: "60ml",
                        maxLimit: "80ml/acre",
                        naturalAlternative: "Neem Oil (10000 ppm)",
                        applicationTiming: "At time of flowering/fruiting",
                    },
                ],
                alerts: [{ type: "danger", message: "Strictly adhere to dosage. Excess causes residue issues." }],
            },
            {
                id: "harvest",
                title: "Harvest",
                description: "Picking fruits at the right maturity stage.",
                icon: ClipboardCheck,
                inputs: [],
            }
        ],
    },
    {
        id: "wheat",
        name: "Wheat (Gehu)",
        image: "🌾",
        stages: [
            {
                id: "soil_prep",
                title: "Soil Preparation",
                description: "Ploughing and leveling of field.",
                icon: Tractor,
                inputs: [
                    {
                        name: "DAP",
                        quantityPerAcre: "55 kg",
                        maxLimit: "60 kg/acre",
                        naturalAlternative: "Compost (4 tonnes)",
                        applicationTiming: "Basal application",
                    },
                ],
            },
            {
                id: "sowing",
                title: "Sowing",
                description: "Sowing of wheat seeds using seed drill.",
                icon: Sprout,
                inputs: [],
            },
            {
                id: "irrigation",
                title: "Irrigation (CRI Stage)",
                description: "Critical irrigation stage 21 days after sowing.",
                icon: CloudRain,
                inputs: [
                    {
                        name: "Zinc Sulphate",
                        quantityPerAcre: "10 kg",
                        maxLimit: "12 kg/acre",
                        naturalAlternative: "None",
                        applicationTiming: "If zinc deficiency is observed",
                    },
                ],
            },
        ],
    },
];
