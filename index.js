
/*******************************task with FREECODECAMP JS *******************************/
//one
// This is an in-line comment.
/* This is a
multi-line comment */

//two
var myName;

//three
// Setup
var a;

// Only change code below this line
var a = 7;


/*******************************task with FREECODECAMP HTML*****************************/

//one
<h1>Hello World</h1>
  
//two
{<h1>Hello World</h1>}
{<h2>CatPhotoApp</h2>}

//three
{<h1>Hello World</h1>}
{<h2>CatPhotoApp</h2>}
{<p>Hello Paragraph</p>}

//four
{<h1>Hello World</h1>}
{<h2>CatPhotoApp</h2>}
{<p>Kitty Ipsum</p>}

//five
<h1>Hello World</h1>
{<h2>CatPhotoApp</h2>}
<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>


/*******************************task with CODEWARS JS ***********************************/
//fibonacci
function nthFibo(n) {
  let [prev, curr] = [0, 1];
  for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
  return prev;
}

nthFibo(10)