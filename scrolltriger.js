gsap.to(".circle1",{ 
                    x:200 ,
        
                    scrollTrigger:{
                                    trigger : ".circle1",
                                    start: "top 30%",   // circle2 nu top(uper no bhag) .....  page na uper na bhage thi 90% niche poche tyare chalu thay...
                                    end:"bottom 10%",  // circle2 nu bottom(niche no bhag)...... page na uper na bhage thi 50% niche poche tyare pati jay...
                                    scrub:0.5           // after animation ma smothness ane sensitivity aalva mate
                                  }
    })


gsap.to(".circle2",{ 
                    x:750 ,
                    
                    scrollTrigger:{
                                    trigger : ".circle2",
                                    start: "top 90%",   // circle2 nu top(uper no bhag)... page na uper na bhage thi 90% niche poche tyare chalu thay...
                                    end:" top 50%",     // circle2 nu top(uper no bhag).... page na uper na bhage thi 50% niche poche tyare pati jay...
                                    scrub:0.5           // after animation ma smothness ane sensitivity aalva mate
                                  }
                    })

                    
