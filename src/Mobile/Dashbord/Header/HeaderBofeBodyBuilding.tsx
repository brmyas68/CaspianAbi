

import { Col, Row , Input , Badge , InputRef } from 'antd';
import { ArrowRightOutlined  , ShoppingCartOutlined , MailOutlined, BellOutlined} from '@ant-design/icons';
import { Avatar } from 'antd';
import bofe from '../../icon/bofe.png';

import { Navigate, useNavigate } from 'react-router-dom';
 


const HeaderBofeBodyBuilding =() => {
    let navigate = useNavigate();

    return (
        <>
        
         <div className="Header">

                <Row>
                    <Col span={9} style={{textAlign:'left' , paddingLeft:'5px' , paddingTop:'7px' , }}>
                    <Badge count={5} size='small'  offset={[0,  -2]} ><BellOutlined   style={{   fontSize:'17px'  }}/></Badge>
                    <Badge count={0} size='small'  offset={[-7,  0]} ><MailOutlined    style={{  paddingRight:'12px' , paddingLeft:'12px' , fontSize:'17px'  }}/></Badge>
                    <Badge count={2} size='small'  offset={[-8,   1]} ><ShoppingCartOutlined     style={{  paddingRight:'12px' , fontSize:'18px'  }} /></Badge>
                    </Col>
                    <Col span={6} style={{ textAlign:'center', paddingTop:'5px' , paddingRight:'5px'}} >
                    <Avatar
                        size={73}          
                         src={bofe}
                         className="BoxShadow"
                    />
                    </Col>
                    <Col span={9} style={{textAlign:'right' , paddingRight:'10px' , paddingTop:'7px' , }}>
                        <span  style={{  paddingRight:'10px' ,  color: '#6b6b6b' , paddingTop:'0px' , fontSize:'13px', fontFamily:'Vazir'}}>
                           بوفه بدنسازی
                        </span>
                        <ArrowRightOutlined onClick={()=>{ navigate('/bofe');}}  style={{   fontSize:'17px'  }} />
                       
                    </Col>
                </Row>


         </div>

        </>
    );


}


export default HeaderBofeBodyBuilding;