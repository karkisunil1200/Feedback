import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback App",
  bgColor: "black",
  textColor: "pink",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
