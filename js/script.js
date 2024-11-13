function ToyCar(make, model, color, scale, material, features, packaging, price, quantity) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.scale = scale;
    this.material = material;
    this.features = features;
    this.packaging = packaging;
    this.price = price;
    this.quantity = quantity;
  }
  let nissanGTR2020 = new ToyCar(
    "Nissan",
    "GT-R R35",
    "Blue",
    "1/64",
    "Metal Body and Chassis",
    "Real Rubber Tires, Detailed Exterior",
    "Blister Pack",
    "$12.38",
    5
  );

  function updateCarDetails() {
    document.getElementById("carMake").textContent = nissanGTR2020.make;
    document.getElementById("carModel").textContent = nissanGTR2020.model;
    document.getElementById("carColor").textContent = nissanGTR2020.color;
    document.getElementById("carScale").textContent = nissanGTR2020.scale;
    document.getElementById("carMaterial").textContent = nissanGTR2020.material;
    document.getElementById("carPackaging").textContent = nissanGTR2020.packaging;
    document.getElementById("carPrice").textContent = nissanGTR2020.price;
    document.getElementById("carQuantity").textContent = nissanGTR2020.quantity;
  }
  function updateCarPrice() {
    let newPrice = document.getElementById("updatePrice").value;
    nissanGTR2020.price = "$" + newPrice;
    document.getElementById("carPrice").textContent = nissanGTR2020.price;
  }
  function updateCarQuantity() {
    let newQuantity = document.getElementById("updateQuantity").value;
    nissanGTR2020.quantity = newQuantity;
    document.getElementById("carQuantity").textContent = nissanGTR2020.quantity;
  }
  
  updateCarDetails();