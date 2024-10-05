var main = document.getElementById("main")

function clickMenu() {
    if (menu1.style.display == 'none') {
        menu1.style.display = 'block'
        main.style.marginTop = '280px'
        
    }

    else {
        menu1.style.display = 'none'
        main.style.marginTop = '20px'
    }
}