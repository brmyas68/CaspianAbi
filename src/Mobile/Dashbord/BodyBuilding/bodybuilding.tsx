
import { Col, Row ,Radio, Select, Button} from "antd";
import HeaderBodyBuilding from "../Header/HeaderBodyBuilding";

const  BodyBuilding =() =>{

    return(
        <>
           <HeaderBodyBuilding /> 
           <br /> <br /> <br /><br />

           <div style={{marginRight:'5%' , marginLeft:'5%' }}>
             <Row justify="start" dir="rtl" style={{border:'1px dashed #cccccc ' ,height:'50px' , borderRadius:'5px'}}>
                <Col span={7}  style={{ textAlign:'center' , marginTop:'11px',  }}>
                  12 جلسه در ماه
                </Col>
                <Col  span={9}  style={{ textAlign:'center' , marginTop:'11px',  }}>
                 400,000 تومان
                </Col>
                <Col  span={8}  style={{ textAlign:'center' , marginTop:'7px',  }}>
                 <Button type="primary"    style={{ height:'30px' ,   width:'70%' , background:'green' ,   fontSize:'12px'}}>
                     خرید اشتراک
                </Button>
                </Col>
             </Row>
             <br />
             <Row justify="start" dir="rtl" style={{border:'1px dashed #cccccc ' ,height:'50px' , borderRadius:'5px'}}>
             <Col span={7}  style={{ textAlign:'center' , marginTop:'11px',  }}>
                  16 جلسه در ماه
                </Col>
                <Col  span={9}  style={{ textAlign:'center' , marginTop:'11px',  }}>
                 500,000 تومان
                </Col>
                <Col  span={8}  style={{ textAlign:'center' , marginTop:'7px',  }}>
                 <Button type="primary"    style={{ height:'30px' ,   width:'70%' , background:'green' ,   fontSize:'12px'}}>
                     خرید اشتراک
                </Button>
                </Col>
             </Row>
             <br />
             <Row justify="start" dir="rtl" style={{border:'1px dashed #cccccc ' ,height:'50px' , borderRadius:'5px'}}>
             <Col span={7}  style={{ textAlign:'center' , marginTop:'11px',  }}>
                  20 جلسه در ماه
                </Col>
                <Col  span={9}  style={{ textAlign:'center' , marginTop:'11px',  }}>
                 600,000 تومان
                </Col>
                <Col  span={8}  style={{ textAlign:'center' , marginTop:'7px',  }}>
                 <Button type="primary"    style={{ height:'30px' ,   width:'70%' , background:'green' ,   fontSize:'12px'}}>
                     خرید اشتراک
                </Button>
                </Col>
             </Row>
             <br />
             <Row justify="start" dir="rtl" style={{border:'1px dashed #cccccc ' ,height:'50px' , borderRadius:'5px'}}>
             <Col span={7}  style={{ textAlign:'center' , marginTop:'11px',  }}>
                  30 جلسه در ماه
                </Col>
                <Col  span={9}  style={{ textAlign:'center' , marginTop:'11px',  }}>
                 800,000 تومان
                </Col>
                <Col  span={8}  style={{ textAlign:'center' , marginTop:'7px',  }}>
                 <Button type="primary"    style={{ height:'30px' ,   width:'70%' , background:'green' ,   fontSize:'12px'}}>
                     خرید اشتراک
                </Button>
                </Col>
             </Row>
           </div>
          
        </>
    );
}


export default BodyBuilding;

