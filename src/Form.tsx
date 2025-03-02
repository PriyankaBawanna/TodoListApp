import React, { useEffect, useRef, useState } from "react";
const Form =()=>{
    return <>
   <OTPForm/>
    </>
}
export default Form ;
const OTPForm =()=>{
    const inputElement = useRef<HTMLInputElement | null>(null);
    const inputThree = useRef <HTMLInputElement | null>(null);
    const inputFour = useRef<HTMLInputElement | null>(null);
    const [OTPFetch,setOTPFetch]=useState("")
    const [otpActive,setActiveOTP]=useState(false)
    const [otp,setOTP]=useState("")

    const [otpOne,setOTPOne] = useState("");
    const [otpTwo,setOTPTwo]=useState("");
    const [otpThree,setOTPThree]=useState("");
    const[otpFour,setOTPFour]=useState("");
    useEffect(()=>{
       let OTPNum =  "1234"
       setOTP(OTPNum);
    

    },[otpActive])
    const handleInputOne=(e:any)=>{
        let num = e.target.value
         if(num.length==1){
            setOTPOne(e.target.value)
            focusInput();
         }
         else {
            e.target.value = num.slice(0, 1); 
          }         
    }

    const handleInputTwo=(e)=>{
        let num = e.target.value
        if(num.length==1){
           setOTPTwo(e.target.value)
           focusInputThree();
        }
        else {
           e.target.value = num.slice(0, 1); 
         }
    }

    const focusInput =()=>{
        inputElement.current.focus();
    }

const handleInputthree =(e)=>{
    let num = e.target.value;
    if(num.length == 1){
        setOTPThree(num)
        focusInputfour()
    }else{
        e.target.value = num.slice(0,1)
    }
}

const handleInputFour =(e)=>{
    let num = e.target.value;
    if(num.length==1){
      setOTPFour(num)
      setActiveOTP(true)
      handleCheckOTP()
    }else{
          e.target.value = num.slice(0,1)
      }
  }

const focusInputThree =()=>{
    inputThree.current?.focus();
}
const focusInputfour =()=>{
    inputFour.current?.focus();
}



function handleCheckOTP(){
  let s = otpOne +otpTwo + otpThree + otpFour;
  console.log("otp",s)
  

  console.log("equal ",Number(s)==Number(otp))
 

}
    
    return<>
     <input type="number" placeholder="_" onChange={handleInputOne} maxLength={1}/>
     <input type="number" placeholder="_"  onChange={handleInputTwo}  ref={inputElement}  maxLength={1}/>
     <input type="number" placeholder="_" onChange={handleInputthree} ref={inputThree}  maxLength={1}/>
     <input type="number" placeholder="_" onChange={handleInputFour} ref={inputFour}  maxLength={1}/> 
     {otpOne}
     {otpTwo}
     {otpThree}
     {otpFour}
     
    </>
}