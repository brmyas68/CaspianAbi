import HeaderMsaj from "../Header/HeaderMasaj";
 
 

 import { Button,  Image, Tooltip } from 'antd';
 
 import './masaj.css';
 import { Navigate, useNavigate } from 'react-router-dom';

const Masaj =() => {
   
     let navigate = useNavigate();

     const F_MasajBodyBuilding = () =>{
           navigate('/masajbodybuilding');  
     }
      
    return(
        <>
        <HeaderMsaj  /> 
         
         
        <div style={{width:'90%', height:'100vh' , marginTop:'50px' , marginRight:'5%', marginLeft:'5%' , justifyContent:'start' , alignContent:'start' , flexDirection:'column'  ,    display:'flex'}}>
             
         <Button type="dashed" style={{height:'50px', fontSize:'15px', fontWeight:'600', fontFamily:'tahoma'}} shape="default" onClick={F_MasajBodyBuilding} >
           ماساژ بدنسازی
         </Button>
            <br />
         <Button type="dashed" style={{height:'50px', fontSize:'15px', fontWeight:'600', fontFamily:'tahoma'}} shape="default">
           ماساژ استخر
         </Button>
         <br />
          


        </div>
        </>
    );
}


export default Masaj;