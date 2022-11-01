import React , {useState } from 'react'
import styles from '../../Menu/Menu.module.css';
import Button from '../../common/button/Button';
import Toast from '../../common/toast/Toast';

const ComponentTwo = () => {
  const [name, setName]= useState("") 
  const [list , setList] =useState([])

  const handleSubmit =(event)=> {
    event.preventDefault()
    const data={name}
    if(name){
      setList( (ls) => [...ls, data])
      setName("")
    }
  }

  return (
    <div>
       <div className={styles.center}>
        <div className={styles.button}>
          <form onSubmit={handleSubmit}>
          <input className={styles.input} type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br/>
        <Button> Show Toast </Button>
        </form>
        </div>
      </div>
      <Toast toastList={list} position='buttom-center' setMsg={setList} />

      {/* {list &&
      
          list.map( (a)=> <div>
            <li>{a.name}</li>
            </div>)
        } */}
    </div>
  )
}

export default ComponentTwo
