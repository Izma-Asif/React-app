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
    <footer style={{gap:"18px",minheight:"300px",marginBottom:"30px",display:"flex",flexDirection:"column", alignitems:"center",borderTop: "1px solid rgba(255, 255, 255, 0.1)"}}>
        <div className="social-tags" style={{ display: "flex",justifyContent:"center", gap: "20px", alignItems: "center",marginTop:"20px",marginBottom:"-4px" }}>
           <a href="https://www.facebook.com/starzplay">
            <img src={facebook} height="auto" width="45"/>
           </a>
            <a href="https://x.com/starzplayarabiao">
            <img src={twitter} height="auto" width="40"/>
           </a>
            <a href="https://www.instagram.com/starzplayarabia">
            <img src={insta} height="auto" width="40"/>
           </a>
            <a href="https://www.youtube.com/channel/UClTDlkKVmMDOaQ7YTyAlruw/featured">
            <img src={youtube} height="auto" width="40"/>
           </a>
        </div>
        <div style={{display:"flex",alignitems:"center",justifyContent:"center", gap:"34px"}}>
            <p style={{color:"white",fontSize:"14px"}}>Why STARZPLAY?</p>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"14px" }}>Live</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"14px"  }}>Watch Free</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"14px"  }}>Sports</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"14px"  }}>ADMN</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"14px"  }}>Movies</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"14px"  }}>Series</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"14px"  }}>Kids</a>
        </div>
        <div style={{display:"flex",alignitems:"center",justifyContent:"center", gap:"28px"}}>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"15px"  }}>FAQ</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"15px"  }}>Terms & Conditions</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"15px"  }}>Contact Us</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"15px"  }}>Privacy Policy</a>
            <a href="#" style={{ fontWeight: "bold", color: "white",textDecoration:"none",fontSize:"15px"  }}>About Us</a>
        </div>
        <div>
            <p style={{color:"rgba(255,255,255,0.8)",fontSize:"14px"}}>Copyright © 2026 STARZPLAY. All rights reserved.</p>
        </div>
        <div style={{display:"flex",alignitems:"center",justifyContent:"center", gap:"10px"}}>
            <a href="#">
            <img src={Appleicon} height="auto" width="130"/>
            </a>
             <a href="#">
            <img src={googleplay} height="auto" width="130"/>
            </a>
             <a href="#">
            <img src={Appgallery} height="auto" width="130"/>
            </a>
        </div>
    </footer>
 );
};
export default Footer