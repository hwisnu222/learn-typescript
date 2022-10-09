const obj: object = {
  id: 1,
  name: "james",
  status: true,
};

/* 
atau bisa membuat secara explisit dengan tipe data. 
Sebelumnya buatlah interface untuk menampung tipe data dari object tersebut
*/

interface Example {
  id: number;
  name: string;
  status: boolean;
}

const obj2: Example = {
  id: 2,
  name: "Angel",
  status: false,
};

console.log(obj2);
