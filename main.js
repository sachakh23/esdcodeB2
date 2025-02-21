// Fonction de modification
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);


gsap.to(".centreradius", {
    scrollTrigger: { //quand on scroll
    trigger: '#section2' , //sur la section 2
    start: 'top 95%' , //au début du scroll
    end:'top 70%', //à la fin du scroll
    scrub: 1, //pour que le scroll soit fluide
    markers: false, //pour que les markers soient cachés
    id: "section1" ,
    toggleActions: 'play none reverse reset',
    },
    rotation: 360, //rotation de l'image
    duration: 2, //durée de l'animation
    })



    gsap.to("#section5", {
        scrollTrigger: { //quand on scroll
        trigger: '#section5' , //sur la section 5
        start: 'top 95%' , //au début du scroll
        end:'top 85%', //à la fin du scroll
        scrub: 1, //pour que le scroll soit fluide
        markers: false, //pour que les markers soient cachés
        id: "section5" ,
        toggleActions: 'play none reverse reset', 
        },
        rotation: 360, //rotation de l'image
        duration: 4, //durée de l'animation
        })


    Draggable. create(".centre" ,{
        bounds: "#section2", // "Ne sort pas de la class ou l'ID nommé ... " 
        dragResistance: 0.5, // Entre 0 et 1
        
        inertia: false, //si on veut que le draggable soit lisse
        cursor: "grab", //quand on clique sur le draggable, il devient un curseur
        
        
        onClick: function(){ //quand on clique sur le draggable
            console. log('Je clic')
        },


        onDrag: function(){ //quand on déplace le draggable
        console. log('Je déplace')
        },

        onDragEnd: function(){ //quand on relache le draggable
        console. log('Je dépose')
        },
        
    });


    Draggable. create(".centre1" ,{
        bounds: "#section3", // "Ne sort pas de la class ou l'ID nommé ... " 
        dragResistance: 0.5, // Entre 0 et 1
        
        inertia: false,
        cursor: "grab",
        
        
        onClick: function(){ //quand on clique sur le draggable
            console. log('Je clic')
        },


        onDrag: function(){ //quand on déplace le draggable
        console. log('Je déplace')
        },

        onDragEnd: function(){ //quand on relache le draggable
        console. log('Je dépose')
        },
        
    });

    Draggable. create(".centre2" ,{
        bounds: "#section4", // "Ne sort pas de la class ou l'ID nommé ... " 
        dragResistance: 0.5, // Entre 0 et 1
        
        inertia: true,
        cursor: "grab",
        
        
        onClick: function(){ //quand on clique sur le draggable
            console. log('Je clic')
        },


        onDrag: function(){ //quand on déplace le draggable
        console. log('Je déplace')
        },

        onDragEnd: function(){ //quand on relache le draggable  
        console. log('Je dépose')
        },
        
    });
        
        
    

gsap.from("centre1", {
    y:'100vh', 
    duration: 1000, 
})

    gsap. to(".h1" , { 
        duration: 45, //durée de l'animation
        motionPath: {
        path: 'M185.5 125C185.5 125 142.066 336.419 228.5 393C353 474.5 538.305 354 483.805 295.5C429.305 237 627.805 108.5 740.805 202C831.205 276.8 982.095 776.5 884.95 916C725.095 1065 424.405 1073.4 514.805 771C627.805 393 -171.05 682.5 549.95 771C1161.45 846.059 -65.4119 1071.98 386.305 1348.5C806.95 1606 1274.72 1166.45 1301.95 743.5C1325.45 378.5 1091.45 199 884.95 125',
        autoRotate: true, 
        }
        } )
