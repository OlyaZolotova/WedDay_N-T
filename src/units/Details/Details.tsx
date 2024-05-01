import "./style.scss";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

export const Details = () => {
  return (
    <div className="details">
      <div className="container">
        <div className="details__wrap">
          <Zoom triggerOnce={true} duration={3000}>
            <h2 className="details__title">Details</h2>
          </Zoom>
          <Fade triggerOnce={true} duration={3000}>
            <div className="details__content">
              <div className="details__image">
                <img className="details__img" src="/Union.svg" />
              </div>
              <div className="details__wrapper">
                <div className="details__textwrap">
                  <p className="details__text">
                    Свои тёплые слова и пожелания приносите в сердцах, а подарки
                    - в конверте. Ваши конверты помогут нам осуществить мечту.
                  </p>
                </div>

                <div className="details__textwrap">
                  <p className="details__text">
                    Не дарите нам цветы! Принесите с собой бутылочку вина для
                    нашей домашней винотеки или любимую книгу для семейной
                    библиотеки. 
                  </p>
                </div>

                <div className="details__textwrap details__textwrap-bottom">
                  <p className="details__text">
                    Будем благодарны, если Вы воздержитесь от криков «Горько» на
                    празднике, ведь поцелуй - знак выражения чувств, он не может
                    быть по заказу.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
