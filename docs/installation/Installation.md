import  { ButtonWidgetDemo } from "@site/src/components/buttonDemo.js"

# Installation

Here's how to integrate the Mighty Widget into a Docusaurus site:

### 1. Install the package:
```bash
npm install mighty-academy-widget
```



### 2. Create src/theme/Root.js:

:::info Always make sure that client-side code builds correctly. 
:::

```js title="src/theme/Root.js"
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

```
### 3. Now you can use Mighty Widget in your components:

#### Sidebar button

```js title="src/components/buttonDemo.js"
import { MightyWidget, MightyPage } from 'mighty-academy-widget';
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
```
#### Full page
```js title="src/pages/index.js"
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

```

#### Example button:
<ButtonWidgetDemo buttonText="Mighty Space" />

#### Button with course link in targetUrl:
<ButtonWidgetDemo buttonText="Mighty Course" targetUrl="https://app.mighty.study/courses/64dca34b07a307858eb34474/64dd121807a307858eb35273/64dd128907a307858eb3529a" />


### [More documentation](https://docs.mighty.study/)