import React from "react";
import ReactDom from "react-dom";

const mount = (el) => {
  ReactDom.render(<h1>Hola</h1>, el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#marketing_dev_root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
