import React from "react";
import facebook from "../assets/facebook.png"
import youtube from "../assets/youtube.png"
import twitter from "../assets/twitter.png"
import insta from "../assets/insta.png"
import Appleicon from "../assets/Appleicon.png"
import Appgallery from "../assets/Appgallery.png"
import googleplay from "../assets/googleplay.png"
import styles from './Footer.module.css';

const Footer = () =>{
 return(
    <footer style={{gap:"18px",minheight:"300px",marginBottom:"30px",display:"flex",flexDirection:"column", alignitems:"center",borderTop: "1px solid rgba(255, 255, 255, 0.1)"}}>
        <div className="social-tags" style={{ display: "flex",justifyContent:"center", gap: "20px", alignItems: "center",marginTop:"20px",marginBottom:"-4px" }}>
           <a href="https://www.facebook.com/starzplay">
            <img   className={styles.facebook} src={facebook} />
           </a>
            <a  href="https://x.com/starzplayarabiao" >
            <img className={styles.twitter} src={twitter} />
           </a>
            <a href="https://www.instagram.com/starzplayarabia" >
            <img className={styles.insta} src={insta} />
           </a>
            <a href="https://www.youtube.com/channel/UClTDlkKVmMDOaQ7YTyAlruw/featured" >
            <img className={styles.youtube} src={youtube}/>
           </a>
        </div>
        <div className={styles.ftag1} >
            <p  className={styles.wstar}>Why STARZPLAY?</p>
            <a href="#" >Live</a>
            <a href="#" >Watch Free</a>
            <a href="#" >Sports</a>
            <a href="#" >ADMN</a>
            <a href="#" >Movies</a>
            <a href="#" >Series</a>
            <a href="#" >Kids</a>
        </div>
        <div className={styles.ftag2} >
            <a href="#" >FAQ</a>
            <a href="#" >Terms & Conditions</a>
            <a href="#" >Contact Us</a>
            <a href="#" >Privacy Policy</a>
            <a href="#" >About Us</a>
        </div>
        <div>
            <p className={styles.copyright}>Copyright © 2026 STARZPLAY. All rights reserved.</p>
        </div>
        <div className={styles.ftag3}>
            <a href="#" className={styles.ftag31}>
            <img src={Appleicon}/>
            </a>
            <a href="#" className={styles.ftag32}>
            <img src={googleplay}/>
            </a>
            <a href="#" className={styles.ftag33}>
            <img src={Appgallery}/>
            </a>
        </div>
    </footer>
 );
};
export default Footer