import { title } from "assets/jss/material-kit-react.jsx";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx";

const projectStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  ...imagesStyle,
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  content: {
  	color: "#3c4858",
  	textAlign: "left"
  }
};

export default projectStyle;
