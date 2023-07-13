import {create} from "zustand";
const usePricingStore = create((set)=> ({
    priceInfo:[
        {
            id: 1,
            fullName: "Design advices",
            cost: '29',
            offer1: 'General living space advices',
            offer2: 'Renovation advices',
            offer3: 'Interior design advices',
            offer4: 'Furniture reorganization',
            offer5: 'Up to 5 hours meetings',
        },
        {
            id: 2,
            fullName: "Complete interior",
            cost: '39',
            offer1: 'Complete home redesign',
            offer2: 'Interior and exterior works',
            offer3: 'Modular interior planning',
            offer4: 'Kitchen design',
            offer5: 'Garages organization',
        },
        {
            id: 3,
            fullName: "Furniture design",
            cost: '59',
            offer1: 'Furniture for living room',
            offer2: 'Furniture refurbishment',
            offer3: 'Sofas and armchairs',
            offer4: 'Tables and chairs',
            offer5: 'Kitchens',
        }]
}))
export default usePricingStore;
