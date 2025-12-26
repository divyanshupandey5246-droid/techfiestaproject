

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
