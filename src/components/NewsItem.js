import React from 'react'

const NewsItem = (props) => {
  let {title, description, imageUrl, newsUrl, author, date, source} = props;
  return (
    <div className="my-4">
      <div className="card shadow-sm">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'86%',zIndex:1, fontSize:'0.85rem', padding:'8px 12px'}}>{source}</span>
        <img src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQuSjiMrxhmvRSl-5IS9ZoA99ueIGIX84SQ&usqp=CAU" : imageUrl} 
             className="card-img-top" alt="news" style={{height:'220px', objectFit:'cover', borderTopLeftRadius:'12px', borderTopRightRadius:'12px'}} />
        <div className="card-body" style={{minHeight:'180px', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <h5 className="card-title" style={{fontFamily:'Roboto Slab, Georgia, serif', fontWeight:700}}>{title} </h5>
          <p className="card-text" style={{fontSize:'1rem'}}>{description}</p>
          <div>
            <p className="card-text mb-2"><small className="text-body-secondary" style={{color:'#bdbdbd'}}>By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer" style={{borderRadius:'20px', padding:'6px 18px', fontWeight:600}}>Read More</a>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default NewsItem