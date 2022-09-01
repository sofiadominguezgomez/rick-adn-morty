import { useState } from "react"
import styles from '../styles/container.module.css'



const Character = ({name, image, status, species, type, gender}) =>{
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <div className={styles.character}>
      <h2>{name}</h2>
      <img src={image} alt={name}></img>
      <button className={styles.btn} onClick={() => setMoreInfo(!moreInfo)} > More Information</button>
      {moreInfo ? 
        <div className={styles.moreInfo}>
          <p>Status: {status} </p>
          <p>Species: {species} </p>
          <p>Type: {type !== "" ? type : "Unknown"} </p>
          <p>Gender: {gender} </p>
        </div>
        : null
      }
      
    </div>
  )

}
export default Character;