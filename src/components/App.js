import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Yeeeeeee!!!!</h1>
      <h4>
        Webpack and Babel configurations are used instead of create-react-app
        for this basic react app
      </h4>
      <h3> Key dependencies used:</h3>
      <ul>
        <h5>Dependencies</h5>
        <li>React</li>
        <li>ReactDom</li>
      </ul>
      <ul>
        <h5>Dev Dependencies</h5>
        <li>webpack</li>
        <li>webpack-cli</li>
        <li>webpack-dev-server</li>
        <li>html-webpack-plugin</li>
        <li>@babel/core</li>
        <li>@babel/preset-env</li>
        <li>@babel/preset-react</li>
        <li>babel-loader</li>
      </ul>
    </div>
  );
};

export default App;
