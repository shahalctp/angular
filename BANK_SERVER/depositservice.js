const db=require('./loginservice')
const dab=require('./db')

// deposit
const depo=(acno,password,amount)=>{
  var amount=parseInt(amount)
  return dab.Data.findOne({"acno":acno,"pswd":password})
  .then(Data=>{
    console.log("user:",Data)
    if(Data){
      Data.balance+=amount
      Data.transaction.push({
        "amount":amount,
        "type":"Deposit",
        "Status":"Success"

      })

      Data.save()
      return{
        statusCode:200,
        status:true,
        messsge:`Rupees ${amount} successfully credited to your account,your balance is ${Data.balance}`

      }
    }
    else{
      return{
        statusCode:402,
        status:false,
        message:"Transaction Failed"
      }
    }
  })}

  //   if (acno in database) {
  //     if (password == database[acno]['password']) {
        
  //       database[acno]["balance"]= Number(database[acno]["balance"])+Number(amount)
  //       database[acno]["transaction"].push({
  //           "mode":"online",
  //           "type":"deposit",
  //           "amount":amount
  //         })
  //       console.log(database)
  //       balance=database[acno]['balance']
  //       return{
  //         statusCode:200,
  //           status:true,
  //           message:"deposit sucessfull",
  //           balance:database[acno]['balance']

  //       }
        

  //     } else {
  //       return{
  //       statusCode:404,
  //       status:false,
  //       message:"inccorect password",
  //     }}

  //   }
  //   else {
  //     return{
  //       statusCode:404,
  //           status:false,
  //           message:"Not a user",
  //     }

  //   }
  // }
  //withdraw
// const withdraw=(acno,password,amount)=>{


//   if(acno in database){
//     if(password==database[acno]['password']){
//       if(Number(amount)<database[acno]["balance"]){
//         database[acno]["balance"]-=Number(amount)
//         database[acno]["transaction"].push({
//           "mode":"online",
//           "type":"withdrawal",
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
//         message:"inccorect password",
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

const withdraw=(acno,password,amount)=>{
    var amount=parseInt(amount)
    return dab.Data.findOne({"acno":acno,"pswd":password})
    .then(Data=>{
      console.log("user:",Data)
      if(Data){
        Data.balance-=amount
        Data.transaction.push({
          "amount":amount,
          "type":"Deposit",
          "Status":"Success"
  
        })
  
        Data.save()
        return{
          statusCode:200,
          status:true,
          messsge:`Rupees ${amount} successfully debited from your account,your balance is ${Data.balance}`
  
        }
      }
      else{
        return{
          statusCode:402,
          status:false,
          message:"Transaction Failed"
        }
      }
    })}

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


const transaction=(acno)=>{
  return dab.Data.findOne({acno})
  .then(Data=>{
    if(Data){
      return{
        statusCode:200,
        status:true,
        message:"Data received Successfully",
        transaction:Data.transaction
      }
    
    }
  }
  )}

module.exports={depo,withdraw,transaction}