import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description}=this.props;
    return (
      <div>
        <div classname="card" style={{width: "18rem"}}>
            <img src="..." classname="card-img-top" alt="..."/>
            <div classname="card-body">
              <h5 classname="card-title">{title}</h5>
              <p classname="card-text">{description}</p>
              {/* <a href="#" classname="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
