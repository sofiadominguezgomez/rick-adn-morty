import { useEffect, useState } from 'react';
import styles from './styles/container.module.css'
import Character from './components/Character';

const endpoint = "https://rickandmortyapi.com/api/character/?page=";

function App() {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [personajes, setPersonajes] = useState([])
  const [fix, setFix] = useState(false)
  

  const isScrolling = () => window.scrollY ? setFix(true) : setFix(false)

  window.addEventListener("scroll", isScrolling)

  useEffect( () => {
      fetch(`${endpoint}${page}`)
      .then( (response) => response.json())
      .then( (data) => {
          setPersonajes(data.results)
          setLoading(false)
      })
      .catch("MacanaaaaaAAAAAAAAAAAAAAAAAAAAAAAaaaaaaAAAAAAAAAAAAAaaaaaaAAAAAAAAAAAaa")
  }, [page])


  if(loading){
      return (
        <h4> ¿Dejaste prendido el horno? </h4>
      )
  }

  return (
      <>
        <div className={ fix ? `${styles.buttonbar} ${styles.fixed}` : styles.buttonbar}>
            <button className={styles.btn} onClick={() => setPage(1)} disabled={ page === 1 ? true : false }> First </button>
            <button className={styles.btn} onClick={() => (page > 1) ? setPage(page-1) : null} disabled={ page === 1 ? true : false } > Previous </button>
             <p> {page} </p> 
            <button className={styles.btn} onClick={() => setPage(page+1)} disabled={ page === 42 ? true : false } > Next </button>
            <button className={styles.btn} onClick={() => setPage(42)} disabled={ page === 42 ? true : false }>Last</button>
        </div>
        <div className={styles.charactersContainer}>
          {personajes.map( (p) => <Character key={p.id} name={p.name} image={p.image} status={p.status} species={p.species} type={p.type} gender={p.gender} />)}
        </div>
        
      </>
  );
}

export default App;
