const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]");document.querySelector("body").style.height="400px",t.disable=!0;let l=null;e.addEventListener("click",(()=>{l=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disable=!0,t.disable=!1}));t.addEventListener("click",(()=>{clearInterval(l),e.disable=!1,t.disable=!0}));
//# sourceMappingURL=01-color-switcher.97e02e2c.js.map