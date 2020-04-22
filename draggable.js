
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
 if(!el.dataset.dx) el.dataset.dx=el.dataset.dy=0
 let x=parseFloat(el.dataset.dx) + event.dx,y=parseFloat(el.dataset.dy) + event.dy
  el.dataset.dx=ceil(x,32),el.dataset.dy=ceil(y,32)
  el.style.webkitTransform =el.style.transform =`translate(${x}px,${y}px)`
})
 
}
;
root.draggable=draggable;
})(this);
