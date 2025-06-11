import { MdHome, MdOutlineSubscriptions } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { SiYoutubeshorts } from "react-icons/si";
import { CgPlayList } from "react-icons/cg";
import { CiYoutube } from "react-icons/ci";
import { GiGraduateCap } from "react-icons/gi";
import { FaRegClock } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";

export const menu = [
  {
    id: 1,
    image: MdHome,
    name: "Home",
  },

  {
    id: 2,
    image: SiYoutubeshorts,
    name: "Shorts",
  },

  {
    id: 3,
    image: MdOutlineSubscriptions,
    name: "Subscriptions",
  },

  {
    id: 4,
    image: LuHistory,
    name: "History",
  },

  {
    id: 5,
    image: CgPlayList,
    name: "Playlists",
  },

  {
    id: 6,
    image: CiYoutube,
    name: "Your Videos",
  },

  {
    id: 7,
    image: GiGraduateCap,
    name: "Courses",
  },

  {
    id: 8,
    image: FaRegClock,
    name: "Watch Later",
  },

  {
    id: 9,
    image: AiOutlineLike,
    name: "Liked Videos",
  },
];

export const filter = [
  {
    id: 1,
    name: "All",
  },

  {
    id: 2,
    name: "Music",
  },

  {
    id: 3,
    name: "React Routers",
  },

  {
    id: 4,
    name: "Gaming",
  },

  {
    id: 5,
    name: "Kapil Sharma",
  },

  {
    id: 6,
    name: "Website",
  },

  {
    id: 7,
    name: "Horror Movies",
  },

  {
    id: 8,
    name: "Podcasts",
  },

  {
    id: 9,
    name: "T-Series",
  },

  {
    id: 10,
    name: "Thrillers",
  },

  {
    id: 11,
    name: "Generative - Ai",
  },

  {
    id: 12,
    name: "Indian Pop Music",
  },

  {
    id: 13,
    name: "Hip-Hop Dance",
  },
];

export const API_KEY = 'AIzaSyD4dE3tGy-jM_6NUeTtdN1PXx2sPWvKs7o';

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