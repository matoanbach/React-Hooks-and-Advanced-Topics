import React from "react";
import { useReducer } from "react";
import { data } from "../../../data";
import reducer from "./reducer";

const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  function clearList() {
    dispatch({ type: "CLEAR_LIST" });
  }

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", _id: id });
  };

  const resetList = () => {
    dispatch({ type: "RESET_LIST" });
  };
  console.log("state");
  console.log(state);
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length === 0 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={() => resetList()}
        >
          reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={() => clearList()}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
