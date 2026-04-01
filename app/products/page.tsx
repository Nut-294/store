import ProductsContainer from "@/components/products/ProductsContainer";

async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) {
  const searchParamsData = await searchParams;
  console.log(searchParamsData);
  const layout = searchParamsData.layout || "grid";
  const search = searchParamsData.search || " ";
  return <ProductsContainer layout={layout} search={search} />;
}
export default ProductsPage;
