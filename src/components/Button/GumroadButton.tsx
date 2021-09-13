import Button from "@material-ui/core/Button";
import React from "react";
import { IGumroadButton } from "./types";

const GumroadButton: React.FC<IGumroadButton> = ({ onClick, children }) => {
  return (
    <Button
      style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
      size="medium"
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
export default GumroadButton;
