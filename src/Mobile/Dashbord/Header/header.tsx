

import { Col, Row , Input , Badge , InputRef, Drawer } from 'antd';
import { MenuOutlined  , ShoppingCartOutlined , MailOutlined, BellOutlined} from '@ant-design/icons';
import { Avatar } from 'antd';
import jef from '../../images/jef.jpg';
import { useState } from 'react';
 
 
 


const Header =() => {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
    
    return (
        <>
          <Drawer title="کاسپین آبی" style={{ fontFamily:'tahoma', fontSize:'14px'}} bodyStyle={{textAlign:'right', fontFamily:'tahoma', fontSize:'12px'}} headerStyle={{textAlign:'right'}} width={200} placement="right" onClose={onClose} open={open}>
                <p>پروفایل</p>
                <p>پیام ها</p>
                <p>اعلانات</p>
                <p>مشاهده تراکنش ها</p>
                <p>درباره کاسپین ابی</p>
         </Drawer>
         <div className="Header">

                <Row>
                    <Col span={9} style={{textAlign:'left' , paddingLeft:'5px' , paddingTop:'7px' , }}>
                    <Badge count={5} size='small'  offset={[0,  -2]} ><BellOutlined   style={{   fontSize:'17px' ,  fontWeight:'600' , paddingLeft:'5px'  }}/></Badge>
                    <Badge count={0} size='small'  offset={[-7,  0]} ><MailOutlined    style={{  paddingRight:'12px' ,  fontWeight:'600' ,paddingLeft:'12px' , fontSize:'17px'  }}/></Badge>
                    <Badge count={2} size='small'  offset={[-8,   1]} ><ShoppingCartOutlined     style={{  paddingRight:'12px' , fontWeight:'600' , fontSize:'18px'  }} /></Badge>
                    </Col>
                    <Col span={6} style={{ textAlign:'center', paddingTop:'5px' , paddingRight:'5px'}} >
                    <Avatar
                        size={80}          
                         src={jef}
                         className="BoxShadow"
                    />
                    </Col>
                    <Col span={9} style={{textAlign:'right' , paddingRight:'10px' , paddingTop:'7px' , }}>
                        <span  style={{  paddingRight:'10px' ,    color: '#6b6b6b' ,    fontWeight:'600', fontSize:'15px', fontFamily:'Vazir'}}>
                            محمد رحیمی
                        </span>
                        <MenuOutlined  onClick={showDrawer} style={{   fontSize:'17px' ,  fontWeight:'600' }} />
                       
                    </Col>
                </Row>


         </div>

        </>
    );


}


export default Header;