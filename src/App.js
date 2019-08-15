import React from 'react';
import PropTypes from "prop-types";

// import Potato from './potato';
class App extends React.Component {
  /**
   * * react는 rendering 할때 class component의 render method를 실행한다.
   * * function component를 사용하지 않고 class component를 사용하는 이유 중 1
   *    - state 때문이다. 
   *    - state는 object이다. 
   *    - state는 component의 data를 넣을 공간이 있고 이 데이터는 변한다. 
   *    (== state에 바꾸고 싶은 data를 넣는다.)
   *    - 어떻게 App에서 data를 어덯게 바꿀것인가? 
   */

  state = {
    count: 0
  }
  
  add = () => {
    console.log("add");
  }

  minus = () => {
    console.log("minus");
  }

  render(){
    return (
      <div>
        <h1>The number is {this.state.count}</h1>  
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
    
  }
}

export default App;
 