import { useEffect, useState } from "react";
import img1 from "../assets/firstmeet.jpg";
import img2 from "../assets/choci.jpg";
import img3 from "../assets/birthday.jpg";
import img4 from "../assets/coorg.jpg";
import img5 from "../assets/goa.jpg";
import img6 from "../assets/shades.jpg";
import img7 from "../assets/window.jpg";
import "../styles/FloatingImage.css";

function FloatingImage() {
  const images = [img1, img2, img3, img4, img5, img6];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change image every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-container">
      {/* 💗 Background Hearts */}
      <div className="hearts-background">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 6}s`,
              fontSize: `${12 + Math.random() * 18}px`,
            }}
          >
            ♥
            {/* ❀ */}
          </span>
        ))}
      </div>

    <div className="floating-wrapper">
      <img
        src={images[index]}
        alt="floating"
        className="floating-image"
      />
    </div>
    </div>
  );
}

export default FloatingImage;
