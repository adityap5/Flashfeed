import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {


  render() {
    return (
      <div className="container my-3">
        <h2>Flashfeed-Main Headlines</h2>
        <div className="row my-3">
            <div className="col-md-4"> <NewsItem title="myTitle" description="myDescription"/></div>
            <div className="col-md-4"> <NewsItem title="myTitle" description="myDescription"/></div>
            <div className="col-md-4"> <NewsItem title="myTitle" description="myDescription"/></div>
   
   
    </div>
    <div className="row my-3">
            <div className="col-md-4"> <NewsItem title="myTitle" description="myDescription"/></div>
            <div className="col-md-4"> <NewsItem title="myTitle" description="myDescription"/></div>
            <div className="col-md-4"> <NewsItem title="myTitle" description="myDescription"/></div>
   
   
    </div>
    <div className="row my-3">
            <div className="col-md-4"> <NewsItem title="myTitle" description="myDescription"/></div>
            <div className="col-md-4"> <NewsItem title="myTitle" description="myDescription"/></div>
            <div className="col-md-4"> <NewsItem title="myTitle" description="myDescription"/></div>
   
   
    </div>
    
    </div>
    
    )
  }
}

export default News
