import React, { useRef, useState } from "react";
import { Col, Row , Input , Button, InputRef } from 'antd';
import { MobileOutlined ,LockOutlined} from '@ant-design/icons';
import { Navigate, useNavigate } from 'react-router-dom';

import  './login.css';

const Login =()=>{
  
    let navigate = useNavigate();
    const inputElementMobile = useRef<InputRef | null>(null);

    const inputElement1 = useRef<InputRef>(null);
    const inputElement2 = useRef<InputRef>(null);
    const inputElement3 = useRef<InputRef | null>(null);
    const inputElement4 = useRef<InputRef | null>(null);
    const inputElement5 = useRef<InputRef | null>(null);

    const [mobile, setMobile] = useState("");
    const [activeCode1, setActiveCode1] = useState("");
    const [activeCode2, setActiveCode2] = useState("");
    const [activeCode3, setActiveCode3] = useState("");
    const [activeCode4, setActiveCode4] = useState("");
    const [activeCode5, setActiveCode5] = useState("");

    const [isactiveCode1, setIsActiveCode1] = useState(false);
    const [isactiveCode2, setIsActiveCode2] = useState(false);
    const [isactiveCode3, setIsActiveCode3] = useState(false);
    const [isactiveCode4, setIsActiveCode4] = useState(false);
    const [isactiveCode5, setIsActiveCode5] = useState(false);

    const [isShow, setIsShow] = useState(true);

    const ChangeMobile = (e:any) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
          setMobile(e.target.value);
        }
      };
      const ChangeActiveCodeText1 = (e:any) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setActiveCode1(e.target.value);
        }
      };
      const ChangeActiveCodeText2 = (e:any) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setActiveCode2(e.target.value);
        }
      };
      const ChangeActiveCodeText3 = (e:any) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setActiveCode3(e.target.value);
        }
      };
      const ChangeActiveCodeText4= (e:any) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setActiveCode4(e.target.value);
        }
      };
      const ChangeActiveCodeText5 = (e:any) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setActiveCode5(e.target.value);
        }
      };

      const F_SendActiveCode = () => {
        if(mobile !="" && mobile.length == 11)
           setIsShow(false);
         else
          inputElementMobile.current?.focus();   
      };

   
      const F_Login =() =>{
        if(mobile !="" && activeCode1 !="" && activeCode2 !=""&& activeCode3 !=""&& activeCode4 !=""&& activeCode5 !=""){
         
          navigate('/dashbord');
        }
      }
      
      const styles = {
        Show:{
          display: isShow ? "flex" : "none"
        },
        Hide:{
            display:  !isShow ? "flex" : "none"
        },
        Focus1:{
            borderBottom: isactiveCode1 ? '1px solid #1c77c7' : '1px solid #c2bebe'
        },
        Focus2:{
            borderBottom: isactiveCode2 ? '1px solid #1c77c7' : '1px solid #c2bebe'
        },
        Focus3:{
            borderBottom: isactiveCode3 ? '1px solid #1c77c7' : '1px solid #c2bebe'
        },
        Focus4:{
            borderBottom: isactiveCode4 ? '1px solid #1c77c7' : '1px solid #c2bebe'
        },
        Focus5:{
            borderBottom: isactiveCode5 ? '1px solid #1c77c7' : '1px solid #c2bebe'
        },
      };

    return(
         <>
            
                <Row style={{  height:'100vh' ,  justifyContent:'center' , alignContent:'center', alignItems:'center' , ... styles.Show}} >
                    <Col span={3}></Col>
                    <Col span={18}  >
                    <div style={{textAlign:'right' , marginBottom:'10px' , fontSize:'14px' , color:'#6b6b6b'}}>شماره موبایل</div>
                    <div>  <Input ref={inputElementMobile} placeholder=""  value={mobile}   onChange={ChangeMobile}    maxLength={11}    prefix={<MobileOutlined  style={{ fontSize: '18px ' }} />} /> </div>
                    <div>  <Button onClick={F_SendActiveCode} type="primary" block  style={{ marginTop:'12px'}}  >  ارسال کد </Button></div>
                    </Col>
                    <Col span={3}></Col>
                </Row>

            
                
               
                    <Row   style={{  height:'100vh' ,   justifyContent:'center' , alignContent:'center', alignItems:'center ' ,  ...styles.Hide}} >
                    <Col span={3}></Col>
                    <Col span={18}  >
                    <div style={{textAlign:'right' , marginBottom:'10px' , fontSize:'14px' , color:'#6b6b6b'}}>کد فعال سازی  </div>
                    <div className="StyleActiveCode"> 
                         <LockOutlined style={{fontSize:'18px', marginTop:'7px'}} />
                         <Input ref={inputElement1} onKeyUp={(event)=>{  if (event.key === 'Backspace') {} else { inputElement2.current?.focus();} }} value={activeCode1} onChange={ChangeActiveCodeText1}  onFocus={()=>{ inputElement1.current?.select(); setIsActiveCode1(true)}}  onBlur={()=>{setIsActiveCode1(false)}} placeholder=""  bordered={false}  maxLength={1}  style={{ fontSize: '12px ' , marginLeft:'8%' , height:'23px' , width:'30px',  borderRadius:'0px' ,   ...styles.Focus1 }} />   
                         <Input ref={inputElement2} onKeyUp={(event)=>{  if (event.key === 'Backspace') {} else { inputElement3.current?.focus();} }} value={activeCode2} onChange={ChangeActiveCodeText2}  onFocus={()=>{ inputElement2.current?.select(); setIsActiveCode2(true)}}  onBlur={()=>{setIsActiveCode2(false)}}  placeholder=""  bordered={false}  maxLength={1}  style={{ fontSize: '12px ' , marginLeft:'6%' ,  height:'23px' , width:'30px',   borderRadius:'0px' , ...styles.Focus2  }} />   
                         <Input ref={inputElement3} onKeyUp={(event)=>{  if (event.key === 'Backspace') {} else { inputElement4.current?.focus();} }} value={activeCode3} onChange={ChangeActiveCodeText3}  onFocus={()=>{ inputElement3.current?.select(); setIsActiveCode3(true)}}  onBlur={()=>{setIsActiveCode3(false)}}  placeholder=""  bordered={false}  maxLength={1}  style={{ fontSize: '12px ' , marginLeft:'6%' ,  height:'23px' , width:'30px',   borderRadius:'0px' , ...styles.Focus3  }} />   
                         <Input ref={inputElement4} onKeyUp={(event)=>{  if (event.key === 'Backspace') {} else { inputElement5.current?.focus();} }} value={activeCode4} onChange={ChangeActiveCodeText4}  onFocus={()=>{ inputElement4.current?.select(); setIsActiveCode4(true)}}  onBlur={()=>{setIsActiveCode4(false)}}  placeholder=""  bordered={false}  maxLength={1}  style={{ fontSize: '12px ' , marginLeft:'6%' ,  height:'23px' , width:'30px',   borderRadius:'0px' , ...styles.Focus4 }} />   
                         <Input ref={inputElement5} value={activeCode5} onChange={ChangeActiveCodeText5}  onFocus={()=>{ inputElement5.current?.select(); setIsActiveCode5(true)}}  onBlur={()=>{setIsActiveCode5(false)}}  placeholder=""  bordered={false}  maxLength={1}  style={{ fontSize: '12px ' , marginLeft:'6%' ,  height:'23px' , width:'30px',   borderRadius:'0px' , ...styles.Focus5  }} />   
                     

                    </div>
                    <div>  <Button onClick={F_Login} type="primary" block  style={{ marginTop:'12px'}} >   ورود   </Button></div>
                    </Col>
                    <Col span={3}></Col>
                    </Row>
              

          </>
      
    );
}

export default Login;