import React, { useState, useEffect } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

const BrowserComponent = ({ children }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    import("mighty-academy-widget").then((module) =>
      setComponent(() => module.MightyWrapper)
    );
  }, []);

  if (!Component) return <div>Loading...</div>;

  return <Component>{children}</Component>;
};

const Root = ({ children }) => (
  <BrowserOnly>
    {() => <BrowserComponent>{children}</BrowserComponent>}
  </BrowserOnly>
);

export default Root;
