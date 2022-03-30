import styled from "styled-components";


export const StyledCard = styled.div`
   display:flex;
   align-item:center;
  
   background-color:#fff;
   border-radius:15px;
   margin:40px 0;
   padding:60px;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   flex-direction: ${({layout}) => layout || 'row'};

   img{
       width:80%
   }

   & > div {
        flex:1
   }

   @media(max-width: ${({theme}) => theme.mobile}){
    flex-direction:column;
   
 }

`


export const StyledDiv = styled.div`
   display:flex;
   align-item:center;
   flex-direction: column;
   justify-content: center;
   margin-right:20px
   `
  
