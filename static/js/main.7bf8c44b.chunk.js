(this["webpackJsonp07062020-mintbean"]=this["webpackJsonp07062020-mintbean"]||[]).push([[0],{22:function(e,t,a){e.exports=a(61)},27:function(e,t,a){},53:function(e,t){},54:function(e,t){},55:function(e,t){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),o=a.n(i),l=a(5),s=a(6),c=a(8),u=a(7),m=(a(27),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"wrapper title"},r.a.createElement("h1",null,"\ud83d\uddbcLorem Editsum  ",r.a.createElement("a",{href:"w",target:"_blank",rel:"noopener noreferrer"},"by MM")),r.a.createElement("p",null,"Ever want a quick way to find a relevant placeholder image and be able to edit it."),r.a.createElement("p",null,"Now you can with Lorem Editsum. Find an image, click and edit away!"))}}]),a}(n.Component)),d=a(20),h=a.n(d),g=(a(18),a(3)),p=(a(45),a(21)),f=a.n(p),y={},b=function(e){return r.a.createElement(f.a,{includeUI:{loadImage:{path:e.image,name:"SampleImage"},theme:y,menu:["shape","filter"],initMenu:"filter",uiSize:{width:"100%",height:"700px"},menuBarPosition:"bottom"},cssMaxHeight:500,cssMaxWidth:700,selectionStyle:{cornerSize:20,rotatingPointOffset:70},usageStatistics:!0,className:"ImageSpacing"})},v=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleSubmit=function(t){t.preventDefault(),""===e.state.query?g.b.error("No input detected \u2328 \ud83e\ude93",{position:"bottom-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0,className:"toast-alert"}):(e.setState({querySubmit:e.state.query}),""!==e.state.userInput&&e.setState({query:""},(function(){return e.performSearch()})))},e.performSearch=function(){h()({method:"GET",url:"https://api.unsplash.com/search/photos",params:{client_id:"yF191mMX1BOr1RZhtWzXK7e6mPRcKr930GQ9UxhkvJ4",query:e.state.querySubmit}}).then((function(t){console.log(t),0===t.data.total?g.b.error("No results found for your query",{position:"bottom-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0,className:"toast-alert"}):e.setState({images:t.data.results,imageChosen:""})}))},e.handleUserInput=function(t){e.setState({query:t.target.value})},e.handleImageClick=function(t){t.preventDefault(),e.setState({imageChosen:t.target.src})},e.photoQualityRegular=function(){e.setState({imageQuality:"regular"}),g.b.error("Image quality changed to Regular\ud83d\ude0c",{position:"bottom-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0,className:"toast-alert"})},e.photoQualityFull=function(){e.setState({imageQuality:"full"}),g.b.error("Image quality changed to Full! Gonna be HUGE!\ud83e\udd2a",{position:"bottom-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0,className:"toast-alert"})},e.state={query:"",images:[],querySubmit:"",imageChosen:"",imageQuality:""},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",null,r.a.createElement("p",{className:"qualityText"},"Change Picture Quality (Default is Regular)"),r.a.createElement("div",null,r.a.createElement("button",{className:"qualityButton",onClick:this.photoQualityFull},"Full"),r.a.createElement("button",{className:"qualityButton",onClick:this.photoQualityRegular},"Regular/Default")),r.a.createElement("form",{action:"",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"queryName",className:"visuallyHidden"},"enter query:"),r.a.createElement("input",{type:"text",id:"queryName",name:"queryName",placeholder:"Search for an image to edit!",value:this.state.userInput,onChange:this.handleUserInput}),r.a.createElement("button",{type:"submit",id:"queryButton","aria-label":"submit search"},"?"))),r.a.createElement(g.a,null),""!==this.state.imageChosen?r.a.createElement(b,{image:this.state.imageChosen}):"full"===this.state.imageQuality?r.a.createElement("div",{className:"imageGrid"},this.state.images.map((function(t){return r.a.createElement("div",{className:"imageContainer"},r.a.createElement("img",{onClick:e.handleImageClick,key:"".concat(t.id),id:"".concat(t.id),src:"".concat(t.urls.full),alt:"".concat(t.alt_description)}))}))):r.a.createElement("div",{className:"imageGrid"},this.state.images.map((function(t){return r.a.createElement("div",{className:"imageContainer"},r.a.createElement("img",{onClick:e.handleImageClick,key:"".concat(t.id),id:"".concat(t.id),src:"".concat(t.urls.regular),alt:"".concat(t.alt_description)}))}))))}}]),a}(n.Component);a(60);var E=function(){return r.a.createElement("div",{className:"AppWrapper"},r.a.createElement(m,null),r.a.createElement("div",{className:"ContentWrapper"},r.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.7bf8c44b.chunk.js.map