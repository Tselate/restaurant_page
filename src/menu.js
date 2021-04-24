export  let dominant_two = document.createElement("div");
export function menu () {
    let main = document.getElementById("content");
    let title = document.createElement("div");
    let items = document.createElement("div");

    //Add class list 
    dominant_two.classList.add("dominant");
    title.classList.add("menu-title");
    items.classList.add("menu-items");

    //Add text 
    title.innerHTML = "Menu";
    
    
    //Make menu items 
    //Tibs
    let tibs = document.createElement("div");
    let tibs_img = document.createElement("img");
    let tibs_p = document.createElement("p");
    tibs_p.innerHTML = "Best Tibs";
    tibs.appendChild(tibs_img);
    tibs.appendChild(tibs_p);

    //Aynet
    let aynet = document.createElement("div");
    let aynet_img = document.createElement("img");
    let aynet_p = document.createElement("p");
    aynet_p.innerHTML = "Best Beiyanetu";
    aynet.appendChild(aynet_img)
    aynet.appendChild(aynet_p);


    //Tej
    let tej = document.createElement("div");
    let tej_img = document.createElement("img");
    let tej_p = document.createElement("p");
    tej_p.innerHTML = "Best Tej";
    tej.appendChild(tej_img)
    tej.appendChild(tej_p);


    items.append(tibs, tej, aynet);

    //Append 
    dominant_two.append(title, items);
    main.append(dominant_two);

    console.log("Works")
}