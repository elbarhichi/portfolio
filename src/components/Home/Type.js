import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Engineer - Agentic AI Lead @ Orange",
          "Building Production Multi-Agent Systems",
          "CentraleSupélec Graduate - Valedictorian",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
