import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let { title,description,publishedAt,author,imageUrl,newsUrl,source } = this.props;
    return (
  
<div className="my-3">
      <div className="card" >
        <div style={{display : 'flex', 
        justifyContent: 'flex-end',
        position: 'absolute',
        right:0
      }}>
<span className="badge rounded-pill bg-info">{source}</span>
      </div>
      
        <img src={imageUrl?imageUrl:"https://codezine.jp/static/images/article/18068/12694_og.jpg "} className="card-img-top" alt="..."/>
        <div className="card-body"> 
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}....</p><br />
            <div className="card-text"><figcaption className="blockquote-footer">By {author} on {new Date(publishedAt).toGMTString()}</figcaption></div>
           

            <a href={newsUrl} target='_blank'rel="noreferrer" className="btn btn-sm btn-outline-dark">Read More</a>
        </div>
        </div>
        </div>
        
    )
  }
}

export default NewsItem
