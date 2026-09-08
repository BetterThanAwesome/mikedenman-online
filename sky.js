(() => {
const canvas=document.getElementById('sky'),ctx=canvas.getContext('2d');ctx.imageSmoothingEnabled=false;let t=0;
function resize(){const s=8;canvas.width=Math.max(90,Math.floor(innerWidth/s));canvas.height=Math.max(60,Math.floor(innerHeight/s));}
function rgb(h){const n=parseInt(h.replace('#',''),16);return[(n>>16)&255,(n>>8)&255,n&255]}
function draw(){const cs=getComputedStyle(document.documentElement),p=rgb(cs.getPropertyValue('--pink').trim()||'#ff2baa'),c=rgb(cs.getPropertyValue('--cyan').trim()||'#37ecff'),b=rgb(cs.getPropertyValue('--bg').trim()||'#050407'),img=ctx.createImageData(canvas.width,canvas.height);
for(let y=0;y<canvas.height;y++)for(let x=0;x<canvas.width;x++){const i=(y*canvas.width+x)*4,n=(Math.sin(x*.14+t)+Math.cos(y*.11-t*.4)+Math.sin((x+y)*.055+t*.3))/3,cloud=n>.18+(y/canvas.height)*.12;if(cloud){img.data[i]=c[0];img.data[i+1]=c[1];img.data[i+2]=c[2];img.data[i+3]=100}else{const m=.12+.09*Math.sin((x-y)*.08);img.data[i]=b[0]*(1-m)+p[0]*m;img.data[i+1]=b[1]*(1-m)+p[1]*m;img.data[i+2]=b[2]*(1-m)+p[2]*m;img.data[i+3]=180}}
ctx.putImageData(img,0,0);t+=.006;requestAnimationFrame(draw)}
addEventListener('resize',resize);resize();draw();
})();