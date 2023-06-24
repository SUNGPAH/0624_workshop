import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function CreateMemo() {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const router = useRouter();

  const submit = async () => {
    const data = {title: title, body: body}
    const response = await fetch('/api/saveMemo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result.message); // Data saved successfully.
      router.push("/memoList")
      //move to..

    } else {
      console.log('Error occurred while saving data.');
    }
  }

  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <br/>
      <textarea value={body} onChange={e => setBody(e.target.value)} />
      <br/>
      <button onClick={e => submit()}>submit</button>
    </div>
  )
}


