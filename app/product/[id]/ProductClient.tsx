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

export default function ProductClient() {
  const params = useParams()
  const productId = params?.id as string
  const product = sampleProducts.find((p) => p.id === productId)
  const [quantity, setQuantity] = useState(1)
  const { dispatch } = useCart()
  const { toast } = useToast()

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/catalog" className="text-white">
            <Button>Back to Catalog</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: "ADD_TO_CART", product })
    }
    toast({
      title: "Added to cart",
      description: `${quantity} ${product.name}(s) added to your cart.`,
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "coins":
        return "bg-amber-100 text-amber-800"
      case "stamps":
        return "bg-red-100 text-red-800"
      case "medals":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "coins":
        return "Coins"
      case "stamps":
        return "Stamps"
      case "medals":
        return "Medals"
      default:
        return category
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/catalog" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <ArrowLeft className="w-4 h-4" />
          Back to Catalog
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-96 lg:h-[500px] object-cover"
            />
            <Badge className={`absolute top-4 left-4 ${getCategoryColor(product.category)}`}>
              {getCategoryLabel(product.category)}
            </Badge>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-2xl font-bold text-amber-600 mb-4">${product.price.toFixed(2)}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    max="10"
                    value={quantity}
                    onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                    className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600">Total Price</div>
                  <div className="text-xl font-bold text-amber-600">${(product.price * quantity).toFixed(2)}</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={handleAddToCart} className="flex-1 bg-red-600 hover:bg-red-700">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="px-4 bg-transparent">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold mb-3">Product Information</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Category:</span>
                <span>{getCategoryLabel(product.category)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Condition:</span>
                <span>Excellent</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Authenticity:</span>
                <span>Verified</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping:</span>
                <span>2-3 business days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
