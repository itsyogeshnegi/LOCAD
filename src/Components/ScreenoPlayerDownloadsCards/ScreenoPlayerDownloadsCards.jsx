"use client";
import React from "react";
import "./ScreenoPlayerDownloadsCards.css";
import Image from "next/image";
const ScreenoPlayerDownloadsCards = ({ img, version, download, version1 , player, downloadFor }) => {
  return (
    <div className="ScreenoPlayerDownloadsCards">
      <div className="ScreenoPlayerPhoto">
        <Image height={100} width={100} alt="logo" layout="responsive" src={img} />
      </div>
      <div className="ScreenoPlayerPlayer"><h4>{player}</h4></div>
      <div className="ScreenoPlayerVersion">{version}</div>
      <div className="ScreenoPlayerVersion1">{version1}</div>
      <div className="ScreenoPlayerDownload"><a href={download}><button>{downloadFor}</button></a></div>
    </div>
  );
};

export default ScreenoPlayerDownloadsCards;
