import React, {useState,useEffect, useMemo } from 'react'
import styles from '../../Menu/Menu.module.css';
import Pagination from '../../common/pagination/Pagination'


let PageSize = 20;

const ComponentThree = () => {
  const [name , setName]= useState()
  const [data, setData] = useState([]);
  const [loading, setLoading]=useState(false);
  const [error, setError] =useState(null);
  const [currentPage, setCurrentPage] = useState(1);



  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((e)=> setError(e.message));
  });

  const listHandle = async () => {
    setLoading(!loading);
   }
   if(error != null){
    console.log("Api Call Error:- "+ error);
   }

   const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  

  return (
    <div>
        <div className={styles.center}>
        <div className={styles.button}>
          <form>
          <input className={styles.input} type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br/> 
        <button type="button" onClick={listHandle}> click  </button>
        </form>
        </div>
      </div>

      {
          data.map((person, id) => 
         (
          <div style={{display: 'flex', justifyContent: 'space-evenly', margin: '20px', border:" 1px solid grey"}}  key={person.id}>

        <div className={styles.image}>
        <img src={person.image}  width="500" height="300" />
        </div>

        <div>
        <p className={styles.pag}>Title- {person.title}</p>
        <p className={styles.pag}>price -{person.price}</p>
        <p className={styles.pag}>{person.description}</p>
        <p className={styles.pag}>category- {person.category}</p>
        <p className={styles.pag}>{person.category}</p>
        </div>
    
      </div>
        ) 
         ) }

     <Pagination
         className={styles.pagination}
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />


      
    </div>
  )
}

export default ComponentThree
