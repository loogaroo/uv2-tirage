/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';

function Footer() {
    return (
        <>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.ffjudo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="globe.svg"
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
                        src="globe.svg"
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
                        src="globe.svg"
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
                        src="globe.svg"
                        alt="Code source"
                        width={16}
                        height={16}
                    />
                    Code source
                </a>
            </footer>
        </>);
}

export default Footer;