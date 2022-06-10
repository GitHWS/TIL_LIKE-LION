# index.html

```HTML
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>React App</title>
</head>

<body>
  <p>test1</p>
  <div id="root"></div>
</body>

</html>
```

# App.js

```JS
function App() {
  return (
    <div className="App">
      <h1>test2</h1>
    </div>
  );
}

export default App;
```

# index.js

```JS
import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
```

```
npm install styled-components
```
