import Image from 'next/image';
import { Button } from "@/components/ui/button";

const cars = [
  {
    name: "Ferrari 488 GTB",
    year: "2021",
    miles: "12.500 milhas",
    img: "/ferrari.jpg",
    msg: "Your Ferrari has 7,767 miles on it. Last maintenance recorded 6 months ago...",
  },
  {
    name: "Porsche 911 GT3",
    year: "2022",
    miles: "8.320 milhas",
    img: "/porsche.jpg",
    msg: "Your GT3 has scheduled maintenance coming up soon...",
  },
];

export default function Garage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Garage</h1>
      {cars.map((car, i) => (
        <div key={i} className="mb-6 rounded-xl overflow-hidden shadow-lg bg-white">
          <Image src={car.img} alt={car.name} width={768} height={432} className="w-full object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{car.name}</h2>
            <p className="text-sm text-gray-500">{car.year} • {car.miles}</p>
            <p className="mt-2 text-sm">{car.msg}</p>
            <div className="flex gap-2 mt-4">
              <Button variant="outline">Chat AI</Button>
              <Button variant="outline">QR Code</Button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
