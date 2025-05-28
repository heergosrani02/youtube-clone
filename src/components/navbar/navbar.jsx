import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { IoMdMic, IoMdAdd } from "react-icons/io";

import ytLogo from "../../../public/yt-logo.png";
import person from "./../../assets/img/person.png";

import navbarCss from "./navbar.module.css";

function Navbar(){
    return(
        <>
            <div className={navbarCss.container}>
                <div className={navbarCss.content1}>
                    <div className={navbarCss.ytlogo}>
                        <img src={ytLogo} alt="YoutubeLogo"/>
                        <span>YouTube <sup>IN</sup></span>
                    </div>

                    <div className={navbarCss.searchbar}>
                        <input type="text" placeholder="Search"/>
                        <button><CiSearch/></button>
                        <button><IoMdMic/></button>
                    </div>

                    <div className={navbarCss.profile}>
                        <button><IoMdAdd size={20}/> <span>Create</span></button>
                        <CiBellOn size={25} className={navbarCss.bell} />
                        <img src={person} alt="profileImg" />
                    </div>
                </div>

                <div className={navbarCss.content2}>
                    <span></span>
                </div>
            </div>
        </>
    )
};

export default Navbar;