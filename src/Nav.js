import React, { useEffect, useState } from "react";
import nav from "./Nav.css"
export default function Nav() {

    const[show, handleShow] = useState(false)
    // if scroll, show handle
    useEffect(() => {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 100) {
                    handleShow(true)
                } else handleShow(false);
            });
            return () => {
                window.removeEventListener("scroll")
            };
    }, []);
    // before you fire off again (scroll), remove listener
   
    return (
        <div className={`nav ${show && "nav__black"}`}>
            {/* netflix logo */}
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo" />
            {/* account avatar */}
            <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="account avatar" />
        </div>
    )
}