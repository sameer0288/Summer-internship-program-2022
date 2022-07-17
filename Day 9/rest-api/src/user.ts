enum Gender {
    male = "Male",
    female = "Female",
  }
  
  export default interface User {
    name: string;
    age: number;
    email: string;
    gender: Gender;
  }