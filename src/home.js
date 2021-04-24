export let dominant = document.createElement("div");

export function home () {
    let main = document.getElementById("content");
    let welcome = document.createElement("div");
    let order = document.createElement("button");
    let eat = document.createElement("div");

    //Add class list 
    dominant.classList.add("dominant");
    welcome.classList.add("welcome");
    order.classList.add("order");
    eat.classList.add("eat");

    //Add text 
    welcome.innerHTML = "Best Ethiopian Restaurant in town!";
    order.innerHTML = "Order Now";   
    eat.innerHTML = "Let's eat!";

    //Append
    dominant.append(welcome, order, eat);
    main.append(dominant);
    return;    
}