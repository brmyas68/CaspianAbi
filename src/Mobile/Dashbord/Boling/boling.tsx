import HeaderBoling from "../Header/HeaderBoling";
 
import { useRef, useState } from "react";
import DatePicker from "react-multi-date-picker";
 
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import { Col, Row ,Radio, Select, Button, InputNumber , Input, InputRef} from "antd";

const Boling = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
    
    const optionsSet = [];
   
    optionsSet.push({
      value:  "1",
      label: " یک"   +  " نفره" + "  .. " +  " ده " + "  دقیقه"  ,
    });
    optionsSet.push({
        value:  "2",
        label: " دو"   +  " نفره" + "  .. " +  " بیست " + "  دقیقه"  ,
    });
    optionsSet.push({
        value:  "3",
        label: " سه"   +  " نفره" + "  .. " +  " سی " + "  دقیقه"  ,
    });
    optionsSet.push({
      value:  "4",
      label: " چهار"   +  " نفره" + "  .. " +  " چهل " + "  دقیقه"  ,
     });

    const optionsTime = [];
    
    optionsTime.push({
        value:  "1",
        label:  "12:00",
    });
    optionsTime.push({
        value:  "2",
        label:  "13:00",
    });
    optionsTime.push({
        value:  "3",
        label:  "14:00",
    });
    optionsTime.push({
      value:  "4",
      label:  "15:00",
    });
    optionsTime.push({
    value:  "5",
    label:  "16:00",
    });
    optionsTime.push({
      value:  "6",
      label:  "17:00",
    });
    optionsTime.push({
      value:  "7",
      label:  "18:00",
    });

    return(
        <>
           <HeaderBoling  /> 
           <br /> <br /> <br /><br />

           <div style={{marginRight:'20%'}}>
             <Row justify="start" dir="rtl">
                <Col span={4} style={{paddingTop:'5px'}}>
                  تاریخ : 
                </Col>
                <Col  span={20}>
                <DatePicker 
                    style={{
                        fontFamily:'tahoma',
                        fontSize:'12px',
                        width:'99%'
                    }}
                    containerStyle={{
                        fontFamily:'tahoma',
                        fontSize:'12px'
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
                <Col span={4} style={{paddingTop:'5px' }}>
                  ست  : 
                </Col>
                <Col span={20}>
                <Select
                        size="middle"
                        defaultValue="1"
                        
                        style={{
                            width: 165,
                        }}
                        options={optionsSet}
                        placement="bottomLeft"
                   />
                </Col>
             </Row>
             <br />
             <Row justify="start" dir="rtl">
                <Col span={4} style={{paddingTop:'5px' }}>
                  ساعت   : 
                </Col>
                <Col span={20}>
                <Select
                        size="middle"
                        defaultValue="1"
                        
                        style={{
                            width: 165,
                        }}
                        options={optionsTime}
                        placement="bottomLeft"
                   />
                </Col>
             </Row>
             <br />
             
             <Row justify="start" dir="rtl">
                <Col span={4} style={{paddingTop:'5px' }}>
                  قیمت   : 
                </Col>
                <Col span={20} style={{paddingTop:'5px' }}>
                   90,000 تومان
                </Col>
             </Row>
             <Row justify="start" dir="rtl">
                <Col span={4} style={{paddingTop:'5px' }}>
                 
                </Col>
                <Col span={20} style={{paddingTop:'5px' }}>
                <Button type="primary"    style={{  width:'51%' , background:'green' , marginTop:'15px', fontSize:'13px'}}>
                   رزرو بولینگ
                </Button>
                </Col>
             </Row>
             
           </div>
          
        </>
    );
}

export default Boling;