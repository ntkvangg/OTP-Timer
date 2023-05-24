import React, { useState } from "react";
import OtpInput from "react-otp-input";

interface Props{
    onChangeOTP: (otp: any)=> void;
    value: any
}

export default function InputOTP({onChangeOTP, value}: Props) {


    const handleChangeOTP = (otp: any)=>{
        onChangeOTP(otp);
    }


    return (
        
        <div className="wrapper-input-otp">
            <OtpInput
                value={value}
                onChange={handleChangeOTP}
                numInputs={6}
                renderInput={(props) => <input {...props} />}
            />
        </div>
        
    );
}

