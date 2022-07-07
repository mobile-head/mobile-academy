import React from "react";
import { Button } from "reactstrap";

//= ==========================================================================================
export default function ButtonLink({ link, onClick }) {
  return (
    <Button onClick={onClick} style={styles.btnStyle}>
      {link}
    </Button>
  );
}

//= ==============================================================================================
const styles = {
  btnStyle: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    color: "#000",
    alignSelf: "left",
    marginLeft: "0px",
    margin: "0px",
    paddingLeft: "5px",
    paddingTop: "8px",
    paddingBottom: "8px",
    fontSize: "14px",
    textAlign: "left",
  },
};
