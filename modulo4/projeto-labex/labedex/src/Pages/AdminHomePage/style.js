import styled from "styled-components"

export const Container = styled.div`
  
  width: 300px;
  min-height: 360px;    
  margin: 0px auto;
  position: relative;

  h1{
  font-size: 30px;
  margin: 30px 10px;
  font-family: Arial,sans-serif;
  font-weight: bold;
  text-align: center;
  padding-bottom: 30px;
}

h1:after{
  content: ' ';
  display: block;
  width: 100%;
  height: 3px;
  margin: 10px;
  background: -webkit-linear-gradient(left, rgba(147,184,189,0) 0%,rgba(147,184,189,0.8) 20%,rgba(147,184,189,1) 53%,rgba(147,184,189,0.8) 79%,rgba(147,184,189,0) 100%); 
  
}

label{
  color: #405c60;
  position: relative;
  font-size: 15px;
}


/*estilo dos input*/
input{
  width: 95%;
  margin: 4px;
  padding: 10px;    
  border: 1px solid #b2b2b2;
 
  border-radius: 10px; 
 
  -webkit-box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
 

}

button {
  
  margin: 25px auto ;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: filter 0.2s;
  width: 100% ;
  
  

      :hover{ filter: brightness(0.9) }
    }



`