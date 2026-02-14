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

  useEffect(() => {
    let isMounted = true;
  
    const runSlideshow = (currentIndex) => {
      setTimeout(() => {
        if (!isMounted) return;
  
        setIndex((prev) => {
          const next = (prev + 1) % images.length;
          runSlideshow(next);
          return next;
        });
      }, 3000);
    };
  
    runSlideshow(0);
  
    return () => {
      isMounted = false;
    };
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
        src={images[index]}
        alt="floating"
        className="floating-image"
      />
    </div>
    </div>
  );
}

export default FloatingImage;
