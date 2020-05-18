// Set up the database instance
var database = firebase.firestore();

// Get reference for the database collection we want to access
var collection = database.collection("orders");

// Reference to orderHistory div
var orderHistory = document.getElementById("orderHistory");

//Write data to a database
function createOrder()
{
	var orderName;
    var orderFlavor;
    var orderConeType;
	
	// Get info about the order
	orderName = document.getElementById("name").value;
    orderFlavor = document.getElementById("flavor").value;
    orderConeType = document.getElementById("cone").value;
	
	// Write new document to firebase
	database.collection("orders").add({
		name: orderName,
		flavor: orderFlavor,
		cone: orderConeType,
	})
	.then(function(collection) {
		console.log("Document written with ID: ", collection.id);
	})
	.catch(function(error) {
		console.error("Error adding document: ", error);
	});
}

// Read data from the database to print out order history
database.collection("orders").onSnapshot(function(querySnapshot){
    orderHistory.innerHTML = ""; // Clear the order history
    querySnapshot.forEach(function(order){
        var orderName = order.data().name;
        var orderFlavor = order.data().flavor;
        var orderConeType = order.data().cone;
        orderHistory.innerHTML += "<div class='order'><div class='oName'>" + orderName + "</div><div class='oFlavor'>" + orderFlavor + "</div><div class='oConeType'>" + orderConeType + "</div></div>";
    });
});
document.getElementById("submitOrder").addEventListener("click", createOrder);