
import { Avatar, Segmented, Space } from 'antd';

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
                
        <div className='fixedbutton'>
            <Segmented
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
                                    padding: 2,
                                    fontSize:'12px',
                                    textAlign:'center',
                                }}
                                >
                                 <Avatar src={resturan}  />
                                <div>رستوران</div>
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