import { useState } from "react";

const PERPAGE = 6;
const SideBar = ({ byGender, filterData, filterState, byState }) => {
  const myArray = byGender.map((str, index) => ({
    value: str,
    id: index + 1,
    checked: false,
  }));
  const myState = byState.map((str, index) => ({
    value: str,
    id: index + 1,
    checked: false,
  }));

  const [gender, setGender] = useState(myArray);
  const [state, setState] = useState(myState);
  const [checked, setChecked] = useState(false);
  const [hello, setHello] = useState(0);

  const handleChangeGender = (e) => {
    filterData(e.value);
    setGender(
      myArray.map((foo) =>
        foo.id === e.id ? { ...foo, checked: !foo.checked } : foo
      )
    );
    if (e.checked) {
      setChecked(!checked);
    }
  };
  const handleChangeState = (e) => {
    filterState(e.value);
    setState(
      myState.map((foo) => {
        return foo.id === e.id ? { ...foo, checked: !foo.checked } : foo;
      })
    );
  };

  const humans = gender.map((val) => {
    return (
      <label key={val.id} className="sub_text">
        <input
          value={val.id}
          checked={val.checked}
          type="checkbox"
          name={val.value}
          onChange={() => handleChangeGender(val)}
        />
        <span>{val.value}</span>
      </label>
    );
  });

  const states = state.slice(0, hello + PERPAGE).map((val) => {
    return (
      <label key={val.id} className="sub_text">
        <input
          value={val.id}
          checked={val.checked}
          type="checkbox"
          name={val.value}
          onChange={() => handleChangeState(val)}
        />
        <span>{val.value}</span>
      </label>
    );
  });
  const handlePage = () => {
    setHello(hello + PERPAGE);
  };
  return (
    <div className="sidebar">
      <div className="block">
        <span className="sub_title">By gender</span>
        <div>{humans}</div>
      </div>
      <div className="block">
        <span className="sub_title">By State</span>
        {states}
        <button className="btn-text" onClick={handlePage}>
          more state
        </button>
      </div>
    </div>
  );
};

export default SideBar;
