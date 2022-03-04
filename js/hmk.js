
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


// top portion
let topPortion = document.createElement('div')
topPortion.className = "m-3 row bg-light p-5"

container.appendChild(topPortion)



let topPortionContent = document.createElement('div')

topPortion.appendChild(topPortionContent)



let topPortionHeader = document.createElement('div')
topPortionHeader.className = "h5 mb-4 bg-light text-dark fw-bold"
topPortionHeader.textContent = "Curse of the current reviews"

topPortionContent.appendChild(topPortionHeader)



let topPortionText = document.createElement('div')
topPortionText.className = "lead fw-bold"
topPortionText.textContent = `
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
blanditiis, voluptatibus ex, distinctio culpa quibusdam quidem veritatis reiciendis eos sapiente et
corrupti eum hic aliquam. Non totam quis pariatur soluta?`

topPortionContent.appendChild(topPortionText)




//Content/posts
let post1Container = document.createElement('div')
post1Container.className = "m-3 row bg-transparent p-5"

container.appendChild(post1Container)



let post1Content = document.createElement('div')

post1Container.appendChild(post1Content)



let post1Header = document.createElement('div')
post1Header.className = "blue-header mb-4 bg-transparent text-primary fw-bold"
post1Header.textContent = "Hello Watchkit"

post1Content.appendChild(post1Header)



let post1Text = document.createElement('div')
post1Text.className = "lead fw-bold"
post1Text.textContent = `
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
blanditiis, voluptatibus ex, distinctio culpa quibusdam quidem veritatis reiciendis eos sapiente et
corrupti eum hic aliquam. Non totam quis pariatur soluta?`

post1Content.appendChild(post1Text)



let post1Stats = document.createElement('div')
post1Stats.className = "container"

container.appendChild(post1Stats)



let post1Comments = document.createElement('span')
post1Comments.className = "comments"
post1Comments.textContent = "12 comments"

post1Stats.appendChild(post1Comments)



let post1Likes = document.createElement('span')
post1Likes.className = "comments"
post1Likes.textContent = "124 likes"

post1Stats.appendChild(post1Likes)







let post2Container = document.createElement('div')
post2Container.className = "m-3 row bg-transparent p-5"

container.appendChild(post2Container)



let post2Content = document.createElement('div')

post2Container.appendChild(post2Content)



let post2Header = document.createElement('div')
post2Header.className = "blue-header mb-4 bg-transparent text-primary fw-bold"
post2Header.textContent = "Intro to Swift"

post2Content.appendChild(post2Header)



let post2Text = document.createElement('div')
post2Text.className = "lead fw-bold"
post2Text.textContent = `
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
blanditiis, voluptatibus ex, distinctio culpa quibusdam quidem veritatis reiciendis eos sapiente et
corrupti eum hic aliquam. Non totam quis pariatur soluta?`

post2Content.appendChild(post2Text)



let post2Stats = document.createElement('div')
post2Stats.className = "container"

container.appendChild(post2Stats)



let post2Comments = document.createElement('span')
post2Comments.className = "comments"
post2Comments.textContent = "15 comments"

post2Stats.appendChild(post2Comments)



let post2Likes = document.createElement('span')
post2Likes.className = "comments"
post2Likes.textContent = "45 likes"

post2Stats.appendChild(post2Likes)
