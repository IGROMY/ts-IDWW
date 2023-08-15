import {FC} from 'react';
import styles from './PricingPage.module.scss'
import PagesHeading from "../../molecules/pagesHeading/PagesHeading.jsx";
import pricingBg from  '../../../assets/images/ImagepricingBg.png'
import PricingCard from "../../molecules/pricingCard/PricingCard.tsx";
import usePricingStore from "../../../store/usePricingStore.ts";

const PricingPage:FC = () => {
    const {priceInfo} = usePricingStore()

    return (

        <div>
            <PagesHeading
            backgroundImg={pricingBg}
            subscribe='Home / Pricing'
            name='Pricing & Plan'
            />
            <div className={styles.pricingWrapper}>
                {priceInfo.map((price)=>(
                    <PricingCard
                        variant={price.id===2 ? 'secondary':'primary'}
                        key={price.id}
                        cost={price.cost}
                        fullName={price.fullName}
                        offer1={price.offer1}
                        offer2={price.offer2}
                        offer3={price.offer3}
                        offer4={price.offer4}
                        offer5={price.offer5}
                    />
                ))}
            </div>
        </div>
    );
};

export default PricingPage;