import ChiaImage from "./Organic_Chia_Seeds.jpg";
import FlaxSeeds from "./Golden_Flax_Seeds.jpg";
import HampSeeds from "./Raw_Hamp_Seeds.jpg";
import SesameSeeds from "./Premium_Sesame_Seeds.jpg";
import PumpkinSeeds from "./Organic_Pumpkin_Seeds_(Pepitas).jpg";
import SunFlowerSeeds from "./Raw_Sunflower_Kernels.jpg";
import MuskMelonSeeds from "./Muskmelon_Seeds.jpg";
import MixedSeeds from "./Mixed_Seeds.jpg";
import CustomizableSeeds from "./Customizable_Mixed_Seeds.jpg";

const products = [
  {
    id: "chia-seeds",
    title: "Organic Chia Seeds",
    desc: "Premium chia seeds rich in omega-3, fiber and antioxidants.",
    img: ChiaImage,
    price: "TBD",
    packSizes: ["250g", "500g", "1kg"],
    benefits: [
      "Heart Health",
      "Digestive Support",
      "Blood Sugar Control",
      "Anti-inflammatory",
    ],
  },
  {
    id: "flax-seeds",
    title: "Golden Flax Seeds",
    desc: "Nutty-flavored golden flax seeds packed with omega-3s and fiber.",
    img: FlaxSeeds,
    price: "TBD",
    packSizes: ["250g", "500g", "1kg"],
    benefits: [
      "Heart Health",
      "Hormone Balance",
      "Digestive Support",
      "Anti-inflammatory",
    ],
  },
  {
    id: "hemp-hearts",
    title: "Raw Hemp Hearts",
    desc: "Excellent source of complete plant protein and healthy fats.",
    img: HampSeeds,
    price: "TBD",
    packSizes: ["250g", "500g"],
    benefits: ["Muscle Recovery", "Brain Health", "Energy Boost"],
  },
  {
    id: "sesame-seeds",
    title: "Premium Sesame Seeds",
    desc: "Rich in minerals and antioxidants for daily nutrition.",
    img: SesameSeeds,
    price: "TBD",
    packSizes: ["250g", "500g"],
    benefits: ["Bone Health", "Heart Health"],
  },
  {
    id: "pumpkin-seeds",
    title: "Premium Pumpkin Seeds",
    desc: "High in magnesium, zinc and antioxidants.",
    img: PumpkinSeeds,
    price: "TBD",
    packSizes: ["250g", "500g"],
    benefits: ["Sleep Quality", "Immunity Boost"],
  },
  {
    id: "sunflower-seeds",
    title: "Raw Sunflower Kernels",
    desc: "Crunchy seeds loaded with vitamin E.",
    img: SunFlowerSeeds,
    price: "TBD",
    packSizes: ["250g", "500g"],
    benefits: ["Skin Health", "Energy"],
  },
  {
    id: "muskmelon-seeds",
    title: "Raw Muskmelon Seeds",
    desc: "Cooling seeds for daily wellness.",
    img: MuskMelonSeeds,
    price: "TBD",
    packSizes: ["250g"],
    benefits: ["Hydration", "Digestive Health"],
  },
  {
    id: "mixed-seeds",
    title: "Mixed Seeds",
    desc: "Combination of all available seeds.",
    img: MixedSeeds,
    price: "TBD",
    packSizes: ["500g", "1kg"],
    benefits: ["Overall Nutrition"],
  },
  {
    id: "customizable-mixed-seeds",
    title: "Customizable Mixed Seeds",
    desc: "Choose your own seed mix.",
    img: CustomizableSeeds,
    price: "TBD",
    packSizes: ["Custom"],
    benefits: ["Custom Nutrition"],
  },
];

export default products;
