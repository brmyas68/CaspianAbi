
 
import { useRef, useState } from "react";
import DatePicker from "react-multi-date-picker";
import HeaderPool from "../Header/HeaderPool";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import { Col, Row ,Radio, Select, Button, InputNumber , Input, InputRef} from "antd";

const Pool = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
    
    const inputElementCountPool= useRef<InputRef | null>(null);
    const [countPool, setCountPool] = useState("1");

    const ChangeCountPool = (e:any) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setCountPool(e.target.value);
        }
      };

    const options = [];
    
    options.push({
        value:  "1",
        label:  "12:00 - 14:00",
    });
    options.push({
        value:  "2",
        label:  "14:00 - 16:00",
    });
    options.push({
        value:  "3",
        label:  "16:00 - 18:00",
    });

    return(
        <>
           <HeaderPool  /> 
           <br /> <br /> <br /><br />

           <div style={{marginRight:'20%'}}>
            <Row justify="start" dir="rtl">
              
              <Col span={24} style={{ fontSize:'17px' ,  fontWeight:'600' , paddingBottom:'5px'}}>
                  تاریخ : 
              </Col>
                 
            </Row>
             <Row justify="start" dir="rtl">
              
                <Col  span={24}>
                <DatePicker 
                 
                    style={{
                        fontFamily:'tahoma',
                        fontSize:'14px', fontWeight:'600' ,
                        width:'80%',
                        height:'40px'
                    }}
                    containerStyle={{
                        fontFamily:'tahoma',
                        fontSize:'14px', fontWeight:'600' ,
                    }}
                    className="green"
                    weekDays={weekDays}
                    format={"YYYY/MM/DD"}
                    calendar={persian}
                    locale={persian_fa}
                    value={dateTime}
                    />
                </Col>
             </Row>
             <br />
             <Row justify="start" dir="rtl">
              
              <Col span={24} style={{ fontSize:'17px' ,  fontWeight:'600' , paddingBottom:'5px'}}>
              ساعت   :  
              </Col>
                 
             </Row>
             <Row justify="start" dir="rtl">
               
                <Col span={24}>
                <Select
                        size="large"
                        defaultValue="1"
                        
                        style={{
                            width: '57%',
                        }}
                        options={options}
                        placement="bottomLeft"
                   />
                </Col>
             </Row>
             <br />
             <Row justify="start" dir="rtl">
              
              <Col span={24} style={{ fontSize:'17px' ,  fontWeight:'600' , paddingBottom:'5px'}}>
                تعداد   :  
              </Col>
                 
             </Row>
             <Row justify="start" dir="rtl">
               
                <Col span={24}>
                    <Input size="large"  ref={inputElementCountPool} onKeyUp={(event)=>{  if ( countPool == "0") { setCountPool("1"); }    }}  onFocus={()=>{ inputElementCountPool.current?.select();   }} value={countPool}   onChange={ChangeCountPool}   min={1}  style={{textAlign:'left' , direction:'ltr' , width:'57%'}} />
                </Col>
             </Row>
             <br />
             <Row justify="start" dir="rtl">
              
              <Col span={24} style={{ fontSize:'17px' ,  fontWeight:'600' , paddingBottom:'5px', paddingRight:'3px'}}>
                  قیمت   :  
              </Col>
                 
             </Row>
             <Row justify="start" dir="rtl">
               
                <Col span={24} style={{fontSize:'17px' , color:'red', textAlign:'center' , fontWeight:'600' , paddingLeft:'60px' ,paddingBottom:'5px' }}>
                   90,000 تومان
                </Col>
             </Row>
             <Row justify="start" dir="rtl">
                 
                <Col span={24} style={{paddingTop:'5px' ,  }}>
                <Button type="primary" block  size="large"   style={{ width:'67%' , fontWeight:'600' , background:'green' , marginTop:'20px', marginBottom:'10px', fontSize:'15px'}}>
                   رزرو بلیط
                </Button>
                </Col>
             </Row>
             <br />
           </div>
          
        </>
    );
}

export default Pool;