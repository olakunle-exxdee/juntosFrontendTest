import React, { useContext } from "react";
import Person from "./Person";
import NameContext from "../context/NameContext";
import SideBar from "./SideBar";
import Nav from "./Nav";

const Main = () => {
  const { people } = useContext(NameContext);
  const [humans, setHumans] = React.useState(people);
  const byGender = ["all", ...new Set(people.map((val) => val.gender))];

  const byState = [
    "all",
    ...new Set(
      people.map((val) => {
        const { state } = val.location;
        return state;
      })
    ),
  ];

  const filterPeople = (gender) => {
    if (gender === "all") {
      setHumans(people);
      return;
    }

    const newItems = people.filter((item) => item.gender === gender);

    return setHumans(newItems);
  };
  const filterSearch = (gender) => {
    if (gender === "") {
      setHumans(people);
      return;
    }

    const newItems = people.filter((item) =>
      item.name.first
        .toLowerCase()
        .includes(
          gender.toLowerCase() ||
            item.name.last.toLowerCase().includes(gender.toLowerCase())
        )
    );

    return setHumans(newItems);
  };
  const filterState = (state) => {
    if (state === "all") {
      setHumans(people);
      return;
    }
    const newItems = people.filter((item) => item.location.state === state);

    return setHumans(newItems);
  };

  return (
    <>
      <Nav filterSearch={filterSearch} />
      <div className="main">
        <SideBar
          filterData={filterPeople}
          byGender={byGender}
          byState={byState}
          filterState={filterState}
        />

        <Person people={humans} />
      </div>
    </>
  );
};

export default Main;
