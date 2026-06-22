import React from "react";
import Logo from "../assets/Starzplaylogo.png"
import DownArrow from "../assets/down-arrow.png"
import profile from "../assets/Profile.png"
import Search from "../assets/search-icon.png"
import hamburger from "../assets/hamburger-menu.png"
import styles from './Navbar.module.css';

const Navbar= () =>{
    return(
        <div className={styles.Navbar_main_div}>
          <div style={{display:"flex",gap:"30px",justifyContent:"center",alignItems:"center"}}>
                    
                <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
                <label htmlFor="menu-toggle" className={styles.hamburger}>
                    <img src={hamburger} height="30" width="48" />
                </label>
                    
                <div className={styles.Starzplay_logo_div}>
                <img src={Logo}/>
                </div>
                <div className={styles.Nav_list}>
                 
                <a  className={styles.nav_elem_main} href="#" >HOME</a>
                <a href="#" className={styles.nav_elems}>🔴LIVE</a>
                {/* <a href="#" className={styles.nav_elems}>WATCH FREE</a> */}
                <a href="#" className={styles.nav_elems}>SPORTS</a>
                <a href="#" className={styles.nav_elems}>ADMN</a>
                <a href="#" className={styles.nav_elems}>MOVIES</a>
                <a href="#" className={styles.nav_elems}>SERIES</a>
                <a href="#" className={styles.nav_elems}>KIDS</a>
                </div>
          </div>
            <div style={{flex:1}}>
            </div>
            <div className={styles.subbtn}>
                <button type='button' style={{background:'cyan',fontWeight:'bold', color:'Black',border:'none',padding:'8px',borderRadius:'15px'}}>Subscribe Now</button>
            </div>
            <div className={styles.search}>
                <button className={styles.searchbtn} type='button'>
                    <img src={Search} />
                </button>
            </div>
             <div className={styles.loginbtn}>
                <button type='button'style={{background:'none',fontWeight:'bold', border:'none',fontSize:'13px',postion:"absolute",marginTop:"-20px",paddingBottom:"10px",color:'white'}}>LOGIN</button>
            </div>
            <div className={styles.profile}  >
             
                 <button className={styles.profilebtn}type='button'>
                    <img src={profile} /> 
                </button>     
                
                <div className={styles.downarrow}>
                     <img src={DownArrow} /> 
                </div>
            </div>
           
        </div>
        
    )
}
export default Navbar