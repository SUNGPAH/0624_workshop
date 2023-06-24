import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter();


  const check = () => {
    router.push("/createMemo");
  }

  return (
    <div>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
      <button onClick={e => check()}>login</button>
    </div>
  )
}


