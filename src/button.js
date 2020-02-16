import React from "react";
import Button from "@material-ui/core/Button";

export default ({ setStatus }) => (
  <Button
    type="submit"
    onClick={() => {
      setStatus("success");
    }}
    color="primary"
  >
    Open
  </Button>
);
