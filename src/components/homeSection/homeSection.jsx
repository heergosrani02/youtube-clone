import homeCss from "./homeSection.module.css";
import { useEffect, useState } from "react";
import { API_KEY } from "./../../data.js";

function HomeSection() {
  const [videos, setVideos] = useState([]);
  const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=${API_KEY}`;

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
              <div className={homeCss.items}> 
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
                <p>{video.snippet.title}</p>
                <span>{video.snippet.channelTitle}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HomeSection;
