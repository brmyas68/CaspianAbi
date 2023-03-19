import HeaderBofeBodyBuilding from "../Header/HeaderBofeBodyBuilding";
 
import { Button,  Image, Tooltip } from 'antd';
 
import bofe1 from "../../images/bofe/bofe1.jpg";
import bofe2 from "../../images/bofe/bofe2.jpg";
import bofe3 from "../../images/bofe/bofe3.jpg";
import bofe4 from "../../images/bofe/bofe4.jpg";
 
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CaretLeftOutlined, CaretRightOutlined   } from '@ant-design/icons';

const ArrowL= () =>{
   return (
    <>
       <CaretLeftOutlined  style={{fontWeight:'600'}}/>
    </>
   );
}
const ArrowR= () =>{
      return (
         <>
            <CaretRightOutlined style={{fontWeight:'600'}}/>
         </>
   );
}
const BofeBodyBuilding =() => {
   
  const responsive = {
    0: { items: 5 },
    568: { items: 5 },
    1024: { items: 5 },
};

   
const items = [
  <div className="item" data-value="1"  style={{ textAlign:'center', marginRight:'3px' }}>
     <Button block type="dashed"  style={{height:'35px', fontWeight:'600',padding: '0px' , fontSize:'11px'}} >
     استیک
    </Button>
</div>,
  <div className="item" data-value="2"  style={{  marginRight:'3px' }}>
     <Button  block  type="dashed" style={{height:'35px', fontWeight:'600', padding: '0px' ,  fontSize:'11px'}} >
     غذای ایرانی
    </Button>
  </div>,
  <div className="item" data-value="3" style={{ textAlign:'center', marginRight:'3px' }}>
    <Button block type="dashed" style={{height:'35px', fontWeight:'600', padding: '0px' , fontSize:'11px'}} >
    سالاد
    </Button>
  </div>,
  <div className="item" data-value="4" style={{ textAlign:'center', marginRight:'3px' }}>
     <Button block type="dashed" style={{height:'35px', fontWeight:'600', padding: '0px' , fontSize:'11px'}} >
     نوشیدنی
     </Button>
  </div>,
    

];  
      
    return(
        <>
        <HeaderBofeBodyBuilding  /> 
        <br /> <br /> <br />
       

    <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                disableDotsControls={true}
                renderPrevButton={( )=>{return <ArrowL/>}}
                renderNextButton={( )=>{return <ArrowR/>}}
            />



     
        <div style={{width:'98%', height:'100vh' ,  flexWrap:'wrap' , direction:'rtl' , marginTop:'5px' , marginBottom:'30px',  display:'inline-flex'}}>
            <div style={{width:'33%' , textAlign:'center', marginTop:'15px'}}>
                <Image src={bofe1} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                استیک مرغ (مینی)
                </div>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0px'}}>
                85.000  T
                </div>
                <div>
                <Button type="primary"  style={{background:'green' , marginTop:'15px', marginBottom:'20px', fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>
            <div style={{width:'33%', textAlign:'center', marginTop:'15px' }}>
                <Image src={bofe2} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                استیک مرغ (رژیمی)
                </div>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0px'}}>
                80.000  T
                </div>
                <div>
                <Button type="primary"  style={{background:'green' , marginTop:'15px', marginBottom:'20px', fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>

            <div style={{width:'33%', textAlign:'center', marginTop:'15px'}}>
                <Image src={bofe3} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                دمپختک شیرازی (گیاهی)
                </div>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0px'}}>
                   60.000  T
                </div>
                <div>
                <Button type="primary"  style={{background:'green' , marginTop:'15px', marginBottom:'20px', fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>

            <div style={{width:'33%', textAlign:'center', marginTop:'15px'}}>
                <Image src={bofe4} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                جوجه ترش (رژیمی) 
                </div>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0x'}}>
                   95.000  T
                </div>
                <div>
                <Button type="primary"  style={{background:'green' , marginTop:'15px',  marginBottom:'20px', fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>

        </div>
        </>
    );
}


export default BofeBodyBuilding;