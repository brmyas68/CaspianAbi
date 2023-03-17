
import { Col, Row ,Radio, Select, Button} from "antd";
import HeaderBodyBuilding from "../Header/HeaderBodyBuilding";

const  BodyBuilding =() =>{

    return(
        <>
           <HeaderBodyBuilding /> 
           <br /> <br /> <br /><br />

           <div style={{marginRight:'2%' , marginLeft:'2%' }}>
             <Row justify="start" dir="rtl" style={{border:'1px dashed #cccccc ' ,height:'55px' , borderRadius:'5px'}}>
                <Col span={7}  style={{ textAlign:'center' , marginTop:'15px', fontWeight:'600', }}>
                  12 جلسه در ماه
                </Col>
                <Col  span={9}  style={{ textAlign:'center' , marginTop:'15px', fontWeight:'600', }}>
                 400,000 تومان
                </Col>
                <Col  span={8}  style={{ textAlign:'center' , marginTop:'10px',  }}>
                 <Button type="primary"    style={{ height:'30px' ,   width:'80%' ,fontWeight:'600', background:'green' ,   fontSize:'12px'}}>
                     خرید اشتراک
                </Button>
                </Col>
             </Row>
             <br />
             <Row justify="start" dir="rtl" style={{border:'1px dashed #cccccc ' ,height:'55px' , borderRadius:'5px'}}>
             <Col span={7}  style={{ textAlign:'center' , marginTop:'15px', fontWeight:'600', }}>
                  16 جلسه در ماه
                </Col>
                <Col  span={9}  style={{ textAlign:'center' , marginTop:'15px', fontWeight:'600', }}>
                 500,000 تومان
                </Col>
                <Col  span={8}  style={{ textAlign:'center' , marginTop:'10px',  }}>
                 <Button type="primary"    style={{ height:'30px' ,   width:'80%' , fontWeight:'600',background:'green' ,   fontSize:'12px'}}>
                     خرید اشتراک
                </Button>
                </Col>
             </Row>
             <br />
             <Row justify="start" dir="rtl" style={{border:'1px dashed #cccccc ' ,height:'55px' , borderRadius:'5px'}}>
             <Col span={7}  style={{ textAlign:'center' , marginTop:'15px', fontWeight:'600', }}>
                  20 جلسه در ماه
                </Col>
                <Col  span={9}  style={{ textAlign:'center' , marginTop:'15px',  fontWeight:'600',}}>
                 600,000 تومان
                </Col>
                <Col  span={8}  style={{ textAlign:'center' , marginTop:'10px',  }}>
                 <Button type="primary"    style={{ height:'30px' ,   width:'80%' , fontWeight:'600',background:'green' ,   fontSize:'12px'}}>
                     خرید اشتراک
                </Button>
                </Col>
             </Row>
             <br />
             <Row justify="start" dir="rtl" style={{border:'1px dashed #cccccc ' ,height:'55px' , borderRadius:'5px'}}>
             <Col span={7}  style={{ textAlign:'center' , marginTop:'15px',  fontWeight:'600',}}>
                  30 جلسه در ماه
                </Col>
                <Col  span={9}  style={{ textAlign:'center' , marginTop:'15px',  fontWeight:'600',}}>
                 800,000 تومان
                </Col>
                <Col  span={8}  style={{ textAlign:'center' , marginTop:'10px',  }}>
                 <Button type="primary"    style={{ height:'30px' ,   width:'80%' , fontWeight:'600',background:'green' ,   fontSize:'12px'}}>
                     خرید اشتراک
                </Button>
                </Col>
             </Row>
           </div>
          
        </>
    );
}


export default BodyBuilding;

