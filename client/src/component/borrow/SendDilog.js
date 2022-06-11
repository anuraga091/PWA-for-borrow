import React,{useState} from 'react';
import {Dialog, TextField, Button,styled} from '@mui/material';
import LendingConfirmation from '../confirmation/LendingConfirmation';
import { sendMoney } from '../../services/api';

const LendDialog = ({open,setOpen}) => {
    
    const lendInitialValues = {
        amount : '',
        duration : '',
        upi_id: ''
    }
    const [lendMoney, setLendMoney] = useState(lendInitialValues);
    
    const [openFinal, setOpenFinal] = useState(false);

     const handleClose = () => {
         setOpen(false);
     }

    const onInputChange = (e) => {
        setLendMoney({...lendMoney, [e.target.name]: e.target.value})
    }

    const handleClick = async () => {
        let response = await sendMoney(lendMoney)
    }
    const openDialog = () => {
        setOpenFinal(true);
    }

  return (
   
    <Dialog open = {open}  PaperProps= {{sx: {maxWidth: '500px'}}}>
        <div style={{ backgroundColor: '#FFA07A'}}>
            <p style={{padding: '0px 20px 20px 20px', textAlign: 'center' , fontSize: 20, fontWeight: 600}}>
                Want to lend money, now lend in 2 mins
            </p>
        </div>
        <DivContainer>
            
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='amount' label = 'Amount'/>
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='duration' label = 'Duration'/>
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='upi_id' label = 'UPI Id'/>
              <StyleDiv>
                <BackButton onClick={handleClose}>Back</BackButton>
                <LendButton  onClick={() => {handleClick(); openDialog()}}>Continue</LendButton>
              </StyleDiv>
        </DivContainer>
        <LendingConfirmation openFinal= {openFinal} setOpenFinal= {setOpenFinal}/>
    </Dialog>
  )
}

const DivContainer = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  height: 450px;
  width: 70%;
    

  @media(min-width: 450px){
        width: 50vh;
        height: 70vh;
  }
  div,button,p{
    margin-top: 20px;
  }
`;

const LendButton = styled(Button)`
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

const BackButton = styled(Button)`
    background-color:#FF7F50;
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
        background-color: #FFA07A;
    }
 
`;


const StyleDiv = styled('div')`

    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    
    @media(max-width: 400px){
        text-align: center;
        align-items: center;
        flex-direction: column;
        

        button{
            width: 200px;
        }


    }
`;

export default LendDialog
