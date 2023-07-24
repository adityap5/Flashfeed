import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {

  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }
  async componentDidMount() {
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=9f3f41f6b2e94c0585b71945d10f3724&page=1&pageSize=20";

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9f3f41f6b2e94c0585b71945d10f3724&page=${this.state.page - 1}&pageSize=20`;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
   
    this.setState({

      page: this.state.page -1 ,
    articles: parsedData.articles 
   
    })
  }

  handleNextClick = async () => {
if(this.state.page +1 > Math.ceil(this.state.totalResults/20)){

}else{
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9f3f41f6b2e94c0585b71945d10f3724&page=${this.state.page +1}&pageSize=20`;

  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  
  this.setState({
    page: this.state.page + 1,
  articles: parsedData.articles 
 
  })
}
   
  }

  render() {
    return (
      <div className="container my 3">
        <h2>Flashfeed Main Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4">
              <NewsItem key={element.url} title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}

        </div>
        <div className="container d-flex justify-content-between my4">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.handlePrevClick}>&larr;Previous</button>
          <button type="button" className="btn btn-danger" onClick={this.handleNextClick}>Next&rarr;</button>

        </div>
      </div>

    )
  }
}

export default News
