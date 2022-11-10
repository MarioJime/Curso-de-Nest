import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';


@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
  ){}

  populateDB(){

    // CARS_SEED
    // BRANDS_SEED
    this.carsService.fillCarsWithSeedData( CARS_SEED ); 

    return 'Seed executed successfully';
  }
}
