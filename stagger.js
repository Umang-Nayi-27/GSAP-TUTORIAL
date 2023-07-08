//gsap.to(".circle",{x:50 ,stagger:0.3 , repeat:-1 , yoyo: true , ease:"power1.inOut"})

// simple stagger example here..... 
/*
        what we coded here is   ....  move cirlce to 50px in x aixs.
        after that .... stagger 0.3 kidhu..... means k... jetla bi eelement class="circle ma che"... te badha 50px sudhi khasse ek pachi ek 0.3 sec pachi...
 */

//..stagger internal properties. . . . . .
/*
    --> stagger animation ma changes kerva mate vaprya che
    --> grid : [number of rows , number of collumn]
                --> stagger ne animation ma samjva ma vaprya che.
                --> jo number na aapva hoy to    grid:"auto"   vapri levu..
                --> gsap ma internal fuinction che te automatic grid rows and collum count keri nakhe che ene according perform kere che

    --> from : "center" , "end" , "edges" ,"random" ,"index number"
                --> staggering kyathi satrt kervu te keva mate vapray che.

    --> amount : total animation time
                    --> amount:1    --> jo 10 element hase to ... darek elemnt ne  ( 1sec/10 )  = 0.1sec time malse 

    --> each  :  darek element na animation no time
                    --> each:1      --> darek element ne 1sec no time malse.
 */
//-------------------------------------------------------------  NOTICE DIFFERENCE ----------------------------------

                //    gsap.to(".circle",{x:50 ,stagger:{grid:"auto",amount:0.1} })

                    
                //    gsap.to(".circle",{x:50 ,stagger:{grid:"auto",amount:1} })

                    
                //    gsap.to(".circle",{x:50 ,stagger:{grid:"auto",amount:10} })

//------------------------------------------------------------- NOTICE DIFFERENCE ------------------------------------
                
                //  gsap.to(".circle",{x:50 ,stagger:{grid:"auto",each:0.1} })

                
                //  gsap.to(".circle",{x:50 ,stagger:{grid:"auto",each:1} })

                
                //  gsap.to(".circle",{x:50 ,stagger:{grid:"auto",each:3} })

//------------------------------------------------------------- NOTICE DIFFERENCE ------------------------------------
               
                //  gsap.to(".circle",{x:50 ,stagger:{grid:"auto",each:0.1, from: "center"} })

                //  gsap.to(".circle",{x:50 ,stagger:{grid:"auto",each:0.1, from: "edges"} })
                
                //  gsap.to(".circle",{x:50 ,stagger:{grid:"auto",each:0.1, from: "start"} })
                
                //  gsap.to(".circle",{x:50 ,stagger:{grid:"auto",each:0.1, from: "random"} })
