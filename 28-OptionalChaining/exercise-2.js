const order = {};

// if (
//   order &&
//   order.customer &&
//   order.customer.address &&
//   !order.customer.address.city
// )

let city = order?.customer?.address?.city;

console.log(city);
