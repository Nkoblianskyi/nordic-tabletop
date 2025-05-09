"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import Link from "next/link"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Navn må være minst 2 tegn.",
  }),
  email: z.string().email({
    message: "Vennligst oppgi en gyldig e-postadresse.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Meldingen må være minst 10 tegn.",
  }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Du må godta personvernpolicyen for å sende skjemaet." }),
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log(values)
    setIsSubmitting(false)
    setShowConfirmation(true)
    form.reset()
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Navn</FormLabel>
                <FormControl>
                  <Input placeholder="Ditt navn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-post</FormLabel>
                <FormControl>
                  <Input placeholder="din.epost@eksempel.no" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefon (valgfritt)</FormLabel>
                <FormControl>
                  <Input placeholder="+47 123 45 678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Melding</FormLabel>
                <FormControl>
                  <Textarea placeholder="Skriv din melding her..." className="min-h-[120px]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Jeg godtar at mine data behandles i henhold til{" "}
                    <Link href="/personvern" className="underline underline-offset-4 hover:text-primary">
                      personvernpolicyen
                    </Link>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sender..." : "Send Melding"}
          </Button>
        </form>
      </Form>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Melding sendt!</DialogTitle>
            <DialogDescription>
              Takk for din henvendelse. Vi vil svare deg så snart som mulig, vanligvis innen 1-2 virkedager.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => setShowConfirmation(false)}>Lukk</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
