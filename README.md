# draggable

```
//pug
script(src="https://unpkg.com/interactjs/dist/interact.min.js")
script(src="https://gnjo.github.io/draggable/draggable.js")

div.dragsymbol xyz

```
```
//usage
draggable('.dragsymbol',32) //32 is cellsize
```
```
//ghost line
//ghost rect

line delline
rect delrect


let gl=ghostline({},(me)=>{ me.clear() })
gl.stats ='clear' start move stop
gl.grid = 32
gl.color = '#89a'
gl.mode //line or rect
gl.x0
gl.y0
gl.x1
gl.y1
gl.v //N E W S

```


```
loadTile(url,size)=>{
 let o={}
 o.loaded=false
 o.wk=document.createElement('canvas')
 o.wk.width=o.wk.height=size
 o.size=size
 o.ctx=o.wk.getContext('2d');
 o.tiles=[] 
 o.img=new Image();
 o.img.onload=()=>{
 ///
 let ctx=o.ctx,image=o.img,size=o.size
 let cellw=parseInt(image.naturalWidth/size)
 let cellh=parseInt(image.naturalHeight/size)
 for(let y=0;y<cellh;y++)
  for(let x=0,x<cellw;x++){
    ctx.drawImage(image, x*size, y*size, size, size, 0, 0, size, size);
    o.tiles.push(ctx.canvas.toDataURL())
  }
 console.log(o.tiles)
 o.loaded=true 
 ////
 }
 img.src=url;
 return o;
}

```





