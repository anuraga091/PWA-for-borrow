import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import React,{useState} from 'react';
import { borrower } from './BorrowerData';
import {Card, Avatar, styled, Button} from '@mui/material';
import BorrowDialog from './BorrowDialog';
import Lend from './Lend';






const responsive = {
  
    // the naming can be any, depends on you.
  desktop3: {
    breakpoint: { max: 3000, min: 2000 },
    items: 5
  },
  desktop2: {
    breakpoint: { max: 2000, min: 1024 },
    items: 4
  },
  desktop1: {
    breakpoint: { max: 1024, min: 800 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Borrow = () => {

    const [open, setOpen] = useState(false);

    const openDialog = () => {
        setOpen(true);
    } 

  return (
    <>
    <div style={{marginTop: 90}}>
    <Carousel responsive={responsive} 
            infinite={true}
            swipeable={true} 
            draggable={true}
            keyBoardControl={true}
            autoPlaySpeed={10000}            
            containerClass="carousel-container" 
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px" >
            {
                borrower.map(data => (
                 <StyleCard sx={{ maxWidth: 400 }}>                
                    <StyleAvatar  src={data.url}/>                                  
                    <p>{data.name}</p>
                    <p>Limit: {data.amount}</p>
                    <p>Contact: {data.number}</p>
                    <StyleDiv>
                        <BorrowButton onClick={() => openDialog()}>Borrow</BorrowButton>
                        <Lend/>
                    </StyleDiv>  
                 </StyleCard>
                ))
            }
    </Carousel>
    
    </div>
    <BorrowDialog open={open} setOpen={setOpen}/>
    
    </>
  )
}


const StyleCard = styled(Card)`
    height: 400px;
    align-items: center;
    text-align: center;
`;

const StyleAvatar = styled(Avatar)`
    height: 100px;
    width: 100px;
    left: 35%;
    align-items: center;
    text-align: center;


      @media(min-width: 464px ) and (max-width: 600px){
        left: 30%;
      }
      @media(max-width: 600px) and (max-width: 800px){
        left: 32%;
      }
      @media(min-width: 250px) and (max-width: 464px){
        margin-left: 5%;
      }
      
`;

const BorrowButton = styled(Button)`
    background-color:#FFA07A;
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
        background-color: #FF7F50;
    }
 
`;




const StyleDiv = styled('div')`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: 50px;
    button{
            width: 200px;
        }
    
    @media(max-width: 400px){
        text-align: center;
        align-items: center;
        flex-direction: column;
        

        


    }
`;


export default Borrow
