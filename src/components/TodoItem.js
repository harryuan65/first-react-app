import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItem extends Component {
  getStyle = ()=>{
    return {
      backgroundColor:'#f4f4f4',
      borderBottom:'2px #ccc dotted',
      padding: '10px',
      textDecoration:(this.props.todo.completed)?'line-through':'none'
    }
  }
//這種寫法會造成this沒辦法存取
// markComplete(e){
//   console.log(this.props);
// }


  render() {
    // destructuring:拆解簡化this.props.妳的prop , 就可以直接使用prop中物件的attr
const {id,title} = this.props.todo;

    return (
      //嵌入式style在react 直接手動要{{}}  用物件存只要{物件}  函數getStyle也是
      //JSXˇ的style若原CSS中是小寫並使用-   例如font-color 那在這邊就要用fontColor，也就是駝峰式命名法。
      <div style={{backgroundColor:'#f4f4f4'}}>
        <p style = {this.getStyle()}>
        <input type='checkbox' onChange={this.props.markComplete.bind(this,id)} /> {' '} 
          {id} : {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>x</button>
        </p>
      </div>
    )
  }
}

// const itemStyle = {
//   backgroundColor: '#e3e3e3;'
// }


//padding :top left
//borderRadius: 50% = round
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 8px',   
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}
export default TodoItem
