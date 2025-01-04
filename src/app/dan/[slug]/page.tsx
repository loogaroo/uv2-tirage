import Image from "next/image";
import Link from 'next/link';

// Types de données
type Mouvement = {
  name: string;
  yid: string;
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
          { name: "Haraï-goshi", yid: "qTo8HlAAkOo" },
          { name: "kubi-nage", yid: "" },
          { name: "koshi-guruma", yid: "SU7Id6uVJ44" },
          { name: "o-goshi", yid: "yhu1mfy2vJ4" },
          { name: "tsurikomi-goshi", yid: "McfzA0yRVt4" },
          { name: "uchi-mata (forme hanche)", yid: "iUpSu5J-bgw" },
          { name: "uki-goshi", yid: "bPKwtB4lyOQ" },
        ],
      },
      {
        name: "Ashi-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "De-ashi-baraï (haraï)", yid: "4BUUvqxi_Kk" },
          { name: "Hiza-guruma", yid: "JPJx9-oAVns" },
          { name: "Sasae-tsurikomi-ashi", yid: "699i--pvYmE" },
          { name: "Ko-soto-gari", yid: "jeQ541ScLB4" },
          { name: "Ko-uchi-gari", yid: "3Jb3tZvr9Ng" },
          { name: "Okuri-ashi-baraï (haraï)", yid: "nw1ZdRjrdRI" },
          { name: "O-soto-gari", yid: "c-A_nP7mKAc" },
          { name: "O-uchi-gari", yid: "0itJFhV9pDQ" },
          { name: "Uchi-mata", yid: "iUpSu5J-bgw" },
        ],
      },
      {
        name: "Te-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Ippon-seoi-nage", yid: "FQnOlCxo4oI" },
          { name: "Kata-guruma", yid: "cnHRhSy8yi4" },
          { name: "Uki-otoshi", yid: "6H5tmncOY4Q" },
          { name: "Tai-otoshi", yid: "4x6S3Q-Ktv8" },
          { name: "Morote-seoi-nage", yid: "" },
        ],
      },
      {
        name: "Sutemi-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Sumi-gaeshi", yid: "5VhduA5xkbA" },
          { name: "Tomoe-nage", yid: "880WbHvHv6A" },
        ],
      },
      {
        name: "Osaekomi-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Hon-gesa-gatame", yid: "NDaQuJOFBYk" },
          { name: "Kami-shiho-gatame", yid: "HFuMjOv0WN8" },
          { name: "Yoko-shiho-gatame", yid: "TT7XJVSEQxA" },
          { name: "Tate-shiho-gatame", yid: "55-rFmBx53g" },
          { name: "Ushiro-gesa-gatame", yid: "SBapox2M2dE" },
        ],
      },
      {
        name: "Shime-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Gyaku-juji-jime", yid: "t3tQriIPdlI" },
          { name: "Hadaka-jime", yid: "9f0n8jez7iA" },
          { name: "Kata-juji-jime", yid: "3VZVUAmiMD8" },
          { name: "Nami-juji-jime", yid: "k2cHry9HByQ" },
          { name: "Okuri-eri-jime", yid: "EiqyoVcIAi8" },
        ],
      },
      {
        name: "Kansetsu-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Ude-hishigi-juji-gatame", yid: "OWgSOlCuMXw" },
          { name: "Ude-hishigi-ude-gatame", yid: "SBf0aTma1VIB" },
          { name: "Ude-garami", yid: "AIlTvZb4RlE" },
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
          { name: "Hane-goshi", yid: ""},
          { name: "Sode-tsurikomi-goshi", yid: "" },
          { name: "Tsuri-goshi", yid: "" },
        ],
      },
      {
        name: "Ashi-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "O-guruma", yid: "" },
          { name: "Ashi-guruma", yid: "" },
          { name: "Ko-soto-gake" , yid: ""},
          { name: "O-soto-otoshi", yid: "" },
          { name: "Tsubame-gaeshi", yid: "" },
        ],
      },
      {
        name: "Te-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Eri-seoi-nage", yid: "" },
          { name: "Te-guruma", yid: "" },
          { name: "Morote-gari", yid: "" },
          { name: "Kuchiki-taoshi", yid: "" },
        ],
      },
      {
        name: "Sutemi-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Ura-nage", yid: "" },
          { name: "Tani-otoshi", yid: ""  },
          { name: "Yoko-guruma", yid: ""  },
          { name: "Yoko-gake", yid: ""  },
          { name: "Ko-uchi-makikomi", yid: ""  },
          { name: "Yoko-tomoe-nage", yid: ""  },
          { name: "Uki-waza", yid: ""  },

        ],
      },
      {
        name: "Osaekomi-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Kuzure-kami-shiho-gatame", yid: ""  },
          { name: "Kuzure-gesa-gatame", yid: ""  },
          { name: "Kuzure-tate-shiho-gatame", yid: ""  },
          { name: "Kuzure-yoko-shiho-gatame", yid: ""  },
        ],
      },
      {
        name: "Shime-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Sankaku-jime", yid: ""  },
          { name: "Kata-ha-jime", yid: ""  },
          { name: "Kata-te-jime", yid: ""  },
          { name: "Sode-guruma-jime", yid: ""  },
        ],
      },
      {
        name: "Kansetsu-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Ude-hishigi-hiza-gatame", yid: ""  },
          { name: "Ude-hishigi-waki-gatame", yid: ""  },
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
          { name: "Utsuri-goshi", yid: ""  },
          { name: "Ushiro-goshi", yid: ""  },
        ],
      },
      {
        name: "Ashi-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Haraï-tsurikomi-ashi", yid: ""  },
          { name: "O-soto-guruma", yid: ""  },
          { name: "O-soto-gaeshi", yid: ""  },
        ],
      },
      {
        name: "Te-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Sumi-otoshi", yid: ""  },
          { name: "Kibisu-gaeshi", yid: ""  },
          { name: "Uchi-mata-sukashi", yid: ""  },
          { name: "Sukui-nage", yid: ""  },
          { name: "Yama-arashi", yid: ""  },
          { name: "Seoi otoshi", yid: ""  },
        ],
      },
      {
        name: "Sutemi-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Soto-makikomi", yid: ""  },
          { name: "Harai-makikomi", yid: ""  },
          { name: "Yoko-wakare", yid: ""  },
          { name: "Yoko-otoshi", yid: ""  },
          { name: "Tawara-gaeshi", yid: ""  },
          { name: "Daki-wakare", yid: ""  },

        ],
      },
      {
        name: "Osaekomi-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Makura-gesa-gatame", yid: ""  },
          { name: "Kata-gatame", yid: ""  },
        ],
      },
      {
        name: "Shime-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Morote-jime", yid: ""  },
          { name: "Tsukkomi-jime", yid: ""  },
          { name: "Ashi-gatame-jime", yid: ""  },
          { name: "Ryo-te-jime", yid: ""  },
        ],
      },
      {
        name: "Kansetsu-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Ude-hishigi-ashi-gatame", yid: ""  },
          { name: "Ude-hishigi-sankaku-gatame", yid: ""  },
          { name: "Ude-hishigi-hara-gatame", yid: ""  },
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
          <>
          <li className="flex" key={index}>
            {(movement.yid!='') ? (
              <>
                <Image
                  aria-hidden
                  src="../video.svg"
                  alt="{movement.name}"
                  width={16}
                  height={16}
                />
              <Link target={"_new"} href={"https://www.youtu"+"be.com/watch?v="+movement.yid}>&nbsp;
                {movement.name}
              </Link>
              </>
            ):(
              <>
              {movement.name}
              </>
            )}
          </li>
        </>
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
            src="../globe.svg"
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
            src="../globe.svg"
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
            src="../globe.svg"
            alt="Emmanuel FAIVRE"
            width={16}
            height={16}
          />
          Emmanuel FAIVRE
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/loogaroo/uv2-tirage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="../globe.svg"
            alt="Code source"
            width={16}
            height={16}
          />
          Code source
        </a>
      </footer>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = ['1','2','3'];
  return posts.map((post) => ({
    slug: post,
  })
 )
}

export default Tirage;