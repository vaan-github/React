// Behind the scene of the React, not complete but mini-milistic.


// ########## CREATE ROOT CONTAINER ############
// grab the id named root
const mainContainer = document.getElementById('root')


//  ###### REACT ELEMENT ##########
// how react transpile the react element

// Let assume how react accept <a></a> tag.
// element store in the tree form.
const reactElement = { // this is not the actaul terminology of the react.
    type: 'a',
    property : {
        href: 'https://www.google.com',
        target: '_blank'
    },
    childNodes: 'Please click me for google' // we hardcoded childNode as text node, we can also add another tags inside it.
}



// ####### CREATING & INJECTING REACT-ELEMENT INTO ROOT ###########

// Creating Element
function customRender(reactElement, mainContainer){
/*
    //  ### CODE IS NOT MODULAR FRIENDLY
    // creating element 
    const domElement = document.createElement(reactElement.type) // 'a'
    
    // adding text
    domElement.innerHTML = reactElement.childNodes // 'Please click me for google'

    // creating attribute
    domElement.setAttribute('href', reactElement.property.href)
    domElement.setAttribute('target', reactElement.property.target)

*/


    const domElement = document.createElement(reactElement.type)
    
    domElement.innerHTML = reactElement.childNodes

    for (const propKey in reactElement.property) {
        if (propKey === 'childNodes') continue;
        domElement.setAttribute(propKey, reactElement.property[propKey])

        // debugging
        console.log("")
        console.log(`propKey: ${propKey}`)
        console.log(`propValue: ${reactElement.property[propKey]}`)

        
        }

    // injecting the element inside the mainContainer 
    mainContainer.appendChild(domElement)

}



// Injecting Element
customRender(reactElement, mainContainer)


