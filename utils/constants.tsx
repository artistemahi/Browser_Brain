import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import React from "react"; // this line important to show this icons 

export const PlayIcon = () => (
  <FontAwesomeIcon icon={faPlay} bounce size="sm" style={{ color: "#63E6BE" }} />
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
