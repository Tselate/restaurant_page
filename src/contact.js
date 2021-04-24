export let dominant_three = document.createElement("div");

export function contact () {
    let main = document.getElementById("content");
    let contact_title = document.createElement("div");
    let phone = document.createElement("div");
    let email = document.createElement("button");
    let last = document.createElement("div");

    //Add class list 
    dominant_three.classList.add("dominant_three");
    contact_title.classList.add("contact-title");
    phone.classList.add("phone");
    email.classList.add("email");
    last.classList.add("last");

    //Add text 
    contact_title.innerHTML = "Contact us anytime!";
    phone.innerHTML = "Call us: 000-000-0000";  
    email.innerHTML = "Email us";
    last.innerHTML = "Last image";

    //Append
    dominant_three.append(contact_title, phone, email, last);
    main.append(dominant_three);
    return;    
}