import { useEffect, useState } from "react";
import videoCss from "./VideoPage.module.css";
import { API_KEY } from "../../data.js";
import { useParams } from "react-router";

function VideoPage(){

    const {videoId} = useParams();
    const [videoData, setVideoData] = useState();
    const videoDataUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

    useEffect(() => {
        fetch(videoDataUrl)
        .then((response) => response.json())
        .then((data) =>(console.log(data), setVideoData(data.items[0])))
        .catch((error) => console.log(error));
    }, [])

    return(
        <>
            <div className={videoCss.container}>
                <iframe width="850" height="450" src={`https://www.youtube.com/embed/${videoId}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <h3>{videoData?videoData.snippet.title: "Title Here"}</h3>
            </div>
        </>
    )
};

export default VideoPage;