import React,{useState, useContext} from 'react';
import { signupUser,signInUser } from '../../services/api';
import {Dialog, TextField, Typography, Button, styled} from '@mui/material';
import { DataContext } from '../../context/DataProvider';



const Login = ({open, setOpen}) => {
  const accountInitialValues =  {
    login: {
      view: 'login',
      heading : 'Login',
      subHeading : 'Now you can borrow, lend money and many more'

    },
    signup : {
      view: 'signup',
      heading : 'Ahaa! Look like you are new here!',
      subHeading : 'Sign up with your mobile number to get started'
    }
  }

  const buttonInitialValues = {
    otp: {
      view : 'otp'
    },
    signin: {
      view: 'signin'
    } 
  }

  const signupInitialValues = {
    name : '',
    gender: '',
    phone : ''
  }

  const loginInitialValues = {
    name : '',
    otp : ''
  }
  const [account, toggleAccount] = useState(accountInitialValues.login);

  const [button, toggleButton] = useState(buttonInitialValues.otp);


  const [signup, setSignup] = useState(signupInitialValues);

  const [login , setLogin] = useState(loginInitialValues);

  const [error, setError] = useState(false);

  const {setAccount} = useContext(DataContext)

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false)
    toggleButton(buttonInitialValues.otp)

  }

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
    
  }

  const toggleOtpButton = () => {
    toggleButton(buttonInitialValues.signin)
  }

  const onInputChange = (e) => {
    setSignup({...signup, [e.target.name]: e.target.value})
  }

  

  const onValueChange = (e) => {
    setLogin({...login, [e.target.name]: e.target.value})
  } 


  const signUp = async () => {
        let response = await signupUser(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.name)
  }


  const loginUser = async () => {
        let response = await signInUser(login)
  }
  

  return (
    <Dialog open = {open} onClose={handleClose} PaperProps= {{sx: {maxWidth: '500px'}}}>
           <StyleTypography>
                <Typography variant='h5'>{account.heading}</Typography>
                <p>{account.subHeading}</p>
            </StyleTypography> 
            
      <StyledDiv>
        
        {
          account.view === 'login'?
            <DivContainer>
              <TextField variant='standard' onChange={(e) => onValueChange(e)} name='phone' label = 'Enter Phone Number'/>
              {error && <Error>Please Enter valid phone number</Error>}
              <Typography className='privacy-policy'>By continuing, you agree to Omniflo's Terms of Use and Privacy Policy.</Typography>
              {
                button.view === 'otp' ?
                  <Button onClick={toggleOtpButton} className='otp'>Request OTP</Button>
                  :
                  <>
                    <TextField variant='standard' onChange={(e) => onValueChange(e)} name='otp' label = 'Enter OTP'/>
                    <Button onClick={loginUser} className='login'>Login</Button>
                  </>
              }
              
              
              <Typography onClick={()=> toggleSignup()} className='create-account'>New to Omniflo? Create an account</Typography>
            </DivContainer>
        :
            <DivContainer>
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='name' label = 'Enter Name'/>
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='gender' label = 'Enter Gender'/>
              <TextField variant='standard' onChange={(e) => onInputChange(e)} name='phone' label = 'Enter Phone number'/>
              <Button onClick={signUp} className='login' style={{marginTop: 60, backgroundColor: '#CD5C5C', fontSize: 18}}>Continue</Button>
            </DivContainer>

        }
      </StyledDiv>
    </Dialog>
  )
}

const StyledDiv = styled('div')`
  height: 450px;
  width: 100%;
  display: flex;

  @media(min-width: 450px){
        width: 400px;
        height: 500px;
  }
`;
const StyleTypography = styled('div')`
    background-color: #1E90FF;
    padding: 5px 30px 0 30px;
    
`;


const DivContainer = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  div,button,p{
    margin-top: 20px;
  }

  .login{
    text-transform: none;
    background-color: #fb641b;
    color: white;
    font-weight: 600;
    height: 48px;
    border-radius: 2px;
    :hover{
        background-color: #FF7F50;
    }
  }
  .otp{
    text-transform: none;
    background-color: white;
    color:#DC143C;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 /20%);
    height: 48px;
    border-radius: 2px;
    font-weight: 600;
  }
  .privacy-policy{
    font-size: 12px;
    color: #878787;
  }
  .or{
    text-align: center;
    color: gray;
  }
  .create-account{
    text-align: center;
    color:gray;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
  }
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

export default Login;
