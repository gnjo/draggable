
;(function(root){
if(!root.interact)return console.log('need interact')
;
function ceil(v,unit){
 let a=v%unit,add=unit*parseInt(a/(unit/2))
 return v-a+add
}

function draggable(query,size){
 size=size||32
return interact(query)
.draggable({
  modifiers: [
    interact.modifiers.snap({
      targets: [interact.createSnapGrid({ x: size, y: size })]
    })]    
})
.on('dragmove', function (event) {
 let el=event.target
 if(!el.dataset.dx) el.dataset.dx=el.dataset.dy=0
 let x=parseFloat(el.dataset.dx) + event.dx,y=parseFloat(el.dataset.dy) + event.dy
  el.dataset.dx=ceil(x,size),el.dataset.dy=ceil(y,size)
  el.style.webkitTransform =el.style.transform =`translate(${x}px,${y}px)`
})
 
}
;
root.draggable=draggable;
})(this);
