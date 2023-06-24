import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function MemoList() {
  const router = useRouter();
  const [email, setEmail] = useState("")
  const memoList = [
    {
      id: 1,
      createdAt: "2023..",
      title: "title", 
      body: "~",
    }
  ]

  const moveToMemo = (id) => {
    router.push("/memo/" + id)
  }

  return (
    <div>
      {memoList.map((memo, index) => {
        return <div>
          
          <div onClick={e => moveToMemo(memo.id)}>
            {memo.title}
          </div>

        </div>
      })}
    </div>
  )
}


