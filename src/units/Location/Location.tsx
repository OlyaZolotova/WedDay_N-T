import "./style.scss";

import React, { useEffect } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import ReactDOM from "react-dom";

import { YMaps } from "react-yandex-maps";






export const Location = () => {


  return (
    <div className="location">
      <div className="location__banner">
        <div className="container">
                    <Zoom triggerOnce={true} duration={3000}>
          <h3 className="location__title wow animate__animated animate__zoomIn">
            Location
          </h3>
          </Zoom>
          <Fade triggerOnce={true} duration={3000}>
            <div className="location__image">
              <img className="location__img" src="/123.png" />
            </div>
            <div className="location__textwrap wow animate__animated animate__zoomIn">
              <p className="location__text">Усадьба «Вилла льва»</p>
              <p className="location__text location__text-bottom">
                Столинский район, д. Кошара, ул. Советская 11
              </p>
            </div>
          </Fade>
        </div>
      </div>
            <Fade triggerOnce={true} duration={3000}>
      <div className="location__mapwrap">
        <div
          className="location__mapwrap"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <iframe
            src="https://yandex.by/map-widget/v1/?ll=27.004761%2C51.831496&mode=search&oid=210139916479&ol=biz&z=18.56&l=yandex.Карта"
            width="100%"
            height="600"
            frameBorder="0"
            allowFullScreen={true}
            scrolling="no"
            style={{ position: "relative" }}
          ></iframe>
        </div>
      </div>
      </Fade>
    </div>
  );
};
