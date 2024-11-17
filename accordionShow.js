const buttons = document.querySelectorAll("button");

buttons.forEach( (button) => {
    button.addEventListener('click', (e) => {
        
        // grabbing the alt value for the 
        // image in the button. This will
        // let us know if we want to show or hide
        const check = button.firstChild.getAttribute("alt");

        const image = document.createElement("img");
        
        if(check == "More"){
            const parent = button.parentElement;
            parent.nextElementSibling.classList.add("visible");

            image.setAttribute("src", "assets/images/icon-minus.svg");
            image.setAttribute("alt", "Less");

            button.removeChild(button.firstChild);
            button.appendChild(image);
        }else{
            const parent = button.parentElement;
            parent.nextElementSibling.classList.remove("visible");

            image.setAttribute("src", "assets/images/icon-plus.svg");
            image.setAttribute("alt", "More");

            button.removeChild(button.firstChild);
            button.appendChild(image);
        }

    });
});