import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  // function toggleAlert(){
  //   if(showAlert){
  //     setShowAlert(false);
  //     return;
  //   }
  //   setShowAlert(true);
  // };

  return (
    <div>
      <button className="btn" onClick={() => {
        setShowAlert(!showAlert);
      }}>toggle</button>
    {showAlert && <Alter />}
    </div>
  );
};

function Alter() {
  return <div className="alert alert-danger">
    hello world
  </div>;
}
export default ToggleChallenge;
