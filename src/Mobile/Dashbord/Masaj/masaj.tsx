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
         
         
        <div style={{width:'70%', height:'100vh' , marginTop:'-40px' , marginRight:'15%', marginLeft:'15%' , justifyContent:'center' , alignContent:'center' , flexDirection:'column'  ,    display:'flex'}}>
             
         <Button type="dashed" shape="default" onClick={F_MasajBodyBuilding} >
           ماساژ بدنسازی
         </Button>
            <br />
         <Button type="dashed" shape="default">
           ماساژ استخر
         </Button>
         <br />
          


        </div>
        </>
    );
}


export default Masaj;