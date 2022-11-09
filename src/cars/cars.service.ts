import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'Nissan',
            model:'Skyline',
        },

        {
            id: 2,
            brand: 'Toyota',
            model:'Supra',
        },

        {
            id: 3,
            brand: 'Chevrolet',
            model:'Camaro',
        },

        {
            id: 4,
            brand: 'Honda',
            model:'Civic',
        }
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: number) {

        const car = this.cars.find( car => car.id === id);
        if ( !car ) throw new NotFoundException(`Card with id '${id}' not found`)
        
        return car;
    }
}
