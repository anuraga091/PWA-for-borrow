// import Borrower from "../model/borrow_schema";
import Lender from "../model/lender_schema.js";
import Borrower from "../model/borrow_schema.js";


export const userBorrow = async (request , response) => {
  try{

    const borrowDetail = request.body;
    const newBorrowDetail = new Borrower(borrowDetail);
    await newBorrowDetail.save();

    response.status(200).json({message: borrowDetail});
  } catch (error){
    response.status(500).json({message : error.message})
  }
}

export const userSend = async (request , response) => {
  try{
    const lendDetail = request.body;
    const newLendDetail= new Lender(lendDetail);
    await newLendDetail.save();
    response.status(200).json({message: lendDetail});
  } catch (error){
    response.status(500).json({message : error.message})
  }
}