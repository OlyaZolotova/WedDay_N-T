import { useContext } from "react";
import "./style.scss";
import { clsx } from "clsx";
import { Fade, Zoom } from "react-awesome-reveal";


export const Footer = () => {

  return (
    <footer>
      <div className="footer">
        {/* <Fade triggerOnce={true} duration={3000}> */}
          <div className="container">
            <div className="footer__wrap footer__wrap-one">
              <img className="footer__img" src="./Vector 26.svg" alt="foto" />
            </div>
            <h3 className="footer__title">
              С нетерпением ждем встречи с вами!
            </h3>
            <div className="footer__wrap footer__wrap-two">
              <img className="footer__img" src="./Vector 25.svg" alt="foto" />
            </div>
          </div>
        {/* </Fade> */}
      </div>
    </footer>
  );
};
