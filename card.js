import React,{ Component } from "react";

class Card extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
let badgeText;
   if (this.props.item.openShots === 0) {
      badgeText = "SOLD OUT";
    }
    
  else if (this.props.item.location =="online")
   {
      badgeText=" ONLINE";
    }
      
    
    return (
      <div className="card">
      <img src={this.props.item.coverImg} className ="card--img"/>
      {badgeText && <div className="card--badge">{badgeText}</div>}
      
      <div className='card'>
      <img src="/Star 1.png" className="card--star"/>
      <div className="card--stats">
      <span>{this.props.item.stats.rating}</span>
      <span>({this.props.item.stats.reviewCount })</span>
      </div>
      <span>.{this.props.item.location}</span>
      <p className="card--title">{this.props.item.title}</p>
      <p><strong> from ${this.props.item.price}</strong> / person</p>
      </div>
      </div>
      
      )
    
    
  }
  
}

export default Card;


