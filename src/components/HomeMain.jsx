import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider = SlickSlider && SlickSlider.default ? SlickSlider.default : SlickSlider;
import Right from "../assets/arrow1.png"
import Left from "../assets/arrow2.png"
import styles from './HomeMain.module.css';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={styles.NextArrow}
      onClick={onClick}
    >
      <img src={Right} height="10" width="10"/>
      </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={styles.PrevArrow}
      onClick={onClick}
      >
        <img src={Left} height="10" width="10"/>
      </div>
    
  );
}

export default function HomeMain() {
  
  var settings = {
    dots: false,
    arrows:true,
    infinite: false,
    speed: 900,
    slidesToShow: 6,
    slidesToScroll: 3,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <div className={styles.Home_main_div}>
      <h3 style={{textAlign:"left",marginLeft:"30px",color:"white",fontSize:"18px"}}>Recomended For You</h3>
     <div style={{marginLeft:"20px",paddingRight:'20px'}}>
     <Slider {...settings} className={styles.style_slider}>
      
      <div className={styles.slider_image} >
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODFRANKIEMEETSJACKY2023M/AVODFRANKIEMEETSJACKY2023M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODFRANKIEMEETSJACKY2023M/AVODFRANKIEMEETSJACKY2023M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}}/>
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
              <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-screenmedia-avod/AVODINFIDELITYINSUBURBIAY2017M/AVODINFIDELITYINSUBURBIAY2017M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
         <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-screenmedia-avod/AVODINFIDELITYINSUBURBIAY2017M/AVODINFIDELITYINSUBURBIAY2017M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-teleproginternational-avod/AVODCRANK2Y2009M/AVODCRANK2Y2009M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-teleproginternational-avod/AVODCRANK2Y2009M/AVODCRANK2Y2009M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-frontrow-avod/AVODHAJWALA2Y2018MAR/AVODHAJWALA2Y2018MAR-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-frontrow-avod/AVODHAJWALA2Y2018MAR/AVODHAJWALA2Y2018MAR-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODLOVEOFFTHEPAGEY2022M/AVODLOVEOFFTHEPAGEY2022M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODLOVEOFFTHEPAGEY2022M/AVODLOVEOFFTHEPAGEY2022M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODJOHNNYENGLISHSTRIKESAGAINY2018M/AVODJOHNNYENGLISHSTRIKESAGAINY2018M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODJOHNNYENGLISHSTRIKESAGAINY2018M/AVODJOHNNYENGLISHSTRIKESAGAINY2018M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
     <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODTERMINATOR2JUDGMENTDAYY1991M/AVODTERMINATOR2JUDGMENTDAYY1991M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODTERMINATOR2JUDGMENTDAYY1991M/AVODTERMINATOR2JUDGMENTDAYY1991M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
     <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-phoenicia-avod/AVODFEARBELOWY2025M/AVODFEARBELOWY2025M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-phoenicia-avod/AVODFEARBELOWY2025M/AVODFEARBELOWY2025M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
     <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-ingest-fox-avod/AVODTHEWEDDINGCONTRACTY2023M/AVODTHEWEDDINGCONTRACTY2023M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-ingest-fox-avod/AVODTHEWEDDINGCONTRACTY2023M/AVODTHEWEDDINGCONTRACTY2023M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
    </Slider>
    </div>
    <div style={{marginLeft:"20px",paddingRight:'20px'}}>
    <h3 style={{textAlign:"left",marginLeft:"10px",color:"white",fontSize:"18px"}}>Must Watch Hollywood</h3>
    
    <Slider {...settings} className={styles.style_slider}>
      
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODFRANKIEMEETSJACKY2023M/AVODFRANKIEMEETSJACKY2023M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div style={{position:"relative",top: "-30px", left: "1px"}}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"2px",paddingLeft:"3px",paddingRight:"3px"}}>Newly Added</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODFRANKIEMEETSJACKY2023M/AVODFRANKIEMEETSJACKY2023M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-screenmedia-avod/AVODINFIDELITYINSUBURBIAY2017M/AVODINFIDELITYINSUBURBIAY2017M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-screenmedia-avod/AVODINFIDELITYINSUBURBIAY2017M/AVODINFIDELITYINSUBURBIAY2017M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-teleproginternational-avod/AVODCRANK2Y2009M/AVODCRANK2Y2009M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div style={{position:"relative",top: "-30px", left: "1px"}}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"2px",paddingLeft:"3px",paddingRight:"3px"}}>Newly Added</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-teleproginternational-avod/AVODCRANK2Y2009M/AVODCRANK2Y2009M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-frontrow-avod/AVODHAJWALA2Y2018MAR/AVODHAJWALA2Y2018MAR-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-frontrow-avod/AVODHAJWALA2Y2018MAR/AVODHAJWALA2Y2018MAR-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODLOVEOFFTHEPAGEY2022M/AVODLOVEOFFTHEPAGEY2022M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODLOVEOFFTHEPAGEY2022M/AVODLOVEOFFTHEPAGEY2022M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODJOHNNYENGLISHSTRIKESAGAINY2018M/AVODJOHNNYENGLISHSTRIKESAGAINY2018M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODJOHNNYENGLISHSTRIKESAGAINY2018M/AVODJOHNNYENGLISHSTRIKESAGAINY2018M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
     <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODTERMINATOR2JUDGMENTDAYY1991M/AVODTERMINATOR2JUDGMENTDAYY1991M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODTERMINATOR2JUDGMENTDAYY1991M/AVODTERMINATOR2JUDGMENTDAYY1991M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
     <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-phoenicia-avod/AVODFEARBELOWY2025M/AVODFEARBELOWY2025M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-phoenicia-avod/AVODFEARBELOWY2025M/AVODFEARBELOWY2025M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
     <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-ingest-fox-avod/AVODTHEWEDDINGCONTRACTY2023M/AVODTHEWEDDINGCONTRACTY2023M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-ingest-fox-avod/AVODTHEWEDDINGCONTRACTY2023M/AVODTHEWEDDINGCONTRACTY2023M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
    </Slider>
    </div>
    <div style={{marginLeft:"20px",paddingRight:'20px',paddingBottom:'45px'}}>
    <h3 style={{textAlign:"left",marginLeft:"10px",color:"white",fontSize:"18px"}}>Watch For Free</h3>
    
    <Slider {...settings} className={styles.style_slider}>
      
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODFRANKIEMEETSJACKY2023M/AVODFRANKIEMEETSJACKY2023M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODFRANKIEMEETSJACKY2023M/AVODFRANKIEMEETSJACKY2023M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-screenmedia-avod/AVODINFIDELITYINSUBURBIAY2017M/AVODINFIDELITYINSUBURBIAY2017M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div style={{position:"relative",top: "-30px", left: "1px"}}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"2px",paddingLeft:"3px",paddingRight:"3px"}}>Newly Added</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-screenmedia-avod/AVODINFIDELITYINSUBURBIAY2017M/AVODINFIDELITYINSUBURBIAY2017M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-teleproginternational-avod/AVODCRANK2Y2009M/AVODCRANK2Y2009M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div style={{position:"relative",top: "-30px", left: "-22px"}}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"2px",paddingLeft:"3px",paddingRight:"3px"}}>Newly Added</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-teleproginternational-avod/AVODCRANK2Y2009M/AVODCRANK2Y2009M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
        <div style={{position:"relative",top: "-60px", left: "36px"}}>
          <span style={{color:"black",background:"white", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"2px",paddingLeft:"3px",paddingRight:"3px"}}>Exclusive</span>
        </div>
        
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-frontrow-avod/AVODHAJWALA2Y2018MAR/AVODHAJWALA2Y2018MAR-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-frontrow-avod/AVODHAJWALA2Y2018MAR/AVODHAJWALA2Y2018MAR-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODLOVEOFFTHEPAGEY2022M/AVODLOVEOFFTHEPAGEY2022M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div style={{position:"relative",top: "-30px", left: "-22px"}}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"2px",paddingLeft:"3px",paddingRight:"3px"}}>Newly Added</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODLOVEOFFTHEPAGEY2022M/AVODLOVEOFFTHEPAGEY2022M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
        <div style={{position:"relative",top: "-60px", left: "36px"}}>
          <span style={{color:"black",background:"white", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"2px",paddingLeft:"3px",paddingRight:"3px"}}>Exclusive</span>
        </div>
        
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODJOHNNYENGLISHSTRIKESAGAINY2018M/AVODJOHNNYENGLISHSTRIKESAGAINY2018M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODJOHNNYENGLISHSTRIKESAGAINY2018M/AVODJOHNNYENGLISHSTRIKESAGAINY2018M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
     <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODTERMINATOR2JUDGMENTDAYY1991M/AVODTERMINATOR2JUDGMENTDAYY1991M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODTERMINATOR2JUDGMENTDAYY1991M/AVODTERMINATOR2JUDGMENTDAYY1991M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
     <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-phoenicia-avod/AVODFEARBELOWY2025M/AVODFEARBELOWY2025M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-phoenicia-avod/AVODFEARBELOWY2025M/AVODFEARBELOWY2025M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
     <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-ingest-fox-avod/AVODTHEWEDDINGCONTRACTY2023M/AVODTHEWEDDINGCONTRACTY2023M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-ingest-fox-avod/AVODTHEWEDDINGCONTRACTY2023M/AVODTHEWEDDINGCONTRACTY2023M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
    </Slider>
     </div>
      <div style={{position:"relative", marginBottom:"50px",width:"100%"}}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/admn-ingest-inhouse/KAAINAATY2023S01E001AR/KAAINAATY2023S01E001AR-hero-v2-en.jpg"
          position="absolute" top="0" left="0" height="750" width="100%" />
      
          <div style={{position:"absolute",top: "500px", left: "4px"}}>
            <span style={{color:"white",background:"none", borderRadius: "17px",fontSize:"50px",
              fontWeight:"bold",paddingTop:'2px',paddingBottom:"2px",paddingLeft:"3px",paddingRight:"3px"}}>Kaa'inaat (Creatures)</span>
          </div>
          <div style={{position:"absolute",top: "550px", left: "6px"}}>
            <span style={{color:"white",background:"none", borderRadius: "17px",fontSize:"21px",
              fontWeight:"normal",paddingTop:'2px',paddingBottom:"2px",paddingLeft:"3px",paddingRight:"3px"}}>Check out the main characters and enjoy the new season
              </span>
          </div>
              <div style={{position:"absolute",top: "598px", left: "1px"}}>
                <Slider {...settings} className={styles.style_slider}>
                          <div style={{marginLeft:"20px",borderRadius:"40px",position: "relative",
                          textAlign:"center",display:"flex",flexDirection:"column"}}>
                            <img src="https://mena-img-cdn-lb.aws.playco.com/admn-ingest-inhouse/KAAINAATY2023S02E001AR/KAAINAATY2023S02E001AR-landscape-poster-v2.jpg"
                            height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
                          </div>
                          <div style={{marginLeft:"20px",borderRadius:"40px",position: "relative",
                          textAlign:"center"}}>
                            <img src="https://mena-img-cdn-lb.aws.playco.com/promotionalassets/KAAINAATTK3Y2026MAR/KAAINAATTK3Y2026MAR-landscape-poster-v2.jpg"
                            height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
                            
                          </div>
                          <div style={{marginLeft:"20px",borderRadius:"40px",position: "relative",
                          textAlign:"center"}}>
                            <img src="https://mena-img-cdn-lb.aws.playco.com/promotionalassets/KAAINAATTK5Y2026MAR/KAAINAATTK5Y2026MAR-landscape-poster-v2.jpg"
                            height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
                           
                          </div>
                          <div style={{marginLeft:"20px",borderRadius:"40px",position: "relative",
                          textAlign:"center"}}>
                            <img src="https://mena-img-cdn-lb.aws.playco.com/promotionalassets/KAAINAATTK4Y2026MAR/KAAINAATTK4Y2026MAR-landscape-poster-v2.jpg"
                            height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
                           
                          </div>
                          <div style={{marginLeft:"20px",borderRadius:"40px",position: "relative",
                          textAlign:"center"}}>
                            <img src="https://mena-img-cdn-lb.aws.playco.com/promotionalassets/KAAINAATTK1Y2026MAR/KAAINAATTK1Y2026MAR-landscape-poster-v2.jpg"
                            height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
                           
                          </div>
                          <div style={{marginLeft:"20px",borderRadius:"40px",position: "relative",
                          textAlign:"center"}}>
                            <img src="https://mena-img-cdn-lb.aws.playco.com/promotionalassets/KAAINAATTK2Y2026MAR/KAAINAATTK2Y2026MAR-landscape-poster-v2.jpg"
                            height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
                            
                          </div>
                       </Slider>
                        
                
                 
              </div>
        </div>

     <div style={{marginTop:"-13px"}}>
      <h3 style={{textAlign:"left",marginLeft:"30px",color:"white",fontSize:"18px"}}>Explore More</h3>
    <div style={{marginBottom:"24px",marginLeft:"20px",paddingRight:'20px'}}>
    <Slider {...settings} className={styles.style_slider}>
      
      <div className={styles.slider_image_1}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/prd-peg-data/default/images/logos/live/test2/category-carousel/dafabe5dacae326788ed61ade635f660.png"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
      </div>
      <div className={styles.slider_image_1}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/prd-peg-data/default/images/logos/live/test2/category-carousel/412e820e111c729217cdbf7888d7dc80.png"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
      </div>
      <div className={styles.slider_image_1}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/prd-peg-data/default/images/logos/live/test2/category-carousel/ba8a4835e6e34d72e68cb317ffd48427.png"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
      </div>
      <div className={styles.slider_image_1}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/prd-peg-data/default/images/logos/live/test2/category-carousel/afa4f274020dea24da94d1a8b136926a.png"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        
      </div>
      <div className={styles.slider_image_1}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/prd-peg-data/default/images/logos/live/test2/category-carousel/9bfceca48a826030f6398d94f8370d54.png"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
       
      </div>
      <div className={styles.slider_image_1}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/prd-peg-data/default/images/logos/live/test2/category-carousel/92eb6fe9115007991e58eec70e8fbd61.png"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        
      </div>
     <div className={styles.slider_image_1}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/prd-peg-data/default/images/logos/live/test2/category-carousel/e0cb13a7ef255084087c8d38f4794ca1.png"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
       
      </div>
     <div className={styles.slider_image_1}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/prd-peg-data/default/images/logos/live/test2/category-carousel/4caf801bbe7433ae2f81d6b054279add.png"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
      
      </div>
     <div className={styles.slider_image_1}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/prd-peg-data/default/images/logos/live/test2/category-carousel/21c4f8903b754379c742e8f551278bb5.png"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
       
      </div>
    </Slider>
     </div>
     </div>
     <div style={{marginLeft:"20px",marginTop:"-16px",paddingRight:'20px'}}>
     <h3 style={{textAlign:"left",marginLeft:"15px",color:"white",fontSize:"18px"}}>Your Next Watch</h3>
    
    <Slider {...settings} className={styles.style_slider}>
      
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODFRANKIEMEETSJACKY2023M/AVODFRANKIEMEETSJACKY2023M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODFRANKIEMEETSJACKY2023M/AVODFRANKIEMEETSJACKY2023M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-screenmedia-avod/AVODINFIDELITYINSUBURBIAY2017M/AVODINFIDELITYINSUBURBIAY2017M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-screenmedia-avod/AVODINFIDELITYINSUBURBIAY2017M/AVODINFIDELITYINSUBURBIAY2017M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-teleproginternational-avod/AVODCRANK2Y2009M/AVODCRANK2Y2009M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-teleproginternational-avod/AVODCRANK2Y2009M/AVODCRANK2Y2009M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-frontrow-avod/AVODHAJWALA2Y2018MAR/AVODHAJWALA2Y2018MAR-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-frontrow-avod/AVODHAJWALA2Y2018MAR/AVODHAJWALA2Y2018MAR-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODLOVEOFFTHEPAGEY2022M/AVODLOVEOFFTHEPAGEY2022M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div style={{position:"relative",top: "-30px", left: "-22px"}}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"2px",paddingLeft:"3px",paddingRight:"3px"}}>Newly Added</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODLOVEOFFTHEPAGEY2022M/AVODLOVEOFFTHEPAGEY2022M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
        <div style={{position:"relative",top: "-60px", left: "36px"}}>
          <span style={{color:"black",background:"white", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"2px",paddingLeft:"3px",paddingRight:"3px"}}>Exclusive</span>
        </div>
        
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODJOHNNYENGLISHSTRIKESAGAINY2018M/AVODJOHNNYENGLISHSTRIKESAGAINY2018M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODJOHNNYENGLISHSTRIKESAGAINY2018M/AVODJOHNNYENGLISHSTRIKESAGAINY2018M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
     <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODTERMINATOR2JUDGMENTDAYY1991M/AVODTERMINATOR2JUDGMENTDAYY1991M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
       <div style={{position:"relative",top: "-30px", left: "-22px"}}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"2px",paddingLeft:"3px",paddingRight:"3px"}}>Newly Added</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODTERMINATOR2JUDGMENTDAYY1991M/AVODTERMINATOR2JUDGMENTDAYY1991M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
        <div style={{position:"relative",top: "-60px", left: "36px"}}>
          <span style={{color:"black",background:"white", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"2px",paddingLeft:"3px",paddingRight:"3px"}}>Exclusive</span>
        </div>
      </div>
     <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-phoenicia-avod/AVODFEARBELOWY2025M/AVODFEARBELOWY2025M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-phoenicia-avod/AVODFEARBELOWY2025M/AVODFEARBELOWY2025M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
     <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-ingest-fox-avod/AVODTHEWEDDINGCONTRACTY2023M/AVODTHEWEDDINGCONTRACTY2023M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-ingest-fox-avod/AVODTHEWEDDINGCONTRACTY2023M/AVODTHEWEDDINGCONTRACTY2023M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
    </Slider>
    </div>
    
    <div style={{marginLeft:"20px",marginTop:"6px",paddingRight:'20px'}}>
     <h3 style={{textAlign:"left",marginLeft:"10px",color:"white",fontSize:"18px"}}>Watch For Free</h3>
    
    <Slider {...settings} className={styles.style_slider}>
      
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODFRANKIEMEETSJACKY2023M/AVODFRANKIEMEETSJACKY2023M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
       <div style={{position:"relative",top: "-30px", left: "-22px"}}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"2px",paddingLeft:"3px",paddingRight:"3px"}}>Newly Added</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODFRANKIEMEETSJACKY2023M/AVODFRANKIEMEETSJACKY2023M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
        <div style={{position:"relative",top: "-60px", left: "36px"}}>
          <span style={{color:"black",background:"white", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"2px",paddingLeft:"3px",paddingRight:"3px"}}>Exclusive</span>
        </div>
        
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-screenmedia-avod/AVODINFIDELITYINSUBURBIAY2017M/AVODINFIDELITYINSUBURBIAY2017M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-screenmedia-avod/AVODINFIDELITYINSUBURBIAY2017M/AVODINFIDELITYINSUBURBIAY2017M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-teleproginternational-avod/AVODCRANK2Y2009M/AVODCRANK2Y2009M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-teleproginternational-avod/AVODCRANK2Y2009M/AVODCRANK2Y2009M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-frontrow-avod/AVODHAJWALA2Y2018MAR/AVODHAJWALA2Y2018MAR-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-frontrow-avod/AVODHAJWALA2Y2018MAR/AVODHAJWALA2Y2018MAR-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODLOVEOFFTHEPAGEY2022M/AVODLOVEOFFTHEPAGEY2022M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODLOVEOFFTHEPAGEY2022M/AVODLOVEOFFTHEPAGEY2022M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODJOHNNYENGLISHSTRIKESAGAINY2018M/AVODJOHNNYENGLISHSTRIKESAGAINY2018M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODJOHNNYENGLISHSTRIKESAGAINY2018M/AVODJOHNNYENGLISHSTRIKESAGAINY2018M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
     <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODTERMINATOR2JUDGMENTDAYY1991M/AVODTERMINATOR2JUDGMENTDAYY1991M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODTERMINATOR2JUDGMENTDAYY1991M/AVODTERMINATOR2JUDGMENTDAYY1991M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
     <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-phoenicia-avod/AVODFEARBELOWY2025M/AVODFEARBELOWY2025M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-phoenicia-avod/AVODFEARBELOWY2025M/AVODFEARBELOWY2025M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
     <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-ingest-fox-avod/AVODTHEWEDDINGCONTRACTY2023M/AVODTHEWEDDINGCONTRACTY2023M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-ingest-fox-avod/AVODTHEWEDDINGCONTRACTY2023M/AVODTHEWEDDINGCONTRACTY2023M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
    </Slider>
     </div>
     
     <div style={{marginLeft:"20px",marginTop:"6px",paddingRight:'20px'}}>
     <h3 style={{textAlign:"left",marginLeft:"10px",color:"white",fontSize:"18px"}}>Watch For Free</h3>
    
    <Slider {...settings} className={styles.style_slider}>
      
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODFRANKIEMEETSJACKY2023M/AVODFRANKIEMEETSJACKY2023M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"2px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODFRANKIEMEETSJACKY2023M/AVODFRANKIEMEETSJACKY2023M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-screenmedia-avod/AVODINFIDELITYINSUBURBIAY2017M/AVODINFIDELITYINSUBURBIAY2017M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-screenmedia-avod/AVODINFIDELITYINSUBURBIAY2017M/AVODINFIDELITYINSUBURBIAY2017M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-teleproginternational-avod/AVODCRANK2Y2009M/AVODCRANK2Y2009M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-teleproginternational-avod/AVODCRANK2Y2009M/AVODCRANK2Y2009M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-frontrow-avod/AVODHAJWALA2Y2018MAR/AVODHAJWALA2Y2018MAR-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-frontrow-avod/AVODHAJWALA2Y2018MAR/AVODHAJWALA2Y2018MAR-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODLOVEOFFTHEPAGEY2022M/AVODLOVEOFFTHEPAGEY2022M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-evision-avod/AVODLOVEOFFTHEPAGEY2022M/AVODLOVEOFFTHEPAGEY2022M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
      <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODJOHNNYENGLISHSTRIKESAGAINY2018M/AVODJOHNNYENGLISHSTRIKESAGAINY2018M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODJOHNNYENGLISHSTRIKESAGAINY2018M/AVODJOHNNYENGLISHSTRIKESAGAINY2018M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
     <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODTERMINATOR2JUDGMENTDAYY1991M/AVODTERMINATOR2JUDGMENTDAYY1991M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-canal-avod/AVODTERMINATOR2JUDGMENTDAYY1991M/AVODTERMINATOR2JUDGMENTDAYY1991M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
     <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-phoenicia-avod/AVODFEARBELOWY2025M/AVODFEARBELOWY2025M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-phoenicia-avod/AVODFEARBELOWY2025M/AVODFEARBELOWY2025M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
     <div className={styles.slider_image}>
        <img src="https://mena-img-cdn-lb.aws.playco.com/ev-ingest-fox-avod/AVODTHEWEDDINGCONTRACTY2023M/AVODTHEWEDDINGCONTRACTY2023M-landscape-poster-v2.jpg"
        height="140" width="240" style={{ borderRadius: '12px',marginLeft:"10px"}}  />
        <div className={styles.free_tag_div}>
          <span style={{color:"black",background:"cyan", borderRadius: "17px",fontSize:"9px",
            fontWeight:"bold",paddingTop:'2px',paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px"}}>Free</span>
        </div>
        <div className={styles.card_div}>
          <div>
           <img src="https://mena-img-cdn-lb.aws.playco.com/ev-ingest-fox-avod/AVODTHEWEDDINGCONTRACTY2023M/AVODTHEWEDDINGCONTRACTY2023M-landscape-poster-v2.jpg"
            height="auto" width="300"  style={{borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}} />
            </div>
            <div className={styles.card_content}>
            <p className={styles.subscribe_btn}>▶︎ Subscribe</p>
            <p className={styles.plus_list_btn}>+
               <span className={styles.Tooltip}>My List</span>
            </p>
            </div>
        </div>
      </div>
    </Slider>
    </div>
    </div>

    
  );
}