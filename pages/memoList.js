import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MemoList() {
  const router = useRouter();
  const [memos, setMemos] = useState([])
  
  useEffect( () => {
    getMemos()
  }, [])

  const getMemos = async () => {
    const response = await fetch(`/api/getMemos`)
    const jsonResponse = await response.json()

    if (jsonResponse.memos){
      setMemos(jsonResponse.memos) 
    }

    return response
  }


  // const memoList = [
  //   {
  //     id: 1,
  //     createdAt: "2023..",
  //     title: "title", 
  //     body: "~",
  //   },
  //   {
  //     id: 1,
  //     createdAt: "2023..",
  //     title: "title", 
  //     body: "~",
  //   },
  //   {
  //     id: 1,
  //     createdAt: "2023..",
  //     title: "title", 
  //     body: "~",
  //   },
  //   {
  //     id: 1,
  //     createdAt: "2023..",
  //     title: "title", 
  //     body: "~",
  //   }
  // ]

  const moveToMemo = (id) => {
    router.push("/memo/" + id)
  }

  const containerStyle = {
    flex:1,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '10px' // Adjust the gap between items as desired
  };

  const itemStyle = {
    display: "flex",
    padding:4,
    backgroundColor:'pink',
    height:60,
  }

  const moveToCreate = () => {
    router.push("/createMemo")
  }

  return (
    <div style={{}}>
      <button onClick={moveToCreate}>create</button>
      <br/>
      <div style={containerStyle}>
      {memos.map((memo, index) => {
        return <div key={memo.id} style={itemStyle} onClick={e => moveToMemo(memo.id)}>
          <div >
            {memo.title}
            <br/>
            {memo.createdAt}
          </div>
        </div>
      })}
      </div>
    </div>
  )
}


