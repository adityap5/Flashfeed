import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let { title,description,publishedAt,author,imageUrl,newsUrl,source } = this.props;
    return (
  
<div className="my-3">
      <div className="card" >
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left: '90%' , zIndex:1}}>{source}</span>
        <img src={imageUrl?imageUrl:"https://codezine.jp/static/images/article/18068/12694_og.jpg "} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}....</p><br />
            <p className="card-text"><figcaption class="blockquote-footer">By {author} on {new Date(publishedAt).toGMTString()}</figcaption></p>
           

            <a href={newsUrl} target='_blank'rel="noreferrer" className="btn btn-sm btn-danger">Read More</a>
        </div>
        </div>
        </div>
        
    )
  }
}

export default NewsItem
