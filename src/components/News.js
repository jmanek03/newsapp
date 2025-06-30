import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setprogress(20);
    try {
      setLoading(true);
      let url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&country=${props.country}&category=${props.category}&language=en`;

      console.log("Fetching URL:", url); // For debugging

      let response = await fetch(url);
      props.setprogress(50);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Response:", errorText);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let parsedData = await response.json();
      console.log("API Success Response:", parsedData); // For debugging

      props.setprogress(70);

      setArticles(parsedData.results || []);
      setTotalResults(parsedData.totalResults || 0);
    } catch (error) {
      console.error("Error fetching news:", error);
      setArticles([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
      props.setprogress(100);
    }
  };

  useEffect(() => {
    document.title = `NewsApp - ${capitalizeFirstLetter(props.category)}`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    try {
      const nextPage = page + 1;
      setPage(nextPage);

      let url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}&country=${props.country}&category=${props.category}&page=${nextPage}&language=en`;

      let response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let parsedData = await response.json();

      if (parsedData.status === "error") {
        throw new Error(`API Error: ${parsedData.message}`);
      }

      setArticles(articles.concat(parsedData.results || []));
      setTotalResults(parsedData.totalResults || 0);
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "35px" }}
      >
        NewsApp - {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
        >
          <div className="container">
            <div className="row">
              {articles?.map((element, index) => {
                return (
                  <div className="col-md-4" key={element.link || index}>
                    <NewsItem
                      title={element.title?.slice(0, 45) || ""}
                      description={element.description?.slice(0, 50) || ""}
                      imageUrl={element.image_url}
                      newsUrl={element.link}
                      author={element.creator?.join(", ") || "Unknown"}
                      date={element.pubDate}
                      source={element.source_id || "Unknown"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "top",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
