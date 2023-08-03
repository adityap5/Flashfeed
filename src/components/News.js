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
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9f3f41f6b2e94c0585b71945d10f3724&page=1&pageSize=6`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9f3f41f6b2e94c0585b71945d10f3724&page=${this.state.page - 1}&pageSize=6`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }

  handleNextClick = async () => {
    if (!this.state.page + 1 > Math.ceil(this.state.totalResults / 6)) {

    } else {

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9f3f41f6b2e94c0585b71945d10f3724&page=${this.state.page + 1}&pageSize=6`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();


      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }

  }

  render() {
    return (
      <div className="container my 3">
        <h1 className="text-center my-3">Flashfeed Main Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4">
              <NewsItem key={element.url} title={element.title ? element.title : ""} description={element.description ? element.description : ""} publishedAt={element.publishedAt ? element.publishedAt:""}author={element.author ? element.author : <figcaption class="blockquote-footer">
                By Sources
              </figcaption>} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}

        </div>
        <div className="container d-flex justify-content-between my4">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.handlePrevClick}>&larr;Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 6)} type="button" className="btn btn-danger" onClick={this.handleNextClick}>Next&rarr;</button>

        </div>
      </div>

    )
  }
}

export default News
