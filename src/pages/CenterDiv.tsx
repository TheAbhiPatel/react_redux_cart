import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

function CenterDiv() {
  return (
    <>
      <CardList />
    </>
  );
}

export default CenterDiv;

const CardList = () => {
  return (
    <div className="card-list">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, idx) => (
        <Card id={`card${idx}`}>Card 1 Content</Card>
      ))}

      {/* Add more Card components */}
    </div>
  );
};

const Card = ({ id, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger only once when it enters the viewport
    // threshold: 1, // When at least 50% of the card is visible
    rootMargin: "-100px",
  });

  // const myref = useRef(null);
  // console.log("--------->>", myref.current.clientHeight);

  if (inView) {
    console.log("--------->>", inView);

    console.log(`Card with ID  ${id} is in the center.`);
    // Do something with the ID, e.g., store it in state
  }

  return (
    <div ref={ref}>
      <div
        id="element1"
        className="center-check"
        style={{ height: 200, width: 100, background: "red", margin: 20 }}
      ></div>
    </div>
  );
};
