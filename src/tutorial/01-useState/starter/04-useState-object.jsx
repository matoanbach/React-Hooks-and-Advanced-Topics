import { useState } from 'react';

const UseStateObject = () => {
  const [thePerson, setPerson] = useState({
    name: "peter",
    age: "24",
    hobby: "Read Books"
  });
  function dispayPerson() {
    setPerson({
      name: "john",
      age: "28",
      hobby: "screams at the computer"
    });
  };
  return (
    <div>
      <h3>{thePerson.name}</h3>
      <h3>{thePerson.age}</h3>
      <h3>Enjoys: {thePerson.hobby}</h3>
      <button className="btn" onClick={dispayPerson}>Show John</button>
    </div>
  );
};

export default UseStateObject;
