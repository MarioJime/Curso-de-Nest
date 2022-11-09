import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

   constructor(
        private readonly carsService: CarsService//Esta es la injection de dependencias
   ){}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseIntPipe ) id: number ){ //Aquí se pasa el pipe para la validación del id
        console.log({ id });
        return this.carsService.findOneById( Number (id) );
    }
}
