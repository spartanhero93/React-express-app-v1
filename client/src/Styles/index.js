import styled from "styled-components";

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Wrapper = styled.div`
  padding-top: 5rem;
  display:flex;
  align-items: center;
  justify-content:space-evenly;
  flex-direction: column;
  text-align: center;
  font-size: 1.5rem;
`;

export const WrapperSmall = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.3rem;
  border: 3px solid;
  transition: all 0.2s;

  &:hover {
    background-color: grey;
  }
`;

export const Button = styled.div`
 display:inline-block;
 padding:0.35em 1.2em;
 border:0.1em solid black;
 margin:0 0.3em 0.3em 0;
 border-radius:0.12em;
 box-sizing: border-box;
 text-decoration:none;
 font-family:'Roboto',sans-serif;
 font-weight:300;
 color:black;
 text-align:center;
 transition: all 0.2s;
 
&:hover{
 color:white;
 background-color:grey;
}
@media all and (max-width:30em){
 a.button1{
  display:block;
  margin:0.4em auto;
 }
}
`;

export const Input = styled.input`
  background:transparent;
  z-index:1;
  width:100%;
  font-size:16px;
  border-radius:16px;
  border: 1px solid #ccc;
  padding:8px;
  padding-left:12px
  outline:none;
  transition: all .3s cubic-bezier(.25,.8,.25,1);
  &:focus {
    border: 1px solid $blue;
  }
`;