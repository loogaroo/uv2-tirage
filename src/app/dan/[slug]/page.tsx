import Image from "next/image";
import Link from 'next/link'

export default async function Dan({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug;

    const drawRandomElements = <T,>(array: T[], n: number): T[] => {
      if (n > array.length) {
        throw new Error("The number of elements to draw exceeds the array size.");
      }
  
      const shuffledArray = [...array];
  
      // Fisher-Yates shuffle algorithm
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
  
      return shuffledArray.slice(0, n);
    };

    const drawFromMultipleArrays = <T,>(arrays: T[][], maxTotal: number): T[] => {
      let results: T[] = [];
      
      // Step 1: Draw one element from each array to ensure minimum selection
      arrays.forEach(array => {
        if (array.length > 0) {
          const drawn = drawRandomElements(array, 1);
          results = results.concat(drawn);
        }
      });
  
      // Step 2: Draw additional elements randomly until reaching maxTotal
      const remainingSlots = maxTotal - results.length;
      if (remainingSlots > 0) {
        // Flatten the arrays and filter out already selected items
        const remainingElements = arrays.flat().filter(el => !results.includes(el));
        
        // Shuffle and select additional elements if needed
        const additionalDraw = drawRandomElements(remainingElements, remainingSlots);
        results = results.concat(additionalDraw);
      }
  
      return results;
    };

    const tirage = function(dan) {
      const mouvement=[];
      mouvement[1]=[];
      
      mouvement[1]['Nage-Waza']=[];

      mouvement[1]['Nage-Waza']['KOSHI-WASA']=[
            "haraï-goshi",
            "kubi-nage",
            "koshi-guruma",
            "o-goshi",
            "tsurikomi-goshi",
            "uchi-mata (forme hanche)",
            "uki-goshi"
      ];
      mouvement[1]['Nage-Waza']['TE-WAZA']=[
        "ippon-seoi-nage",
        "kata-guruma",
        "uki-otoshi",
        "tai-otoshi",
        "morote-seoi-nage",
      ];
      mouvement[1]['Nage-Waza']['ASHI-WAZA']=[
        "de-ashi-baraï (haraï)",
        "hiza-guruma",
        "sasae-tsurikomi-ashi",
        "ko-soto-gari",
        "ko-uchi-gari",
        "okuri-ashi-baraï (haraï)",
        "o-soto-gari",
        "o-uchi-gari",
        "uchi-mata (forme jambe)",
      ];
      mouvement[1]['Nage-Waza']['SUTEMI-WAZA']=[
        "sumi-gaeshi",
        "tomoe-nage"
      ];
      mouvement[1]['Ne-Waza']=[];
      mouvement[1]['Ne-Waza']['OSAEKOMI-WAZA']=[
        "hon-gesa-gatame",
        "kami-shiho-gatame",
        "yoko-shiho-gatame",
        "tate-shiho-gatame",
        "ushiro-gesa-gatame"
      ];

      mouvement[1]['Ne-Waza']['SHIME-WAZA']=[
        "gyaku-juji-jime",
        "hadaka-jime",
        "kata-juji-jime",
        "nami-juji-jime",
        "okuri-eri-jime"
      ];
      mouvement[1]['Ne-Waza']['KANSETSU-WAZA']=[
        "ude-hishigi-juji-gatame",
        "ude-hishigi-ude-gatame",
        "ude-garami"
      ];

      mouvement[2]=[];
      
      mouvement[2]['Nage-Waza']=[];

      mouvement[2]['Nage-Waza']['KOSHI-WASA']=[
            "hane-goshi",
            "sode-tsurikomi-goshi",
            "tsuri-goshi"
      ];
      mouvement[2]['Nage-Waza']['TE-WAZA']=[
        "eri-seoi-nage",
        "te-guruma",
        "morote-gari",
        "kuchiki-taoshi"
      ];
      mouvement[2]['Nage-Waza']['ASHI-WAZA']=[
        "o-guruma",
        "ashi-guruma",
        "ko-soto-gake",
        "o-soto-otoshi",
        "tsubame-gaeshi"
      ];
      mouvement[2]['Nage-Waza']['SUTEMI-WAZA']=[
        "ura-nage",
        "tani-otoshi",
        "yoko-guruma",
        "yoko-gake",
        "Ko-uchi-makikomi",
        "yoko-tomoe-nage",
        "uki-waza"
      ];
      mouvement[2]['Ne-Waza']=[];
      mouvement[2]['Ne-Waza']['OSAEKOMI-WAZA']=[
        "kuzure-kami-shiho-gatame",
        "kuzure-gesa-gatame",
        "kuzure-tate-shiho-gatame",
        "kuzure-yoko-shiho-gatame"
      ];

      mouvement[2]['Ne-Waza']['SHIME-WAZA']=[
        "sankaku-jime",
        "kata-ha-jime",
        "kata-te-jime",
        "sode-guruma-jime",
      ];
      mouvement[2]['Ne-Waza']['KANSETSU-WAZA']=[
        "ude-hishigi-hiza-gatame",
        "ude-hishigi-waki-gatame"
      ];

      mouvement[3]=[];
      
      mouvement[3]['Nage-Waza']=[];

      mouvement[3]['Nage-Waza']['KOSHI-WASA']=[
            "utsuri-goshi",
            "ushiro-goshi"
      ];
      mouvement[3]['Nage-Waza']['TE-WAZA']=[
        "sumi-otoshi",
        "kibisu-gaeshi",
        "uchi-mata-sukashi",
        "sukui-nage",
        "yama-arashi",
        "seoi otoshi"
      ];
      mouvement[3]['Nage-Waza']['ASHI-WAZA']=[
        "haraï-tsurikomi-ashi",
        "o-soto-guruma",
        "o-soto-gaeshi",
      ];
      mouvement[3]['Nage-Waza']['SUTEMI-WAZA']=[
        "soto-makikomi",
        "harai-makikomi",
        "yoko-wakare",
        "yoko-otoshi",
        "tawara-gaeshi",
        "daki-wakare"
      ];
      mouvement[3]['Ne-Waza']=[];
      mouvement[3]['Ne-Waza']['OSAEKOMI-WAZA']=[
        "makura-gesa-gatame",
        "kata-gatame"
      ];

      mouvement[3]['Ne-Waza']['SHIME-WAZA']=[
        "morote-jime",
        "tsukkomi-jime",
        "ashi-gatame-jime",
        "ryo-te-jime"
      ];
      mouvement[3]['Ne-Waza']['KANSETSU-WAZA']=[
        "ude-hishigi-ashi-gatame",
        "ude-hishigi-sankaku-gatame",
        "ude-hishigi-hara-gatame"
      ];

      const resultNageWaza = drawFromMultipleArrays(
        [
          mouvement[dan]['Nage-Waza']['KOSHI-WASA'], 
          mouvement[dan]['Nage-Waza']['TE-WAZA'], 
          mouvement[dan]['Nage-Waza']['ASHI-WAZA'], 
          mouvement[dan]['Nage-Waza']['SUTEMI-WAZA']
        ], 
        6);
      const resultNeWaza = drawFromMultipleArrays(
          [
            mouvement[dan]['Ne-Waza']['OSAEKOMI-WAZA'], 
            mouvement[dan]['Ne-Waza']['SHIME-WAZA'], 
            mouvement[dan]['Ne-Waza']['KANSETSU-WAZA']
          ], 
          4);
      return {'Nage-Waza': resultNageWaza, 'Ne-Waza': resultNeWaza};
  }

  const list= tirage(slug);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Tirage UV2 pour le {slug} Dan</h1>
        <div>Listes des mouvements à présenter</div>
        {(slug==2 || slug==3) && (
          <div>Pour le 2ème et 3ème Dan, il faut demander les 2 premiers en Nage-Waza et les 2 premiers en Ne-Waza. Les suivants seront utilisés si le candidat a présenté un mouvement dans sa prestation</div>
        )}
        <div>
        <ul>
          <li key="nage">
              <strong>Nage-Waza</strong>
              <ul>
              {list['Nage-Waza'].map((element, index) => (
                <li key={index}>{String(element)}</li>
              ))}
              </ul>
              <br />
            </li>
            <li key="ne">
              <strong>Ne-Waza</strong>
              <ul>
                 {list['Ne-Waza'].map((element, index) => (
                  <li key={index}>{String(element)}</li>
                  ))}
               </ul>
            </li>
          </ul>
        </div>
        <Link href="/"><strong>Nouveau tirage</strong></Link>
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
