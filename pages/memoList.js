import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MemoList() {
  const router = useRouter();
  const memoList = [
    {
      id: 1,
      createdAt: "2023..",
      title: "title", 
      body: "~",
    },
    {
      id: 1,
      createdAt: "2023..",
      title: "title", 
      body: "~",
    },
    {
      id: 1,
      createdAt: "2023..",
      title: "title", 
      body: "~",
    },
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
    height:10,
  }

  return (
    <div style={{display:'flex',}}>
      <div style={containerStyle}>
      {memoList.map((memo, index) => {
        return <div key={memo.id} style={itemStyle}>
          <div onClick={e => moveToMemo(memo.id)}>
            {memo.title}
          </div>
        </div>
      })}
      </div>
    </div>
  )
}


