import HeaderBofe from "../Header/HeaderBofe";
 
 

 import { Button,  Image, Tooltip } from 'antd';
 
 import './bofe.css';
 import { Navigate, useNavigate } from 'react-router-dom';

const Bofe =() => {
   
     let navigate = useNavigate();

     const F_BofeBodyBuilding = () =>{
           navigate('/bofebodybuilding');  
     }
      
    return(
        <>
        <HeaderBofe  /> 
         
         
        <div style={{width:'70%', height:'100vh' , marginTop:'-40px' , marginRight:'15%', marginLeft:'15%' , justifyContent:'center' , alignContent:'center' , flexDirection:'column'  ,    display:'flex'}}>
             
         <Button type="dashed" shape="default" onClick={F_BofeBodyBuilding} >
           بوفه بدنسازی
         </Button>
            <br />
         <Button type="dashed" shape="default">
           بوفه استخر
         </Button>
         <br />
         <Button type="dashed" shape="default">
           بوفه بولینگ
         </Button>


        </div>
        </>
    );
}


export default Bofe;