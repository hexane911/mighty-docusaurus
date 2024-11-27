import  { ButtonWidgetDemo } from "@site/src/components/buttonDemo.js"

Here's how to integrate the Mighty Widget into a Docusaurus site:

# Installation

1. Install the package:
```bash
npm install mighty-academy-widget
```

2. Create src/theme/Root.js:
```js
import React from 'react';
import { MightyWrapper } from 'mighty-academy-widget';

export default function CustomRoot({children}) {
  return (
    <MightyWrapper>
      {children}
    </MightyWrapper>
  );
}
```
3. Use the widget in any component:

```js
import { MightyWidget, MightyPage } from 'mighty-academy-widget';

// For sidebar button:
function MyComponent() {
  return (
    <MightyWidget
      partnerId="YOUR_PARTNER_ID"
      targetUrl="YOUR_TARGET_URL"
      percent="50%"
      theme="dark"
    >
      <button>Open Widget</button>
    </MightyWidget>
  );
}

// For full page:
function LearnPage() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <MightyPage 
        partnerId="YOUR_PARTNER_ID" 
        targetUrl="YOUR_TARGET_URL"
        theme="dark"
      />
    </div>
  );
}
```

# Examples

#### Example button:
<ButtonWidgetDemo buttonText="Mighty Space" />

#### Button with course link in targetUrl:
<ButtonWidgetDemo buttonText="Mighty Course" targetUrl="https://app.mighty.study/courses/64dca34b07a307858eb34474/64dd121807a307858eb35273/64dd128907a307858eb3529a" />
