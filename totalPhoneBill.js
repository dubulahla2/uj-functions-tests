// function totalPhoneBill(bill1){
//       var myBill = bill1.split(',');
//       let totalCost =0


//       myBill.forEach(function(item){
//         if (item ==='sms') {
//           totalCost= totalCost  + .65;
//           }else if (item ==='call') {
//             totalCost= totalCost  + 2.75;
//           }

//       })
//       // for (var i = 0; i < myBill.length; i++) {
//       // if (myBill[i].includes('sms')) {
//       // totalCost += sms
//       // }else if (myBill[i].includes('call')) {
//       // totalCost +=call
//       // }
     
//       // }
//       // console.log("R" +totalCost.toFixed(2))
//       return "R"+ totalCost.toFixed(2)
//     }
function totalPhoneBill(bill1){
  var call =2.75
  var sms  = .65
    var myBill = bill1.split(',');
    let totalCost =0
    for (var i = 0; i < myBill.length; i++) {
    if (myBill[i].includes('sms')) {
    totalCost += sms
    }else if (myBill[i].includes('call')) {
    totalCost +=call
    }
  
    }
    console.log("R" +totalCost.toFixed(2))
    return "R"+ totalCost.toFixed(2)
  }
  