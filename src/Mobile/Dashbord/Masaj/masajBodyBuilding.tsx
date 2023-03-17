import HeaderMasajBodyBuilding from "../Header/HeaderMasajBodyBuilding";
 
  
import { Button,  Card,  Col,  Image, Row, Tooltip } from 'antd';
 
 
 
 
const MasajBodyBuilding =() => {
   
   
      
    return(
        <>
        <HeaderMasajBodyBuilding  /> 
        <br /> <br /> <br />
       
           <div style={{marginRight:'3%' , marginLeft:'2%' , marginTop:'30px', }}>

               <div
                    
                    style={{
                      width: '100%',
                     
                      border:'1px dashed #d5d2d2',
                      borderRadius:'5px',
                      boxShadow : '1px 1px -3px 1px rgba(0, 0, 0, 0.2)',
                    }}
                >
                 <Row justify="start" dir="rtl">
                    <Col span={24}  style={{ textAlign:'center' ,  fontSize:'15px' , color:'#170602' ,  fontFamily:'tahoma', fontWeight:'600', marginTop:'15px', paddingRight:'0px'  }}>
                        ماساژ تایلندی کل بدن  
                    </Col>
                 </Row>
                 <br />
                 <Row justify="start" dir="rtl">
                    <Col span={7}  style={{ textAlign:'center' ,  fontSize:'13px' , color:'#bab4b5' ,  fontFamily:'tahoma', fontWeight:'600', marginTop:'10px', paddingRight:'0px'  }}>
                      مدت زمان ماساژ:   
                    </Col>
                    <Col span={5}  style={{ textAlign:'right' ,  fontSize:'13px' , color:'#170602' ,  fontFamily:'tahoma', fontWeight:'600', marginTop:'10px', paddingRight:'0px'  }}>
                        45 دقیقه
                    </Col>
                    <Col span={6}  style={{ textAlign:'center' ,  fontSize:'13px' , color:'#bab4b5' ,  fontFamily:'tahoma', fontWeight:'600', marginTop:'10px', paddingRight:'0px'  }}>
                        هزینه ماساژ :
                    </Col>
                    <Col span={5}  style={{ textAlign:'right' ,  fontSize:'13px' , color:'#170602' ,  fontFamily:'tahoma', fontWeight:'600', marginTop:'10px', paddingRight:'0px'  }}>
                        45000 تومان  
                    </Col>
                 </Row>
                <Row>
                        <Col  span={24}  style={{ textAlign:'center' , marginTop:'20px', marginBottom:'15px' }}>
                            <Button type="primary" block   style={{  fontSize:'15px' , fontWeight:'600', height:'35px' ,   width:'90%' , background:'green' ,    }}>
                                رزرو  ماساژ
                            </Button>
                        </Col>
                </Row>
                </div>
 
             <br />

             <div
                    
                    style={{
                      width: '100%',
                     
                      border:'1px dashed #d5d2d2',
                      borderRadius:'5px',
                      boxShadow : '1px 1px -3px 1px rgba(0, 0, 0, 0.2)',
                    }}
                >
                 <Row justify="start" dir="rtl">
                    <Col span={24}  style={{ textAlign:'center' ,  fontSize:'15px' , color:'#170602' ,  fontFamily:'tahoma', fontWeight:'600', marginTop:'15px', paddingRight:'0px'  }}>
                    ماساژ   کل بدن  با بادکش    
                    </Col>
                 </Row>
                 <br />
                 <Row justify="start" dir="rtl">
                    <Col span={7}  style={{ textAlign:'center' ,  fontSize:'13px' , color:'#bab4b5' ,  fontFamily:'tahoma', fontWeight:'600', marginTop:'10px', paddingRight:'0px'  }}>
                      مدت زمان ماساژ:   
                    </Col>
                    <Col span={5}  style={{ textAlign:'right' ,  fontSize:'13px' , color:'#170602' ,  fontFamily:'tahoma', fontWeight:'600', marginTop:'10px', paddingRight:'0px'  }}>
                        40 دقیقه
                    </Col>
                    <Col span={6}  style={{ textAlign:'center' ,  fontSize:'13px' , color:'#bab4b5' ,  fontFamily:'tahoma', fontWeight:'600', marginTop:'10px', paddingRight:'0px'  }}>
                        هزینه ماساژ :
                    </Col>
                    <Col span={5}  style={{ textAlign:'right' ,  fontSize:'13px' , color:'#170602' ,  fontFamily:'tahoma', fontWeight:'600', marginTop:'10px', paddingRight:'0px'  }}>
                        40000 تومان  
                    </Col>
                 </Row>
                <Row>
                        <Col  span={24}  style={{ textAlign:'center' , marginTop:'20px', marginBottom:'15px' }}>
                            <Button type="primary" block   style={{  fontSize:'15px' , fontWeight:'600', height:'35px' ,   width:'90%' , background:'green' ,    }}>
                                رزرو  ماساژ
                            </Button>
                        </Col>
                </Row>
                </div>
 
             <br />
             
           </div>
          
       
     
      
        </>
    );
}


export default MasajBodyBuilding;