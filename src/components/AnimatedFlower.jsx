import Lottie from "lottie-react";
import flowerAnimation from "../assets/flower.json";
import "../styles/AnimatedFlower.css";
import { useEffect, useState } from "react";
import FloatingImage from "./FloatingImage";
import QuizComponent from "./QuizComponent";
import "../styles/QuizComponent.css";

export default function AnimatedFlower() {
  const [sildeShow, setSlideShow] = useState(false);
  const [quizText, setQuizText] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideShow(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const SLIDESHOW_DURATION = 6 * 3500; // 6 images × 3s each

    const timer = setTimeout(() => {
      setSlideShow(false);
      setQuizText(true);
    }, SLIDESHOW_DURATION);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="fullscreen-lottie">
      {!sildeShow && !quizText && !startQuiz && (
        <Lottie
          animationData={flowerAnimation}
          autoplay
          loop
          style={{ width: "100%", height: "100%" }}
        />
      )}

      {sildeShow && <FloatingImage/> }

      {/* {sildeShow && (
        <div className="marquee-container">
          <div className="marquee-text">
            Happy Valentine's Day
          </div>
        </div>
      )} */}

      {!sildeShow && quizText && !startQuiz && (
        <div className="quiz-intro">
      <div className="final-message">
        Now let’s go for a short quiz 💕
      </div>
      <button className="start-quiz-btn" onClick={() => setStartQuiz(true)}> Start Quiz </button>
      </div>
      )}
      {startQuiz && <QuizComponent/>}
    </div>
  );
}
