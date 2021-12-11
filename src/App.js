import "./styles.css";
import { useState, useEffect } from "react";
import Data from "./Data";
import Review from "./Review";
import Loading from "./loading";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [Name, setName] = useState([]);
  const [Job, setJob] = useState([]);

  function flCaps(input) {
    return input.charAt(0).toUpperCase() + input.substring(1);
  }

  function getNames() {
    setLoading(true);
    let names = [];
    let jobs = [];
    Data.forEach((person) => {
      let nameSplit = person.name.split(" ");
      let firstName = flCaps(nameSplit[0]);
      let secondName = flCaps(nameSplit[1]);
      let jobSplit = person.job.split(" ");
      let jobFirst = flCaps(jobSplit[0]);
      let jobSecond;
      if (jobSplit[1] === undefined) jobSecond = "";
      else jobSecond = flCaps(jobSplit[1]);
      names.push(firstName + " " + secondName);
      jobs.push(jobFirst + " " + jobSecond);
    });
    setName(names);
    setJob(jobs);
    setLoading(false);
    // console.log(names);
    // console.log(jobs);
  }

  useEffect(() => {
    getNames();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="App">
        <header>
          <h1>Our Reviews</h1>
        </header>
        <div className="underline"></div>
        <Review Name={Name} Job={Job} Data={Data} />
      </div>
    );
  }
}
