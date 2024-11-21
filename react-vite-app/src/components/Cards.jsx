import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Card(props) {
  const colorClasses = {
    red: "#f87171",  // Tailwind red-500
    blue: "#60a5fa", // Tailwind blue-500
    green: "#34d399", // Tailwind green-500
    yellow: "#fef08a", // Tailwind yellow-500
    purple: "#a78bfa", // Tailwind purple-500
    orange: "#fdba74", // Tailwind orange-500
    black: "#000000", // Black color
    white: "#ffffff", // White color
    pink: "#fbbf24",  // Tailwind pink-300
    brown: "#9e7b43", // Tailwind brown-800
  };

  const [bgColor, setBgColor] = useState("white"); // Default body color

  // Effect to update the body background color
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;  // Apply color directly
    return () => {
      document.body.style.backgroundColor = ""; // Reset when component unmounts
    };
  }, [bgColor]);

  return (
    <div className="relative h-screen">
      <div className="absolute bottom-0 left-0 right-0 flex justify-center flex-wrap p-4 bg-slate-500 rounded-2xl">
        {props.data.map((buttonLabel) => (
          <button
            onClick={() => setBgColor(colorClasses[buttonLabel] || "gray")}
            className={`px-4 py-2 rounded-full text-center m-2`}
            style={{ backgroundColor: colorClasses[buttonLabel] || "gray", color : buttonLabel == "black" ? "white" : "black" }}
            key={buttonLabel}
          >
            {`${buttonLabel}`}
          </button>
        ))}
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
