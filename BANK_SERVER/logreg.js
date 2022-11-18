// database = {
//     1000: { acno: 1000, uname: "Mubashir", password: 1000, balance: 100000 ,transaction:[]}
//   }
//   //register

//   const register=(name,accountnumber,password)=>{
 
//      if(accountnumber in database){
//        return {
//         statusCode:422,
//         status:false,
//         message:"user already exist"
//        }
//      }else{
//        database[accountnumber]={
//          "acno":accountnumber,
//          "uname":name,
//          "password":password
 
//        }
//        console.log(database)
//        return {
//         statusCode:200,
//         status:true,
//         message:"user created successfully"

//        }
//      }
 
//    }

//    //login
//   const login=(acno,pswd)=> {
//     // alert("login clicked")
   
//     if (acno in database) {
//       if (pswd == database[acno]['password']) {
      
//         var username=database[acno]['uname']
//         var accountnumber=database[acno]['acno']
//         const token=jwt.sign({
//           currentaccountnumber:acno
//       },'supersceretkey@123')
//         // localStorage.setItem('user',JSON.stringify(this.username))
//         return {
//             statusCode:200,
//             status:true,
//             message:"login succesfull",
//             username,
//             accountnumber,
//             token

//         }
//       } else {
//         // alert("incorrect password")
//         return {
//             statusCode:422,
//             status:false,
//             message:"not registered",
//         }
//       }
//     }
//     else {
//     //   alert("not a user,register first")
//       return {
//         statusCode:422,
//             status:false,
//             message:"password error",
//       }
//     }

//   }
  
//    module.exports={register,login,database}