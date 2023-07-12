/*generally ... ek time line banavie tyrae ghana badha object hoy che... brbr
    --> so, gsap ma pan timeline banavva.... 

        1. timline function no variable banavvo
        2. pachi aa varibale ni madad thi tema alag alag varible ane enimation add kerta javana
*/

        //  var t1 =gsap.timeline();
        //  t1.to(".circle",{y:100 ,duration:1, backgroundColor:"yellow"})
        //    .to(".circle1",{y:100 ,duration:1, backgroundColor:"green"})
        //    .to(".circle2",{y:100 ,duration:1 , backgroundColor:"orange"})
        //    .to(".circle3",{y:100 ,duration:1, backgroundColor:"blue"})

// -----------------------------------------------  uper na program ma joi sakay che k... ---------------------------------------
//------------------------------------t1 variable na time line ma .. first element ni time line khatam thay pachi j..------------
//-------------------------------second element ni time linbe ni saruat thayc he.------------------------------------------------
// -- for example => if first elements duration is 10 sec.. then second element will animate only after 10 sec...


//------------------------------------------ syntax=>  t1.to("element"  , { code } , duration )------------------------------
// var t1 =gsap.timeline();
//         t1.to(".circle",{y:100 , backgroundColor:"yellow"},1)
//         t1.to(".circle1",{y:100 ,backgroundColor:"green"},1)
//         t1.to(".circle2",{y:100 , backgroundColor:"orange"},1)
//         t1.to(".circle3",{y:100 ,backgroundColor:"blue"},1)

// uper na badha event... 1 second pachi.. badha sathe chalu....

        //var t1 =gsap.timeline();

        // t1.to(".circle",{width:150 ,backgroundColor:"green"},"<")
        //                 //--->  "<" aano matlab "end"   .... code no matlb .. aagla na element ni timeline ending ma

        // t1.to(".circle1",{width:150 , backgroundColor:"yellow"}, ">")
        //                 //--->  ">" aano matlba "end"   ... code no matlv.. aagal na element ni timeline starting ma

        // t1.to(".circle2",{width:150 , backgroundColor:"orange"},"+=1")
        //                 //-->   "+=1"   --> = means aagal ni frame pate tyare.... +1 matlav 1 sec extra.... means aagla ni frame pate pachi tena 1 second pachi..


        // t1.to(".circle3",{width:150 ,backgroundColor:"blue"},"-=1")
        //                 //-->   "-=1"   --> = means aagal ni frame pate tyare.... -1 matlav ema 1 sec less .... means aagla ni frame pate tena 1 second pella..

        //       t1.to(".circle3",{width:150 ,backgroundColor:"blue"},">+=1")
        //                 //-->    >  means aagal na element ni timeline starting ma  , +=1 means ... 1 sec pachi  
        
        // t1.to(".circle3",{width:150 ,backgroundColor:"blue"},"<+=1")
        //                 //-->   <  means aagal na element ni timeline ending ma  , +=1 means ... 1 sec pachi

        

//----------------------- badhi timline ne amuk same effect aapvani hoy yare.. individually lakvanni jaga per main timeline ma lakhi sakay


        // var t2 = gsap.timeline({defaults:{x:30 , scale:1 , duration:1}})

        // t2.to(".circṇle",{backgroundColor:"yellow"})
        // t2.to(".circle1",{backgroundColor:"blue"})
        // t2.to(".circle2",{backgroundColor:"black"})
        // t2.to(".circle3",{backgroundColor:"orange"})

//-------------------------------------------------------------------------------------------------------------------------------------------------
