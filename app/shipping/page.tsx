import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Truck, Package, Globe, AlertCircle } from "lucide-react"

export default function ShippingPage() {
  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Shipping Information</h1>

      {/* Shipping Methods */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Shipping Methods</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <Truck className="mb-4 h-8 w-8 text-blue-500" />
            <h3 className="mb-2 text-xl font-semibold">Standard Shipping</h3>
            <p className="mb-4 text-muted-foreground">7-10 business days</p>
            <ul className="space-y-2 text-sm">
              <li>• Most economical option</li>
              <li>• Available worldwide</li>
              <li>• Full tracking included</li>
            </ul>
          </Card>
          <Card className="p-6">
            <Package className="mb-4 h-8 w-8 text-purple-500" />
            <h3 className="mb-2 text-xl font-semibold">Express Shipping</h3>
            <p className="mb-4 text-muted-foreground">2-4 business days</p>
            <ul className="space-y-2 text-sm">
              <li>• Priority handling</li>
              <li>• Door-to-door service</li>
              <li>• Real-time tracking</li>
            </ul>
          </Card>
          <Card className="p-6">
            <Globe className="mb-4 h-8 w-8 text-green-500" />
            <h3 className="mb-2 text-xl font-semibold">International Priority</h3>
            <p className="mb-4 text-muted-foreground">3-5 business days</p>
            <ul className="space-y-2 text-sm">
              <li>• Customs clearance included</li>
              <li>• Available in 200+ countries</li>
              <li>• Insurance included</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Shipping Restrictions */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Shipping Restrictions</h2>
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-red-500" />
            <div>
              <h3 className="mb-2 text-lg font-semibold">Restricted Items</h3>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Hazardous materials</li>
                <li>Perishable goods</li>
                <li>Live animals</li>
                <li>Illegal substances</li>
                <li>Weapons and ammunition</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I track my shipment?</AccordionTrigger>
            <AccordionContent>
              You can track your shipment using the tracking number provided in your shipping confirmation email. Enter the tracking number on our tracking page or contact customer support for assistance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What are the delivery timeframes?</AccordionTrigger>
            <AccordionContent>
              Delivery timeframes vary by shipping method and destination. Standard shipping typically takes 7-10 business days, while express shipping delivers within 2-4 business days.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you offer insurance?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer shipping insurance for all packages. International Priority shipping includes insurance by default. For other shipping methods, insurance can be added during checkout.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What if my package is delayed?</AccordionTrigger>
            <AccordionContent>
              In case of delays, you'll be notified via email. You can track your package status online or contact our customer support team for assistance and updates.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}