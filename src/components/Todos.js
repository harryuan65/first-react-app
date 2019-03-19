import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';
//對prop做驗證

class Todos extends Component {
  render() {
    return this.props.todolists.map((d)=>(
        <TodoItem key= {d.id} todo={d} markComplete={this.props.markComplete}/>
        //key: 對於使用的component的物件最好給他一個key
    ));
  }
}

//array of OBJECTs!
Todos.propTypes = {
  todolists: PropTypes.array.isRequired
}

export default Todos;


//32:00 proptypes