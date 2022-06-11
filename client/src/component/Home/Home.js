import React, {useState, useContext} from 'react';
import {AppBar, Toolbar ,styled,Button} from '@mui/material';
import Borrow from '../borrow/Borrow';
import Login from '../login/Login';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';


const Home = () => {
   const [open, setOpen] = useState(false);

   const {account} = useContext(DataContext);

    const openDialog = () => {
        setOpen(true);
    } 

  return (
    <>
        <StyledHeader>
          <StyledToolBar style={{minHeight: 70}}>
                <p> Omnifolio </p>

                {
                    account? <Profile account={account}/>
                    :
                    <LoginButton onClick={() => openDialog()}>Login</LoginButton>
                }
                
          </StyledToolBar>
        </StyledHeader>
        <Borrow/>
        <Login open={open} setOpen={setOpen}/>
   </>
  )
};

const StyledHeader = styled(AppBar)`
    background-color: #1E90FF;
    height: 70px;
   
`;

const StyledToolBar = styled(Toolbar)`
    justify-content: space-between;

    @media(min-width: 1000px){
        p{
           
           color: #FFE4E1;
        }
        button{
            margin-right: 20%;
        }
    }
`;



const LoginButton = styled(Button)`
    background-color: #fff;
    color: #2874f0;
    border: none;
    padding: 4px 50px;
    text-transform: none;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 700;
    height: 32px;

    :hover{
        background-color: #fff0f1;
    }  
    
`;




export default Home