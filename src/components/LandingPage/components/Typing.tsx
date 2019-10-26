import * as React from "react";
import Typed from "react-typed";

const Typing = () => {
  return(
    <Typed
        strings={["Desayuno", "Almuerzo", "Brunch"]}
        typeSpeed={70}
        backDelay={1000}
        backSpeed={70}
        loop
    />
  );
};

export default Typing;
