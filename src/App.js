import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {

state = {
  todos:
  [
    {
      id:1 ,
      title:'Learn react!',
      completed: false
    }
  ,
    {
        id:2,
        title:'Learn socket.io!',
        completed:false
    } ,
    {
      id:3,
      title:'Do both!',
      completed:false
    }
  ]
}
markComplete = (id)=>{
  this.setState({ todos:this.state.todos.map(d => {
    if(d.id === id){
      d.completed = !d.completed;
    }
    return d;
  }) });
}
//... 展開運算子 55:50
delTodo = (id)=>{
  this.setState({
    todos:[ ...this.state.todos.filter(d => d.id!==id)]
  });
}
  render() {
    return (
      <div className="App">
          <h1>TestReactApp!</h1>
          <Todos todolists={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;


//State: 自己的資料，只可以自己來改

//Props: 老爸傳給兒子的資料，它不能改。
//如果要更改資料就要從老爸那邊改，存取的話兒子可以用.bind方法，傳入