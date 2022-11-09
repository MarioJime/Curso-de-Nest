import { IsString,IsUUID,IsOptional } from "class-validator";

export class UpdateCarDto {
    
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?:    string;

    @IsString()
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    // @MinLength(3)//Para validar los caracteres minimos
    readonly model?: string;
    
}