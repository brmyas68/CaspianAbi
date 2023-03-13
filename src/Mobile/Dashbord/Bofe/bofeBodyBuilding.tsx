import HeaderBofeBodyBuilding from "../Header/HeaderBofeBodyBuilding";
 
import Slider from "react-slick";
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button,  Image, Tooltip } from 'antd';
 
import bofe1 from "../../images/bofe/bofe1.jpg";
import bofe2 from "../../images/bofe/bofe2.jpg";
import bofe3 from "../../images/bofe/bofe3.jpg";
import bofe4 from "../../images/bofe/bofe4.jpg";
 
const BofeBodyBuilding =() => {
   
    var settings = {
        
       
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
       
      };
     
      
    return(
        <>
        <HeaderBofeBodyBuilding  /> 
        <br /> <br /> <br />
        
        <Slider   {...settings}>
       
      <div>
        <Button type="dashed"  style={{ fontSize:'11px'}} >
        استیک
        </Button>
      </div>
      <div>
         <Button type="dashed" style={{ fontSize:'11px'}} >
         غذای ایرانی

        </Button>
      </div>
      <div>
        <Button type="dashed" style={{ fontSize:'11px'}} >
        سالاد
        </Button>
      </div>
      <div>
          <Button type="dashed" style={{ fontSize:'11px'}} >
          نوشیدنی
         </Button>
      </div>
       
     
    </Slider>

     
        <div style={{width:'98%', height:'100vh' ,  flexWrap:'wrap' , direction:'rtl' , marginTop:'30px' , marginBottom:'30px',  display:'inline-flex'}}>
            <div style={{width:'33%' , textAlign:'center', marginTop:'5px'}}>
                <Image src={bofe1} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                استیک مرغ (مینی)
                </div>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0px'}}>
                85.000  T
                </div>
                <div>
                <Button type="primary"  style={{background:'green' , marginTop:'15px', fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>
            <div style={{width:'33%', textAlign:'center', marginTop:'5px' }}>
                <Image src={bofe2} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                استیک مرغ (رژیمی)
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
                <Image src={bofe3} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                دمپختک شیرازی (گیاهی)
                </div>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0px'}}>
                   60.000  T
                </div>
                <div>
                <Button type="primary"  style={{background:'green' , marginTop:'15px', fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>

            <div style={{width:'33%', textAlign:'center', marginTop:'5px'}}>
                <Image src={bofe4} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                جوجه ترش (رژیمی) 
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


export default BofeBodyBuilding;