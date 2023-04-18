import { useState } from 'react'
import styles from './CreateCarForm.module.css'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CarService } from '../../../../services/car.service'
import { iCarData } from '../../../../types/car.interface'

const CreateCarForm = () => {
    const [data, setData] = useState({})

    const {register, reset, handleSubmit} = useForm<iCarData>({
        mode: 'onChange'
    })

    const queryClient = useQueryClient()

    const {mutate} = useMutation(['create car'], (data: iCarData) => CarService.create(data), {
        onSuccess: () => {
            queryClient.invalidateQueries(['cars'])
            reset()
        }
    })

    const createCar = (data: iCarData) => {

        mutate(data)

       
        // setCars(prev => [{id: prev.length + 1, ...data}, ...prev])

    }

    return <form className={styles.form} onSubmit={handleSubmit(createCar)}>
        <input
        {...register('name', {required: true})}
         placeholder="Model"></input>
        <input
        {...register('price', {required: true})}
         placeholder="Price"></input>
        <input
        {...register('image', {required: true})}
         placeholder="Image(link)"></input>

        <button className='btn'>Create</button>
    </form>
}

export default CreateCarForm