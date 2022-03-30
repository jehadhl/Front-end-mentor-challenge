import styled from "styled-components";

export const StyledFooter = styled.footer`
background-color: ${({ theme }) => theme.colors.footer};
color: #fff;
padding: 100px 0 60px;
ul {
  list-style-type: none;
  padding-left:0;
  margin-top:20px;
 
  


}
ul li {
  margin-bottom: 20px;

 

  
 
  
}
p {
  text-align: right;
}
@media (max-width: ${({ theme }) => theme.mobile}) {
  text-align: center;
  ul {
    padding: 0;
  }
  p {
    text-align: center;
  }
}

`

export const StyledUl = styled.ul`
 
 list-style: none;
 display:flex;
 align-item:center;
 margin:0 auto;
 width:227px;
 text-align:center;
 flex-direction:column;
 

`

