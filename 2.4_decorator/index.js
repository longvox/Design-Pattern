/**
                        ,-------------------------.
                        |Coffee                   |
                        |-------------------------|
                        |+getDescription(): String|
                        |+getCost(): double       |
                        `-------------------------'
                            |              |
                            |        ,--------------------------------.
        ,-------------------------.  |CoffeeDecorator                 |
        |SimpleCoffee             |  |--------------------------------|
        |-------------------------|  |-decoratedCoffee: Coffee        |
        |+getDescription(): String|  |+CoffeeDecorator(coffee: Coffee)|
        |+getCost(): double       |  |+getDescription(): String       |
        `-------------------------'  |+getCost(): double              |
                                     `--------------------------------'
                                            |                |
                    ,------------------------------.   ,-------------------------------.
                    |MilkDecorator                 |   |SugarDecorator                 |
                    |------------------------------|   |-------------------------------|
                    |+MilkDecorator(coffee: Coffee)|   |+SugarDecorator(coffee: Coffee)|
                    |+getDescription(): String     |   |+getDescription(): String      |
                    |+getCost(): double            |   |+getCost(): double             |
                    `------------------------------'   `-------------------------------'
**/

const { SimpleCoffee, MilkDecorator, SugarDecorator } = require("./decorator");

function main() {
  let myCoffee = new SimpleCoffee();
  console.log("Only Coffee  ==========================================");
  console.log("Description: " + myCoffee.getDescription());
  console.log("Cost: $" + myCoffee.getCost());

  myCoffee = new MilkDecorator(myCoffee);
  console.log("Coffee with milk ======================================");
  console.log("Description: " + myCoffee.getDescription());
  console.log("Cost: $" + myCoffee.getCost());

  myCoffee = new SugarDecorator(myCoffee);
  console.log("Coffee with milk and sugar ============================");
  console.log("Description: " + myCoffee.getDescription());
  console.log("Cost: $" + myCoffee.getCost());
}

main();
