// this code allows the user to save from the sweets page  only for Task 20

let savedItems = document.querySelectorAll(".saved"); // here I selected all the elements containning the class name saved

let selectedItems = [ // created an object for each of the saved items
    {
        name: "Caramel Icecream",
        text: "To start it off we begin with our Tasty Caramel chocolate coverd ice-cream they say when you once take the first bite its like heaven ",
        tag: "coated",
        inSaved:0
    },

    {
        name: "Rasbary and Chocolate",
        text: "I have tried this once and cannot recall what its named But these are really good too.",
        tag: "raspberry_chocolate_dumps",
        inSaved:0
    },

    {
        name: "Chocolate Brownies",
        text: "Brownies oh glorious brownies, they are as sweet as the sounds of spring and as warm as the feelings of happiness I love brownies alot.",
        tag: "brownies",
        inSaved:0
    },

    {
        name: "Fudge Cubes",
        text: "Chocolate Fudge Cubes with other decorations of chocolate or nuts is also so yummy I always get up at 3am to get a snack of these if my mom has made any.",
        tag: "fudge",
        inSaved:0
    },

    
    {
        name: "Death by chocolate Milshake",
        text: "And to wash it all down, a death by chocolate milshake to soothe the journey of a delicious chocolate train A lovely finish to a sweet extravaganza",
        tag: "death_by_chocolate",
        inSaved:0
    },

];

for (let i = 0; i < savedItems.length; i++ ) { /* in this function we loop through all the a tags containing the class name tag and we create an event listiner so that each time it is clicked
                                                the function can call on the local storage and set items from the code below and storing the count and alerting a user that the amount of items saved*/
    savedItems[i].addEventListener("click", () => {
        itemNumber(selectedItems[i]);
        alert("You have " +  document.querySelector(".navbar-section span").textContent + " saved item/s" );
    })
}


function onLoadItemNumber(){ // this function ensures that the numbers are not vanished after refreshing
    let selectedItemNum = localStorage.getItem("itemNumbers");
    
    if (selectedItemNum) {
        document.querySelector(".navbar-section span").textContent = selectedItemNum; // this adds the number to the span and allows it to show the user howmany items from the sweets page they have even after a refresh or on anothre page 
    }
}

function itemNumber(item) { // this gets the item slected and saves its number to the local storage also saving the selected item frmo the items object array to let the console know what item is being clicked on 
    
    let selectedItemNum = localStorage.getItem("itemNumbers");
    selectedItemNum = parseInt(selectedItemNum);

    if (selectedItemNum) {
        localStorage.setItem("itemNumbers", selectedItemNum + 1);
        document.querySelector(".navbar-section span").textContent = selectedItemNum + 1;
    } else {
        localStorage.setItem("itemNumbers", 1);
        document.querySelector(".navbar-section span").textContent = 1;
    }

    setItems(item)
}

function setItems(item) { // this function is for the JSON section to be able to get the stored item in the objects above and making a clear use for detail such as the JSON to javascript object, 
    let itemTaken =localStorage.getItem('itemsInSaved');

    console.log(itemTaken);

    itemTaken = JSON.parse(itemTaken); // we need to parse the item in order to have the object details displayed in the aplicatoins tab of google dev tools

    if (itemTaken != null){ // this ensures that the data for the selected item is updated as to how many times the same item is in the inSaved object also to ensure when a new saved item is clicked the data will be shown as well

        if (itemTaken[item.tag] == undefined) { // this makes sure that it does not overrite or come out as null or undefined and shares the values selected and the prevoius item in the localstorage
            itemTaken = {

            ...itemTaken,
                [item.tag]: item
            }
        }
        itemTaken[item.tag].inSaved += 1; // this updates the inSaved to be + 1
    } else {
        item.inSaved = 1;

        itemTaken = {
           [item.tag]:item
       };
       
    }

 
    
    localStorage.setItem("itemsInSaved", JSON.stringify(itemTaken)); // in order for the browser to read it we need to stringify the JSON data
}


// this function is to display the saved items on to the saved for later page 

function displayItems() {
    let itemTaken = localStorage.getItem("itemsInSaved");

    itemTaken = JSON.parse(itemTaken); // we converting from jason objects into javascript
    console.log(itemTaken);

    // we need to slecte the element is selecting on the saved items page so that we can display our saved items from the other page
    let itemContainer = document.querySelector(".save-for-later1");
    if (itemTaken && itemContainer){
        itemContainer.innerHTML = " ";
        Object.values(itemTaken).map(item => { // making use of an Es6 arrow function to map through the items and also with back ticks to display the selected elements from the localstorage and with divs and styling 
            itemContainer.innerHTML += `
            <section id="motivation">
          <h2>${item.name}</h2>
          <div class="hola-amigo">
          
              <img src="../images/${item.tag}.jpg" alt="coated-icecream">
            <p>
             ${item.text}
           </p>
          </div>
        
        </section>
            `
        });
    }
}


onLoadItemNumber();// calling the function to ensure the saved items numbers dont vanish after refresh of page
displayItems(); // calling this function so that as soon as the page loads the saved items are displayed


// references:
// I found a method to create a save for later folder from a shopping cart method which also uses local storage from a youtube video https://www.youtube.com/watch?v=B20Getj_Zk4&ab_channel=TelmoSampaio
