
import "./style.scss";
import React from "react";
import FlipCountdown from "@rumess/react-flip-countdown";
import { Fade, Zoom } from "react-awesome-reveal";
import { CountdownCircleTimer } from "react-countdown-circle-timer";


const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 60,
  strokeWidth: 3,
};

const timerProps2 = {
  isPlaying: true,
  size: 80,
  strokeWidth: 3,
};
const timerProps3 = {
  isPlaying: true,
  size: 100,
  strokeWidth: 3,
};

const renderTime = (dimension: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined, time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined) => {
  return (

    <div className="timer__textwrap">
      <div className="timer__number">{time}</div>
      <div className="timer__text">{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time: number) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time: number) => (time / daySeconds) | 0;

export default function Timer() {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = new Date("2024-08-31T00:00:00").getTime() / 1000; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <Fade triggerOnce={true} duration={3000}>
    <div className="timer">
      <div className="container">
        <div className="timer__wrap timer__wrap-one">
          <CountdownCircleTimer
            {...timerProps}
            colors="#BBA69A"
            duration={daysDuration}
            initialRemainingTime={remainingTime}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("дней", getTimeDays(daysDuration - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors="#BBA69A"
            duration={daySeconds}
            initialRemainingTime={remainingTime % daySeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("часов", getTimeHours(daySeconds - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors="#BBA69A"
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("минут", getTimeMinutes(hourSeconds - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors="#BBA69A"
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > 0,
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("секунд", getTimeSeconds(elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
        </div>
        <div className="timer__wrap timer__wrap-two">
          <CountdownCircleTimer
            {...timerProps2}
            colors="#BBA69A"
            duration={daysDuration}
            initialRemainingTime={remainingTime}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("дней", getTimeDays(daysDuration - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps2}
            colors="#BBA69A"
            duration={daySeconds}
            initialRemainingTime={remainingTime % daySeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("часов", getTimeHours(daySeconds - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps2}
            colors="#BBA69A"
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("минут", getTimeMinutes(hourSeconds - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps2}
            colors="#BBA69A"
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > 0,
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("секунд", getTimeSeconds(elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
        </div>
        <div className="timer__wrap timer__wrap-three">
          <CountdownCircleTimer
            {...timerProps3}
            colors="#BBA69A"
            duration={daysDuration}
            initialRemainingTime={remainingTime}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("дней", getTimeDays(daysDuration - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps3}
            colors="#BBA69A"
            duration={daySeconds}
            initialRemainingTime={remainingTime % daySeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("часов", getTimeHours(daySeconds - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps3}
            colors="#BBA69A"
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("минут", getTimeMinutes(hourSeconds - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps3}
            colors="#BBA69A"
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > 0,
            })}
          >
            {({ elapsedTime, color }) => (
              <span style={{ color }}>
                {renderTime("секунд", getTimeSeconds(elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
        </div>
      </div>
    </div>
  </Fade>
  );
}

// const Timer = () => {
//   return (
//     <div className="timer">
//       <div className="container">
//         <Fade triggerOnce={true} duration={1000}>
//           <h4 className="timer__title">
//             Будем рады видеть Вас на нашем празднике через:
//           </h4>
//         </Fade>
//         <Fade triggerOnce={true} duration={2000}>
//           <div className="timer__wrapper">
//             <CountdownCircleTimer
//               isPlaying
//               duration={7}
//               colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
//               colorsTime={[7, 5, 2, 0]}
//             >
//               {({ remainingTime }) => remainingTime}
//             </CountdownCircleTimer>
//           </div>
//         </Fade>
//       </div>
//     </div>
//   );
// };

// export default Timer;
