var t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "30% 50%",
        scrub: true,
      
    }
})

t1.to("#fanta", {
    top: "110%",
    left: "7%"
}, "orange")
t1.to("#orangeslice", {
    top: "146%",
    left: "22%"
}, "orange")

t1.to("#orange", {
    width: "15%",
    top: "170%",
    right: "12%"
}, "orange")

t1.to("#leaf2", {
    rotateY: "23deg",
    top: "113%",
    left: "85%"
}, "orange")


t1.to("#leaf", {

    top: "108%",
    left: "5%"
}, "orange")


var t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "30% 50%",
        scrub: true,
       
    }
})



t2.from("#cocacola", {
    rotate: "-90deg",
    left: "-50%",
    top: "110%",
}, "coca")

t2.from("#pepsi", {
    rotate: "90deg",
    
    top: "110%",
}, "coca")



t2.to("#orangeslice", {
   left:"42%",
   top:"206%",
   width:"15%"
}, "coca")

t2.to("#fanta", {
   top:"215%",
   left:"38%",
   width:"23%"
}, "coca")




