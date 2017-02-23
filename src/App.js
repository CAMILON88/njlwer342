import React, { Component } from 'react';



class App extends Component {
  constructor() {
    super();
    
    this.state = {

   
      list: ["Sacar la ropa", "Hacer la cama", "Leer un rato"],
      name: ""
    }
  }
 textChange(event) {
    this.setState({
      name: event.target.value
    })
  }

 
  addItem(event)
  {
     
   
     event.preventDefault();
     this.setState({
      list: this.state.list.concat(this.state.name),
      name: ''

     
    })

    
   
         
  }
  render() {
    return (
      <div className='wrapper'>
        <div className='list'>
          <h3>Por hacer:</h3>
          <ul className='todo'>
           {this.state.list.map((lista, index) => <li key={index}>{lista}</li>)}

          </ul>
           <form onSubmit={this.addItem.bind(this)}>
             <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.name} onChange={this.textChange.bind(this)}  />
            </form>
           
           
        </div>
      </div>
    )
  }
}



export default App;
