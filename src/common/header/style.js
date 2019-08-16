import styled from 'styled-components';
//import logoPic from '../../statics/logo.png'
//background: url(${logoPic});
//background-size:contain;
export const Theme=styled.h1`
    color:#FFFFFF;
    font-family: Arial;
    font-size:25px;
    line-height:64px;
    letter-spacing:5px;
    text-align:center;
    float:right;
    margin-right:32%;
`;
export const NavItem=styled.div`
    line-height:64px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`;
export const Logo=styled.div`
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    text-align:center;
    line-height:31px;
    float: left;
    background: rgba(255, 255, 255, 0.2);
    
`;
export const LogoutButton={
    background:'#001529',
    color:'white' ,
    border:'none',
    marginTop:'16px',
    float:'right'
}
export const UserInfo=styled.div`
   float: right;
   width:15%;
   color: white;
`;
export const LeftHead=styled.div`
   float: left;
   width:85%;
   color: white;
`;
