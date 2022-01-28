import React from "react";

import "./styles.css";

function Checkbox({ onChange, label, error }) {
  return (
    <div className="container-check">
      <label htmlFor="check_id">
        <input type="checkbox" id="check_id" onChange={onChange} />
        <div className={`${error && "error"} content-check`}>
          <div></div>
        </div>
      </label>
      <label htmlFor="check_id" className={`label-check ${error && "error"}`}>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
