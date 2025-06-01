import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { IoMdMic, IoMdAdd, IoIosArrowForward } from "react-icons/io";

import ytLogo from "./../../assets/img/yt-logo.png";
import person from "./../../assets/img/person.png";

import navbarCss from "./navbar.module.css";
import { filter, menu } from "./../../data.js";
import { useState } from "react";

function Navbar(){
    const [isOpen, setIsOpen] = useState(true);
    
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
      <>
        <div className={navbarCss.container}>
          <span className={navbarCss.menu} style={{zIndex: 1}}>
            <AiOutlineMenu size={18} onClick={handleClick} />
          </span>

          <div className={navbarCss.header}>
            <div className={navbarCss.ytlogo}>
              <img src={ytLogo} alt="YoutubeLogo" />
              <span>
                YouTube <sup>IN</sup>
              </span>
            </div>

            <div className={navbarCss.searchbar}>
              <input type="text" placeholder="Search" />
              <button>
                <CiSearch />
              </button>
              <button>
                <IoMdMic />
              </button>
            </div>

            <div className={navbarCss.profile}>
              <button>
                <IoMdAdd size={20} /> <span>Create</span>
              </button>
              <CiBellOn size={25} className={navbarCss.bell} />
              <img src={person} alt="profileImg" />
            </div>

            <div className={`${navbarCss.filter} ${isOpen ? "" : navbarCss.left}`}>
                {filter.map(({id, name}) => (
                    <span key={id}>{name}</span>
                ))}
            </div>
          </div>
        </div>

        <div className={navbarCss.sidebar}>
          <div className={`${navbarCss.menuItems} ${!isOpen ? navbarCss.menuItem : ""}`}>
            {menu.slice(0, 3).map(({ image: Icon, name, id }) => (
              <div className={`${isOpen ? navbarCss.items : navbarCss.item}`} key={id}>
                <Icon size={22} />
                <span>{name}</span>
              </div>
            ))}
          </div>

          <div className={`${navbarCss.menuItems} ${isOpen ? "" : navbarCss.hide}`}>
            <span className={navbarCss.you}>
              You
              <IoIosArrowForward
                size={14}
                style={{ position: "relative", top: "3px" }}
              />
            </span>

            {menu.slice(3, 9).map(({ image: Icon, name, id }) => (
              <div className={navbarCss.items} key={id}>
                <Icon size={22} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
};

export default Navbar;