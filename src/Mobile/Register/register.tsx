import { Avatar, Button, Col, Input, InputRef, Row } from "antd";
import { UserOutlined , UploadOutlined   } from '@ant-design/icons';
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register =() => {
    const inputFile = useRef<HTMLInputElement | null>(null);
    const inputElementCodeMeli = useRef<InputRef | null>(null);
    const [codeMeli, setCodeMeli] = useState("");
   // const [imageUrl, setImageUrl] = useState<File | null>(null);
    const [url, setUrl] = useState("");
   
    const handleImageUpload = (evt: React.ChangeEvent<HTMLInputElement>) => {
        if (evt.target.files != null) {
           
         //   var reader = new FileReader();
          //  const urlimage = reader.readAsDataURL(evt.target.files[0]);
            setUrl(URL.createObjectURL(evt.target.files[0]));
        }
      };

    const F_SelectFile= () =>{
        inputFile.current!.click();
      }

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
        <div style={{height:'100vh' , width:'100%' , marginTop:'50px' , display:'flex', flexDirection:'column',alignItems:'center' , }}>
                <input accept="image/*"  onChange={ handleImageUpload} ref={inputFile}  type="file" id="file" style={{display: "none"}}/>
                <Row justify="start" dir="rtl">
                    
                    <Col span={24} >
                        {
                            url ? 
                            <Avatar
                            size={120}
                            src={url}
                        />
                        :
                        <Avatar
                        size={120}
                        icon={<UserOutlined/>}
                    />
                        }
                    
                    </Col>
                        
                </Row>
                <br />
                <Row justify="start" dir="rtl">
                    
                    <Col span={24} >
                       <Button  onClick={F_SelectFile}  icon={<UploadOutlined  />}>انتخاب عکس</Button>
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
                       <Input ref={inputElementCodeMeli} placeholder="کد ملی" size="large"  inputMode="numeric" value={codeMeli}  onKeyDown={(event)=>{  if (codeMeli.length  == 11 ) {  if(event.key === 'Backspace'){} else { event.preventDefault();}} else if( event.key === 'e' || event.key === 'E' || event.key === '-' || event.key === '+'|| event.key === '.') {event.preventDefault()} }} onChange={ChangeMobile}         />
                       
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
                        <Button onClick={F_Register} size="large" type="primary" block  style={{   width:'100%', marginTop:'12px' , fontWeight:'600'}} >   عضویت در کاسپین آبی   </Button>
                    </Col>
                        
                </Row>


               
        </div>
       
 
        </>
    );
}


export default Register;