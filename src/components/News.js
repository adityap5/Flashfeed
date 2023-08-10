import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=> {

const [articles, setarticles] = useState([])
const [loading, setloading] = useState(true)
const [page, setpage] = useState(1)
const [totalResults, settotalResults] = useState(0)

//   const constructor=(props)=> {
//  document.title = `${props.category} - Flashfeed`;
//   }
  const updateNews = async()=> {
    // props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9f3f41f6b2e94c0585b71945d10f3724&page=${page}&pageSize=${props.pagesize}`;
    
    setloading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
    // props.setProgress(100);

  }
  useEffect(() => {
    updateNews();
  }, [])
  
//  const componentDidMount =async ()=> {
//     this.updateNews();
//   }

  // handlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // }

  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // }

 const fetchMoreData = async () => {
  setpage(page+1)

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9f3f41f6b2e94c0585b71945d10f3724&page=${page}&pageSize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles))
    settotalResults( parsedData.totalResults)
    };



    return (
      <div className="container my 3">
        <h1 className="text-center my-3">Flashfeed Main {props.category} Headlines </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return <div className="col-md-4">
                  <NewsItem key={element.url} title={element.title ? element.title : ""} source={element.source.name} description={element.description ? element.description : ""} publishedAt={element.publishedAt ? element.publishedAt : ""} author={element.author ? element.author : element.source.name} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>

              })}

            </div >
          </div>
        </InfiniteScroll>
      </div>

    )
  }


      News.defaultProps = {
  country: "in",
  pagesize: 6,
  category: "general"
}
      
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string
}
export default News
