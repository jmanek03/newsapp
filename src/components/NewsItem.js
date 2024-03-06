import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className="my-4">
        <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQuSjiMrxhmvRSl-5IS9ZoA99ueIGIX84SQ&usqp=CAU":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More</a>
            </div> 
        </div>
      </div>
    )
  }
}

export default NewsItem