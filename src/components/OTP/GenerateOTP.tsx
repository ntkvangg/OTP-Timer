import React, { useState } from 'react';
import { generateOtp } from '../../util/helper';


interface Props{
    onGenerateOTP: (otp: any)=> void,
    value?: any
}

const GenerateOTP = ({onGenerateOTP, value}: Props)=>{

    const generateOTP = ()=>{
        const otp = generateOtp();
        onGenerateOTP(otp);
    }
    return (
        <div className="container generate-otp">
            <button onClick={generateOTP} className="btn btn-success mb-2">Generate OTP</button>
            <div>OTP {value}</div>
        </div>
    )
}

export default GenerateOTP;