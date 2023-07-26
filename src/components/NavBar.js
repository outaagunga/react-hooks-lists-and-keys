import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkEl = links.map((link, i) => {
    return (
      <a href={`#${link}`} Key={i}>
        {link}
      </a>
    );
  });

  return <nav>{linkEl}</nav>;
}

export default NavBar;
