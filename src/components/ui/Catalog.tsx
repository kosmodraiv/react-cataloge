import { FC } from "react"
import { ICar } from "../../types/car.interface"
import CarItem from "../screens/home/car-item/Car-item"

interface iCatalog {
    data?: ICar[]
}

const Catalog: FC<iCatalog> = ({data = []}) => {
    return <div>
    {data.length ? data.map(car => (
       <CarItem key={car.id} car={car} />
    ))
    : <p>There are no cars</p>
    }

    </div>
}

export default Catalog