import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from "./lib/MyComponent";

const App = () => (
  <div>
      <h1>Components showcase</h1>
      <ul>
          <li>
              <MyComponent/>
          </li>
      </ul>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
