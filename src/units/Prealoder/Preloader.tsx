import React, { useEffect, useState } from "react";
import "./style.scss";

export const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (loading) {
    return (
      <div className="preloader" id="loader">
        <div className="preloader__loader">
          <div className="loading loading01">
            <p className="loading011 loading011__в">В</p>
            <p className="loading011 loading011__а">А</p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
