"use client";
import React from 'react'
import './Screeno.css'
import UpperNav from '@/Components/NavBar/UpperNav';
import MainNavBar from '@/Components/NavBar/MainNavBar';
import Footer from '@/Components/Footer/Footer';
import ScreenoPlayerDownloadsCards from "@/Components/ScreenoPlayerDownloadsCards/ScreenoPlayerDownloadsCards";
import Image from 'next/image';

const page = () => {
  return (
    <>
      <UpperNav />
      <MainNavBar />

      <div className="ScreenoHead">
        <h2>
          {" "}
          <span style={{ color: "darkblue" }}>Programmatic</span>{" "}
          <span style={{ color: "red" }}>DOOH Network & CMS</span>
        </h2>
      </div>

      <div className="ScreenoVideo">
        <div className="screenoYoutubeVideo">
          <iframe
            src="https://www.youtube.com/embed/2KtXkPOj1Mo?controls=0&autoplay=1&rel=0"
            height={"90%"}
            width={"90%"}
            autoFocus></iframe>
        </div>
        <div className="screenoAboutUs">
          <div className="screenoAboutUsHead">
            <h3>About Screeno</h3>
          </div>
          <div className="screenoAboutUsText">
            <p>
              Its an innovative platform for both digital media owners and
              advertisers. Digital media owners can simply manage content across
              any number of screens and geographies via a single cloud based web
              interface irrespective of what hardware device they are using.
              Moreover, they can monetize their inventory by simply integrating
              with our programmatic DOOH network through the same
              platform.Advertisers on the other hand get complete access to real
              time DOOH inventory with in depth live traffic monitoring and
              footfall numbers. The entire process from creative approval to
              purchase of DOOH inventory and scheduling of playlist across any
              number of screens can be done through this platform. Contact us to
              know more about the platform.
            </p>
          </div>
        </div>
      </div>

      <div className="screenoGif">
        <div className="screenoGifHead">
          <Image height={10} width={10} alt="logo23" layout="responsive" src="/screeno_logo.png" />
        </div>
        <div className="screenoGifMain">
          <Image height={100} width={100} alt="logo" layout="responsive" src="/screeno_gif.gif" />
        </div>
      </div>

      <div className="ScreenoPlayerHead">
        <h3>Screeno Player Downloads</h3>
      </div>
      <div className="ScreenoPlayerDownloads">
        <ScreenoPlayerDownloadsCards
          img={"/android.png"}
          player={"Android"}
          version={"Ver: 18"}
          version1={"Size: 4.5MB"}
          download={
            "https://screenodata.s3.ap-southeast-1.amazonaws.com/screeno_player.apk"
          }
          downloadFor={"Download for android"}
        />
        <ScreenoPlayerDownloadsCards
          img={"/windows.png"}
          player={"Windows 32-bit"}
          version={"Ver: 18.0.0 X86"}
          version1={"Size: 53.9MB"}
          download={
            "https://screenodata.s3.ap-southeast-1.amazonaws.com/screenoplayer_ia32_win.msi"
          }
          downloadFor={"Download for android"}
        />
        <ScreenoPlayerDownloadsCards
          img={"/windows.png"}
          player={"Windows 64-bit"}
          version={"Ver: 18"}
          version1={"Size: 55.70MB"}
          download={
            "https://screenodata.s3.ap-southeast-1.amazonaws.com/screenoplayer_x64_win.msi"
          }
          downloadFor={"Download for android"}
        />
        <ScreenoPlayerDownloadsCards
          img={"/linux.png"}
          player={"Linux armv7 (Raspberry pi)"}
          version={"Ver: 18.0.0"}
          version1={"Size: 61.08MB"}
          download={
            "https://screenodata.s3.ap-southeast-1.amazonaws.com/screenoplayer_armv7l_linux.AppImage"
          }
          downloadFor={" Download for linux armv7 ( Raspberry pi ) "}
        />
        <ScreenoPlayerDownloadsCards
          img={"/linux.png"}
          player={"Linux 32-bit"}
          version={"Ver: 18.0.0 "}
          version1={"Size: 71.17MB"}
          download={
            "https://screenodata.s3.ap-southeast-1.amazonaws.com/screenoplayer_i386_linux.AppImage"
          }
          downloadFor={"Download for android"}
        />
        <ScreenoPlayerDownloadsCards
          img={"/linux.png"}
          player={"Linux 64-bit"}
          version={"Ver: 18.0.0"}
          version1={"Size: 70.29MB"}
          download={
            "https://screenodata.s3.ap-southeast-1.amazonaws.com/screenoplayer_x86_64_linux.AppImage"
          }
          downloadFor={"Download for linux 64-bit"}
        />
      </div>
      <Footer/>
    </>
  );
}

export default page