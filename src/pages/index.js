import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import { useEffect, useState } from "react";

const BrowserComponent = () => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    import("mighty-academy-widget").then((module) =>
      setComponent(() => module.MightyPage)
    );
  }, []);

  if (!Component) return <div>Loading...</div>;
  return <Component partnerId="Mighty" theme="light" />;
};

export default function Home() {
  return (
    <Layout>
      <main>
        <BrowserOnly>{() => <BrowserComponent />}</BrowserOnly>
      </main>
    </Layout>
  );
}
