import HeaderCafe from "../Header/HeaderCafe";
 
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


import { Button,  Image, Tooltip } from 'antd';
 
import cafe1 from "../../images/cafe/cafe1.jpg";
import cafe2 from "../../images/cafe/cafe2.jpg";
import cafe3 from "../../images/cafe/cafe3.jpg";
import cafe4 from "../../images/cafe/cafe4.jpg";
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
const Cafe =() => {
   
  const responsive = {
    0: { items: 4 },
    568: { items: 4 },
    1024: { items: 5 },
};

const items = [
  <div className="item" data-value="1"  style={{ textAlign:'center', marginRight:'3px' }}>
     <Button block type="dashed"  style={{height:'35px', fontWeight:'600',padding: '0px' , fontSize:'11px'}} >
     اسپرسو بار
    </Button>
</div>,
  <div className="item" data-value="2"  style={{  marginRight:'3px' }}>
     <Button  block  type="dashed" style={{ height:'35px', fontWeight:'600',padding: '0px' ,  fontSize:'11px'}} >
     قـهوه دمـی
    </Button>
  </div>,
  <div className="item" data-value="3" style={{ textAlign:'center', marginRight:'3px' }}>
    <Button block type="dashed" style={{ height:'35px', fontWeight:'600',padding: '0px' , fontSize:'11px'}} >
    آیس کافـی
    </Button>
  </div>,
  <div className="item" data-value="4" style={{ textAlign:'center', marginRight:'3px' }}>
     <Button block type="dashed" style={{ height:'35px', fontWeight:'600',padding: '0px' , fontSize:'11px'}} >
     نوشیدنی گرم
     </Button>
  </div>,
  <div className="item" data-value="5"  style={{  textAlign:'center', marginRight:'3px' }}>
      <Button block type="dashed" style={{height:'35px', fontWeight:'600', padding: '0px' ,fontSize:'11px'}}  >
      دمـنوش ها
    </Button>
  </div>,
   <div className="item" data-value="6"  style={{ textAlign:'center', marginRight:'3px' }}>
       <Button block type="dashed"  style={{height:'35px', fontWeight:'600',padding: '0px' , fontSize:'11px'}}>
       چای
       </Button>
  </div>,
   <div className="item" data-value="7"  style={{ textAlign:'center', marginRight:'3px' }}>
    <Button block type="dashed"  style={{height:'35px', fontWeight:'600', padding: '0px' ,fontSize:'11px'}}>
    مـاکـتیـل
    </Button>
  </div>,

  <div className="item" data-value="8"  style={{ textAlign:'center', marginRight:'3px' }}>
    <Button block type="dashed"  style={{height:'35px', fontWeight:'600',padding: '0px' ,fontSize:'11px'}}>
    سردنوش
    </Button>
  </div>,
  <div className="item" data-value="9"  style={{ textAlign:'center', marginRight:'3px' }}>
    <Button block type="dashed"  style={{ height:'35px', fontWeight:'600',padding: '0px' ,fontSize:'11px'}}>
    آبمیوه طبیعی
    </Button>
  </div>,
  <div className="item" data-value="10"  style={{ textAlign:'center', marginRight:'3px' }}>
    <Button block type="dashed"   style={{ height:'35px', fontWeight:'600', padding: '0px' ,fontSize:'11px'}}>
    اسموتی
    </Button>
  </div>,


];

      
    return(
        <>
        <HeaderCafe  /> 
        <br /> <br /> <br />
        
        <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                disableDotsControls={true}
                renderPrevButton={( )=>{return <ArrowR/>}}
                renderNextButton={( )=>{return <ArrowL />}}
            />

 

        <div style={{   flexWrap:'wrap' , direction:'rtl' , marginTop:'5px' , marginBottom:'30px',  display:'inline-flex'}}>
            <div style={{width:'33%' , textAlign:'center', marginTop:'15px'}}>
                <Image src={cafe1} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                لاتــه
                </div>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0px'}}>
                85.000  T
                </div>
                <div>
                <Button type="primary"  style={{background:'green' , marginTop:'15px',  marginBottom:'20px', fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>
            <div style={{width:'33%', textAlign:'center', marginTop:'15px' }}>
                <Image src={cafe2} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                آیس آمریکانو
                </div>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingTop:'10px' ,paddingRight:'0px'}}>
                80.000  T
                </div>
                <div>
                <Button type="primary"  style={{background:'green' , marginTop:'15px',  marginBottom:'20px', fontSize:'13px'}}>
                   سفارش
                </Button>
                </div>
            </div>

            <div style={{width:'33%', textAlign:'center', marginTop:'15px'}}>
                <Image src={cafe3} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                دمنوش گل گاو زبان
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
                <Image src={cafe4} width={120}   height={115}/>
                <div style={{fontFamily:'tahoma' , fontSize:'12px' , textAlign:'center' , paddingRight:'0px'}}>
                هرمس
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


export default Cafe;