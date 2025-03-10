/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductsContainer from "@/components/products/ProductsContainer";



async function ProductsPage({ searchParams }: any) {
  const layout = searchParams?.layout ?? "grid";
  const search = searchParams?.search ?? "";
  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}
export default ProductsPage;
