let inventory = [
  {id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009},
  {id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001},
  {id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983}, 
  {id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010,},
  {id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995},
];
let getCarHonda = (carInventory) => {
  let hcarArray = inventory.filter((v) => v.car_make === "Honda");
  let firsthcar = hcarArray[0];
  console.log(hcarArray, firsthcar);
  return `This is a ${firsthcar.car_make} ${firsthcar.car_model} from ${firsthcar.car_year}`;
};
console.log(getCarHonda(inventory));