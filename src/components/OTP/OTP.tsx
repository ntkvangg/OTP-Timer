import React, { useState } from "react";
import CountDown from "./CountDown";
import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import './OTP.scss'
import {generateOtp} from "../../util/helper"

interface Props {}

function OTP(props: Props) {
    const [orgOtp, setOrgOtp] = useState(0);
    const [otp, setOtp]= useState(0);
    const [isResend, setIsResend] = useState(false);

    const onChangeOTP = (otp: any)=>{
        setOtp(otp);
    }
    const onGenerateOTP = (orgOtp: any)=>{
        setOrgOtp(orgOtp);
    }

    const handleConfirm = ()=>{
        if(Number(orgOtp) !== Number(otp)){
            window.alert('otp wrong');
            
        }else{
            console.log('otp right!');
            clearOtp();
        }
    }

    const resendOtp = ()=>{
        setOrgOtp(generateOtp());
        setIsResend(isResend => !isResend);
    }

    const clearOtp = ()=>{
        setOtp(0);
        setOrgOtp(0);
    }

    return (
        <div className="container-otp-parent">
            <GenerateOTP onGenerateOTP = {onGenerateOTP} value={orgOtp}/>
            <hr/>
            <h4 className="mb-3">Enter verification code</h4>
            <InputOTP onChangeOTP = {onChangeOTP} value={otp}/>
            <CountDown isResend={isResend}/>
            <div className="resend-otp d-flex justify-items-center">
                <span>Don't receive OTP</span>
                <button type="button" className="btn btn-link" onClick={resendOtp}>RESEND OTP</button>
            </div>
            <div className="action">
                <button className="btn btn-primary" disabled={ otp.toString().length < 6 } onClick={handleConfirm}>VERIFY</button>
            </div>
        </div>
    );
}

export default OTP;
