
let body = document.querySelector('body');

let container = document.createElement('div')
container.className = "m-3"



body.appendChild(container)

//nav container
let nav = document.createElement('nav')
nav.className = "navbar navbar-expand-lg navbar-dark bg-primary"

container.appendChild(nav)




//fluid

let fluidContainer = document.createElement('div')
fluidContainer.className = "container-fluid";

nav.appendChild(fluidContainer)



//Branding and navigation

let branding = document.createElement('a')
branding.className = "navbar-brand"
branding.setAttribute('href', "#")
branding.textContent = "HighOnCoding"

fluidContainer.appendChild(branding)



let navigation = document.createElement('div')
navigation.className = "collapse navbar-collapse"
navigation.id = "navbarNav"

fluidContainer.appendChild(navigation)



let menu = document.createElement('ul')
menu.className = "navbar-nav"

navigation.appendChild(menu)



let navItem = document.createElement('li')
navItem.className = "nav-item"

menu.appendChild(navItem)



let home = document.createElement('a')
home.className = "nav-link active"
home.setAttribute('href', "#")
home.setAttribute('aria-current', "page")
home.textContent = "Home"

navItem.appendChild(home)



let navItem2 = document.createElement('li')
navItem2.className = "nav-item"

menu.appendChild(navItem2)



let categories = document.createElement('a')
categories.className = "nav-link"
categories.setAttribute('href', "#")
categories.setAttribute('aria-current', "page")
categories.textContent = "Categories"

navItem2.appendChild(categories)
