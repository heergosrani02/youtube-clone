import homeCss from "./homeSection.module.css";
import { useEffect, useState } from "react";
import { API_KEY } from "./../../data.js";
import moment from "moment";
import { Link } from "react-router";

export const value_converter  = (value) => {
  if(value>=1000000){
    return Math.floor(value/1000000)+"M";
  }
  else if(value>=1000){
    return Math.floor(value/1000)+"K";
  }
  else{
    return value;
  }
}

function HomeSection() {
  const [videos, setVideos] = useState([]);
  const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=30&regionCode=US&key=${API_KEY}`;
  
  useEffect(() => {
    fetch(videoUrl)
      .then((response) => response.json())
      .then((data) => (console.log(data), setVideos(data.items)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className={homeCss.container}>
        {videos.map((video, index) => {
          return (
            <div key={index} className={homeCss.videos}>
                <Link to={`video/${video.snippet.categoryId}/${video.id}`} style={{textDecoration: "none", color: "white"}}>
                <div className={homeCss.items}>
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                  />
                  <p>{video.snippet.title}</p>
                  <span>{video.snippet.channelTitle}</span> <br />
                  <span>
                    {value_converter(video.statistics.viewCount)} views &bull;{" "}
                  </span>
                  <span>{moment(video.snippet.publishedAt).fromNow()}</span>
                </div>
             </Link>
              </div>
          );
        })}
      </div>
    </>
  );
}

export default HomeSection;