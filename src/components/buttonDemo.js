import BrowserOnly from "@docusaurus/BrowserOnly";
import { useEffect, useState } from "react";

export const WidgetDemoBrowser = ({
  buttonText = undefined,
  targetUrl = undefined,
}) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    import("mighty-academy-widget").then((res) =>
      setComponent(() => res.MightyWidget)
    );
  }, []);

  if (!Component) return <div>Loading...</div>;

  return (
    <Component
      partnerId="Mighty"
      theme="dark"
      percent="50%"
      targetUrl={targetUrl}
      children={
        <button style={{ marginBottom: "20px" }}>
          {buttonText ?? "Start Learning"}
        </button>
      }
    />
  );
};

export const ButtonWidgetDemo = (props) => (
  <BrowserOnly>{() => <WidgetDemoBrowser {...props} />}</BrowserOnly>
);
