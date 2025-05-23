import React from 'react'

const NewsItem = (props) => {
  let {title, description, imageUrl, newsUrl, author, date, source} = props;
  return (
    <div className="my-4">
      <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'86%',zIndex:1}}>{source}</span>
        <img src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQuSjiMrxhmvRSl-5IS9ZoA99ueIGIX84SQ&usqp=CAU" : imageUrl} 
             className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}... </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
        </div> 
      </div>
    </div>
  )
}

export default NewsItem