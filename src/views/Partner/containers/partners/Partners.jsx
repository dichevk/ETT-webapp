

import React, { useState, useEffect } from "react";
import { BsArrowUpRightSquareFill } from 'react-icons/bs';
import { Navbar } from "../../../../components/export";

import Partnerslider from "../partnerslider/Partnerslider";

import './partners.css';

const Partners = ({requestService}) => {

  const [partners, setPartners] = useState([]);
  const [error, setError] = useState('');
  const [selectedPartner, setSelectedPartner] = useState('3');
  const [partnerName, setPartnerName] = useState("Select Partner");
  const [partnerImage, setPartnerImage] = useState();
  const [partnerDescription, setPartnerDescription] = useState('');

  //get partners from backend
  useEffect(() => {
    requestService.getPartners().then((partners) => {
      console.log("this is partner", partners);
      setPartners(partners.data);
    })
    .catch((error) => {
      setError(error)
    });
  }, [requestService]);

  useEffect(() => {
    console.log(selectedPartner);
    const partnerid = partners.find((partner) => partner.id === parseInt(selectedPartner));
    if (partnerid) {
      console.log(partnerid.attributes.name);
      setPartnerName(partnerid.attributes.name); 
      setPartnerImage(partnerid.attributes.image.data[0].attributes.url); 
      setPartnerDescription(partnerid.attributes.description.length > 70
        ? `${partnerid.attributes.description.slice(0, 70)}...`
        : partnerid.attributes.description);
    }
  }, [selectedPartner])

  return (
    <>
    <div className='ett__partners section__padding'>
      <div className="ett__partners-heading section__margin">
        <div className="ett__partners-heading-title">
          <div className="triangle-right"></div>
          <h1>OUR PARTNERS</h1>
        </div>

        <div className='ett__partners-heading-image'>
          {/* <h1>{partnerName}</h1>
          <img src={partnerImage} alt="partner" /> */}
          <img src={partnerImage} alt="" />
          <div className="ett__partners-heading-image_description">
            <h2>{partnerName}</h2>
            {/* <p>This is the description of the partner. Hi Im UT from the netherlands I sponsored ETT</p> */}
            <p>{partnerDescription}</p>
            <a href="/"><button class="bnlearnmore-hover bn1">Learn More <BsArrowUpRightSquareFill /></button></a>
          </div>
        </div>
      </div>

      <div className="ett__partners-slider section__margin">
        {/* use partners as a parameter */}
        <Partnerslider partners={partners} baseURL={requestService.http.baseURL} setSelectedPartner={setSelectedPartner} />
      </div>
    </div>
    </>
  );
};

export default Partners;