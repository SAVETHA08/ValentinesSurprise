import { useState } from "react";
import quizData from "./quizData";
import { useNavigate } from "react-router-dom";
import ValentineSuccess from "./ValentineSuccess";


export default function QuizComponent() {
    // const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState(Array(quizData.length).fill(null));
    const [submitted, setSubmitted] = useState(false);
    const [warning, setWarning] = useState("");
    const [noPosition, setNoPosition] = useState({ top: "0px", left: "0px" });
    const [showSuccess, setShowSuccess] = useState(false);

    const moveNoButton = () => {
        const randomTop = Math.random() * 200;
        const randomLeft = Math.random() * 200;

        setNoPosition({
            top: `${randomTop}px`,
            left: `${randomLeft}px`,
        });
    };

    const handleOptionSelect = (index) => {
        const updated = [...answers];
        updated[currentIndex] = index;
        setAnswers(updated);
    };

    const handleSubmit = () => {
        const score = answers.reduce((total, ans, idx) => {
            return ans === quizData[idx].correctIndex ? total + 1 : total;
        }, 0);

        if (score < 3) {
            setWarning("Try again… you should know me better than this! 😜");
            return;
        }

        setWarning("");
        setSubmitted(true);
    };


    const score = answers.reduce((total, ans, idx) => {
        return ans === quizData[idx].correctIndex ? total + 1 : total;
    }, 0);

    // const handleYes = () => {
    //     alert("Yaaay! 💍 You are officially my Valentine forever! ❤️");
    // };

    const handleYes = () => {
        setShowSuccess(true);
      };
      

    const handleNo = () => {
        alert("🚫 This button exists only for decoration! Better luck next time");
    }

    if (showSuccess) {
        return <ValentineSuccess />;
      }


    if (submitted) {

        return (
            <div className="quiz-result">
                {/* <h2>❤️ Quiz Completed ❤️</h2> */}
                <h2>
                    Your Score: <strong>{score}</strong> / {quizData.length}
                </h2>
                <p>Now I have one last question for you…</p>
                <p>Will you be my Valentine? ❤️</p>
                <div className="valentine-buttons">
                    <button className="yes-btn" onClick={handleYes}>
                        Yes ❤️
                    </button>

                    <button
                        className="no-btn"
                        // style={{
                        //     position: "absolute",
                        //     top: noPosition.top,
                        //     left: noPosition.left
                        // }}
                        style={{ position: "relative", ...noPosition }}
                        onMouseMove={moveNoButton}
                        onClick={handleNo}
                    >
                        No 💔
                    </button>

                </div>

            </div>
        );
    }

    const question = quizData[currentIndex];

    return (
        <div className="quiz-container">
            <h3 className="question">
                Question {currentIndex + 1} / {quizData.length}
            </h3>

            <h2 className="question">{question.question}</h2>

            <div className="options">
                {question.options.map((opt, idx) => (
                    <button
                        key={idx}
                        className={`option-btn ${answers[currentIndex] === idx ? "selected" : ""
                            }`}
                        onClick={() => handleOptionSelect(idx)}
                    >
                        {opt}
                    </button>
                ))}
            </div>

            {warning && <p className="quiz-warning">{warning}</p>}

            <div className="quiz-actions">
                <button
                    className="nav-btn"
                    disabled={currentIndex === 0}
                    onClick={() => {
                        setWarning("");
                        setCurrentIndex(currentIndex - 1)
                    }}
                >
                    Back
                </button>

                {currentIndex === quizData.length - 1 ? (
                    <button className="submit-btn" onClick={handleSubmit}>
                        Submit
                    </button>
                ) : (
                    <button
                        className="nav-btn"
                        disabled={answers[currentIndex] === null}
                        onClick={() => setCurrentIndex(currentIndex + 1)}
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
}
