import CreateCarForm from './create-car-form/CreateCarForm'
import { CarService } from '../../../services/car.service';
import { useQuery } from '@tanstack/react-query';
import styles from './Home.module.css'
import Header from '../../ui/Header';
import Catalog from '../../ui/Catalog';

function Home() {
    const {data, isLoading} = useQuery(['cars'], () =>  CarService.getAll())

    if(isLoading) return <p>Loading...</p>

  return (
    <div >
     <h1 className={styles.head}>Cars catalog</h1>

     <Header />
     <CreateCarForm />
     <Catalog data={data} />

    </div>
  )
}

export default Home