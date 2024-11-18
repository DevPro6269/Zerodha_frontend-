import React from "react";
import Hero from "./Hero";
import { LeftToRight } from "./LeftToRight";
import RightToLeft from "./RightToLeft";
import Universe from "./Universe";

export const Product = () => {
  return (
    <>
      <Hero />
      <LeftToRight
        title={"Kite"}
        content={`Our ultra-fast flagship trading platform with streaming market data,advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices`}
        link={"images/products-kite.png"}
      />
      <RightToLeft
        title={"Console"}
        content={`The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.`}
        link={`images/console.png`}
      />

      <LeftToRight
        title={"Coin"}
        content={`Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.`}
        link={"images/coin.png"}
      />

      <RightToLeft
        title={"Kite Connect API"}
        content={`Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.`}
        link={"images/kiteconnect.png"}
      />
      <LeftToRight
        title={"Varsity mobile"}
        content={`An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go..`}
        link={"images/varsity.png"}
      />
      <Universe/>
    </>
  );
};