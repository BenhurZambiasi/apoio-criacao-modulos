import React, { useState } from "react";
import Cropper from "react-cropper";
import { Modal, Button } from "react-bootstrap";

//usar somente quando não estiver no liferay
import "cropperjs/dist/cropper.css";
import "./style.css";

const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

const UploadImageModel = (props) => {
  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Body>
        <div>
          <div style={{ width: "100%" }}>
            <input type="file" onChange={onChange} />
            <button>Use default img</button>
            <br />
            <br />
            <Cropper
              style={{ height: 400, width: "100%" }}
              zoomTo={0.5}
              initialAspectRatio={1}
              preview=".img-preview"
              src={image}
              viewMode={1}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
              onInitialized={(instance) => {
                setCropper(instance);
              }}
              guides={true}
            />
          </div>
          <div>
            <div className="box" style={{ width: "50%", float: "right" }}>
              <h1>Preview</h1>
              <div
                className="img-preview"
                style={{ width: "100%", float: "left", height: "300px" }}
              />
            </div>
            <div
              className="box"
              style={{ width: "50%", float: "right", height: "300px" }}
            >
              <h1>
                <span>Crop</span>
                <button style={{ float: "right" }} onClick={getCropData}>
                  Crop Image
                </button>
              </h1>
              <img style={{ width: "100%" }} src={cropData} alt="cropped" />
            </div>
          </div>
          <br style={{ clear: "both" }} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UploadImageModel;
