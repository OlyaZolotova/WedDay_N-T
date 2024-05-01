import { Fade, Slide, Zoom } from "react-awesome-reveal";
import "./style.scss";

export const Timing = () => {
  return (
    <div className="timing">
      <div className="container">
        <div className="timing__wrap">
          <Zoom triggerOnce={true} duration={3000}>
            <h2 className="timing__title">Timing</h2>
          </Zoom>
          <Fade triggerOnce={true} duration={3000}>
          <div className="timing__content">
            <div className="timing__wrapper">
              <div className="timing__img">
                <img className="timing__png" src="/Group 2.svg" alt="couple" />
              </div>
              <div className="timing__textwrap">
                <p className="timing__subtitle">15.30</p>
                <p className="timing__text">Сбор гостей, фуршет</p>
              </div>
            </div>
            <div className="timing__wrapper">
              <div className="timing__img">
                <img className="timing__png" src="/Group 1.svg" alt="couple" />
              </div>
              <div className="timing__textwrap">
                <p className="timing__subtitle">16.00</p>
                <p className="timing__text">Выездная церемония</p>
              </div>
            </div>
            <div className="timing__wrapper">
              <div className="timing__img">
                <img
                  className="timing__png"
                  src="/Vector 35.svg"
                  alt="couple"
                />
              </div>
              <div className="timing__textwrap">
                <p className="timing__subtitle">17.00</p>
                <p className="timing__text">Праздничный банкет</p>
              </div>
            </div>
          </div>
          <div className="timing__content2">
            <div className="timing__img timing__img-1024">
              <img className="timing__png" src="/Group 57.svg" alt="couple" />
            </div>
            <div className="timing__img timing__img-1280">
              <img className="timing__png" src="/Group 58.svg" alt="couple" />
            </div>
            <div className="timing__textwrapper">
              <div className="timing__textwrap">
                <p className="timing__subtitle">15.30</p>
                <p className="timing__text">Сбор гостей, фуршет</p>
              </div>
              <div className="timing__textwrap">
                <p className="timing__subtitle">16.00</p>
                <p className="timing__text">Выездная церемония</p>
              </div>
              <div className="timing__textwrap">
                <p className="timing__subtitle">17.00</p>
                <p className="timing__text">Праздничный банкет</p>
              </div>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
