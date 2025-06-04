import { useEffect, useState } from "react";
import videoCss from "./VideoPage.module.css";
import { API_KEY, value_converter } from "../../data.js";
import { useParams } from "react-router";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFat, PiCurrencyDollarBold } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";

function VideoPage(){

    const {videoId} = useParams();

    const [videoData, setVideoData] = useState();
    const [channelData, setChannelData] = useState(null);

    const videoDataUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    //const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData.snippet.channelId}w&key=${API_KEY}`;
    
    useEffect(() => {
        fetch(videoDataUrl)
        .then((response) => response.json())
        .then((data) => setVideoData(data.items[0]))
        .catch((error) => console.log(error));
    }, [])

    // useEffect(() => {
    //     fetch(channelDataUrl)
    //     .then((response) => response.json())
    //     .then((data) =>(console.log(data), setChannelData(data.items[0])))
    //     .catch((error) => console.log(error));
    // }, [])

    return(
        <>
            <div className={videoCss.container}>
                <iframe width="850" height="450" src={`https://www.youtube.com/embed/${videoId}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <h3>{videoData?videoData.snippet.title: "Title Here"}</h3>
                <div className={videoCss.channel}>
                    <div className={videoCss.channelDetail}>
                        <div>
                            <p>{videoData?videoData.snippet.channelTitle:""}</p>
                            <p>1000 subscribers</p>
                        </div>
                        <div>
                            <button className={videoCss.btn}>Join</button>
                            <button className={videoCss.btn}>Subscribe</button>
                        </div>
                    </div>

                    <div className={videoCss.channelStatistics}>
                        <div className={videoCss.button}>
                            <button className={videoCss.btn}><AiOutlineLike size={18} style={{paddingRight:"5px"}}/>{value_converter(videoData?videoData.statistics.likeCount:"")}</button>
                            <button className={videoCss.btn}><AiOutlineDislike size={18}/></button>
                        </div>
                        <button className={videoCss.btn}><PiShareFat size={18}/> Share</button>
                        <button className={videoCss.btn}><HiDownload size={18}/> Download</button>
                        <button className={videoCss.btn}><PiCurrencyDollarBold size={18}/> Thanks</button>
                    </div>
                </div>

                <div className={videoCss.comments}>
                    <h4>316 Comments</h4>
                    <div className={videoCss.comment}>
                        <span>@abchello</span>
                        <span> 1 year ago</span>
                        <p>you are amazing i remember when you used to make small projects videos now your making clones for big apps this 10x more amazing keep posting we want series for big apps like this long videos.</p>
                        <span style={{marginRight: "5px"}}><AiOutlineLike size={20}/> 20 </span> <AiOutlineDislike size={20}/>
                        <span style={{marginLeft: "40px"}}>Reply</span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default VideoPage;