import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import React from "react";

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
