# draggable

```
//pug
script(src="https://unpkg.com/interactjs/dist/interact.min.js")
script(src="https://gnjo.github.io/draggable/draggable.js")

div.dragsymbol xyz

```
```
//usage
draggable('.dragsymbol')
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


