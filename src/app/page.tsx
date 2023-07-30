import { BenefitsSection } from "@/components/benefits-section/benefitsSection";
import { ProductsSection } from "@/components/products-section/productsSection";
import WelcomeSection from "@/components/welcome-section/welcomeSection";

export default function Home() {
  return (
    <>
      <WelcomeSection />
      <ProductsSection />
      <BenefitsSection />
    </>
  )
}
