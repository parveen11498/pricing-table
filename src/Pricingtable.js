import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import Taskdata from "./Pricingtable1";


const data=[{

id:"FREE",
id1:"$0/",
name:"month",
logo:<ImCross style={{fontWeight:"lighter",color:"gray"}}/>,
li:"Single User",
li2:"5GB Storage",
li3:"Unlimited Public Projects",
li4:"Community Access",
li55:"Unlimited Private Projects",
li66:"Dedicated Phone Support",
li77:"Free Subdomain",
li88:"Monthly Status Reports"
},
{
  id:"PLUS",
  id1:"$9/",
  name:"month",
logo2:<FaCheck/>,
  logo1:<ImCross style={{fontWeight:"lighter",color:"gray"}}/>,
  li:"5 Users",
  li2:"50GB Storage",
  li3:"Unlimited Public Projects",
  li4:"Community Access",
  li5:"Unlimited Private Projects",
  li6:"Dedicated Phone Support",
  li7:"Free Subdomain",
  li88:"Monthly Status Reports" 
},
{
  id:"PRO",
  id1:"$49/",
  name:"month",
  logo:<FaCheck/>,
  li:"Unlimited Users",
  li2:"150GB Storage",
  li3:"Unlimited Public Projects",
  li4:"Community Access",
  li5:"Unlimited Private Projects",
  li6:"Dedicated Phone Support",
  li7:"Free Subdomain",
  li8:"Monthly Status Reports" 
}]

function Pricingtable(){
    return(
    <>
    <h4>PRICING TABLE</h4>
    
    {data.map(d=>{
      return(
       <Taskdata {...d} />
      )
     
    })}
  
    </>
    )
}
export default Pricingtable;