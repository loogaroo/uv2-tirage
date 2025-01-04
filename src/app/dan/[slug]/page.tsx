import Image from "next/image";
import Link from 'next/link';


// Types de données
type Mouvement = {
  name: string;
};

type Famille = {
  name: string;
  level: string; // "Nage-Waza" ou "Ne-Waza"
  mouvements: Mouvement[];
};

type Dan = {
  id: number;
  name: string;
  familles: Famille[];
};

// Exemple de données pour différents niveaux de Dan
const allDans: Dan[] = [
  {
    id: 1,
    name: "1er Dan",
    familles: [
      {
        name: "Koshi-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Haraï-goshi" },
          { name: "kubi-nage" },
          { name: "koshi-guruma" },
          { name: "o-goshi" },
          { name: "tsurikomi-goshi" },
          { name: "uchi-mata (forme hanche)" },
          { name: "uki-goshi" },
        ],
      },
      {
        name: "Ashi-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "De-ashi-baraï (haraï)" },
          { name: "Hiza-guruma" },
          { name: "Sasae-tsurikomi-ashi" },
          { name: "Ko-soto-gari" },
          { name: "Ko-uchi-gari" },
          { name: "Okuri-ashi-baraï (haraï)" },
          { name: "O-soto-gari" },
          { name: "O-uchi-gari" },
          { name: "Uchi-mata" },
        ],
      },
      {
        name: "Te-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Ippon-seoi-nage" },
          { name: "Kata-guruma" },
          { name: "Uki-otoshi" },
          { name: "Tai-otoshi" },
          { name: "Morote-seoi-nage" },
        ],
      },
      {
        name: "Sutemi-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Sumi-gaeshi" },
          { name: "Tomoe-nage" },
        ],
      },
      {
        name: "Osaekomi-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Hon-gesa-gatame" },
          { name: "Kami-shiho-gatame" },
          { name: "Yoko-shiho-gatame" },
          { name: "Tate-shiho-gatame" },
          { name: "Ushiro-gesa-gatame" },
        ],
      },
      {
        name: "Shime-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Gyaku-juji-jime" },
          { name: "Hadaka-jime" },
          { name: "Kata-juji-jime" },
          { name: "Nami-juji-jime" },
          { name: "Okuri-eri-jime" },
        ],
      },
      {
        name: "Kansetsu-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Ude-hishigi-juji-gatame" },
          { name: "Ude-hishigi-ude-gatame" },
          { name: "Ude-garami" },
        ],
      },
    ],
  },
  // Tu peux ajouter d'autres niveaux de Dan ici (ex: Dan 2, Dan 3, etc.)
  {
    id: 2,
    name: "2e Dan",
    familles: [
      {
        name: "Koshi-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Hane-goshi" },
          { name: "Sode-tsurikomi-goshi" },
          { name: "Tsuri-goshi" },
        ],
      },
      {
        name: "Ashi-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "O-guruma" },
          { name: "Ashi-guruma" },
          { name: "Ko-soto-gake" },
          { name: "O-soto-otoshi" },
          { name: "Tsubame-gaeshi" },
        ],
      },
      {
        name: "Te-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Eri-seoi-nage" },
          { name: "Te-guruma" },
          { name: "Morote-gari" },
          { name: "Kuchiki-taoshi" },
        ],
      },
      {
        name: "Sutemi-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Ura-nage" },
          { name: "Tani-otoshi" },
          { name: "Yoko-guruma" },
          { name: "Yoko-gake" },
          { name: "Ko-uchi-makikomi" },
          { name: "Yoko-tomoe-nage" },
          { name: "Uki-waza" },

        ],
      },
      {
        name: "Osaekomi-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Kuzure-kami-shiho-gatame" },
          { name: "Kuzure-gesa-gatame" },
          { name: "Kuzure-tate-shiho-gatame" },
          { name: "Kuzure-yoko-shiho-gatame" },
        ],
      },
      {
        name: "Shime-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Sankaku-jime" },
          { name: "Kata-ha-jime" },
          { name: "Kata-te-jime" },
          { name: "Sode-guruma-jime" },
        ],
      },
      {
        name: "Kansetsu-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Ude-hishigi-hiza-gatame" },
          { name: "Ude-hishigi-waki-gatame" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "3e Dan",
    familles: [
      {
        name: "Koshi-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Utsuri-goshi" },
          { name: "Ushiro-goshi " },
        ],
      },
      {
        name: "Ashi-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Haraï-tsurikomi-ashi" },
          { name: "O-soto-guruma" },
          { name: "O-soto-gaeshi" },
        ],
      },
      {
        name: "Te-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Sumi-otoshi" },
          { name: "Kibisu-gaeshi " },
          { name: "Uchi-mata-sukashi" },
          { name: "Sukui-nage" },
          { name: "Yama-arashi" },
          { name: "Seoi otoshi" },
        ],
      },
      {
        name: "Sutemi-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Soto-makikomi" },
          { name: "Harai-makikomi" },
          { name: "Yoko-wakare" },
          { name: "Yoko-otoshi" },
          { name: "Tawara-gaeshi" },
          { name: "Daki-wakare" },

        ],
      },
      {
        name: "Osaekomi-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Makura-gesa-gatame" },
          { name: "Kata-gatame" },
        ],
      },
      {
        name: "Shime-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Morote-jime" },
          { name: "Tsukkomi-jime" },
          { name: "Ashi-gatame-jime" },
          { name: "Ryo-te-jime" },
        ],
      },
      {
        name: "Kansetsu-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Ude-hishigi-ashi-gatame" },
          { name: "Ude-hishigi-sankaku-gatame" },
          { name: "Ude-hishigi-hara-gatame" },
        ],
      },
    ],
  },
];

// Fonction pour tirer des mouvements
function drawRandomMovements(
  familles: Famille[],
  total: number
): Mouvement[] {
  const selectedMovements: Mouvement[] = [];

  // Tirage d'un mouvement par famille (minimum)
  familles.forEach((famille) => {
    const randomIndex = Math.floor(Math.random() * famille.mouvements.length);
    selectedMovements.push(famille.mouvements[randomIndex]);
  });

  // Calcul du nombre restant à tirer pour atteindre `total`
  //const remaining = total - selectedMovements.length;

  // Regroupe tous les mouvements des familles disponibles
  const allMovements = familles.flatMap((famille) => famille.mouvements);

  // Mélange le tableau allMovements pour le tirage
  for (let i = allMovements.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allMovements[i], allMovements[j]] = [allMovements[j], allMovements[i]];
  }

  // Tirage des mouvements restants
  let i = 0;
  while (selectedMovements.length < total && i < allMovements.length) {
    const movement = allMovements[i];
    if (!selectedMovements.includes(movement)) {
      selectedMovements.push(movement);
    }
    i++;
  }

  return selectedMovements;
}

async function Tirage({
  params,
}: {
params: Promise<{ slug: string }>
}) {
const { slug } = await params;
const danInt = parseInt(slug);
const dan = allDans[danInt-1];

  // Filtrer les familles selon le niveau "Nage-Waza" et "Ne-Waza" en utilisant `dan`
  const nageWazaFamilies = dan.familles.filter(
     (famille) => famille.level === "Nage-Waza"
  );
  
  const neWazaFamilies = dan.familles.filter(
    (famille) => famille.level === "Ne-Waza"
  );

  // Tirage des mouvements pour chaque niveau
  const nageWazaMovements = drawRandomMovements(nageWazaFamilies, 6);
  const neWazaMovements = drawRandomMovements(neWazaFamilies, 4);


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tirage alétoire UV2</h1>
    <div>
      <strong>Tirage de Mouvements pour le {dan.name}</strong>
    <br />
    {(danInt==2 || danInt==3) && (
      <>
      <br />
      <span>Seul les 2 premiers mouvements en Nage-Waza et en Ne-Waza sont demandés, les suivants sont là si le candidat a présenté un ou plusieurs mouvements lors de la prestation</span>
      <br />
      </>
    )}
    <span></span>
    <br />
      <h2><strong>Mouvements Nage-Waza</strong></h2>
      <ul>
        {nageWazaMovements.map((movement, index) => (
          <li key={index}>{movement.name}</li>
        ))}
      </ul>
      <br />
      <br />
      <h2><strong>Mouvements Ne-Waza</strong></h2>
      <ul>
        {neWazaMovements.map((movement, index) => (
          <li key={index}>{movement.name}</li>
        ))}
      </ul>
    </div>
            
    <div><Link href="/" className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">Nouveau tirage</Link></div>
    </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.ffjudo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="France Judo"
            width={16}
            height={16}
          />
          France Judo
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.cnjudo.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Judo Nancy"
            width={16}
            height={16}
          />
          judo Nancy
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://manu.faiv.re/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Emmanuel FAIVRE"
            width={16}
            height={16}
          />
          Emmanuel FAIVRE
        </a>
      </footer>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = ['1','2','3'];
  return posts.map((post) => ({
    slug: post,
  }))
}

//export const getStaticPaths = async () => {
//  const posts = ['1','2','3'];
//  const paths = posts.map((post) => ({
//    params: { slug: post },
//  }));
//  return {
//    paths,
//    fallback: false, // Set to true if you want to enable incremental static regeneration (ISR)
//  };
//};

export default Tirage;