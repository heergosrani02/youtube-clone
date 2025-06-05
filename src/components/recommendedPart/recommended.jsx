import moment from "moment";
import { API_KEY, value_converter } from "../../data";
import recommendedCss from "./recommended.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router";

function Recommended({ categoryId }) {
  const [recommendedData, setRecommendedData] = useState([]);

  const recommendDataUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=20&videoCategoryId=${categoryId}&key=${API_KEY}`;

  useEffect(() => {
    fetch(recommendDataUrl)
      .then((response) => response.json())
      .then((data) => (console.log(data), setRecommendedData(data.items)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className={recommendedCss.container}>
        {recommendedData.map((fetchData) => {
          return (
            <div key={fetchData.id}>
            <Link to={`/video/${fetchData.snippet.categoryId}/${fetchData.id}`} style={{textDecoration: "none", color: "white"}}>
              <div className={recommendedCss.content}>
              <img src={fetchData.snippet.thumbnails.medium.url} alt="" />
              <div className={recommendedCss.item}>
                <p className={recommendedCss.title}>
                  {fetchData.snippet.title}
                </p>
                <span>{fetchData.snippet.channelTitle}</span> <br />
                <span>{value_converter(fetchData.statistics.viewCount)} views &bull; </span>
                <span>{moment(fetchData.snippet.publishedAt).fromNow()}</span>
              </div>
              </div>
            </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Recommended;
