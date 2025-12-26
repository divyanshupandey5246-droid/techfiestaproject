


var h1text = document.querySelector(" .text h5").textContent;
var h1 = document.querySelector(".text h5");

var n = h1text.length;

  var texi = h1text.split("");
  console.log(texi);
  h1.textContent="";
  var i = 0 ;
  texi.forEach(ele => {
      i++;
      if(i<=n/2){
           h1.innerHTML+=` <span class="a">${ele}</span>`;
      }
      else {
             h1.innerHTML+=` <span class="b">${ele}</span>`;
      }
  });
  setTimeout( ()=>{
       gsap.from(" .a",{
    transform:"translateY(20)",
      duration:1.8,
      opacity:0.4,
      stagger:0.2,
      delay:0.3
 });
       gsap.from(".b",{
      transform:"translateY(20)",
      scale:1.3,
      duration:1.8,
      opacity:0,
      stagger:-0.2,
      delay:0.3
 });

},100);

   
