import React, { useState } from "react";
import Cropper from "react-cropper";
import ClayModal, { useModal } from "@clayui/modal";

//usar somente quando não estiver no liferay
import "cropperjs/dist/cropper.css";
import "./style.css";

const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

const styleButtonOutlineCinza = {
  border: "1px solid #707070",
  borderRadius: "5px",
  opacity: 1,
  background: "transparent",
};

const UploadImageModelClay = (props) => {
  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();

  const { observer, onClose } = useModal({
    onClose: () => {
      props.setShow(false);
    },
  });

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

  const handleConfirm = () => {
    debugger;
    getCropData()
    console.log(cropData);
    alert("xxx");
    onClose();
  };

  return (
    <React.Fragment>
      {props.show && (
        <ClayModal observer={observer}>
          <ClayModal.Body>
            <div className="text-center">
              <div className="row">
                <div style={{ width: "100%"}}>
                  <input type="file" onChange={onChange} />
                  <Cropper
                    style={{ height: 400, width: "100%", marginTop: "10px", marginBottom: "10px" }}
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
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 mb-4 mb-sm-0">
                  <button
                    className="btn-unimed btn-unimed--green"
                    onClick={handleConfirm}
                  >
                    Salvar
                  </button>
                </div>
                <div className="col-12 col-sm-6">
                  <button
                    className="btn btn-unimed btn-hover"
                    style={styleButtonOutlineCinza}
                    onClick={() => onClose()}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </ClayModal.Body>
        </ClayModal>
      )}
    </React.Fragment>
  );
};

export default UploadImageModelClay;
