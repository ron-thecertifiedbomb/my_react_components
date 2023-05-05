import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: content ;
`;
export const SideBarContainer = styled.div`
  height: 100vh;
  width: 350px;
`;
export const SideBarSubContainer = styled.div`
   display: flex;
    flex-direction: column;
    width: 100%;
`;
export const SideBarLinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid grey;
`;
export const SideBarMenuContainer = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 5px;
    border-bottom: 1px grey;
`;

export const FontContainer = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center ;   
`;
export const ContentContainer = styled.div`
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: 1s;
    transition-timing-function: ease;
    opacity: 0;  
`;
export const SubContentContainer = styled.div`
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: 1s;
    transition-timing-function: ease;
    opacity: 0;
    width: 100%;  
`;


export const NavBar = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    height: 60px;
    width: 100%;
    justify-content: space-between; 
    border: solid 1px;
    padding: 10px ;
`;

export const NavLinksContainer = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center; 
    flex-basis: 1;
`;

export const IconContainer = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center; 
    flex-basis: 1;  
    font-size: 14px;
`;










