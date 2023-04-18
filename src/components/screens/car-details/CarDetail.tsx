import { Link, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { CarService } from '../../../services/car.service.js';
import CarItem from "../home/car-item/Car-item"
import { withAuth } from "../../../HOC/withAuth.jsx";
import { ICar } from "../../../types/car.interface.js";

const CarDetail = () => {
    const {id} = useParams()
    const [car, setCar] = useState<ICar>({} as ICar)

    useEffect(() => {
        if(!id) return
        const fetchData = async () => {
        const data = await CarService.getById(id)
  
          setCar(data)
        }
  
        fetchData()
      }, [id])

      if(!car?.name) return <p>Loading...</p>


    return <div>
    <Link to='/'>Back</Link>
        <CarItem car={car}></CarItem>
    </div>
}

export default withAuth(CarDetail)