import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { CarsModule } from 'src/cars/cars.module';

@Module({
  controllers:  [BrandsController],
  providers:    [BrandsService],
  imports:      [ CarsModule ]
})
export class BrandsModule {}
