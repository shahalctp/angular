// const db=require('./dataservice')

// // deposite
// const depo=(acno,password,amount)=>{

//     if (acno in database) {
//       if (password == database[acno]['password']) {
        
//         database[acno]["balance"]= Number(database[acno]["balance"])+Number(amount)
//         database[acno]["transaction"].push({
//             "mode":"online",
//             "type":"deposite",
//             "amount":amount
//           })
//         console.log(database)
//         balance=database[acno]['balance']

//         return{
//           statusCode:200,
//             status:true,
//             message:"deposit sucessfull",
//             balance:database[acno]['balance']

//         }
        

//       } else {
//         return{
//         statusCode:404,
//         status:false,
//         message:"inccorect password",
//       }}

//     }
//     else {
//       return{
//         statusCode:404,
//             status:false,
//             message:"Not a user",
//       }

//     }
//   }
//   //withdraw
// const withdraw=(acno,password,amount)=>{


//   if(acno in database){
//     if(password==database[acno]['password']){
//       if(Number(amount)<database[acno]["balance"]){
//         database[acno]["balance"]-=Number(amount)
//         database[acno]["transaction"].push({
//           "mode":"online",
//           "type":"withdrawel",
//           "amount":amount
//         })

//         balance=database[acno]['balance']

        
//         return{
//           statusCode:200,
//             status:true,
//             message:"withdraw sucessfull",
//             balance

//         }
        
//       } else{
//         return{
//           statusCode:404,
//             status:false,
//             message:"insuffcient balance",
//             balance

//         }
        
//       }
//     }else{
//       return{
//         statusCode:404,
//         status:false,
//         message:"Inccorect password",
//       }
//     }

//   }else{
//     return{
//       statusCode:404,
//           status:false,
//           message:"Not a user",
//     }
//   }
// }
// const transaction=(acno)=>{
//   database=db.database
//   if(acno in database){
//     return{
//       statusCode:200,
//       status:true,
//       transation:database[acno]['transaction']
//     }
//   }
// }
// module.exports={depo,withdraw,transaction}