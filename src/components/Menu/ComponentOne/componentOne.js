import React, { useState } from 'react'
import styles from '../../Menu/Menu.module.css';
import Button from '../../common/button/Button';
import Toast from '../../common/toast/Toast';

const ComponentOne = () => {
  const [msg , setMsg] = useState([])
  const [query, setQuery] = useState("")
  const [count, setCount] = useState(0);
  var d = new Date();
  var n = d.toLocaleTimeString();
  let toastProperties = null
  const showToast =() => {
   toastProperties = {
    id: count,
    name: 'MSG '+ count,
    time: n
   }
  
   setCount(count + 1);
   setQuery(toastProperties);
   setMsg( msg => [...msg ,  query]);
 
  }

  return (
    <>
      <div className={styles.center}>
        <div className={styles.button}>
        <Button handleClick={ () => showToast()} > Show Toast </Button>
        </div>
      </div>
      <Toast toastList={msg} position='bottom-center' setMsg={setMsg} />
      </>
  )
}

export default ComponentOne
