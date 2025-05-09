import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"
import { getFaqItems } from "../../lib/data"
import SafeText from "../../components/safe-text"

export const metadata: Metadata = {
  title: "Ofte Stilte Spørsmål | NordicTabletop",
  description: "Finn svar på vanlige spørsmål om våre brettspill, bestillinger, levering og mer.",
}

export default async function FaqPage() {
  const faqItems = await getFaqItems()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Ofte Stilte Spørsmål</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Finn svar på de vanligste spørsmålene om våre brettspill og tjenester
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                <SafeText content={item.answer} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">Fant du ikke svar på det du lurer på? Ta gjerne kontakt med oss!</p>
          <Button asChild size="lg">
            <Link href="/kontakt">Kontakt Oss</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
