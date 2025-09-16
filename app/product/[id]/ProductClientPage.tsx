"use client"

import { useParams } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/contexts/CartContext"
import { useToast } from "@/hooks/use-toast"
import { sampleProducts } from "@/lib/sampleData"
import { ShoppingCart, ArrowLeft, Heart } from "lucide-react"
import Link from "next/link"

export default function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const product = sampleProducts.find((p) => p.id === id)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const { toast } = useToast()

  if (!product) {
    return <div>Product not found</div>
  }

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
    toast({
      title: "Item added to cart",
      description: "You can view your cart in the top right corner.",
    })
  }

  return (
    <div className="container mx-auto mt-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-lg object-cover aspect-square"
              />
            </div>
            <div className="md:w-1/2">
              <Link href="/" className="inline-flex items-center mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
              </Link>
              <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
              <Badge className="mb-4">{product.category}</Badge>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold">${product.price}</span>
                <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              <div className="flex items-center mb-4">
                <button
                  onClick={decrementQuantity}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="bg-gray-100 text-gray-700 font-bold py-2 px-4 w-16 text-center"
                />
                <button
                  onClick={incrementQuantity}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r"
                >
                  +
                </button>
              </div>

              <Button onClick={handleAddToCart} className="w-full">
                Add to Cart <ShoppingCart className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
