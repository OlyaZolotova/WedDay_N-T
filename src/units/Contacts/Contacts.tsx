import { Fade } from "react-awesome-reveal";
import "./style.scss";
import Slider from "react-slick";


export const Contacts = () => {
  const leftArrowSVG = (
    <svg
      width="15"
      height="30"
      viewBox="0 0 15 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L14 14L1 29" stroke="#BBA69A" />
    </svg>
  );

  const rightArrowSVG = (
    <svg
      width="15"
      height="30"
      viewBox="0 0 15 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 1L1 14L14 29" stroke="#BBA69A" />
    </svg>
  );

  const settings2 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 2,
    speed: 500,
      prevArrow: <div className="slick-prev">{rightArrowSVG}</div>,
    nextArrow: <div className="slick-next">{leftArrowSVG}</div>,
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <div className="slick-prev">{rightArrowSVG}</div>,
    nextArrow: <div className="slick-next">{leftArrowSVG}</div>,
  };
  return (
    <Fade triggerOnce={true} duration={3000}>
      <div className="contacts">
        <div className="container">
          <p className="contacts__title">
            Если у Вас остались вопросы, можете с нами связаться:
          </p>

          <div className="contacts__linkwrap">
            <Slider {...settings}>
              <div className="contacts__textwrap">
                <h3 className="contacts__text">Координатор</h3>
                <a className="contacts__link" href="tel:+375298065154">
                  +375298065154
                </a>
              </div>
              <div className="contacts__textwrap">
                <h3 className="contacts__text">Жених</h3>
                <a className="contacts__link" href="tel:+375297686397">
                  +375297686397
                </a>
              </div>
              <div className="contacts__textwrap">
                <h3 className="contacts__text">Невеста</h3>
                <a className="contacts__link" href="tel:+375298539281">
                  +375298539281
                </a>
              </div>
            </Slider>
          </div>
          <div className="contacts__linkwrap contacts__linkwrap-1024">
            <Slider {...settings2}>
              <div className="contacts__textwrap">
                <h3 className="contacts__text">Координатор</h3>
                <a className="contacts__link" href="tel:+375298065154">
                  +375298065154
                </a>
              </div>
              <div className="contacts__textwrap">
                <h3 className="contacts__text">Жених</h3>
                <a className="contacts__link" href="tel:+375297686397">
                  +375297686397
                </a>
              </div>
              <div className="contacts__textwrap">
                <h3 className="contacts__text">Невеста</h3>
                <a className="contacts__link" href="tel:+375298539281">
                  +375298539281
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </Fade>
  );
};
