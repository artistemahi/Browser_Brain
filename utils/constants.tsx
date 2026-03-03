import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward,
  faFloppyDisk,
  faTrashCan,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import React from "react"; // this line important to show this icons

export const PlayIcon = () => (
  <FontAwesomeIcon
    icon={faPlay}
    bounce
    size="sm"
    style={{ color: "#63E6BE" }}
  />
);
export const BackwardStep = () => (
  <FontAwesomeIcon
    icon={faStepBackward}
    beat
    size="sm"
    style={{ color: "#63E6BE" }}
  />
);
export const ForwardStep = () => (
  <FontAwesomeIcon
    icon={faStepForward}
    beatFade
    size="sm"
    style={{ color: "#63E6BE" }}
  />
);
export const StopIcon = () => (
  <FontAwesomeIcon
    icon={faPause}
    beatFade
    size="sm"
    style={{ color: "#63E6BE" }}
  />
);
export const SaveIcon = () => (
  <FontAwesomeIcon icon={faFloppyDisk} style={{ color: "white" }} />
);
export const ClearIcon = () => (
  <FontAwesomeIcon
    icon={faTrashCan}
    style={{
      "--fa-primary-color": "white",
      "--fa-secondary-color": "rgb(62, 255, 7)",
    }}
  />
);
export const DownloadIcon = () => (
  <FontAwesomeIcon
    icon={faArrowDown}
    style={{ color: "white"}}
  />
);
