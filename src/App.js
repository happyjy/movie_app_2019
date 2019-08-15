import React from 'react';
// import Potato from './potato';

function Food({favourite, ingredient}) {
  console.log("### Food component arguments: ", arguments);
  return <h1> I like {favourite}, {ingredient} </h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>  
      <Food favourite="kimchi" 
        ingredient={['cabbage', 'red Pepper']}/>
    </div>
  );
}

export default App;
