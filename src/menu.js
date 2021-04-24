export  let dominant_two = document.createElement("div");
export function menu () {
    let main = document.getElementById("content");
    let title = document.createElement("div");
    let items = document.createElement("div");
    let wine = document.createElement("div");

    //Add class list 
    dominant_two.classList.add("dominant_two");
    title.classList.add("menu-title");
    items.classList.add("menu-items");
    wine.classList.add("wine");

    //Add text 
    title.innerHTML = "Menu";
    wine.innerHTML = "Wine";
    
    
    //Make menu items 
    //Tibs
    let tibs = document.createElement("div");
    let tibs_img = document.createElement("img");
    let tibs_p = document.createElement("p");
    tibs_p.innerHTML = "Best Tibs....................$10.00";
    tibs.appendChild(tibs_img);
    tibs.appendChild(tibs_p);

    //Aynet
    let aynet = document.createElement("div");
    let aynet_img = document.createElement("img");
    let aynet_p = document.createElement("p");
    aynet_p.innerHTML = "Best Beiyanetu..........$15.00";
    aynet.appendChild(aynet_img)
    aynet.appendChild(aynet_p);


    //Tej
    let tej = document.createElement("div");
    let tej_img = document.createElement("img");
    let tej_p = document.createElement("p");
    tej_p.innerHTML = "Best Tej......................$3.00";
    tej.appendChild(tej_img)
    tej.appendChild(tej_p);


    items.append(tibs, tej, aynet);

    //Append 
    dominant_two.append(title, items, wine);
    main.append(dominant_two);

    console.log("Works")
}