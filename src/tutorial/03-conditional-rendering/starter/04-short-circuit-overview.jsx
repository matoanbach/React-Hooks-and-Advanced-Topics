import { useState } from 'react';

const ShortCircuitOverview = () => {
  //falsy
  const [text, setText] = useState("");
  //truthy
  const [name, setName] = useState("susan");

  if(!text) {
    return (
      <div>
        <a>Anonymous</a>
      </div>
    );
  } 


};
export default ShortCircuitOverview;
