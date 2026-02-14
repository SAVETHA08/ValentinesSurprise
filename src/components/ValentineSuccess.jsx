import Lottie from "lottie-react";
import celebrationAnimation from "../assets/couple.json"; // your lottie file
import "../styles/ValentineSuccess.css";

function ValentineSuccess() {
  return (
    <div className="success-container">
      <h1 className="success-title">
        Congratulations! You passed the quiz! 🎉
      </h1>

      <h2 className="success-subtitle">
        Your reward? <br />
        A lifetime position as my Valentine 💕
      </h2>

      <div className="lottie-wrapper">
        <Lottie animationData={celebrationAnimation} loop={true} />
      </div>

      <div className="marquee-container">
          <div className="marquee-text">
            Happy Valentine's Day
          </div>
        </div>
    </div>
  );
}

export default ValentineSuccess;
