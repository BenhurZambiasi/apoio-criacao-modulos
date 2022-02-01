import React from "react";

import "./styles.css";

function Checkbox({ onChange, label, error, className, terms }) {
  return (
    <div className={`container-check ${className}`}>
      <label htmlFor="check_id">
        <input
          type="checkbox"
          id="check_id"
          onChange={onChange}
          checked={terms ? true : false}
        />
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
