
;(function(root){
if(!root.interact)return console.log('need interact')
;
function draggable(query){
return interact(query)
.draggable({
  modifiers: [
    interact.modifiers.snap({
      targets: [interact.createSnapGrid({ x: 32, y: 32 })]
    })]    
})
.on('dragmove', function (event) {
 let el=event.target
 if(!el.dx) el.dx=el.dy=0
 let x=parseFloat(el.dx) + event.dx,y=parseFloat(el.dy) + event.dy
  el.dx=x,el.dy=y
  el.style.webkitTransform =el.style.transform =`translate(${x}px,${y}px)`
})
}
;
root.draggalbe=draggable;
})(this);
