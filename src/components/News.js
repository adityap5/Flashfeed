import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 6,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }
 
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    } 
    document.title= `${this.props.category} - Flashfeed`;
  }
  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9f3f41f6b2e94c0585b71945d10f3724&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
  }
  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({page: this.state.page -1});
    this.updateNews();
  }

  handleNextClick = async () => {
    this.setState({page: this.state.page +1});
    this.updateNews();
    }

  

  render() {
    return (
      <div className="container my 3">
        <h1 className="text-center my-3">Flashfeed Main {this.props.category} Headlines </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4">
              <NewsItem key={element.url} title={element.title ? element.title : ""} source={element.source.name} description={element.description ? element.description : ""} publishedAt={element.publishedAt ? element.publishedAt:""}author={element.author ? element.author : element.source.name} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}

        </div >
        <div className="container d-flex justify-content-between my10">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.handlePrevClick}>&larr;Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 6)} type="button" className="btn btn-danger" onClick={this.handleNextClick}>Next&rarr;</button>

        </div>
      </div>

    )
        }
      }
export default News
