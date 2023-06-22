import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div>
      <h2>{text || "default value"}</h2>
      {text && (
        <div>

          <h2>{name}</h2>
        </div>
      )}
      <h2 style={{margin: "1rem 0"}}>Ternary Operator</h2>
      <button className="btn">{isEditing ? "edit" : "add"}</button>
      {
        user 
        ? <div>
          <h4>hello there user {user.name}</h4>
        </div> 
        : <div>Plz login</div>
      }
    </div>
  );
};

export default ShortCircuitExamples;
