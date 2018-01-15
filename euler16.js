// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
//
// What is the sum of the digits of the number 2^1000?

let addition = sumOfElements(pow2String(1000))
console.log(addition)
//recursive function that adds up a number in string format by itself n number of times

//function that returns 2^n as a string
function pow2String(n){
  let tempStr = '2'
  for (let i = 2;i<=n;i++){
    tempStr = sum2(tempStr,tempStr)
  }
  return tempStr
}

//function that adds numbers in terms of strings
function sum2(s1,s2){
  let excedent = 0
  let res = ""

  //Define the last character's index of each string
  let maxs1 = s1.length-1
  let maxs2 = s2.length-1

  //The loops down if either of the two indexes is >=0
  for (i=maxs1, j=maxs2; i>=0 || j>=0 ; i--,j--){

    //default value of 0, in case the index is negative
    let num1 = 0
    let num2 = 0

    //control the length of the string. Only assign a character value if index is >= 0
    if (i>=0){
      num1 = parseInt(s1.charAt(i))
    }
    if (j>=0){
      num2 = parseInt(s2.charAt(j))
    }

    //The sum is the sum of the two numbers plus the excedent of the previous sum, if there was any
    let sum = num1 + num2 + excedent

    let thisDigit = 0
    if (sum==10){
      thisDigit = 0
      excedent = 1
    } else if(sum>10){
      thisDigit = sum%10
      excedent = 1
    }else{
      thisDigit = sum
      excedent = 0
    }
    res += thisDigit
  }

  //If the last excedent was 1, we need to add it manually
  if(excedent=="1"){
    res+="1"
  }
  //Reverse String to display in the correct order
  res = reverseStr(res)

  return res
}

//Reverse String function
function reverseStr(s){
  let res = ""
  for(let i =s.length-1;i>=0;i--){
    res+=s.charAt(i)
  }
  return res
}

//function that takes a number represented as a string and returns the sum of its digits
function sumOfElements(str){
  let res = 0
  for (let i = 0 ; i<str.length ; i++){
    let num = parseInt(str.charAt(i))
    res += num
  }
  return res
}
