
;(function(root){
if(!root.interact)return console.log('need interact')
;
function ceil(v,unit){
 let a=v%unit,add=unit*parseInt(a/(unit/2))
 return v-a+add
}

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
  el.dx=ceil(x,32),el.dy=ceil(y,32)
  el.style.webkitTransform =el.style.transform =`translate(${x}px,${y}px)`
})
}
;
root.draggable=draggable;
})(this);
