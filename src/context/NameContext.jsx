import * as React from "react";
import Skeleton from "../skeleton/Skeleton";
import "../App.css";

const NameContext = React.createContext();

export const NameProvider = ({ children }) => {
  const [people, setPeople] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const filterPeople = (gender) => {
    if (gender === "all") {
      setPeople(people);
      return;
    }

    const newItems = people.filter((item) => item.gender === gender);

    return setPeople(newItems);
  };
  const filterState = (state) => {
    if (state === "all") {
      setPeople(people);
      return;
    }
    const newItems = people.filter((item) => item.location.state === state);

    return setPeople(newItems);
  };
  React.useEffect(() => {
    const fetchPeople = async () => {
      try {
        const res = await fetch("http://localhost:8000/results");
        const data = await res.json();
        setPeople(data);
        setLoading(!loading);
      } catch (error) {}
    };
    fetchPeople();
  }, []);
  if (loading)
    return (
      <div className="feed_wrapper">
        <Skeleton type="feed" />
      </div>
    );

  return (
    <NameContext.Provider value={{ people, filterPeople, filterState }}>
      {children}
    </NameContext.Provider>
  );
};

export default NameContext;
