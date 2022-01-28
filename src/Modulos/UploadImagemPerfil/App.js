import React, { useState } from "react";
import UploadImageModelClay from "./UploadImageModelClay";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="row text-center">
        <div className="col-md-12 mb-4">
          <img
            className="rounded-circle"
            alt="100x100"
            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
            data-holder-rendered="true"
            onClick={() => setShow(true)}
            height={40}
          />
        </div>
        <UploadImageModelClay
          nomeUnimed={"testePaulo"}
          show={show}
          setShow={setShow}
        />
      </div>
    </>
  );
};

export default App;
