const jwt=require("jsonwebtoken")
const db =require('./db')


database = {
      1000: { acno: 1000, uname: "Shahal", password: 1000, balance: 100000 ,transaction:[]}
      }

        //register

  const register=(acno,name,pswd)=>{

    return db.Data.findOne({acno})
    .then(Data=>{
      if(Data){
        return{
          statusCode:422,
          status:false,
          message:"User already exists"
        }
      }
      else{
        const newData=new db.Data({
          name,
          "acno":acno,
          pswd,
          balance:0,
          transaction:[]
        })
        newData.save()
        return{
          statusCode:200,
          status:true,
          message:"User register successfully"
        }
      }
    })}
 
  //   if(accountnumber in database){
  //     return {
  //      statusCode:422,
  //      status:false,
  //      message:"user already exist"
  //     }
  //   }else{
  //     database[accountnumber]={
  //       "acno":accountnumber,
  //       "uname":name,
  //       "password":password

  //     }
  //     console.log(database)
  //     return {
  //      statusCode:200,
  //      status:true,
  //      message:"user created successfully"

  //     }
  //   }

  // }
//login
const login=(acno,pswd)=> {
  // alert("login clicked")

  return db.Data.findOne({"acno":acno,"pswd":pswd})
  .then(Data=>{
    if(Data){
    currentname=Data.name
    currentacno=acno
    const token=jwt.sign({
      currentaccountnumber:acno
    },"supersecretkey@123")

    return{
      statusCode:200,
      status:true,
      message:"Login Successfull",
      token,
      currentname,
      currentacno
    }
  }
  else{
    return{
      statusCode:402,
      status:false,
      message:"Login Failed"
    }
  }

})}

//   if (acno in database) {
//     if (pswd == database[acno]['password']) {
    
//       var username=database[acno]['uname']
//       var accountnumber=database[acno]['acno']
//       const token=jwt.sign({
//         currentaccountnumber:acno
//     },'supersecretkey@123')
//       // localStorage.setItem('user',JSON.stringify(this.username))
//       return {
//           statusCode:200,
//           status:true,
//           message:"login succesfull",
//           username,
//           accountnumber,
//           token

//       }
//     } else {
//       // alert("incorrect password")
//       return {
//           statusCode:422,
//           status:false,
//           message:"not registered",
//       }
//     }
//   }
//   else {
//   //   alert("not a user,register first")
//     return {
//       statusCode:422,
//           status:false,
//           message:"password error",
//     }
//   }

  module.exports={register,login,database}