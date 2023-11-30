import React from "react";

function Header({ title, textColor, bgColor }) {
//Adicionando estilo

const myStyle = {
    backgroundColor: bgColor,
    color: textColor
}

  return (
    <header style={myStyle}>
      <div className="container">
        <h1>{title}</h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "Meu App",
  bgColor: "black",
  textColor: "#c026d3"
};

export default Header;
