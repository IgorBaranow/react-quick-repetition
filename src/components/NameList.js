import React from "react";
import User from "./User";
import Employee from "./Employee";

// 1 TASK
// function NameList() {
//   const names = ["Igor", "Sasha", "Dana"];
//   const nameList = names.map((name) => <h2>{name}</h2>);
//   return <div>{nameList}</div>;
// }

// export default NameList;

// 2 TASK
// export default function NameList() {
//   const users = [
//     {
//       id: 1,
//       name: "Igor",
//       age: 24,
//     },
//     {
//       id: 2,
//       name: "Igor2",
//       age: 50,
//     },
//   ];
//   return (
//     <>
//       {users.map((user) => (
//         <User key={user.id} user={user}></User>
//       ))}
//     </>
//   );
// }

// TASK 3
// export default function NameList() {
//   const products = [
//     { id: 1, name: "milk", price: 3, onSale: false },
//     { id: 2, name: "bread", price: 2, onSale: true },
//   ];
//   const productList = products.map((product) =>
//     product.onSale ? (
//       <h2 key={product.id}>
//         {product.name}, price {product.price} $ - reduced price
//       </h2>
//     ) : (
//       <h2 key={product.id}>
//         {product.name}, price {product.price} $
//       </h2>
//     )
//   );

//   return productList;
// }

// TASK 4

export default function EmployeeList() {
  const employees = [
    { id: 1, name: "Igor", position: "IT" },
    { id: 2, name: "Igor2", position: "HR" },
  ];

  return employees.map((employee) => (
    <Employee key={employee.id} employees={employees} />
  ));
}
