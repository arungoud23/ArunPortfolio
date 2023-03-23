import React from "react";


import {HeroContainer,} from "./ContactElements";
function Contact() {
  return (
    <>
  {/* <svg style={{marginBottom:'-205px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#rgb(0,0,0)" fill-opacity="1" d="M0,64L60,96C120,128,240,192,360,186.7C480,181,600,107,720,90.7C840,75,960,117,1080,133.3C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
    <div className="heroMain" style={{paddingBottom:'70px',border:'1px solid black',background:'black',color:'white'}}>
     <HeroContainer>
   
   
      <h1 style={{marginBottom:'3px',fontSize:'50px',color:'white'}}>Contact</h1>
      <div style={{width:'177px',height:'3px',marginBottom:'50px',backgroundColor:'white',margin:'auto'}}></div>
      {/* <div style={{width:'140px',height:'3px',backgroundColor:'white',margin:'auto',marginTop:'5px'}}></div>
      <div style={{width:'100px',height:'3px',backgroundColor:'green',margin:'auto',marginTop:'5px'}}></div> */}
      <h1 className="name"> <span style={{color:'rgb(131,40,57)'}}>Arunagoud Patil</span> </h1>
      <div className="contacts" >

     <div className="linkedin" style={{width:'120px',display:'flex',margin:'auto'}}>
     <a href="https://www.linkedin.com/in/arungoud-patil-28772a192/" target="_blank"><i class="fab fa-linkedin" style={{fontSize:'22px',marginTop:'6px'}}></i></a>
         <p style={{fontSize:'19px',marginLeft:'10px',marginTop:'1px'}}>linked in</p>
     </div>
     <div className="github" style={{width:'120px',display:'flex',margin:'auto'}}>
     <a href="https://github.com/arungoud23" target="_blank"><i class="fab fa-github" style={{fontSize:'22px',marginTop:'6px'}}></i></a>
         <p style={{fontSize:'19px',marginLeft:'10px',marginTop:'1px'}}>github</p>
     </div>

     <div className="linkedin" style={{width:'400px',marginLeft:'10px',marginTop:'15px',display:'flex',margin:'auto'}}>
     <a ><i class="fas fa-envelope" style={{fontSize:'22px',marginTop:'6px'}}></i></a>
         <p style={{fontSize:'19px',marginLeft:'10px',marginTop:'1px',textAlign:'center'}}> :  arunkumarpatil98@gmail.com</p>
     </div>

     {/* <div className="email">
     <i class="fas fa-envelope"></i>
         <p>email : arunkumarpatil98@gmail.com</p>
     </div> */}

     <div className="phone" style={{display:'flex',marginTop:'15px',margin:'auto',width:'200px'}}>
     <i class="fas fa-phone" style={{fontSize:'22px',marginTop:'6px'}}></i>
         <p style={{fontSize:'19px',marginLeft:'10px',marginTop:'1px'}}> : 7019570243
         </p>
     </div>

      </div>
      </HeroContainer> 
    </div>
    
  </>);
}

export default Contact;
