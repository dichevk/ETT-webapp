import React from "react";
import { Navbar } from "../../components/export";
import { Footer } from "../../components/export";
import {Lavabg} from "../../components/export";
export const ContactPage = () => {
  return (
    <>
    <div className="background">
      <Navbar currentPage="Contact" />
      <Footer/>
      <Lavabg/>
      </div>
    </>
  );
};
