import { sampleProducts } from "@/lib/sampleData"
import ProductClient from "./ProductClient"

export async function generateStaticParams() {
  return sampleProducts.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage() {
  return <ProductClient />
}
