import HeaderCafe from "../Header/HeaderCafe";
 
import Slider from "react-slick";
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button,  Image, Tooltip } from 'antd';
 
import cafe1 from "../../images/cafe/cafe1.jpg";
import cafe2 from "../../images/cafe/cafe2.jpg";
import cafe3 from "../../images/cafe/cafe3.jpg";
import cafe4 from "../../images/cafe/cafe4.jpg";
 
const Cafe =() => {
   
    var settings = {
        
       
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
       
      };
     
      
    return(
        <>
        <HeaderCafe  /> 
        <br /> <br /> <br />
        
        <Slider   {...settings}>
       
      <div>
        <Button type="dashed"  style={{ fontSize:'11px'}} >
        اسپرسو بار
        </Button>
      </div>
      <div>
         <Button type="dashed" style={{ fontSize:'11px'}} >
         قـهوه دمـی

        </Button>
      </div>
      <div>
        <Button type="dashed" style={{ fontSize:'11px'}} >
        آیس کافـی
        </Button>
      </div>
      <div>
          <Button type="dashed" style={{ fontSize:'11px'}} >
          نوشیدنی گرم
         </Button>
      </div>
      <div>
         <Button type="dashed" style={{ fontSize:'11px'}}  >
         دمـنوش ها
        </Button>
      </div>
      <div>
      <Button type="dashed"  style={{ fontSize:'11px'}}>
      چای
        </Button>
      </div>
      <div>
      <Button type="dashed"  style={{ fontSize:'11px'}}>
      مـاکـتیـل
        </Button>
      </div>
      <div>
      <Button type="dashed" style={{ fontSize:'11px'}} >
      سردنوش
        </Button>
      <Button type="dashed" style={{ fontSize:'11px'}} >
      آبمیوه طبیعی
        </Button>
      <Button type="dashed" style={{ fontSize:'11px'}} >
      اسموتی
        </Button>
      <Button type="dashed" style={{ fontSize:'11px'}} >
      میلک شیک
        </Button>
      </div>
        </Slider>



        <div style={{width:'98%', height:'100vh' ,  flexWrap:'wrap' , direction:'rtl' , marginTop:'-70px' , marginBottom:'30px',  display:'inline-flex'}}>
            <div style={{width:'33%' , textAlign:'center', marginTop:'5px'}}>
                <Image src={cafe1} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                لاتــه
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
                <Image src={cafe2} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                آیس آمریکانو
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
                <Image src={cafe3} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                دمنوش گل گاو زبان
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
                <Image src={cafe4} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                هرمس
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


export default Cafe;