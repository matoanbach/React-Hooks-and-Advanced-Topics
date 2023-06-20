import {people} from "../../../data"
import {useState} from "react"
function UseStateArray(){
  
  const [peopleList, setList] = useState(people);
  function removeItem(id) {
    setList((prevPeople) => {
      return prevPeople.filter((person) => {
        return person.id !== id;
      });
    });
    console.log(peopleList);
  }
  return (
    <div>
      {
        peopleList.map((person) => {
          const {id, name} = person;
          return (
            <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
          );
        })
      }
    </div>
  );
};

export default UseStateArray;
