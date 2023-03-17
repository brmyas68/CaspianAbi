import { Avatar, Button, Col, Input, InputRef, Row } from "antd";
import { UserOutlined , UploadOutlined   } from '@ant-design/icons';
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register =() => {

    const inputElementCodeMeli = useRef<InputRef | null>(null);
    const [codeMeli, setCodeMeli] = useState("");

    const ChangeMobile = (e:any) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setCodeMeli(e.target.value);
        }
      };

      let navigate = useNavigate();
      
      const F_Register= () =>{
        navigate('/dashbord');
      }
      
    return (
        <>
        <div style={{height:'100vh' , width:'100%' , marginTop:'20px' , display:'flex', flexDirection:'column',alignItems:'center' , }}>

                <Row justify="start" dir="rtl">
                    
                    <Col span={24} >
                    <Avatar
                            size={100}
                            icon={<UserOutlined />}
                        />
                    </Col>
                        
                </Row>
                <br />
                <Row justify="start" dir="rtl">
                    
                    <Col span={24} >
                       <Button   icon={<UploadOutlined  />}>انتخاب عکس</Button>
                    </Col>
                        
                </Row>
                <br /> <br />
                <Row justify="start" dir="rtl">
                    
                    <Col span={24} >
                        <Input size="large" maxLength={30} style={{width: '100%'}} placeholder="نام" />
                    </Col>
                        
                </Row>
                <br /> 
                <Row justify="start" dir="rtl">
                    
                    <Col span={24} >
                        <Input size="large" maxLength={100} style={{width: '100%'}} placeholder="نام خانوادگی" />
                    </Col>
                        
                </Row>
                <br />  
                <Row justify="start" dir="rtl">
                    
                    <Col span={24} >
                       <Input ref={inputElementCodeMeli} placeholder="کد ملی" size="large" type="number" value={codeMeli}  onKeyDown={(event)=>{  if (codeMeli.length  == 11 ) {  if(event.key === 'Backspace'){} else { event.preventDefault();}} else if( event.key === 'e' || event.key === 'E' || event.key === '-' || event.key === '+'|| event.key === '.') {event.preventDefault()} }} onChange={ChangeMobile}         />
                       
                    </Col>
                        
                </Row>
                <br /> 
                <Row justify="start" dir="rtl">
                    
                    <Col span={24} >
                        <Input size="large" maxLength={300} style={{width: '100%'}} placeholder="آدرس" />
                    </Col>
                        
                </Row>

                <br /> 
                <Row justify="start" dir="rtl">
                    
                    <Col span={24} >
                        <Button onClick={F_Register} size="large" type="primary" block  style={{ background:'green' , width:'100%', marginTop:'12px' , fontWeight:'600'}} >   عضویت در کاسپین آبی   </Button>
                    </Col>
                        
                </Row>


               
        </div>
       
 
        </>
    );
}


export default Register;