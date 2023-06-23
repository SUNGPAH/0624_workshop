import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';

const Memo = () => {
  const router = useRouter();
  const { id } = router.query;
  const [memo, setMemo] = useState({})
  
  useEffect( () => {
    if(id) {
      getMemo()
    }
  }, [id])

  const getMemo = async () => {
    const response = await fetch(`/api/getMemo?id=${id}`)
    const jsonResponse = await response.json()

    if (jsonResponse.memo){
      setMemo(jsonResponse.memo) 
    }

    return response
  }

  return (
    <div>
      {memo.title}<br/>
      {memo.body}<br/>
      {memo.createdAt}<br/>
    </div>
  );
};

export default Memo;
