(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{87:function(t,o,a){"use strict";a.r(o),a.d(o,"ion_backdrop",(function(){return r}));var i=a(7),s=a(4),c=a(11),n=a(28);const r=class{constructor(t){Object(i.l)(this,t),this.lastClick=-1e4,this.blocker=n.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0,this.ionBackdropTap=Object(i.f)(this,"ionBackdropTap",7)}connectedCallback(){this.stopPropagation&&this.blocker.block()}disconnectedCallback(){this.blocker.unblock()}onTouchStart(t){this.lastClick=Object(c.i)(t),this.emitTap(t)}onMouseDown(t){this.lastClick<Object(c.i)(t)-2500&&this.emitTap(t)}emitTap(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}render(){const t=Object(s.b)(this);return Object(i.j)(i.b,{tabindex:"-1",class:{[t]:!0,"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}})}};r.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}}}]);