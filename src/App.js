import './App.css';
import React from 'react';



class App extends React.Component{
  
  constructor(props) {
    
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      search : ""
    };
    
  }
 
  componentDidMount(){
    
    

    fetch("http://localhost:3000/mock.json").then(function(response){
      
     return response.json()

    }).then((data)=>{
      
      this.setState({
        data : data
      })

    })

    

    
  }

  onChange = (e) => {

    this.setState({
      search : e.target.value
    })
    
  }

  renderuser(user){
    const {search} = this.state

    if(search !== "" && user.first_name.toLowerCase().indexOf( search.toLowerCase() ) === -1){
      return null 
    }

    return <li>
            <img src={user.photo} /> {user.first_name} 
          </li>
  }


  

  render() {
  
    const {data} = this.state;

    
    
     


    
     
    return (
      
      <div class="container">
        <form>
          <input type="search" icon="search" onChange={this.onChange}/>
        </form>
        <ul>
          {
            data.map(user => {
              return this.renderuser(user)
            })
          }
        </ul>
      </div>
    );
  }
  
}






export default App;
