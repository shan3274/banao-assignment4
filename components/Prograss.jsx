import React, { useEffect, useState } from "react";

const ScrollableSVG = () => {
  const [bgcolor, setBgcolor] = useState("#294366");
  const [scrollLength, setScrollLength] = useState(0);
  const maxScrollLength = 7000; // Set the total length of scroll in pixels

  useEffect(() => {
    const handleScroll = () => {
      // Update scrollLength based on the window scroll position
      const calculatedScrollLength = window.scrollY;

      // Set scrollLength to the smaller of calculatedScrollLength and maxScrollLength
      setScrollLength(Math.min(calculatedScrollLength, maxScrollLength));
    };

    // Attach the event listener to the scroll event
    window.addEventListener("scroll", handleScroll);

    if (scrollLength < 700) {
      setBgcolor("#294366");
    }
    if (scrollLength > 700 && scrollLength < 1400) {
      setBgcolor("#071169");
    }
    if (scrollLength > 1400 && scrollLength < 2100) {
      setBgcolor("#6245f5");
    }
    if (scrollLength > 2100 && scrollLength < 2800) {
      setBgcolor("#541899");
    }
    if (scrollLength > 2800 && scrollLength < 3500) {
      setBgcolor("#022745");
    }
    if (scrollLength > 2800 && scrollLength < 3500) {
      setBgcolor("#022745");
    }
    if (scrollLength > 3500) {
      setBgcolor("#a10e46");
    }

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollLength]); // Include maxScrollLength as a dependency

  return (
    <svg
      version="1.1"
      id="transring"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 414 414"
      style={{
        enableBackground: "new 0 0 414 414",
        backgroundColor: bgcolor,
      }}
      xmlSpace="preserve"
      className="w-[400px] rounded-full duration-300"
    >
      <path
        id="Transparent_Ring"
        className="transrg"
        style={{
          opacity: 0.4,
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: 2,
          strokeMiterlimit: 10,
          enableBackground: "new",
        }}
        d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173 c-47.8,0-91-19.4-122.3-50.7"
      ></path>
      {/* Other SVG elements */}
      <path
        id="Opaque_Ring"
        className="transrgwht"
        strokeDasharray={`${scrollLength / 5.5}, 1000`} // Use scrollLength to control the dash array
        style={{
          fill: "none",
          stroke: "rgb(255, 255, 255)",
          strokeWidth: 2,
          strokeMiterlimit: 10,
        }}
        d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173 c-47.8,0-91-19.4-122.3-50.7"
      ></path>

      <g id="Dots1" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill1"
            style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
            d="M84,80 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
          ></path>
        </g>
        <g>
          <path
            className="dotsstro1"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M84,80c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
          ></path>
        </g>
      </g>
      <g id="Dots2" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill1"
            style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
            d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"
          ></path>
        </g>
        <g>
          <path
            className="dotsstro2"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"
          ></path>
        </g>
      </g>
      <g id="Dots3" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill1"
            style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
            d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"
          ></path>
        </g>
        <g>
          <path
            className="dotsstro3"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"
          ></path>
        </g>
      </g>
      <g id="Dots4" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill1"
            style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
            d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"
          ></path>
        </g>
        <g>
          <path
            className="dotsstro4"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"
          ></path>
        </g>
      </g>
      <g id="Dots5" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill1"
            style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
            d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"
          ></path>
        </g>
        <g>
          <path
            className="dotsstro4"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"
          ></path>
        </g>
      </g>
      <g id="Dots6" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill1"
            style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
            d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"
          ></path>
        </g>
        <g>
          <path
            className="dotsstro4"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"
          ></path>
        </g>
      </g>
      <g id="Dots7" className="dots-nav">
        <g>
          <path
            className="dotsst dotsfill1"
            style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
            d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"
          ></path>
        </g>
        <g>
          <path
            className="dotsstro7"
            style={{
              opacity: 1,
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeWidth: 2,
              strokeMiterlimit: 10,
            }}
            d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"
          ></path>
        </g>
      </g>
      {/* Other SVG elements */}
    </svg>
  );
};

export default ScrollableSVG;
