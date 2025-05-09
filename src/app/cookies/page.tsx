import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | NordicTabletop",
  description: "Les om hvordan NordicTabletop bruker informasjonskapsler (cookies) på vår nettside.",
}

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

        <div className="space-y-6 text-lg">
          <p>Sist oppdatert: 1. mai 2025</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Hva er informasjonskapsler (cookies)?</h2>
          <p>
            Informasjonskapsler er små tekstfiler som lagres på din datamaskin eller mobile enhet når du besøker en
            nettside. De brukes for å huske dine preferanser og gi deg en bedre brukeropplevelse.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Hvordan vi bruker informasjonskapsler</h2>
          <p>NordicTabletop bruker informasjonskapsler for følgende formål:</p>

          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Nødvendige informasjonskapsler: Disse er essensielle for at nettsiden skal fungere riktig.</li>
            <li>
              Preferanse-informasjonskapsler: Disse husker dine preferanser for å gi deg en bedre brukeropplevelse.
            </li>
            <li>Statistikk-informasjonskapsler: Disse hjelper oss å forstå hvordan besøkende bruker vår nettside.</li>
            <li>
              Markedsførings-informasjonskapsler: Disse brukes til å spore besøkende på tvers av nettsider for å vise
              relevante annonser.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Typer informasjonskapsler vi bruker</h2>
          <p>Vi bruker følgende typer informasjonskapsler på vår nettside:</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Nødvendige informasjonskapsler</h3>
          <p>
            Disse informasjonskapslene er nødvendige for at nettsiden skal fungere og kan ikke slås av i våre systemer.
            De settes vanligvis som svar på handlinger du gjør, som å sette personvernpreferanser, logge inn eller fylle
            ut skjemaer.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Preferanse-informasjonskapsler</h3>
          <p>
            Disse informasjonskapslene gjør det mulig for nettsiden å huske valg du har gjort tidligere og gi
            forbedrede, mer personlige funksjoner.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Statistikk-informasjonskapsler</h3>
          <p>
            Disse informasjonskapslene hjelper oss å forstå hvordan besøkende interagerer med nettsiden ved å samle inn
            og rapportere informasjon anonymt.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Markedsførings-informasjonskapsler</h3>
          <p>
            Disse informasjonskapslene brukes til å spore besøkende på tvers av nettsider. Hensikten er å vise annonser
            som er relevante og engasjerende for den enkelte bruker.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Hvordan administrere informasjonskapsler</h2>
          <p>
            Du kan sette preferanser for hvordan vi bruker informasjonskapsler på vår nettside ved å aktivere/deaktivere
            forskjellige typer informasjonskapsler i cookie-banneret som vises når du først besøker nettsiden.
          </p>
          <p className="mt-2">
            De fleste nettlesere lar deg også administrere informasjonskapsler gjennom nettleserinnstillingene. Vær
            oppmerksom på at hvis du blokkerer visse informasjonskapsler, kan det påvirke funksjonaliteten på vår
            nettside.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Endringer i vår cookie policy</h2>
          <p>
            Vi kan oppdatere vår cookie policy fra tid til annen. Eventuelle endringer vil bli publisert på denne siden.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Kontakt oss</h2>
          <p>Hvis du har spørsmål om vår bruk av informasjonskapsler, vennligst kontakt oss på:</p>
          <p className="mt-2">
            E-post: info@nordictabletop.com
            <br />
            Telefon: +47 21 84 26 18
            <br />
            Adresse: Storgata 23, 0184 Oslo, Norge
          </p>
        </div>
      </div>
    </div>
  )
}
