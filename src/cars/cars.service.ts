import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Nissan',
        //     model:'Skyline',
        // },
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {

        const car = this.cars.find( car => car.id === id);
        if ( !car ) throw new NotFoundException(`Card with id '${id}' not found`)
        
        return car;
    }
    
    // create( createCarDto: CreateCarDto ){    // Nolmal, pasando propiedades de objetos
        
    //     const car: Car = {
    //         id: uuid(),
    //         brand: createCarDto.brand,
    //         model: createCarDto.model,
    //     }

    //     return car;
    // }

    // create( { model, brand }: CreateCarDto ){   // con desestrcturación de objetos
        
    //     const car: Car = {
    //         id: uuid(),
    //         brand,
    //         model,
    //     }

    //     return car;
    // }

    create( createCarDto: CreateCarDto ){    // Operador spreed
        
        const car: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push( car );
        return car;
    }

    update( id: string, updateCarDto: UpdateCarDto ){

        let cardDB = this.findOneById( id );

        if( updateCarDto.id && updateCarDto.id !== id ) throw new BadRequestException(` Car id is not valid inside body`);
            
        this.cars = this.cars.map( car => {
            if( car.id === id ){
                cardDB = { ...cardDB, ...updateCarDto, id }
                return cardDB;
            }

            return car;
        })

        return cardDB; //carro actualizado
    }

    detele( id: string ){
        const car = this.findOneById( id );
        this.cars = this.cars.filter( carr => car.id !== id );
    }
}
