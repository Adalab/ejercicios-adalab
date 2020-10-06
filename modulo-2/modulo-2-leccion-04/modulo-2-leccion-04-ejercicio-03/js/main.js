"use strict";

function vat(a) {
  const netPrice = a;
  const vatPrice = a * 0.21;
  const totalPrice = a * 1.21;

  const result = `Precio sin IVA: ${netPrice}, IVA: ${vatPrice} y Total: ${totalPrice}`;
  return result;
}

console.log(vat(10));
