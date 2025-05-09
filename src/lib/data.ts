import type { Game, FaqItem } from "../types"

// Mock data for games
const games: Game[] = [
  {
    id: "1",
    title: "Hnefatafl",
    slug: "hnefatafl",
    shortDescription: "Et tradisjonelt nordisk strategispill fra vikingtiden",
    description: [
      'Hnefatafl, også kjent som "Vikingenes sjakk", er et av de eldste kjente strategispillene fra Norden. Dette spillet har røtter tilbake til vikingtiden og var svært populært i hele Skandinavia før sjakk ble introdusert.',
      "Spillet representerer en kamp mellom en konge med hans forsvarere og en gruppe angripere. Kongen forsøker å rømme til et av hjørnene på brettet, mens angriperne forsøker å fange kongen.",
      "Vår versjon av Hnefatafl er håndlaget med tradisjonelle metoder og materialer for å gi en autentisk spillopplevelse. Hver brikke er nøye utskåret i bjørk og eik, og brettet er laget av solid lønnetre med innlagte mønster.",
    ],
    image: "/e5af0ce4fd6864b884598d1521ea93c5.jpg",
    players: "2",
    playTime: 30,
    difficulty: 3,
    materials:
      "Håndlaget brett i lønnetre med innlagte mønster. Brikker i bjørk og eik. Leveres i en elegant treboks med instruksjoner.",
  },
  {
    id: "2",
    title: "Sáhkku",
    slug: "sahkku",
    shortDescription: "Et tradisjonelt samisk brettspill med unike spilleregler",
    description: [
      "Sáhkku er et tradisjonelt samisk brettspill som har blitt spilt i generasjoner i de nordlige delene av Norge, Sverige og Finland. Dette spillet kombinerer strategi med elementer av flaks.",
      "Spillet spilles på et avlangt brett med tre rader, og hver spiller har sine egne brikker som flyttes basert på kast med spesielle terninger. Målet er å fange motstanderens brikker og være den første til å få alle dine brikker i mål.",
      "Vår versjon av Sáhkku er laget i samarbeid med samiske håndverkere for å sikre autentisitet og respekt for den kulturelle arven. Hver detalj er nøye utformet for å gjenskape den tradisjonelle spillopplevelsen.",
    ],
    image: "/db95be088a6bbe7a41efad5f5400c8cb.jpg",
    players: "2-3",
    playTime: 45,
    difficulty: 2,
    materials:
      "Brett i bjørk med tradisjonelle samiske mønstre. Brikker i reinsdyrhorn og bjørk. Håndlagde terninger. Leveres i en dekorert treboks med instruksjoner på norsk og samisk.",
  },
  {
    id: "3",
    title: "Mølle",
    slug: "molle",
    shortDescription: "Et klassisk strategispill med røtter tilbake til vikingtiden",
    description: [
      "Mølle (Nine Men's Morris) er et av verdens eldste brettspill, med funn som daterer tilbake til vikingtiden i Norge. Dette enkle men dype strategispillet har vært populært i hele Europa i århundrer.",
      'Spillet går ut på å plassere og flytte brikker på brettet for å danne "møller" - tre brikker på rad. Når en spiller danner en mølle, kan de fjerne en av motstanderens brikker. Målet er å redusere motstanderen til bare to brikker eller blokkere alle deres mulige trekk.',
      "Vår versjon av Mølle er håndlaget i massiv eik med innlagte linjer i valnøtt, som gir et elegant og holdbart spillbrett som kan vare i generasjoner.",
    ],
    image: "/6e799a9ed8fd5913b680ba01ccd9a2c7.jpg",
    players: "2",
    playTime: 20,
    difficulty: 2,
    materials:
      "Brett i massiv eik med innlagte linjer i valnøtt. Spillbrikker i eik og valnøtt. Leveres i en matchende treboks med instruksjoner.",
  },
  {
    id: "4",
    title: "Tablut",
    slug: "tablut",
    shortDescription: "En variant av Hnefatafl fra samisk tradisjon",
    description: [
      "Tablut er en spesifikk variant av Hnefatafl-familien av spill, som ble dokumentert av Carl von Linné under hans reise til Lappland i 1732. Dette spillet har sine røtter i samisk kultur og var et viktig tidfordriv i de lange vintermånedene.",
      "I likhet med Hnefatafl, representerer Tablut en ujevn kamp: den svenske kongen og hans forsvarere mot moskovittiske angripere. Kongen forsøker å rømme til et av de fire hjørnene, mens angriperne forsøker å fange kongen.",
      "Vår versjon av Tablut er basert på historiske kilder og er håndlaget med tradisjonelle materialer. Brettet er gravert med tradisjonelle mønstre, og brikkene er nøye utformet for å representere de ulike rollene i spillet.",
    ],
    image: "/tablut-wooden-game.png",
    players: "2",
    playTime: 40,
    difficulty: 3,
    materials:
      "Brett i lønnetre med inngravert mønster. Kongebrikke i bjørk med gulldetaljer. Forsvarere i bjørk og angripere i mørk eik. Leveres i en håndlaget treboks med historisk bakgrunn og instruksjoner.",
  },
  {
    id: "5",
    title: "Daldøs",
    slug: "daldos",
    shortDescription: "Et unikt norsk brettspill med røtter fra 1700-tallet",
    description: [
      "Daldøs er et tradisjonelt norsk brettspill med røtter tilbake til 1700-tallet, særlig populært langs vestkysten av Norge. Det er et av få brettspill som er unikt for norsk kultur.",
      "Spillet kombinerer strategi med flaks, der spillerne flytter brikker basert på kast med spesielle terninger. Målet er å fange motstanderens brikker og være den første til å få alle dine brikker i mål.",
      "Vår versjon av Daldøs er basert på historiske eksemplarer fra norske museer. Hver detalj er nøye gjenskapt for å gi en autentisk spillopplevelse, fra de spesielle terningene til det unike brettdesignet.",
    ],
    image: "/norwegian-daldos-board.png",
    players: "2",
    playTime: 30,
    difficulty: 2,
    materials:
      "Brett i furu med tradisjonelt design. Håndlagde terninger i bjørk. Spillbrikker i bjørk og furu. Leveres med detaljert historisk bakgrunn og spilleregler.",
  },
  {
    id: "6",
    title: "Nordisk Sjakk",
    slug: "nordisk-sjakk",
    shortDescription: "Håndlaget sjakkbrett med norrøne motiver og figurer",
    description: [
      "Vår Nordisk Sjakk er en unik tolkning av det klassiske sjakkspillet, inspirert av norrøn mytologi og vikingtidsestetikk. Dette er ikke bare et spill, men et kunstverk som bringer den rike nordiske kulturarven inn i det tidløse strategispillet.",
      "Hver brikke er håndskåret og representerer figurer fra norrøn mytologi: Odin som konge, Frigg som dronning, Heimdall som løper, vikingskip som tårn, berserkere som springere, og vikingkrigere som bønder.",
      "Brettet er laget av kontrasterende tresorter med innlagte detaljer som gjenspeiler tradisjonelle norrøne mønstre og symboler. Dette er et samleobjekt som vil imponere både sjakkelskere og de som verdsetter nordisk håndverk.",
    ],
    image: "/viking-chess.png",
    players: "2",
    playTime: 60,
    difficulty: 4,
    materials:
      "Brett i lønn og valnøtt med innlagte norrøne mønstre. Brikker håndskåret i lønn og valnøtt med detaljerte norrøne motiver. Leveres i en håndlaget treboks med fløyelsfôr og sertifikat på autentisitet.",
  },
]

// Mock data for FAQ items
const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "Hvordan kan jeg lære mer om et brettspill?",
    answer:
      "Du kan lære mer om våre brettspill ved å kontakte oss direkte via telefon, e-post eller kontaktskjemaet på nettsiden. Vi tilbyr også muligheten til å besøke vår butikk i Oslo sentrum for å se og prøve spillene.",
  },
  {
    id: "faq-2",
    question: "Arrangerer dere spillkvelder eller turneringer?",
    answer:
      "Ja, vi arrangerer regelmessige spillkvelder i vår butikk i Oslo, vanligvis hver torsdag kveld. Vi holder også turneringer i ulike tradisjonelle brettspill flere ganger i året. Følg med på vår blogg eller kontakt oss for mer informasjon om kommende arrangementer.",
  },
  {
    id: "faq-3",
    question: "Er spillene deres håndlagde?",
    answer:
      "Ja, alle våre brettspill er h��ndlagde av dyktige håndverkere som spesialiserer seg på trearbeid. Vi bruker tradisjonelle teknikker og høykvalitets materialer for å sikre at hvert spill er unikt og holdbart.",
  },
  {
    id: "faq-4",
    question: "Kan jeg få spilleregler på andre språk enn norsk?",
    answer:
      "Ja, vi tilbyr spilleregler på norsk, engelsk, svensk og dansk for alle våre spill. Hvis du trenger regler på et annet språk, kan vi i mange tilfeller tilby dette på forespørsel.",
  },
  {
    id: "faq-5",
    question: "Tilbyr dere personlig tilpasning av spillene?",
    answer:
      "Ja, vi tilbyr personlig tilpasning av mange av våre spill. Dette kan inkludere spesielle materialer, inngravert tekst eller logo, eller tilpassede farger. Kontakt oss for mer informasjon om personlig tilpasning.",
  },
  {
    id: "faq-6",
    question: "Hvordan vedlikeholder jeg brettspillene?",
    answer:
      "For å vedlikeholde dine trebrettspill, anbefaler vi å oppbevare dem i romtemperatur og unngå direkte sollys eller høy fuktighet. Bruk en myk, tørr klut for å fjerne støv. For dypere rengjøring, kan du bruke en lett fuktig klut og tørke umiddelbart etterpå. Vi anbefaler også å behandle treverket med bivoks eller spesiell treolje en gang i året for å bevare glansen og beskytte materialet.",
  },
  {
    id: "faq-7",
    question: "Har dere informasjon om spillenes historie?",
    answer:
      "Ja, vi har omfattende informasjon om historien bak hvert spill. Dette inkluderer opprinnelse, kulturell betydning og hvordan spillene har utviklet seg gjennom tidene. Denne informasjonen er tilgjengelig på våre produktsider, i vår blogg, og våre ansatte er alltid klare til å dele sin kunnskap når du besøker butikken vår.",
  },
  {
    id: "faq-8",
    question: "Kan jeg få demonstrasjon av hvordan man spiller?",
    answer:
      "Absolutt! Vi tilbyr demonstrasjoner av alle våre spill i butikken vår. Våre kunnskapsrike ansatte vil gjerne vise deg hvordan man spiller og svare på eventuelle spørsmål du måtte ha. Vi har også instruksjonsvideoer for noen av våre mest populære spill på vår nettside.",
  },
  {
    id: "faq-9",
    question: "Er spillene deres egnet for barn?",
    answer:
      "Mange av våre spill er egnet for barn, men aldersnivået varierer avhengig av spillets kompleksitet. Vi angir anbefalt alder for hvert spill på produktsiden. Generelt er spill som Mølle og enklere varianter av Hnefatafl egnet for barn fra 7-8 år, mens mer komplekse spill som Tablut kan være mer passende for eldre barn og tenåringer.",
  },
  {
    id: "faq-10",
    question: "Hvor kan jeg lære mer om nordiske brettspilltradisjoner?",
    answer:
      "Vi arrangerer regelmessige foredrag og workshops om nordiske brettspilltradisjoner. Du kan også finne artikler om dette temaet på vår blogg. For mer dyptgående informasjon anbefaler vi bøker som 'Nordic Board Games in History' og 'The Viking Game Heritage', som begge er tilgjengelige i vår butikk.",
  },
]

// Functions to get data
export async function getAllGames(): Promise<Game[]> {
  return games
}

export async function getPopularGames(): Promise<Game[]> {
  return games
}

export async function getGameBySlug(slug: string): Promise<Game | undefined> {
  return games.find((game) => game.slug === slug)
}

export async function getFaqItems(): Promise<FaqItem[]> {
  return faqItems
}
