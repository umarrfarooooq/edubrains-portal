"use client"
import React from 'react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

const OtpInput = ({ onChange }) => {
  return (
    <div className="w-full">
      <InputOTP maxLength={6} className="w-full" onChange={onChange}>
        <InputOTPGroup className="flex items-center justify-between w-full gap-3 md:gap-6">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <InputOTPSlot
              key={index}
              index={index}
              className={`flex-1 border-0 border-b-2 border-[#A9A9A9] text-2xl md:text-[2rem] ring-0`}
              style={{borderLeft: 'none', borderTop: 'none', borderRadius: "0px"}}
            />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </div>
  )
}

export default OtpInput