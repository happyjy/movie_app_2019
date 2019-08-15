import React from 'react';
// import PropTypes from "prop-types";

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

   /**
    * * this.state.count = 10; 이런식으로 state를 직접 변경하면 refresh를 하지 않는다. 
    *   - Do not mutate state directly. Use setState() console에 warning을 볼 수 있다. 
    *   
    * * 매번 state 상태를 변경할 때 "setState()"를 사용해 
    * state가 변경이 되면 "변경되는 state"를 가지고 
    * "render funciton"을 호출해서 rerendring 하도록 해야한다.
    * * reRendering을 할때는 state로 인해서 변경되는 부분만 "virtual Dom"에 의해서 rendering이 다시 된다.(화면 전체가 rendering이 다시 되는게 아님)
    */

  state = {
    count: 0
  }
  
  add = () => {
    // this.setState({ count: ++this.state.count });
    this.setState( current => ({ count: ++current.count }) );
  }
  minus = () => {
    // this.setState({ count: --this.state.count })
    this.setState( current => ({ count: --current.count }) );
  }

  componentDidMount() {
    console.log("### component rendered");
  }
  componentDidUpdate() {
    console.log("### I just updated");
  }
  componentWillunmout() {
    console.log("### GoodBye")
  }

  render(){
    console.log("### I am rendering");
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
 