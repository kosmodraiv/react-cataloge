import { Link } from 'react-router-dom'
import styles from '../Home.module.css'
import Price from './Price'
import { ICar } from '../../../../types/car.interface'

function CarItem({ car }: {car: ICar}){
    return(
        <div key={car.id} className={styles.item}>
        <div
        className={styles.image}
         style={{
            backgroundImage: `url(${car.image})`
        }}/>
        <div className={styles.info}>
            <h2>{car.name}</h2>
            <Price price={car.price}></Price>
            <Link className='btn' to={`/car/${car.id}`}>Read more</Link>
        </div>
    </div>
    )
}

export default CarItem