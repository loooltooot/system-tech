import { BenefitsSection } from "@/components/benefits-section/benefitsSection";
import { GallerySection } from "@/components/gallery-section/gallerySection";
import { ProductsSection } from "@/components/products-section/productsSection";
import WelcomeSection from "@/components/welcome-section/welcomeSection";

export default function Home() {
  return (
    <>
      <WelcomeSection />
      <ProductsSection />
      <BenefitsSection />
      <GallerySection />
    </>
  )
}
