import { useState } from "react";
const Review = ({ Name, Job, Data }) => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = Data[index];
  function getIndex(input) {
    if (input > Data.length - 1) {
      return 0;
    } else if (input < 0) {
      return Data.length - 1;
    } else {
      return input;
    }
  }

  function previous() {
    let curIndex = index;
    curIndex = curIndex - 1;
    return getIndex(curIndex);
  }

  function next() {
    let curIndex = index;
    curIndex = curIndex + 1;
    return getIndex(curIndex);
  }

  return (
    <section className="container">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="name-job">
        <p className="name">{Name[index]}</p>
        <p className="job">{Job[index]}</p>
      </div>
      <div className="text">{text}</div>
      <div className="left-right">
        <button onClick={() => setIndex(previous)}>
          <b>
            <i className="fa-solid fa-angle-left"></i>
          </b>
        </button>
        <button onClick={() => setIndex(next)}>
          <b>
            <i className="fa-solid fa-angle-right"></i>
          </b>
        </button>
      </div>
      <div className="surprise-me">
        <button className="button-surprise">
          <b>Surprise Me</b>
        </button>
      </div>
    </section>
  );
};
export default Review;
