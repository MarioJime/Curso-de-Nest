import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

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
    getCarById( @Param( 'id', ParseUUIDPipe ) id: string ){ //Aquí se pasa el pipe para la validación del id
        console.log({ id });
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar( @Body() createCarDto: CreateCarDto ){
        return createCarDto;
    }

    @Patch(':id')
    updateCar( 
        @Param('id', ParseUUIDPipe ) id: string, 
        @Body() body: any ){
        return body;
    }

    @Delete(':id')
    deleteCar( @Param( 'id', ParseUUIDPipe ) id: string ){
        return {
            method:'delete',
            id
        };
    }
}
