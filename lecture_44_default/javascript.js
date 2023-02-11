// Default values
function orderChickenWith(sideDish) {
  sideDish = sideDish || "whatever!";
  console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();


function ordernarPolloCon(agregado){
    agregado = agregado || "Arroz";
    console.log("Pollo con " + agregado);
}

ordernarPolloCon("frijoles");
ordernarPolloCon("ensalada");
ordernarPolloCon();