export interface Car {
    id: string,
    year: number,
    brand: string,
    model: string,
    type: string,
    img: string,
    description: string,
    rentalPrice: string;
    mileage: number;
    address: string,
    rentalCompany: string,
    fuelConsumption: string,
    engineSize: string,
    accessories: string[],
    functionalities: string[],
    rentalConditions: string[],
}

export interface Search {
    brand?: string;
    rentalPrice?: string;
    minMileage?: string;
    maxMileage?: string;
  }