function customRender(reactElement,conatiner) {
    /* const domElement = document.createElement 
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    conatiner.appendChild(domElement)
    */

    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const key in reactElement.props ) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props [prop])

        
    }

    conatiner.appendChild(domElement)
}
const recatElememt= {

    type :'a',
    props :{
        href: 'https://google.com',
        target:'_blank'
    },

    Children: 'click me to visit gooogle' 
}


const mainConatiner =   document.querySelector('#root')
customRender(recatElememt,mainConatiner)

