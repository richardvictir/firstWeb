import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import Data from'./Data';
console.log(Data);
class App extends React.Component {
  
  render(){
    const myData = Data.map(
      (item) =>{
       return(
      <Card 
      key={item.id}
      item={item}
      /> 
         ) 
        
      }
     ) 
    return(
      <div>
  <Navbar />
  <Hero />
  <section className="column">
  {myData}
  </section>
    
      </div>
      )
    
  }
  
};


ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);
