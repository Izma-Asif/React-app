import React from "react";
import Logo from "../assets/Starzplaylogo.png"
import DownArrow from "../assets/down-arrow.png"
import profile from "../assets/Profile.png"

const Navbar= () =>{
    return(
        <div style={{display: 'flex', alignItems: 'center',
                     padding: '15px 20px', backgroundColor: '#1a1a1a',
                     borderBottom: '1px solid rgba(255,255,255,0.1)',gap:'20px',
                     }}>
            <div style={{gap:'30px'}}>
              <img src={Logo} height="32" width="200"/>
            </div>
            <div style={{display:'flex',gap:'15px'}}>
            <a href="#" style={{ fontWeight: "normal", color: "white",textDecoration:"none",fontSize:"11px",borderBlockStart:'solid' }}>HOME</a>
            <a href="#" style={{ fontWeight: "normal", color: "white",textDecoration:"none",fontSize:"11px"  }}>LIVE</a>
            <a href="#" style={{ fontWeight: "normal", color: "white",textDecoration:"none",fontSize:"11px"  }}>WATCH FREE</a>
            <a href="#" style={{ fontWeight: "normal", color: "white",textDecoration:"none",fontSize:"11px"  }}>SPORTS</a>
            <a href="#" style={{ fontWeight: "normal", color: "white",textDecoration:"none",fontSize:"11px"  }}>ADMN</a>
            <a href="#" style={{ fontWeight: "normal", color: "white",textDecoration:"none",fontSize:"11px"  }}>MOVIES</a>
            <a href="#" style={{ fontWeight: "normal", color: "white",textDecoration:"none",fontSize:"11px"  }}>SERIES</a>
            <a href="#" style={{ fontWeight: "normal", color: "white",textDecoration:"none",fontSize:"11px"  }}>KIDS</a>
            </div>
            <div style={{flex:1}}>
            </div>
            <div>
                <button type='button' style={{background:'cyan',fontWeight:'bold', color:'Black',border:'none',padding:'8px',borderRadius:'15px'}}>Subscribe Now</button>
            </div>
            <div>
                <button type='button'style={{background:'none', border:'none',fontSize:'20px'}}>🔍</button>
            </div>
             <div>
                <button type='button'style={{background:'none',fontWeight:'bold', border:'none',fontSize:'13px'}}>LOGIN</button>
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