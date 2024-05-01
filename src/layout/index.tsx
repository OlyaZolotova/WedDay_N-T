import { Outlet } from "react-router-dom";
import "./style.scss";
import { Footer } from "./Footer";
import clsx from "clsx";
// import { Preloader } from "../units/Prealoder/Preloader";

export const Root = () => {
  return (
    <div>
      {/* <Preloader /> */}
      <>
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    </div>
  );
};
