import React from "react";
import Logo from "../assets/Starzplaylogo.png"
import DownArrow from "../assets/down-arrow.png"
import profile from "../assets/Profile.png"
import Search from "../assets/search-icon.png"
import styles from './Navbar.module.css';

const Navbar= () =>{
    return(
        <div className={styles.Navbar_main_div}>
          <div style={{display:"flex",gap:"30px",justifyContent:"center",alignItems:"center"}}>
                <div className={styles.Starzplay_logo_div}>
                <img src={Logo} height="auto" width="160"/>
                </div>
                <div className={styles.Nav_list}>
                <a  className={styles.nav_elem_main} href="#" >HOME</a>
                <a href="#" className={styles.nav_elems}>🔴LIVE</a>
                <a href="#" className={styles.nav_elems}>WATCH FREE</a>
                <a href="#" className={styles.nav_elems}>SPORTS</a>
                <a href="#" className={styles.nav_elems}>ADMN</a>
                <a href="#" className={styles.nav_elems}>MOVIES</a>
                <a href="#" className={styles.nav_elems}>SERIES</a>
                <a href="#" className={styles.nav_elems}>KIDS</a>
                </div>
          </div>
            <div style={{flex:1}}>
            </div>
            <div>
                <button type='button' style={{background:'cyan',fontWeight:'bold', color:'Black',border:'none',padding:'8px',borderRadius:'15px'}}>Subscribe Now</button>
            </div>
            <div>
                <button type='button'style={{background:"none",border:'none',postion:"absolute",marginTop:"5px"}}>
                    <img src={Search} height="auto" width="30"/>
                </button>
            </div>
             <div>
                <button type='button'style={{background:'none',fontWeight:'bold', border:'none',fontSize:'13px',postion:"absolute",marginTop:"-20px",paddingBottom:"10px"}}>LOGIN</button>
            </div>
            <div style={{position:"relative"}} >
             
                 <button type='button' style={{background:'none', border:'none'}}>
                    <img src={profile} height="40" width="40" /> 
                </button>     
                
                <div style={{position:"absolute",top:"13px",left:"48px"}}>
                     <img src={DownArrow} height="auto" width="20" /> 
                </div>
            </div>
        </div>
    )
}
export default Navbar