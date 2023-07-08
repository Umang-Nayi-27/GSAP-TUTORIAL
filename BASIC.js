/////////////////////////////////////////////  gsap.to()  /////////////////////////////////////////////////////

// gsap.to(".circle",{x:500 ,})                 // MOVE CIRCLE FOR 500PX IN X AXIS ONLY ONCE

// gsap.to(".circle",{x:500 , repeat:-1})      // MOVE CIRCLE FOR 500PX IN X AXIS FOR INFINITE TIMES


////////////////////////////////////////////  gsap.from()  ///////////////////////////////////////////////////////

//gsap.from(".circle",{x:500 })               // MOVE CIRCLE FORM 500PX to DEFAULT POSITION IN X AXIS ONLY ONCE\\

//gsap.from(".circle",{x:500  , repeat:-1})   // MOVE CIRCLE FORM 500PX to DEFAULT POSITION IN X AXIS FOR INFINITE TIMES 



///////////////////////////////////////////  gsap.fromTo()  ///////////////////////////////////////////////////

// gsap.fromTo(".circle",{x:-500,backgroundColor: 'black', duration:2},{x:500 ,backgroundColor: 'pink',duration:2 })     // start from -500 and ends with the 500px on x-axis



//////////////////////////////////////////  gsap.set()  ///////////////////////////////////////////////////

// gsap.set(".circle",{x:500 , backgroundColor: 'blue'})                 // transition will not occur... circle directly shifted to 500px in x axis



//------------------------------------------------------------------------------------------------------------
///////////----------NOTES FOR color Changing --------------//////////////////////////////////////////////////
/*
        background color change kerva { backgroundColor:'' } vapray che
        jyare...
        color evu change kervu hoy to {fill :'' }  vapraya che.
*/


/////////////////////////////////  rotation , duration  ////////////////////////////////////////////////////////////////

// gsap.to(".circle",{rotation:180 ,backgroundColor:"black" , repeat:5,duration:5, yoyo:true })

//===> gsap e by default deg ane px ni value ley che, etle aa values ne "" , '' ma levani jaroor nath, but other values like vw,rad mate "" , '' vaprvu pade


//////////////////////////////  repeat ----> aa je animation che tene simpaly number of times perform kerse...
//                                      -- -> aani value   number ma aavse .... eg::-    repeat:3

/////////////////////////////   yoyo  ---> aa repeat sathe vapray che.
//                                    ---> repeat : 5 , hase to ... 1 var je rite code ma kidhu che te rite animation... ane pachi ena opposite ma animation ...... hichka jevu.
//                                      --> aani value true false ma aavse ...  eg::-    yoyo:true


/////////////////////////////   delay ---> animation start ketlu late keravu che tena amate vapray che.
//                                      --> value number ma aapvani.....      eg ::- delay:5         --> animation 5 sec pachi satrt thase.

//                              repeatDelay ---> jo task repeat thato hoy ane tema darek repeat pachi delay kervu hoy tyare vaprya che.
//                                              -->                             eg::  repeatdelay:5


/////////////////////////////// ease ---> transition ni pace(speed) set kerva mate vapray che...
/*                                      --> different values  che ....  -> none , power1  , power2  , power3  ,  power4  , back  ,elastic  ,bounce  ,rough  ,slow  ,steps  ,circ  ,expo  sine  ,Custom
                                        --> ane aani sub values pan che .... ->   in , out , inOut

                                        --> eg:   ease:none             // liner...same speed
                                                  ease:power1.in        // starting ma effect
                                                  ease:power1.out       // ending ma effect
                                                  ease:power1.inOut     // start - end banne ma effect.
*/

//gsap.to(".circle",{rotation:180 ,backgroundColor:"black" , duration:3, ease:"power3.in" })
//gsap.to(".circle",{rotation:180 ,backgroundColor:"black" , duration:3, ease:"power3.out" })
//gsap.to(".circle",{rotation:180 ,backgroundColor:"black" , duration:3, ease:"back.inOut" })
