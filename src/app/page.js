"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import HomePage from "./HomePage/HomePage";
import Head from "next/head";
export default function page() {
  return (
    <>
      <Head>
        <title>Display OOH, Digital Billboards, Digital Signage</title>
        <meta
          name="description"
          content="Out of home advertising is traditional medium of advertising so jump to digital advertising and marketing OOH. This may include digital billboards and outdoor signage."
        />
        <meta
          name="google-site-verification"
          content="YKJvt6WbRMM67mQbQFYas8qWmALRCfPHnN6bs8SFXmU"
        />
        <meta
          name="keywords"
          content="IOT solutions, Locad, ooh, adtech, locaudit, plano, screeno, live traffic monitoring, mobile ad platform, ooh media industry, location based advertising"
        />
         <meta name="author" content="Locad.net" />
      </Head>
      <HomePage />
    </>
  );
}
