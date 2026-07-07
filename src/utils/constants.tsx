import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faTrashCan,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

// Icons used by NotesEditor. Kept in one place so the Save/Clear/Download
// buttons stay visually consistent wherever they're reused.
export const SaveIcon = () => (
  <FontAwesomeIcon icon={faFloppyDisk} style={{ color: "white" }} />
);

export const ClearIcon = () => (
  <FontAwesomeIcon
    icon={faTrashCan}
    style={{
      "--fa-primary-color": "white",
      "--fa-secondary-color": "#E50914",
    }}
  />
);

export const DownloadIcon = () => (
  <FontAwesomeIcon icon={faArrowDown} style={{ color: "white" }} />
);
