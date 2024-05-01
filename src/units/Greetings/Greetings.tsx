import "./style.scss";
import { Fade, Slide } from "react-awesome-reveal";

export const Greetings = () => {
  return (
      <Fade triggerOnce={true} duration={3000}>
    <div className="greetings">
      <div className="container">
        <div className="greetings__wrapper">
          <div className="greetings__wrap">
            <div className="greetings__textwrap">
            
                <h4 className="greetings__title">ДОРОГИЕ РОДНЫЕ И ДРУЗЬЯ!</h4>
             

                <p className="greetings__text">
                  Будем безмерно рады видеть вас на нашем свадебном торжестве,
                  которое состоится через:
                </p>
      
            </div>
          </div>
        </div>
      </div>
    </div>
    
</Fade>
  );
};
