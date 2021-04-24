export let dominant_three = document.createElement("div");

export function contact () {
    let main = document.getElementById("content");
    let welcome = document.createElement("div");
    let order = document.createElement("button");

    //Add class list 
    dominant_three.classList.add("dominant_three");
    welcome.classList.add("welcome");
    order.classList.add("order");

    //Add text 
    welcome.innerHTML = "Yayayay Best Ethiopian Restaurant in town!";
    order.innerHTML = "Order Now";   

    //Append
    dominant_three.append(welcome, order);
    main.append(dominant_three);
    return;    
}