import React, { Component } from 'react'

export class Card extends Component {

  render() {
    return (
      <div class="card w-25">
        <img src={this.props.image} className="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <h3 class="card-title">Nomi: {this.props.name}</h3>
          <h5 class="card-title">Narxi: {this.props.price}</h5>
          <h5 class="card-title">Rangi: {this.props.color}</h5>
          <h5 class="card-title">Brand: {this.props.brand}</h5>
          <p class="card-text">{this.props.title}</p>
          <button  class="btn btn-primary">Add to Cart</button>
          <a href="#" class="btn btn-primary" onClick={this.props.alohida}>View</a>
        </div>
      </div>
    )
  }
}

export default Card