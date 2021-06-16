const validator = {
  isValid :(creditCardNumber) => {
    let sum = 0;

    for (let i = 0; i < creditCardNumber.length; i++) {
      let invertArray = creditCardNumber.split("").reverse();
      
      if(i % 2 !== 0){        
        invertArray[i] *=2;
        console.log(invertArray[i]);
         if(invertArray[i] > 9){
          invertArray[i] -= 9;
          console.log(invertArray[i]);
        }        
      }
      sum += parseInt(invertArray[i]);
      console.log(sum);
    }
    const result= (sum % 10 === 0) ? true : false;
    return result;
  },

  maskify:(creditCardNumber) =>{
    let newString="";
    for (let i = 0; i < creditCardNumber.length; i++) {
      if(i < (creditCardNumber.length-4)){
        newString +="#";
      }else{
        newString += creditCardNumber[i]; //ve cada iteracion en el momento que reemplaza por hashtag
        console.log(newString + " MICHI!!! resto");
      }
      
    }
    return newString;
  },

  getIssuer:(creditCardNumber)=>{

    if(creditCardNumber.substring(0,2) == 37){
      return "American Express";
    }
    if(creditCardNumber.substring(0,2) == 35){
      return "JCB";
    }
    if(creditCardNumber.substring(0,1) == 4){
      return "Visa";
    }
    if(50 < parseInt(creditCardNumber.substring(0,2)) && parseInt(creditCardNumber.substring(0,2)) < 56){
      return "MasterCard";
    }
    if(creditCardNumber.substring(0,4) == 6011){
      return "Discover";
    }
    else
      return false;
  },
};//4083952015263  --- 4213550062868921

export default validator;

