
import React, { Component } from 'react';
import Likebutton from "./components/Likebutton"

class fetchTodo extends Component {
    state= {
        loading: true,
        todos: [],
    
    }

     async componentDidMount() {
        const url = "http://jsonplaceholder.typicode.com/todos";
        const response = await fetch(url);
        const data = await response.json()
        console.log(data[0])
        this.setState({todos: data, loading: false}); 

    }
    render() {
        var {todos} = this.state;
     
       
        return (
            <div className="App"> 
                <header>
                    <form id="to-do-form">
                {this.state.loading || !this.state.todos  ? (
                 <div> loading... </div>
                 ) : ( 
                     <div>
                         
                         <ul>
               
                         {todos.map(todo =>  (
                          <li key={todo.id}> 
                             {todo.title} 
                             <Likebutton></Likebutton> 
                        </li>
                    ))}
                         </ul>
                     </div>
                 )}
                 </form>
                 </header>
            </div>
        );
    }
}

export default fetchTodo;