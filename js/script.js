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