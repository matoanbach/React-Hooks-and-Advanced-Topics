import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];
const OtherInputs = () => {
  const frameworks = ['react', 'angular', 'vue', 'svelte'];
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState(["react", "angular", "vue", "svelte"])


  function handleShipping(event) {
    console.log(event.target.checked);
    setShipping(event.target.checked);
  }

  function handleFrameWork(event) {
    setFramework(event.target.value)
  }
  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input type="checkbox" name="shipping" id="shipping"
          onClick={handleShipping}
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select name="framework" id="framework" value={framework} onChange={handleFrameWork} multiple={false}>
            {frameworks.map((framework) => {
              return <option key={framework}>{framework}</option>
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
