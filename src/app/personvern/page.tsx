import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Personvernpolicy | NordicTabletop",
  description: "Les om hvordan NordicTabletop behandler dine personopplysninger og beskytter ditt personvern.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Personvernpolicy</h1>

        <div className="space-y-6 text-lg">
          <p>Sist oppdatert: 1. mai 2025</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduksjon</h2>
          <p>
            NordicTabletop ("vi", "oss", "vår") respekterer ditt personvern og forplikter seg til å beskytte dine
            personopplysninger. Denne personvernpolicyen informerer deg om hvordan vi behandler dine personopplysninger
            når du besøker vår nettside (nordictabletop.com) eller når du handler hos oss, og forteller deg om dine
            personvernrettigheter og hvordan loven beskytter deg.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Informasjon vi samler inn</h2>
          <p>Vi kan samle inn, bruke, lagre og overføre forskjellige typer personopplysninger om deg, inkludert:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Identitetsopplysninger (navn, fødselsdato)</li>
            <li>Kontaktopplysninger (e-postadresse, telefonnummer, adresse)</li>
            <li>Transaksjonsopplysninger (detaljer om produkter du har kjøpt)</li>
            <li>Tekniske opplysninger (IP-adresse, nettlesertype og -versjon)</li>
            <li>Bruksopplysninger (informasjon om hvordan du bruker vår nettside)</li>
            <li>Markedsførings- og kommunikasjonsopplysninger (dine preferanser for å motta markedsføring fra oss)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Hvordan vi bruker dine personopplysninger</h2>
          <p>
            Vi bruker dine personopplysninger kun når loven tillater det. Vanligvis bruker vi dine personopplysninger i
            følgende tilfeller:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>For å oppfylle en kontrakt vi har inngått med deg</li>
            <li>
              Når det er nødvendig for våre legitime interesser (eller tredjeparters interesser) og dine interesser og
              grunnleggende rettigheter ikke overstyrer disse interessene
            </li>
            <li>For å overholde en juridisk eller regulatorisk forpliktelse</li>
            <li>Med ditt samtykke</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Datalagring</h2>
          <p>
            Vi vil kun beholde dine personopplysninger så lenge det er nødvendig for å oppfylle formålene vi samlet dem
            inn for, inkludert for å tilfredsstille juridiske, regnskapsmessige eller rapporteringskrav.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Dine rettigheter</h2>
          <p>
            Under visse omstendigheter har du rettigheter under personvernlovgivningen i forhold til dine
            personopplysninger, inkludert retten til å:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Be om tilgang til dine personopplysninger</li>
            <li>Be om retting av dine personopplysninger</li>
            <li>Be om sletting av dine personopplysninger</li>
            <li>Protestere mot behandling av dine personopplysninger</li>
            <li>Be om begrensning av behandlingen av dine personopplysninger</li>
            <li>Be om overføring av dine personopplysninger</li>
            <li>Trekke tilbake samtykke</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Kontaktinformasjon</h2>
          <p>
            Hvis du har spørsmål om denne personvernpolicyen eller ønsker å utøve noen av dine rettigheter, vennligst
            kontakt oss på:
          </p>
          <p className="mt-2">
            E-post: info@nordictabletop.com
            <br />
            Telefon: +47 21 84 26 18
            <br />
            Adresse: Storgata 23, 0184 Oslo, Norge
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Endringer i personvernpolicyen</h2>
          <p>
            Vi kan oppdatere vår personvernpolicy fra tid til annen. Eventuelle endringer vil bli publisert på denne
            siden.
          </p>
        </div>
      </div>
    </div>
  )
}
