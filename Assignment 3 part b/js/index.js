// console.log("Hello World");
let shippingName;
let shippingZip;
function getShippingNameValue() {
  shippingName = document.getElementById("shippingName").value;
}
function getShippingZipValue() {
  shippingZip = document.getElementById("shippingZip").value;
}

const sameCheckBox = document.getElementById("same").value;

let bool = true;
function billingFunction() {
  console.log("checkbox", sameCheckBox);

  if (bool) {
    console.log(shippingName);

    document.getElementById("billingName").value = shippingName;
    document.getElementById("billingZip").value = shippingZip;
    bool = false;
    console.log("billing function is working");
  } else {
    document.getElementById("billingName").value = "";
    document.getElementById("billingZip").value = "";
    bool = true;
  }
}
