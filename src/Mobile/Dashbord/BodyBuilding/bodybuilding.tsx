
import { Col, Row ,Radio, Select, Button} from "antd";
import HeaderBodyBuilding from "../Header/HeaderBodyBuilding";

import './../../fonts/irsans.ttf';
import './../dashbord.css';


const  BodyBuilding =() =>{

    return(
        <>
           <HeaderBodyBuilding /> 
           <br /> <br />    

           <div style={{marginRight:'2%' , marginLeft:'2%',  marginTop:'55px', }}>
             <Row justify="start" dir="rtl" style={{border:'1px dashed #cccccc ' ,height:'55px' , borderRadius:'5px'}}>
                <Col span={7}  style={{ textAlign:'center' , marginTop:'15px',  fontFamily:'irsans',fontSize:'12px' }}>
                  12 جلسه در ماه
                </Col>
                <Col  span={9}  style={{ textAlign:'center' , marginTop:'15px',  fontFamily:'irsans', fontSize:'12px'}}>
                 400,000 تومان
                </Col>
                <Col  span={8}  style={{ textAlign:'center' , marginTop:'10px',  }}>
                 <Button type="primary"    style={{ height:'30px' ,   width:'80%' , fontFamily:'irsans', background:'green' ,   fontSize:'12px'}}>
                     خرید اشتراک
                </Button>
                </Col>
             </Row>
             <br />
             <Row justify="start" dir="rtl" style={{border:'1px dashed #cccccc ' ,height:'55px' , borderRadius:'5px'}}>
             <Col span={7}  style={{ textAlign:'center' , marginTop:'15px',  fontFamily:'irsans', fontSize:'12px'}}>
                  16 جلسه در ماه
                </Col>
                <Col  span={9}  style={{ textAlign:'center' , marginTop:'15px',  fontFamily:'irsans', fontSize:'12px'}}>
                 500,000 تومان
                </Col>
                <Col  span={8}  style={{ textAlign:'center' , marginTop:'10px',  }}>
                 <Button type="primary"    style={{ height:'30px' ,   width:'80%' ,  fontFamily:'irsans',background:'green' ,   fontSize:'12px'}}>
                     خرید اشتراک
                </Button>
                </Col>
             </Row>
             <br />
             <Row justify="start" dir="rtl" style={{border:'1px dashed #cccccc ' ,height:'55px' , borderRadius:'5px'}}>
             <Col span={7}  style={{ textAlign:'center' , marginTop:'15px',  fontFamily:'irsans', fontSize:'12px'}}>
                  20 جلسه در ماه
                </Col>
                <Col  span={9}  style={{ textAlign:'center' , marginTop:'15px',   fontFamily:'irsans', fontSize:'12px'}}>
                 600,000 تومان
                </Col>
                <Col  span={8}  style={{ textAlign:'center' , marginTop:'10px',  }}>
                 <Button type="primary"    style={{ height:'30px' ,   width:'80%' ,  fontFamily:'irsans',background:'green' ,   fontSize:'12px'}}>
                     خرید اشتراک
                </Button>
                </Col>
             </Row>
             <br />
             <Row justify="start" dir="rtl" style={{border:'1px dashed #cccccc ' ,height:'55px' , borderRadius:'5px'}}>
             <Col span={7}  style={{ textAlign:'center' , marginTop:'15px',   fontFamily:'irsans', fontSize:'12px'}}>
                  30 جلسه در ماه
                </Col>
                <Col  span={9}  style={{ textAlign:'center' , marginTop:'15px',   fontFamily:'irsans', fontSize:'12px' }}>
                 800,000 تومان
                </Col>
                <Col  span={8}  style={{ textAlign:'center' , marginTop:'10px',  }}>
                 <Button type="primary"    style={{ height:'30px' ,   width:'80%' ,  fontFamily:'irsans',background:'green' ,   fontSize:'12px'}}>
                     خرید اشتراک
                </Button>
                </Col>
             </Row>
           </div>
          
        </>
    );
}


export default BodyBuilding;

