import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Nissan',
            model:'Skyline',
        },

        {
            id: uuid(),
            brand: 'Toyota',
            model:'Supra',
        },

        {
            id: uuid(),
            brand: 'Chevrolet',
            model:'Camaro',
        },

        {
            id: uuid(),
            brand: 'Honda',
            model:'Civic',
        }   
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {

        const car = this.cars.find( car => car.id === id);
        if ( !car ) throw new NotFoundException(`Card with id '${id}' not found`)
        
        return car;
    }
}
