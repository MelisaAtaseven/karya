import React from "react";
import "./ServiceList.css";

const ServiceList = () => {
  return (
    <div className="service-list">
      <h2 className="service-title">
        <span>Hizmet Verdiğimiz Konular</span>
      </h2>
      <hr className="line" />
     
      <ul className="service-items">
        <li>Poliüretan enjeksiyon reçine satışı.</li>
        <li>
          Her türlü negatif yönden su sızıntılarına karşı poliüretan enjeksiyon
          reçinesi ile su yalıtımı.
        </li>
        <li>Epoksi enjeksiyon reçinesi ile yapısal çatlak tamiri.</li>
        <li> Epoksi ile demir filiz ekimi.</li>
        <li>Epoksi ile rot montajı. </li>
        <li>Karot makineleri ile beton delme.</li>
        <li>Hidrolik raylı sistemler ile beton kesme.</li>
        <li>Halatlı - tel beton kesme.</li>
      </ul>
    </div>
  );
};

export default ServiceList;
