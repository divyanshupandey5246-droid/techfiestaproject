

// var h1text = document.querySelector(" .text h5").textContent;
// var h1 = document.querySelector(".text h5");

// var n = h1text.length;

//   var texi = h1text.split("");
//   console.log(texi);
//   h1.textContent="";
//   var i = 0 ;
//   texi.forEach(ele => {
//       i++;
//       if(i<=n/2){
//            h1.innerHTML+=` <span class="a">${ele}</span>`;
//       }
//       else {
//              h1.innerHTML+=` <span class="b">${ele}</span>`;
//       }
//   });
//   setTimeout( ()=>{
//        gsap.from(" .a",{
//    y:150,
//       duration:1.8,
//       opacity:0.4,
//       stagger:0.4,
//       delay:0.3
//  });
//        gsap.from(".b",{
//       transform:"translateY(-150)",
//       scale:1.3,
//       duration:1.8,
//       opacity:0,
//       stagger:-0.4,
//       delay:0.3
//  });

// },900);



  setTimeout( ()=>{
       gsap.from(" .text span",{
          scale:1.05,
       y:-50,
      duration:0.8,
      opacity:0,
      stagger:0.2,
      delay:0.9
 });
          gsap.from(" .tagline",{
          scale:1.05,
       y:5,
      duration:0.8,
      opacity:0,
      stagger:0.2,
      delay:2.9
 });

},1200);
