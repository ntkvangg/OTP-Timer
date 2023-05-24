import React, { useEffect, useState } from "react";


interface Prop{
    onChangeCount?: (count: number) => number;
    isResend?: boolean
}
export default function CountDown({isResend}: Prop) {

    const [count, setCount] = useState(60);
    const [isExpiredOtp, setIsExpiredOtp] = useState(false);

    useEffect(() => {
        setCount(60);
        const intervalId = setInterval(()=>{
            setCount(count => {
                if((count - 1) <= 0) {
                    setIsExpiredOtp(true);
                }else{
                    setIsExpiredOtp(false);
                }
                return count - 1
            });
        }, 1000)
        return () => {
            clearInterval(intervalId);
        };
    }, [isResend])
    return <div className="timer mt-2">
        {isExpiredOtp  ? <div className="text-danger">OTP Expired</div> : <div className="countdown">
            {count} s
        </div>}
        
    </div>;
}
