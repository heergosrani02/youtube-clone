import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { IoMdMic, IoMdAdd, IoIosArrowForward } from "react-icons/io";

import ytLogo from "./../../assets/img/yt-logo.png";
import person from "./../../assets/img/person.png";

import navbarCss from "./navbar.module.css";
import { filter, menu } from "./../../data.js";
import { useState } from "react";
import { Link } from "react-router";

function Navbar(){

    const [isOpen, setIsOpen] = useState(false);
    const size = window.innerWidth < 600;

    const handleClick = () => {
      setIsOpen(!isOpen);
    }

    return (
      <>
        <div className={navbarCss.container}>
          <span className={navbarCss.menu} style={{zIndex: 1}} onClick={handleClick}>
            <AiOutlineMenu size={18}/>
          </span>

          <div className={navbarCss.header}>
            <Link to="/" className={navbarCss.ytlogo} style={{textDecoration: "none", color: "white"}}>
              <img src={ytLogo} alt="YoutubeLogo" />
              <span>
                YouTube <sup>IN</sup>
              </span>
            </Link>

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
                <IoMdAdd size={size ? 13 : 20} /> <span>Create</span>
              </button>
              <CiBellOn size={25} className={navbarCss.bell} />
              <img src={person} alt="profileImg" />
            </div>

            <div className={`${navbarCss.filter} ${!isOpen ? navbarCss.left : ''}`}>
                {filter.map(({id, name}) => (
                    <div key={id}>{name}</div>
                ))}
            </div>
          </div>  
        </div>

        {isOpen && <div className={navbarCss.sidebar}>
          <div className={navbarCss.menuItems}>
            {menu.slice(0, 3).map(({ image: Icon, name, id }) => (
              <div className={navbarCss.items} key={id}>
                <Icon size={22} />
                <span>{name}</span>
              </div>
            ))}
          </div>

          <div className={navbarCss.menuItems}>
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
        </div> }
      </>
    );
};

export default Navbar;