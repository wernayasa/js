let _textArea=document.querySelector("textarea"),_btn=document.querySelector("button");_btn.addEventListener("click",()=>{let e=_textArea.value,t=document.createElement("div");t.innerHTML=e;let r=t.querySelectorAll("img"),c=new Array;r.forEach(e=>c.push(`"${e.src}"`)),_textArea.value=`<div id='readarea'>
  <div id='chapterImage'></div>
  <div id='chapterImageLoad'>
    <i class='fas fa-sync fa-spin'></i></div>
  <span><a name='more'></a></span></div>
  <script type="text/javascript">
const _chapterImage = [${c.join(", ")}]
 </script>`});
