

import { Col, Row , Input , Badge , InputRef } from 'antd';
import { ArrowRightOutlined  , ShoppingCartOutlined , MailOutlined, BellOutlined} from '@ant-design/icons';
import { Avatar } from 'antd';
import bofe from '../../icon/bofe.png';

import { Navigate, useNavigate } from 'react-router-dom';
 


const HeaderBofe =() => {
    let navigate = useNavigate();

    return (
        <>
        
         <div className="Header">
                <Row>
                    <Col span={9} style={{textAlign:'left' , paddingLeft:'5px' , paddingTop:'7px' , }}>
                    <Badge count={5} size='small'  offset={[0,  -2]} ><BellOutlined   style={{   fontSize:'17px'  ,  fontWeight:'600', paddingLeft:'5px'  }}/></Badge>
                    <Badge count={0} size='small'  offset={[-7,  0]} ><MailOutlined    style={{  paddingRight:'12px' ,  fontWeight:'600' ,paddingLeft:'12px' , fontSize:'17px'   }}/></Badge>
                    <Badge count={2} size='small'  offset={[-8,   1]} ><ShoppingCartOutlined     style={{  paddingRight:'12px' , fontWeight:'600' , fontSize:'18px'  }} /></Badge>
                    </Col>
                    <Col span={6} style={{ textAlign:'center', paddingTop:'5px' , paddingRight:'5px'}} >
                    <Avatar
                        size={80}          
                         src={bofe}
                         className="BoxShadow"
                    />
                    </Col>
                    <Col span={9} style={{textAlign:'right' , paddingRight:'10px' , paddingTop:'7px' , }}>
                        <span  style={{  paddingRight:'10px' ,  color: '#6b6b6b' , paddingTop:'0px' , fontSize:'15px', fontFamily:'Vazir'}}>
                        بوفه
                        </span>
                        <ArrowRightOutlined onClick={()=>{ navigate('/dashbord');}}  style={{   fontSize:'17px'  ,  fontWeight:'600' }} />
                       
                    </Col>
                </Row>

              

         </div>

        </>
    );


}


export default HeaderBofe;