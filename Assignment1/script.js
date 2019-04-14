amountToCoins=(amount, arr)=>{                            //function to the min number of coins required
    if (amount < 0) return false;                         //if amount is less than zero
    var max = amount + 1;  
    let dp = new Array(max).fill(0); 
    dp.fill(max, 0, max);                                 //filling the array with zero
    
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] <= i) { 
        debugger;
          dp[i] = Math.min(dp[i], dp[i - arr[j]] + 1)    // setting the minimum number of coins in the array      
        }
      }
    }    
    return dp[amount] > amount ? -1 : dp[amount];
  }
  
  
change = ()=>{                                          //funcion to find the change
  console.log("Tushar");
    var arr = [25, 10, 5, 2, 1];
    var amount = 46;
    console.log(arr);    
    return amountToCoins(amount, arr);                  //calling the function with an amount and coin array.
  }

document.getElementById("demo").innerHTML = change(); //calling the function and setting result to a DOM element