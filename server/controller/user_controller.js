import User from "../model/user_schema.js";


export const userSignup = async (request , response) => {
  try{

    const exist = await User.findOne({name: request.body.name});
    if (exist){
        return response.status(401).json({message: 'Username already exist'});
    }

    const user = request.body;
    const newUser = new User(user);
    await newUser.save();

    response.status(200).json({message: user});
  } catch (error){
    response.status(500).json({message : error.message})
  }
}

export const userLogin = async (request , response) => {
  try{
    const name = request.body.name;
    const phone = request.body.phone;
    let user = await User.findOne({phone: phone, name: name});
    if (user){
        return response.status(200).json(`${name} login successful`);
    } else {
      return response.status(401).json({message: 'Invalid login'});
    }
  } catch (error){
    response.status(500).json({message : error.message})
  }
}