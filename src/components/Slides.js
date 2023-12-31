import React, { useState } from "react";

function Slides({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={() => setCurrentSlide(0)}>
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          disabled={currentSlide === 0 ? true : false}
          onClick={() => setCurrentSlide(currentSlide - 1)}
        >
          Prev
        </button>

        <button
          data-testid="button-next"
          className="small"
          disabled={currentSlide === (slides.length - 1) ? true : false}
          onClick={() => setCurrentSlide(currentSlide + 1)}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currentSlide].title}</h1>
        <p data-testid="text">{slides[currentSlide].text}</p>
      </div>
    </div>
  );
}

export default Slides;
