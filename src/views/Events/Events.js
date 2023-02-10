import React, { useEffect } from "react";
import { Navbar } from "../../components/export";
import { Header } from "../Home/containers/export";
import {Events} from "../Home/containers/export";
import {Footer} from "../../components/export";

const EventsPage = () => {
  return (
    <div className="background">
      <Navbar currentPage="Events" />
      <Header />
      <Events />
      <Footer />
    </div>
  );
}
export default EventsPage;
