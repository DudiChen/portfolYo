(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"startInputShims",(function(){return f}));var o=n(11);const r=new WeakMap,i=(e,t,n,o=0)=>{r.has(e)!==n&&(n?a(e,t,o):c(e,t))},s=e=>e===e.getRootNode().activeElement,a=(e,t,n)=>{const o=t.parentNode,i=t.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o.appendChild(i),r.set(e,i);const s="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${s}px,${n}px,0) scale(0)`},c=(e,t)=>{const n=r.get(e);n&&(r.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},l="input, textarea, [no-blur]",d=(e,t,n,o)=>{const r=e.top,i=e.bottom,s=t.top,a=s+15,c=.5*Math.min(t.bottom,o-n)-i,l=a-r,d=Math.round(c<0?-c:l>0?-l:0),u=Math.min(d,r-s),m=Math.abs(u)/.3;return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,m)),scrollPadding:n,inputSafeY:4-(r-a)}},u=(e,t,n,o)=>{const r=((e,t,n)=>{const o=e.closest("ion-item,[ion-item]")||e;return d(o.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)})(e,n,o);if(Math.abs(r.scrollAmount)<4)t.focus();else if(i(e,t,!0,r.inputSafeY),t.focus(),"undefined"!=typeof window){let o;const s=async()=>{void 0!==o&&clearTimeout(o),window.removeEventListener("resize",s),await n.scrollByPoint(0,r.scrollAmount,r.scrollDuration),i(e,t,!1,r.inputSafeY),t.focus()};window.addEventListener("resize",s),o=setTimeout(s,1e3)}},m=(e,t,n)=>{if(t&&n){const o=t.x-n.x,r=t.y-n.y;return o*o+r*r>e*e}return!1},p=(e,t)=>{if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if(e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)return;const n=e.closest("ion-content");if(null===n)return;const o=n.$ionPaddingTimer;o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset",t+"px"):n.$ionPaddingTimer=setTimeout(()=>{n.style.setProperty("--keyboard-offset","0px")},120)},f=e=>{const t=document,n=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),a=e.getBoolean("hideCaretOnScroll",!0),c=e.getBoolean("inputBlurring",!0),d=e.getBoolean("scrollPadding",!0),f=Array.from(t.querySelectorAll("ion-input, ion-textarea")),v=new WeakMap,E=new WeakMap,g=async e=>{e.componentOnReady&&await e.componentOnReady();const t=e.shadowRoot||e,c=t.querySelector("input")||t.querySelector("textarea"),l=e.closest("ion-content");if(c){if(l&&a&&!v.has(e)){const t=((e,t,n)=>{if(!n||!t)return()=>{};const o=n=>{s(t)&&i(e,t,n)},r=()=>i(e,t,!1),a=()=>o(!0),c=()=>o(!1);return n.addEventListener("ionScrollStart",a),n.addEventListener("ionScrollEnd",c),t.addEventListener("blur",r),()=>{n.removeEventListener("ionScrollStart",a),n.removeEventListener("ionScrollEnd",c),t.addEventListener("ionBlur",r)}})(e,c,l);v.set(e,t)}if(l&&r&&!E.has(e)){const t=((e,t,n,r)=>{let i;const a=e=>{i=Object(o.j)(e)},c=a=>{if(!i)return;const c=Object(o.j)(a);m(6,i,c)||s(t)||(a.preventDefault(),a.stopPropagation(),u(e,t,n,r))};return e.addEventListener("touchstart",a,!0),e.addEventListener("touchend",c,!0),()=>{e.removeEventListener("touchstart",a,!0),e.removeEventListener("touchend",c,!0)}})(e,c,l,n);E.set(e,t)}}};c&&(()=>{let e=!0,t=!1;const n=document,o=()=>{t=!0},r=()=>{e=!0},i=o=>{if(t)return void(t=!1);const r=n.activeElement;if(!r)return;if(r.matches(l))return;const i=o.target;i!==r&&(i.matches(l)||i.closest(l)||(e=!1,setTimeout(()=>{e||r.blur()},50)))};n.addEventListener("ionScrollStart",o),n.addEventListener("focusin",r,!0),n.addEventListener("touchend",i,!1)})(),d&&(e=>{const t=document,n=t=>{p(t.target,e)},o=e=>{p(e.target,0)};t.addEventListener("focusin",n),t.addEventListener("focusout",o)})(n);for(const e of f)g(e);t.addEventListener("ionInputDidLoad",e=>{g(e.detail)}),t.addEventListener("ionInputDidUnload",e=>{(e=>{if(a){const t=v.get(e);t&&t(),v.delete(e)}if(r){const t=E.get(e);t&&t(),E.delete(e)}})(e.detail)})}}}]);