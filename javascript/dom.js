// DOM - Document Object Modal
// It is used to target html elements using javascript

tagName
className
id

// => document.*

document.getElementsByTagName('h1')
// HTMLCollection[h1]
document.getElementsByTagName('a')
// HTMLCollection(a) [a, a.scroll, a#scroll]
document.getElementsByTagName('h1')[0]
{/* <h1>I'm Sangeetha</h1> */}
// document.getElementsByTagName('h1')[0].innerText
// I'm Sangeetha
document.getElementsByTagName('h1')[0].innerText = "Hello Everyone"
{/* <h1>Hello Everyone /h1> */}
document.getElementsByTagName('h1')[0].style.color="red"


<a href="#youtube" class="scroll">Youtube </a>
<a href="#youtube" class="scroll">Videos </a>
HTMlCollections(5)[a.scroll,a.scroll,a.scroll,a.scroll, a.scroll, ]
//                   0        1        2         3         4
document.getElementsByClassName('scroll')[1].innerText="Videos"
"Videos"

document.getElementsByClassName('scroll')[1].style.visibility ="hidden"
