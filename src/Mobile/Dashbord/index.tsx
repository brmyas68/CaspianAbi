
import { Avatar, Segmented, Space , Drawer, Row, Col  } from 'antd';

import './dashbord.css';
import resturan from '../icon/resturan.png';
import cafe from '../icon/cafe.png';
import swim from '../icon/swim.png';
import gym from '../icon/gym.png';
import boling from '../icon/boling.png';
import bofe from '../icon/bofe.png';
import masaj from '../icon/masaj.png';
import Header from './Header/header';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Dashbord = () => {
    let navigate = useNavigate();

  
    
    const ChangeMenu=(value : number | string)=>{
         switch(value){
            case '1':
                navigate('/resturan'); return ;
            case '2':
                navigate('/cafe'); return ;
            case '6':
                navigate('/bofe'); return ;
            case '3':
                navigate('/pool'); return ;
            case '4':
                navigate('/bodybuilding'); return ;
            case '5':
                navigate('/boling'); return ;
            case '7':
                navigate('/masaj'); return ;
         }
    }

    return(
        <>
         
       

         <Header/>

         <div style={{display:'flex' ,flexDirection:'column' , marginRight:'50%', marginLeft:'50%' ,justifyContent:'center' ,   marginTop:'120px' ,}}>
        
          <Row>
            <Col span={24}>
            <div style={{ fontWeight:'600',  fontFamily:'tahoma', fontSize:'15px'}}> (( به مجموعه ورزشی کاسپین آبی   خوش آمدید ))</div>
            </Col>
          </Row>
          <Row>
          <Col span={24}>
            <div style={{  marginRight:'5%' ,fontFamily:'tahoma', fontSize:'12px'}}> آدرس: ساری - بلوار آزادی، خيابان رفاه،كوچه رفاه سوم</div>
            </Col>
          </Row>
          <Row>
          <Col span={24}>
            <div style={{  marginRight:'5%' , fontFamily:'tahoma', fontSize:'12px'}}>
                  شماره تماس : 01133350400
            </div>
            </Col>
          </Row>
           
           
        </div>
                
        <div className='fixedbutton'>
            <Segmented
            style={{background:'#e0e0e0' , borderRadius:'0px' , marginRight:'-2px'}}
                onChange={ChangeMenu}
                block
                defaultValue='0'
                options={[
                {
                label: (
                  <div
                    style={{
                        padding: 2, 
                        fontSize:'12px',
                        textAlign:'center',
                        fontWeight:'600'
                    }}
                    >
                    <Avatar src={masaj}  />
                    <div>ماساژ </div>
                    </div>
                ),
                value: '7',
                },
                {
                label: (
                    <div
                    style={{
                        padding: 2, 
                        fontSize:'12px',
                        textAlign:'center',
                        fontWeight:'600'
                    }}
                    >
                    
                    <Avatar src={bofe} />
                    <div>بوفه</div>  
                    </div>
                ),
                value: '6',
                },
                {
                label: (
                    <div
                    style={{
                        padding: 2, 
                        fontSize:'12px',
                        textAlign:'center',
                        fontWeight:'600'
                    }}
                    >
                     
                     <Avatar src={boling} />
                    <div>بولینگ</div>
                    </div>
                ),
                value: '5',
                },
                {
                    label: (
                        <div
                        style={{
                            padding: 2, 
                            fontSize:'12px',
                            textAlign:'center',
                            fontWeight:'600'
                        }}
                        >
                        <Avatar src={gym} />
                        <div>بدنسازی</div>
                        </div>
                    ),
                    value: '4',
                    },
                    {
                        label: (
                            <div
                            style={{
                                padding: 2, 
                                fontSize:'12px',
                                textAlign:'center',
                                fontWeight:'600'
                            }}
                            >
                            <Avatar src={swim}  />
                             <div> استخر</div>
                            </div>
                        ),
                        value: '3',
                        },
                        {
                            label: (
                                <div
                                style={{
                                    padding: 2, 
                                    fontSize:'12px',
                                    textAlign:'center',
                                    fontWeight:'600'
                                }}
                                >
                                 <Avatar src={cafe}  />
                                <div>کافه</div>
                                </div>
                            ),
                            value: '2',
                            },
                        {
                            label: (
                                <div
                                style={{
                                    padding: 1,
                                    paddingTop:2,
                                    fontSize:'12px',
                                    textAlign:'right',
                                    fontWeight:'600'
                                }}
                                >
                                 <Avatar src={resturan}  />
                                <div style={{  paddingLeft:'-5px',}}>رستوران</div>
                                </div>
                            ),
                            value: '1',
                            },
                    ]}
                />
        </div>
    
        </>
    );
}


export default Dashbord;