import { useEffect, useState, useRef, useMemo } from "react";
import img1 from "../assets/firstmeet.jpg";
import img2 from "../assets/choci.jpg";
import img3 from "../assets/birthday.jpg";
import img4 from "../assets/coorg.jpg";
import img5 from "../assets/goa.jpg";
import img6 from "../assets/shades.jpg";
// import img7 from "../assets/window.jpg";
import "../styles/FloatingImage.css";


function FloatingImage() {

  const images = [img1, img2, img3, img4, img5, img6];
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const [floatDuration, setFloatDuration] = useState("3s");

useEffect(() => {
  setFloatDuration(`${3 + Math.random() * 2}s`); // 3s to 5s
}, [index]);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  
    return () => clearInterval(interval); // cleanup
  }, []);
  

  const hearts = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${8 + Math.random() * 6}s`,
      size: `${12 + Math.random() * 18}px`,
    }));
  }, []);
  
  

  return (
    <div className="floating-container">
      {/* 💗 Background Hearts */}
      <div className="hearts-background">
  {hearts.map((heart) => (
    <span
      key={heart.id}
      className="heart"
      style={{
        left: heart.left,
        animationDuration: heart.duration,
        fontSize: heart.size,
      }}
    >
      ♥
    </span>
  ))}
</div>


    <div className="floating-wrapper">
      <img
      key={images[index]}
        src={images[index]}
        alt="floating"
        className="floating-image"
        style={{
          animationDuration: floatDuration,
          "--x-drift": `${Math.random() * 20 - 10}px`, // -10px to +10px horizontal drift
        }}
      
      />
    </div>
    </div>
  );
}

export default FloatingImage;
