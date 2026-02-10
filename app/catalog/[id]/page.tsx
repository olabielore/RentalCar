import { mileageRange } from "@/lib/utils/mileageRange";
import { getCarById } from "@/lib/api";
import Image from 'next/image';
import { notFound } from "next/navigation";


type CarPageProps = {
  params: { id: string };
};

export default async function CarDetails ({ params }: CarPageProps) {

  const car = await getCarById(params.id);
    
  if (!car) {
    notFound();
  }
    
    return (
      <div>
            <Image src={car.img} alt={`${car.brand} ${car.model}`} width={640} height={512} style={{ objectFit: "cover", borderRadius: 14 }}/>
        <div>
            <h1>{car.brand} {car.model} {car.year}</h1>
            <p> Id: {car.id}</p>
            <p>{car.address} Mileage: {mileageRange(car.mileage)}</p>
            <p>{car.description}</p>
        </div>
        <form
            onSubmit={(e) => {
            e.preventDefault();
            alert("Car successfully rented!");
            }}
        >
            <input placeholder="Name" required />
            <input placeholder="Email" required />
            <input placeholder="Booking date"/>
            <textarea placeholder="Comment"></textarea>
            <button type="submit">Send</button>
        </form>
        <div>
            <h3>Rental Conditions:</h3>
            <ul> 
                {car.rentalConditions.map((cond: string, index: number ) => (
                <li key={index}>{cond}</li>
            ))}
                <li>
                    Security deposite required 
                </li>
                <li>
                    Valid driver’s license
                </li>
            </ul>
        </div>
            <div>
            <h3>Car Specifications:</h3>
            <ul> 
                <li>
                    Year: {car.year}
                </li>
                <li>
                    Type: {car.type} 
                </li>
                <li>
                    Fuel Consumption: {car.fuelConsumption}
                </li>
                <li>
                    Engine Size: {car.engineSize}
                </li>
            </ul>
        </div>
            <div>
            <h3>Accessories and functionalities:</h3>
            <ul> 
                {car.accessories.map((acc, index) => (
                <li key={`acc-${index}`}>{acc}</li>
                ))}
                {car.functionalities.map((func, index) => (
                <li key={`func-${index}`}>{func}</li>
                ))}
            </ul>
        </div>
    </div>
    );
};