export interface Product {
  name: string;
  slug: string;
  style: string;
  price: string;
  priceNum: number;
  image: string;
  label: string;
  abv: string;
  volume: string;
  description: string;
  bitterness: number;
  ingredients: string[];
  pairings: string[];
}

export const products: Product[] = [
  {
    name: "Rødskjæret",
    slug: "rodskjaeret",
    style: "Golden Ale",
    price: "89 kr",
    priceNum: 89,
    image: "/images/Untitled (1).png",
    label:
      "/images/84058829_2578087115813896_6050921824080887808_n-Rodskjaeret-fra-Allan-31012020.png",
    abv: "4.2%",
    volume: "330ml",
    description:
      "Rødskjæret er vår hyllest til det første dagslyset over Atlanterhavsveien. En lett og forfriskende Golden Ale brygget på lokalt kildevann fra Averøy. Myke maltkarakterer av kjeks og honning balanseres elegant av en fin humlebitterhet. Perfekt følgesvenn til en lang sommerkveld ved sjøen, eller rett og slett når du trenger noe enkelt og godt.",
    bitterness: 22,
    ingredients: [
      "Pilsnermalt",
      "Caramalt",
      "Cascade-humle",
      "Saaz-humle",
      "Engelsk ale-gjær",
    ],
    pairings: [
      "Grillet fisk",
      "Kyllingsalat",
      "Brunost",
      "Reker med aioli",
    ],
  },
  {
    name: "Atlantic Ocean",
    slug: "atlantic-ocean",
    style: "India Pale Ale",
    price: "95 kr",
    priceNum: 95,
    image: "/images/beer-bottle.png",
    label:
      "/images/84058829_2578087115813896_6050921824080887808_n-Rodskjaeret-fra-Allan-31012020(1).png",
    abv: "4.7%",
    volume: "330ml",
    description:
      "Inspirert av de ville bølgetoppene som slår mot kysten vår, er Atlantic Ocean en moderne IPA med tropisk og sitrusaktig humlekarakter. Citra- og Mosaic-humle gir intense aromaer av mango, pasjonsfrukt og grapefrukt, mens en solid maltbase holder alt i balanse. Brygget for de som vil kjenne kraften fra havet i hvert slurk.",
    bitterness: 45,
    ingredients: [
      "Pale Ale-malt",
      "Munich-malt",
      "Citra-humle",
      "Mosaic-humle",
      "Amerikansk ale-gjær",
    ],
    pairings: [
      "Spicy thaimat",
      "Burger med cheddar",
      "Nachos med guacamole",
      "Sterk ost",
    ],
  },
  {
    name: "Hårfagres",
    slug: "haarfagres",
    style: "Dobbeltbokk",
    price: "109 kr",
    priceNum: 109,
    image: "/images/Adobe Express - file (7).png",
    label:
      "/images/d7cb9816-6664-42b7-ba06-025a46c630e5_rw_1920.png",
    abv: "8.0%",
    volume: "330ml",
    description:
      "Oppkalt etter Harald Hårfagre, Norges første eneveldskonge, er dette en majestetisk Dobbeltbokk med dype toner av karamell, mørkt brød og tørkede frukter. Lagret i flere måneder for å utvikle en silkemyk kropp og kompleks smaksprofil. En øl som krever respekt og tid — la den varmes litt i glasset og opplev hvordan smakene utfolder seg lag for lag.",
    bitterness: 28,
    ingredients: [
      "Munich-malt",
      "Pilsnermalt",
      "Melanoidinmalt",
      "CaraMunich",
      "Hallertau Mittelfrüh-humle",
      "Lagergjær",
    ],
    pairings: [
      "Langtidsstekt lam",
      "Brunost og flatbrød",
      "Sjokoladekake",
      "Kraftig gryterett",
    ],
  },
  {
    name: "Bærtur",
    slug: "baertur",
    style: "Surøl",
    price: "99 kr",
    priceNum: 99,
    image: "/images/beer-bottle.png",
    label:
      "/images/ed275660-9c21-456b-bf42-414cb255c265_rw_1920.png",
    abv: "9%",
    volume: "330ml",
    description:
      "Bærtur tar deg med på en sensorisk vandring gjennom norske bærmarker. Denne surølen er brygget med villgjær og tilsatt lokale bær fra Nordmøre, noe som gir en delikat syrlighet balansert med naturlig sødme. Komplekse toner av bringebær, rips og en anelse eik gjør dette til en helt unik ølopplevelse. Perfekt for deg som søker noe utenom det vanlige.",
    bitterness: 8,
    ingredients: [
      "Pilsnermalt",
      "Hvetemalt",
      "Surmaltet bygg",
      "Villgjær (Brettanomyces)",
      "Lokale bær fra Nordmøre",
      "Aged humle",
    ],
    pairings: [
      "Dessert med bær",
      "Chèvre og honning",
      "Salat med geiteost",
      "Bruschetta med jordbær",
    ],
  },
  {
    name: "Lokis Horn",
    slug: "lokis-horn",
    style: "Dobbel IPA - Glutenfri",
    price: "105 kr",
    priceNum: 105,
    image: "/images/beer-bottle.png",
    label:
      "/images/163820552_3801168729919714_4711578557471586681_n.jpg",
    abv: "7.5%",
    volume: "330ml",
    description:
      "Lokis Horn er like uforutsigbar og kraftfull som guden den er oppkalt etter. En Dobbel IPA brygget helt uten gluten, men med full smak og karakter. Massive mengder Simcoe- og Amarillo-humle gir eksplosive aromaer av furu, sitrus og steinfrukt, mens den høye alkoholen varmer behagelig. Bevis på at glutenfritt ikke betyr smaksfritt.",
    bitterness: 72,
    ingredients: [
      "Glutenfri havremalt",
      "Bokhvetemalt",
      "Hirsmalt",
      "Simcoe-humle",
      "Amarillo-humle",
      "Columbus-humle",
      "Amerikansk ale-gjær",
    ],
    pairings: [
      "BBQ-ribs",
      "Sterk chili",
      "Blåmuggost",
      "Grillet entrecôte",
    ],
  },
  {
    name: "Kjøkjin",
    slug: "kjokjin",
    style: "Alkoholfri",
    price: "75 kr",
    priceNum: 75,
    image: "/images/beer-bottle.png",
    label:
      "/images/9b02b2eb-5c95-4808-8863-8f158200b8a5_rw_1920.png",
    abv: "0.0%",
    volume: "330ml",
    description:
      "Kjøkjin er det lokale Averøy-ordet for kjøkken, og denne alkoholfrie ølen er like hjemmekoselig som navnet tilsier. Brygget med samme omhu og råvarekvalitet som våre alkoholholdige øl, men skånsomt behandlet for å fjerne alkoholen uten å miste smaken. Lette toner av korn, blomster og sitrus gjør Kjøkjin til den perfekte hverdagsølen — når du vil nyte en øl uten prosenter.",
    bitterness: 15,
    ingredients: [
      "Pilsnermalt",
      "Carapils",
      "Saaz-humle",
      "Hallertau Blanc-humle",
      "Spesiell alkoholfri-gjær",
    ],
    pairings: [
      "Hverdagsmiddag",
      "Lunsj med venner",
      "Pizza",
      "Lett salat",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  const filtered = products.filter((p) => p.slug !== slug);
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
