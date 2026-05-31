let customers = [
    {
        name: "John Smith",
        email: "johnsmith@email.com",
        purchases: ["laptop", "mouse"]
    },
    {
         name: "Sarah Johnson",
         email: "sarahjohnson@email.com",
         purchases: ["Keyboard", "monitor"]
    },
   {
    name: "Mike Davis",
    email: "mikedavis@email.com",
    purchases: ["Headphones", "Mousepad"]
   }
]
customers.push({
    name: "Emily Wilson",
    email: "emilywilson@email.com",
    purchases: ["Webcam", "Microphone"]
});
customers.shift();
customers[0].email = "sarahnew@email.com";
customers[0].purchases.push("Webcam");
customers.forEach(function(customer) {
    console.log(`Name: ${customer.name}`);
    console.log(`Email: ${customer.email}`);
    console.log(`Total Purchases: ${customer.purchases.length}`);
});
