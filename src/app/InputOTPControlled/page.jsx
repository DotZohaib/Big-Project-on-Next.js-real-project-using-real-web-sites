// "use client"

// import * as React from "react"

// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSlot,
// } from "@/components/ui/input-otp"

// export function InputOTPControlled() {
//   const [value, setValue] = React.useState("")

//   return (
//     <div className="space-y-2">
//       <InputOTP
//         maxLength={6}
//         value={value}
//         onChange={(value) => setValue(value)}
//       >
//         <InputOTPGroup>
//           <InputOTPSlot index={0} />
//           <InputOTPSlot index={1} />
//           <InputOTPSlot index={2} />
//           <InputOTPSlot index={3} />
//           <InputOTPSlot index={4} />
//           <InputOTPSlot index={5} />
//         </InputOTPGroup>
//       </InputOTP>
//       <div className="text-center text-sm">
//         {value === "" ? (
//           <>Enter your one-time password.</>
//         ) : (
//           <>You entered: {value}</>
//         )}
//       </div>
//     </div>
//   )
// }



import React from 'react'

const page = () => {

    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(!count);
    }
  return (
    <div>
    <nav>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Home</Link></li>
        </ul>
    </nav>
    <button onClick={handleCount} type="submit">Click</button>

    </div>
  )
}

export default page