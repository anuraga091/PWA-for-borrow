import React,{useState} from 'react';
import LendDialog from './SendDilog';
import { styled, Button} from '@mui/material';

const Lend = () => {
    const [open, setOpen] = useState(false);
    const openDialog = () => {
        setOpen(true)
    } 
  return (
    <>
        <SendButton onClick={() => openDialog()}>Send</SendButton>
        <LendDialog open={open} setOpen={setOpen} />
    </>
  )
}

const SendButton = styled(Button)`
    background-color:#008000;
    color: #fff;
    border: none;
    padding: 4px 50px;
    text-transform: none;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 700;
    height: 32px;
    margin: 5px;
    width: 150px;
    :hover{
        background-color: #006400;
    }
 
`;

export default Lend