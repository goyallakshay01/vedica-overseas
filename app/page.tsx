import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Ship, Package, Globe, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10" />
        <div className="container relative flex min-h-[600px] flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Global Trade Solutions for
            <br className="hidden sm:inline" />
            Modern Business
          </h1>
          <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Streamline your international shipping and trading operations with our comprehensive platform.
            Fast, reliable, and secure solutions for businesses worldwide.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/products">Explore Products</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/shipping">Calculate Shipping</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">Why Choose Us</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6">
            <Ship className="mb-4 h-10 w-10 text-blue-500" />
            <h3 className="mb-2 text-xl font-bold">Global Shipping</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Reliable shipping solutions to over 200 countries with real-time tracking.
            </p>
          </Card>
          <Card className="p-6">
            <Package className="mb-4 h-10 w-10 text-purple-500" />
            <h3 className="mb-2 text-xl font-bold">Product Sourcing</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Access to a vast network of verified suppliers and quality products.
            </p>
          </Card>
          <Card className="p-6">
            <Globe className="mb-4 h-10 w-10 text-green-500" />
            <h3 className="mb-2 text-xl font-bold">International Trade</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Expert guidance on international trade regulations and compliance.
            </p>
          </Card>
          <Card className="p-6">
            <TrendingUp className="mb-4 h-10 w-10 text-orange-500" />
            <h3 className="mb-2 text-xl font-bold">Market Analysis</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Data-driven insights to help you make informed business decisions.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-20">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mx-auto mb-8 max-w-[600px] text-gray-500 dark:text-gray-400">
            Join thousands of businesses that trust us with their international shipping and trading needs.
          </p>
          <Button size="lg" asChild>
            <Link href="/signup">Create Free Account</Link>
          </Button>
        </div>
      </section>
    </>
  )
}