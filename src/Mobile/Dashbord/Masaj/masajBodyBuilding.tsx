import HeaderMasajBodyBuilding from "../Header/HeaderMasajBodyBuilding";
 
  
import { Button,  Col,  Image, Row, Tooltip } from 'antd';
 
 
 
 
const MasajBodyBuilding =() => {
   
   
      
    return(
        <>
        <HeaderMasajBodyBuilding  /> 
        <br /> <br /> <br />
       
           <div style={{marginRight:'1%' , marginLeft:'1%' }}>
             <Row justify="start" dir="rtl" style={{border:'1px dashed #cccccc ' ,height:'50px' , borderRadius:'5px'}}>
                <Col span={10}  style={{ textAlign:'right' , marginTop:'11px', paddingRight:'10px' }}>
                    تایلندی کل بدن
                </Col>
                <Col  span={3}  style={{ textAlign:'right' , marginTop:'11px', fontSize:'13px' }}>
                    45 دقیقه
                </Col>
                <Col  span={6}  style={{ textAlign:'center' , marginTop:'11px',  fontSize:'13px' }}>
                 200,000 تومان
                </Col>
                <Col  span={5}  style={{ textAlign:'center' , marginTop:'7px',  }}>
                 <Button type="primary"    style={{ height:'30px' ,   width:'80%' , background:'green' ,   fontSize:'12px'}}>
                     رزرو  ماساژ
                </Button>
                </Col>
             </Row>
             <br />
             <Row justify="start" dir="rtl" style={{border:'1px dashed #cccccc ' ,height:'50px' , borderRadius:'5px'}}>
                <Col span={10}  style={{ textAlign:'right' , marginTop:'11px', paddingRight:'10px' }}>
                ماساژ درمانی بادکش گرم 
                </Col>
                <Col  span={3}  style={{ textAlign:'right' , marginTop:'11px', fontSize:'13px' }}>
                    45 دقیقه
                </Col>
                <Col  span={6}  style={{ textAlign:'center' , marginTop:'11px',  fontSize:'13px' }}>
                 250,000 تومان
                </Col>
                <Col  span={5}  style={{ textAlign:'center' , marginTop:'7px',  }}>
                 <Button type="primary"    style={{ height:'30px' ,   width:'80%' , background:'green' ,   fontSize:'12px'}}>
                     رزرو  ماساژ
                </Button>
                </Col>
             </Row>
             <br />
             <Row justify="start" dir="rtl" style={{border:'1px dashed #cccccc ' ,height:'50px' , borderRadius:'5px'}}>
                <Col span={10}  style={{ textAlign:'right' , marginTop:'11px', paddingRight:'10px' }}>
                ریلکسینگ و رایحه درمانی
                </Col>
                <Col  span={3}  style={{ textAlign:'right' , marginTop:'11px', fontSize:'13px' }}>
                    45 دقیقه
                </Col>
                <Col  span={6}  style={{ textAlign:'center' , marginTop:'11px',  fontSize:'13px' }}>
                 220,000 تومان
                </Col>
                <Col  span={5}  style={{ textAlign:'center' , marginTop:'7px',  }}>
                 <Button type="primary"    style={{ height:'30px' ,   width:'80%' , background:'green' ,   fontSize:'12px'}}>
                     رزرو  ماساژ
                </Button>
                </Col>
             </Row>
             <br />
             <Row justify="start" dir="rtl" style={{border:'1px dashed #cccccc ' ,height:'50px' , borderRadius:'5px'}}>
                <Col span={10}  style={{ textAlign:'right' , marginTop:'11px', paddingRight:'10px' }}>
                ماساژ درمانی
                </Col>
                <Col  span={3}  style={{ textAlign:'right' , marginTop:'11px', fontSize:'13px' }}>
                    45 دقیقه
                </Col>
                <Col  span={6}  style={{ textAlign:'center' , marginTop:'11px',  fontSize:'13px' }}>
                 120,000 تومان
                </Col>
                <Col  span={5}  style={{ textAlign:'center' , marginTop:'7px',  }}>
                 <Button type="primary"    style={{ height:'30px' ,   width:'80%' , background:'green' ,   fontSize:'12px'}}>
                     رزرو  ماساژ
                </Button>
                </Col>
             </Row>
             <br />
           </div>
          
       
     
      
        </>
    );
}


export default MasajBodyBuilding;