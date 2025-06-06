import { useEffect, useState } from "react";
import videoCss from "./VideoPage.module.css";
import { API_KEY, value_converter } from "../../data.js";
import { useParams } from "react-router";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFat, PiCurrencyDollarBold } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";
import Recommended from "../recommendedPart/recommended.jsx";
import moment from "moment";

function VideoPage(){
    const {videoId, categoryId} = useParams();

    const [videoData, setVideoData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentsData, setCommentData] = useState([]);

    const fetchData = async () => {
        const videoDataUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDataUrl)
        .then((response) => response.json())
        .then((data) => setVideoData(data.items[0]))
        .catch((error) => console.log(error));
    }
    
    useEffect(() => {
        fetchData();
    }, [videoId])


    const fetchVideoDetail = async () => {
        const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData?.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelDataUrl)
        .then((response) => response.json())
        .then((data) => setChannelData(data.items[0]))
        .catch((error) => console.log(error));

        const commentsDataUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
        await fetch(commentsDataUrl)
        .then((response) => response.json())
        .then((data) => setCommentData(data.items))
        .catch((error) => console.log(error))
    }

    useEffect(() => {
        fetchVideoDetail();
    }, [videoData, commentsData])

    return(
        <>
            <div className={videoCss.container}>
                <iframe width="820" height="420" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <h3>{videoData?videoData.snippet.title: "Title Here"}</h3>
                <div className={videoCss.channel}>
                    <div className={videoCss.channelDetail}>
                        <img src={channelData?channelData.snippet.thumbnails.default.url:null} alt="" />
                        <div>
                            <p>{videoData?videoData.snippet.channelTitle:""}</p>
                            <p>{value_converter(channelData?channelData.statistics.subscriberCount:"1M")} subscribers</p>
                        </div>
                        <div>
                            <button className={videoCss.btn}>Subscribe</button>
                        </div>
                    </div>

                    <div className={videoCss.channelStatistics}>
                        <div className={videoCss.button}>
                            <button className={videoCss.btn}><AiOutlineLike size={17} style={{paddingRight:"5px", position: "relative", top: "2px"}}/>{value_converter(videoData?videoData.statistics.likeCount:"")}</button>
                            <button className={videoCss.btn}><AiOutlineDislike size={17} style={{position: "relative", top: "4px"}}/></button>
                        </div>
                        <button className={videoCss.btn}><PiShareFat size={17} style={{position: "relative", top: "4px"}}/> Share</button>
                        <button className={videoCss.btn}><HiDownload size={17} style={{position: "relative", top: "4px"}}/> Download</button>
                        <button className={videoCss.btn}><PiCurrencyDollarBold size={17} style={{position: "relative", top: "4px"}}/> Thanks</button>
                    </div>

                </div>
                
                <div className={videoCss.description}>
                    <span>{value_converter(videoData?videoData.statistics.viewCount:"")} views </span>
                    <span>{moment(videoData?videoData.snippet.publishedAt:"").fromNow()} </span>
                    <p>{channelData?channelData.snippet.description.slice(0, 255):""} . . .</p>
                </div>

                <div className={videoCss.comments}>
                    <h4>{value_converter(videoData?videoData.statistics.commentCount:"")} Comments</h4>
                    {commentsData.map((fetchComment, index) => {
                        return (
                            <div key={index} className={videoCss.comment}>
                                <img src={fetchComment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                                <div className={videoCss.data}>
                                    <span>{fetchComment.snippet.topLevelComment.snippet.authorDisplayName}</span>
                                    <span>{moment(fetchComment.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
                                    <p>{fetchComment.snippet.topLevelComment.snippet.textOriginal}</p>
                                    <span style={{marginRight: "5px", position: "relative", top: "-2px"}}><AiOutlineLike size={20}/> {value_converter(fetchComment.snippet.topLevelComment.snippet.likeCount)} </span> <AiOutlineDislike size={20}/>
                                    <span style={{marginLeft: "35px", position: "relative", top: "-5px"}}>Reply</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <Recommended categoryId={categoryId}/>
        </>
    )
};

export default VideoPage;