
// 1 - Get the children of the element with id wrapper and print them to the console as a list.

const wrapper = document.querySelector("#wrapper");
console.log(wrapper.children);

// //- Iterate over them and print their children to the console, as well as how many they are.
// wrapper.forEach(e => console.log(e));
const wrapperChildren = wrapper.children;

// for (let wrapperChild of wrapperChildren) {
//     console.log(wrapperChild);
// }

for (let i = 0; i <wrapperChildren.length; i++) {
  console.log(wrapperChildren[i]);
  console.log(wrapperChildren[i].childElementCount);
}

console.log(wrapperChildren.length);


// 2- Let's write a function that returns an object that contains the element with the most classes and the total number of classes.

function findElementWithMostClasses(element){

    let elementName = "";
    let classes = 0;

    for (let wrapperChild of element.children) {
        if(wrapperChild.classList.length > classes) {
            classes = wrapperChild.classList.length;
            elementName = wrapperChild;
        }
}
    return {
        elementName: elementName,
        numberOfClasses: classes,
    }
}

console.log(findElementWithMostClasses(wrapper));