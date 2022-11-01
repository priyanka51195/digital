import React, { useCallback, useEffect } from 'react'
import styles from './Toast.module.css';

const Toast = ({toastList ,position ,setMsg}) => {

  const deleteToast = useCallback( id => {
    const toastListItem = toastList.filter( e => e.id !== id )
    setMsg(toastListItem)
  } ,[toastList, setMsg])

  useEffect ( ()=> {
    const interval = setInterval ( () => {
     if(toastList.length){
        deleteToast(toastList[0].id)
     }
    }, 70000)
    return () => {
        clearInterval(interval)
    }

  }, [toastList, deleteToast])
  return (
     <div className={ `&{styles.continer} ${styles[position]} `}>

       { toastList.length > 0 &&
         toastList.map( (toast, i) =>  
        (
            <div 
            key={i} 
             className={ `${styles.notification} ${styles.toast} ${styles[position]}`}
             style={{backgroundColor: '#7BCCB5' }} > 
            
            <button className={styles.button} onClick={ () => deleteToast(toast.id)}> X </button>    
            
          <div className={styles.smallconatiner}> 
             <span className={styles.title}>{toast.name}</span>
             <span className={styles.time}> {toast.time}</span>
           </div>
             </div>   ))
        
      }
     </div>


  )
}

export default Toast
