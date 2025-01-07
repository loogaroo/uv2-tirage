'use client'

import React, { useState, useRef } from 'react';
import Image from "next/image";
import Link from 'next/link'
import Footer from './Footer';

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
          { name: "Morote-seoi-nage", yid: "zIq0xI0ogxk" },
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
          { name: "Hane-goshi", yid: "M9_7De6A1kk"},
          { name: "Sode-tsurikomi-goshi", yid: "QsmAxpmYLOI" },
          { name: "Tsuri-goshi", yid: "51Htlp7xEvE" },
        ],
      },
      {
        name: "Ashi-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "O-guruma", yid: "SnZciTAY9vc" },
          { name: "Ashi-guruma", yid: "ROeayhvom9U" },
          { name: "Ko-soto-gake" , yid: "8b6kY4s4zH4"},
          { name: "O-soto-otoshi", yid: "2DsVvDw7b8g" },
          { name: "Tsubame-gaeshi", yid: "2DsVvDw7b8g" },
        ],
      },
      {
        name: "Te-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Eri-seoi-nage", yid: "" },
          { name: "Te-guruma", yid: "" },
          { name: "Morote-gari", yid: "BHLQS4K85bs" },
          { name: "Kuchiki-taoshi", yid: "ZNL47q1aJNY" },
        ],
      },
      {
        name: "Sutemi-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Ura-nage", yid: "Fgi9b8DJ5sQ" },
          { name: "Tani-otoshi", yid: "3b9Me3Fohpk"  },
          { name: "Yoko-guruma", yid: "MehP6I5cY2c"  },
          { name: "Yoko-gake", yid: "tP1Sj1uDfSo"  },
          { name: "Ko-uchi-makikomi", yid: "_1eygIXLD_w"  },
          { name: "Yoko-tomoe-nage", yid: ""  },
          { name: "Uki-waza", yid: "weVOpJ63gII"  },

        ],
      },
      {
        name: "Osaekomi-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Kuzure-kami-shiho-gatame", yid: "YUrogQWdwiY"  },
          { name: "Kuzure-gesa-gatame", yid: "Q2fb9jaoUFQ"  },
          { name: "Kuzure-tate-shiho-gatame", yid: ""  },
          { name: "Kuzure-yoko-shiho-gatame", yid: ""  },
        ],
      },
      {
        name: "Shime-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Sankaku-jime", yid: "lq1CUBRAm7s"  },
          { name: "Kata-ha-jime", yid: "yaTGgRjnwB8"  },
          { name: "Kata-te-jime", yid: "cHeIs-fSqwE"  },
          { name: "Sode-guruma-jime", yid: "E3nvQzClcAU"  },
        ],
      },
      {
        name: "Kansetsu-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Ude-hishigi-hiza-gatame", yid: "H2HtAJdiJcE"  },
          { name: "Ude-hishigi-waki-gatame", yid: "8F5p1zuJRG0"  },
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
          { name: "Utsuri-goshi", yid: "4pQd_bEnlf0"  },
          { name: "Ushiro-goshi", yid: "ORIYstuxYT8"  },
        ],
      },
      {
        name: "Ashi-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Haraï-tsurikomi-ashi", yid: "gGPXvWL8VbE"  },
          { name: "O-soto-guruma", yid: "92KbCm6pQeI"  },
          { name: "O-soto-gaeshi", yid: "8ZjM3X_EANo"  },
        ],
      },
      {
        name: "Te-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Sumi-otoshi", yid: "lLU9wv52ni0"  },
          { name: "Kibisu-gaeshi", yid: "tJylJYfBliA"  },
          { name: "Uchi-mata-sukashi", yid: "V-RS3uhtVWM"  },
          { name: "Sukui-nage", yid: "vU6aJ2kFxoI"  },
          { name: "Yama-arashi", yid: "MGlyKmSuzdc"  },
          { name: "Seoi otoshi", yid: "vu1TMVNnq34"  },
        ],
      },
      {
        name: "Sutemi-Waza",
        level: "Nage-Waza",
        mouvements: [
          { name: "Soto-makikomi", yid: "bWG9O1BVKtQ"  },
          { name: "Harai-makikomi", yid: "VBaHzKaCXss"  },
          { name: "Yoko-wakare", yid: "bp1tscHlePI"  },
          { name: "Yoko-otoshi", yid: "MnNG67pF_a0"  },
          { name: "Tawara-gaeshi", yid: "TmTWgrmViZc"  },
          { name: "Daki-wakare", yid: "Hr0cOMGBDYo"  },

        ],
      },
      {
        name: "Osaekomi-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Makura-gesa-gatame", yid: ""  },
          { name: "Kata-gatame", yid: "zQR3IOXxO_Q"  },
        ],
      },
      {
        name: "Shime-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Morote-jime", yid: ""  },
          { name: "Tsukkomi-jime", yid: "dKKpnD3eLcY"  },
          { name: "Ashi-gatame-jime", yid: "ClY7g_pX-4s"  },
          { name: "Ryo-te-jime", yid: "-RHC4V7TQiY"  },
        ],
      },
      {
        name: "Kansetsu-Waza",
        level: "Ne-Waza",
        mouvements: [
          { name: "Ude-hishigi-ashi-gatame", yid: "ClY7g_pX-4s"  },
          { name: "Ude-hishigi-sankaku-gatame", yid: "WefAmW4azhk"  },
          { name: "Ude-hishigi-hara-gatame", yid: "ZzEycg8R_9M"  },
        ],
      },
    ],
  },
];

function drawRandomMovements(
  familles: Famille[],
  total: number
): Mouvement[] {
  var selectedMovements: Mouvement[] = [];

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

export default function Home() {
  const [level, setLevel] = useState<any | null>(false);
  const [nageWazaMovements,setNageWazaMovements] = useState<any | null>(false);
  const [neWazaMovements,setNeWazaMovements] = useState<any | null>(false);

  const switchToDan = (num: number) => {
    setLevel(num);
    if (allDans[num-1]) {
      var nageWazaFamilies = allDans[num-1].familles.filter(
        (famille) => famille.level === "Nage-Waza"
      );
      var neWazaFamilies = allDans[num-1].familles.filter(
        (famille) => famille.level === "Ne-Waza"
      );
      setNageWazaMovements(drawRandomMovements(nageWazaFamilies, 6));
      setNeWazaMovements(drawRandomMovements(neWazaFamilies, 4));
    }
  };
  return (level ? (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tirage alétoire UV2</h1>
          <strong>Tirage de Mouvements pour le {allDans[level-1].name}</strong>
          {(level == 2 || level == 3) && (
            <>
              <br />
              <span>Seul les 2 premiers mouvements en Nage-Waza et en Ne-Waza sont demandés, les suivants sont là si le candidat a présenté un ou plusieurs mouvements lors de la prestation</span>
              <br />
            </>
          )}
          {nageWazaMovements &&  (
          <>
            <h2><strong>Mouvements Nage-Waza</strong></h2>
            <ul>
              {nageWazaMovements.map((movement: any, index: number) => (
                <>
                  <li className="flex" key={index}>
                    {(movement.yid != '') ? (
                      <>
                        <Image
                          aria-hidden
                          src="../video.svg"
                          alt="{movement.name}"
                          width={16}
                          height={16}
                        />
                        <Link target={"_new"} href={"https://www.youtu" + "be.com/watch?v=" + movement.yid + "&t=5"}>&nbsp;
                          {movement.name}
                        </Link>
                      </>
                    ) : (
                      <>
                        {movement.name}
                      </>
                    )}
                  </li>
                </>
              ))}
            </ul>
          </>
          )}
          {nageWazaMovements && (
          <>
            <h2><strong>Mouvements Ne-Waza</strong></h2>
            <ul>
              {neWazaMovements.map((movement: any, index: number) => (
                <>
                  <li className="flex" key={index}>
                    {(movement.yid != '') ? (
                      <>
                        <Image
                          aria-hidden
                          src="../video.svg"
                          alt="{movement.name}"
                          width={16}
                          height={16}
                        />
                        <Link target={"_new"} href={"https://www.youtu" + "be.com/watch?v=" + movement.yid + "&t=5"}>&nbsp;
                          {movement.name}
                        </Link>
                      </>
                    ) : (
                      <>
                        {movement.name}
                      </>
                    )}
                  </li>
                </>
              ))}
            </ul>
          </>
          )}
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <button
              className="rounded-full mb-2 border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              onClick={() => switchToDan(0)}>Nouveau tirage</button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  ) : (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tirage UV2</h1>
          <ul className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Cliquez sur le grade pour générer un tirage
            </li>
          </ul>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <button
              className="rounded-full mb-2 border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              onClick={() => switchToDan(1)}>1er Dan</button>
            <button
              className="rounded-full  mb-2 border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              onClick={() => switchToDan(2)}>2e Dan</button>
            <button
              className="rounded-full  mb-2 border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              onClick={() => switchToDan(3)}>3e Dan</button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  ));
}
