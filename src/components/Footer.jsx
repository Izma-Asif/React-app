import React from "react";
import facebook from "../assets/facebook.png"
import youtube from "../assets/youtube.png"
import twitter from "../assets/twitter.png"
import insta from "../assets/insta.png"
import Appleicon from "../assets/Appleicon.png"
import Appgallery from "../assets/Appgallery.png"
import googleplay from "../assets/googleplay.png"

const Footer = () =>{
 return(
    <footer style={{minheight:"300px",display:"flex",flexDirection:"column", alignitems:"center", gap:"25px",borderTop: "1px solid rgba(255, 255, 255, 0.1)"}}>
        <div className="social-tags" style={{ display: "flex",justifyContent:"center", gap: "20px", alignItems: "center" }}>
           <a href="#">
            <img src={facebook} height="auto" width="45"/>
           </a>
            <a href="#">
            <img src={twitter} height="auto" width="45"/>
           </a>
            <a href="#">
            <img src={insta} height="auto" width="45"/>
           </a>
            <a href="#">
            <img src={youtube} height="auto" width="45"/>
           </a>
        </div>
        <div style={{display:"flex",alignitems:"center",justifyContent:"center", gap:"20px"}}>
            <p style={{color:"white"}}>Why STARZPLAY?</p>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"17px" }}>Live</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"17px"  }}>Watch Free</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"17px"  }}>Sports</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"17px"  }}>ADMN</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"17px"  }}>Movies</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"17px"  }}>Series</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"17px"  }}>Kids</a>
        </div>
        <div style={{display:"flex",alignitems:"center",justifyContent:"center", gap:"20px"}}>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"17px"  }}>FAQ</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"17px"  }}>Terms & Conditions</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"17px"  }}>Contact Us</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"17px"  }}>Privacy Policy</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"17px"  }}>About Us</a>
        </div>
        <div>
            <p style={{color:"gray"}}>Copyright © 2026 STARZPLAY. All rights reserved.</p>
        </div>
        <div style={{display:"flex",alignitems:"center",justifyContent:"center", gap:"10px"}}>
            <a href="#">
            <img src={Appleicon} height="50" width="200"/>
            </a>
             <a href="#">
            <img src={googleplay} height="50" width="200"/>
            </a>
             <a href="#">
            <img src={Appgallery} height="50" width="200"/>
            </a>
        </div>
    </footer>
 );
};
export default Footer