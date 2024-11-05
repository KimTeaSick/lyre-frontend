"use client";

import React from "react";
import Image from "next/image";

import footerStyle from "./Footer.module.scss";
import * as footerAssets from "../../../assets/img/footer";

type FooterOnProps = {
  footerClose: () => void;
};

const FooterOn = ({ footerClose }: FooterOnProps) => (
  <React.Fragment>
    <Image src={footerAssets.BTN_CLOSE} alt="" onClick={footerClose} />
    <Image src={footerAssets.BTN_HOME} alt="" />
    <Image src={footerAssets.BTN_SEARCH} alt="" />
    <Image src={footerAssets.BTN_BOX} alt="" />
    <Image src={footerAssets.BTN_MY} alt="" />
  </React.Fragment>
);

type FooterOffProps = {
  footerOpen: () => void;
};

const FooterOff = ({ footerOpen }: FooterOffProps) => (
  <Image src={footerAssets.BTN_CLOSE} alt="" onClick={footerOpen} />
);

const Footer = () => {
  const [status, setStatus] = React.useState(true);

  const footerOpen = () => setStatus(true);
  const footerClose = () => setStatus(false);

  return (
    <div
      className={
        footerStyle[status ? "footer--section-on" : "footer--section-off"]
      }
    >
      {status ? (
        <FooterOn footerClose={footerClose} />
      ) : (
        <FooterOff footerOpen={footerOpen} />
      )}
    </div>
  );
};

export default Footer;
