import HeaderResturan from "../Header/HeaderResturan";
 
import Slider from "react-slick";
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button,  Image, Tooltip } from 'antd';
 
import food1 from "../../images/resturan/barg.jpg";
import food2 from "../../images/resturan/salad4.jpg";
import food3 from "../../images/resturan/soup2.jpg";
import food4 from "../../images/resturan/sib1.jpg";
 
const Resturan =() => {
   
    var settings = {
        
       
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
       
      };
     
      
    return(
        <>
        <HeaderResturan  /> 
        <br /> <br /> <br />
        
        <Slider   {...settings}>
       
      <div>
        <Button type="dashed"  style={{ fontSize:'11px'}} >
          پیش غذاها 
        </Button>
      </div>
      <div>
         <Button type="dashed" style={{ fontSize:'11px'}} >
         پیش غذاهای فرنگی

        </Button>
      </div>
      <div>
        <Button type="dashed" style={{ fontSize:'11px'}} >
        سالادها
        </Button>
      </div>
      <div>
          <Button type="dashed" style={{ fontSize:'11px'}} >
          غذای اصلی
         </Button>
      </div>
      <div>
         <Button type="dashed" style={{ fontSize:'11px'}}  >
         سینی‌ها
        </Button>
      </div>
      <div>
      <Button type="dashed"  style={{ fontSize:'11px'}}>
      خوراک ها
        </Button>
      </div>
      <div>
      <Button type="dashed"  style={{ fontSize:'11px'}}>
      چلوها
        </Button>
      </div>
      <div>
      <Button type="dashed" style={{ fontSize:'11px'}} >
      دیزی
        </Button>
      <Button type="dashed" style={{ fontSize:'11px'}} >
      غذای مخصوص
        </Button>
      <Button type="dashed" style={{ fontSize:'11px'}} >
      مزه غذا
        </Button>
      <Button type="dashed" style={{ fontSize:'11px'}} >
      نوشیدنی ها
        </Button>
      </div>
        </Slider>



        <div style={{width:'98%', height:'100vh' ,  flexWrap:'wrap' , direction:'rtl' , marginTop:'-70px' , marginBottom:'30px',  display:'inline-flex'}}>
            <div style={{width:'33%' , textAlign:'center', marginTop:'5px'}}>
                <Image src={food1} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                  کباب برگ مخصوص
                </div>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0px'}}>
                   425.000 T
                </div>
                <div>
                <Button type="primary"  style={{background:'green' , marginTop:'15px', fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>
            <div style={{width:'33%', textAlign:'center', marginTop:'5px' }}>
                <Image src={food2} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                   سالاد سزار با مرغ سوخاری
                </div>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0px'}}>
                   260.000 T
                </div>
                <div>
                <Button type="primary"  style={{background:'green' , marginTop:'15px', fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>

            <div style={{width:'33%', textAlign:'center', marginTop:'5px'}}>
                <Image src={food3} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                سوپ جو
                </div>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0px'}}>
                   80.000  T
                </div>
                <div>
                <Button type="primary"  style={{background:'green' , marginTop:'15px', fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>

            <div style={{width:'33%', textAlign:'center', marginTop:'5px'}}>
                <Image src={food4} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                سیب زمینی سرخ کرده
                </div>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0x'}}>
                   95.000  T
                </div>
                <div>
                <Button type="primary"  style={{background:'green' , marginTop:'15px', fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>

        </div>
        </>
    );
}


export default Resturan;