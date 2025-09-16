import { HeroSection } from '@/components/HeroSection';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { OrderingGuide } from '@/components/OrderingGuide';
import { PaymentDeliveryInfo } from '@/components/PaymentDeliveryInfo';
import { BuySellTeaser } from '@/components/BuySellTeaser';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedProducts />
      <OrderingGuide />
      <PaymentDeliveryInfo />
      <BuySellTeaser />
    </div>
  );
}