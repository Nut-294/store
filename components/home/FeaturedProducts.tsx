import { fetchFeaturedProducts } from "@/utils/actions";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductGrid from "../products/ProductGrid";

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList />;

  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductGrid products={products} />
    </section>
  );
}
export default FeaturedProducts;
