import React,{useState} from 'react';
import {Dialog, TextField, Button,styled} from '@mui/material';
import { borrowMoney } from '../../services/api';
import BorrowingConfirmation from '../confirmation/BorrowingConfirmation';

const BorrowDialog = ({open, setOpen}) => {
    
    const borrowInitialValues = {
        amount : '',
        reason: '',
        duration : '',
        upi_id: ''
    }
    const [borrow, setBorrow] = useState(borrowInitialValues);
    const [openFinal, setOpenFinal] = useState(false);

     const handleClose = () => {
        setOpen(false);
     }

    const onInputChange = (e) => {
        setBorrow({...borrow, [e.target.name]: e.target.value})
    }

    const handleClick = async () => {
        let response = await borrowMoney(borrow)
    }
    
    const openDialog = () => {
        setOpenFinal(true);
    }

  return (
    <Dialog open = {open} PaperProps= {{sx: {maxWidth: '500px'}}}>
        <div  style={{ backgroundColor: '#1E90FF'}}>
            <p style={{padding: '0px 20px 20px 20px', textAlign: 'center' , fontSize: 20, fontWeight: 600}}>
                Want to borrow money, borrow in 2 mins
            </p>
        </div>
        <DivContainer>
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='amount' label = 'Amount'/>
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='reason' label = 'Reason'/>
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='duration' label = 'Duration'/>
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='upi_id' label = 'UPI Id'/>
              <StyleDiv>
                <BackButton onClick={handleClose}>Back</BackButton>
                <BorrowButton onClick={() => {handleClick(); openDialog()}}>Continue</BorrowButton>
              </StyleDiv>
            <BorrowingConfirmation openFinal= {openFinal} setOpenFinal= {setOpenFinal}/>
        </DivContainer>
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

const BorrowButton = styled(Button)`
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

export default BorrowDialog
