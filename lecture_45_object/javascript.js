// Object creation
// var company = new Object();
// company.name = "Facebook";

// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("Company CEO name is:" + company.ceo.firstName);

// console.log(company["name"])
// var stockPropName = "stock of company";
// company[stockPropName] = 110;

// console.log("Stock price is: " + company[stockPropName]);


// Better way: 
var company = {
    name: "Tesla",
    ceo: {
        firstName: "Elon",
        favColor: "Red"
    },
    "stock of company": 200
};
console.log("Company CEO name is: " + company.ceo.firstName);
console.log("Stock price is: " + company["stock of company"]);