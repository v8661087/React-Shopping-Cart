(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),s=(a(16),a(7)),l=a(6),i=a(1),p=a(2),m=a(4),d=a(3),u=a(5),h=(a(17),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1},a.handleModal=function(){a.setState({modal:!a.state.modal})},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.product.quantity?"warning":"primary"}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"product"},r.a.createElement("img",{className:"product-image",src:this.props.product.src,alt:this.props.product.name,onClick:this.handleModal}),r.a.createElement("div",null,this.props.product.name),r.a.createElement("div",null,r.a.createElement("p",null,"$",this.props.product.price),r.a.createElement("button",{onClick:function(){return e.props.onDecrement(e.props.product)},className:"increment-and-decrement"},"\uff0d"),r.a.createElement("span",{className:this.getBadgeClasses()},this.props.product.quantity),r.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.product)},className:"increment-and-decrement"},"\uff0b"),r.a.createElement("p",null,r.a.createElement("button",{type:"button",onClick:function(){return e.props.onAdd(e.props.product)},className:"add-to-cart-button"},"\u52a0\u5230\u8cfc\u7269\u8eca")))),this.state.modal?r.a.createElement("div",{className:"modal",onClick:this.handleModal},r.a.createElement("div",{class:"modal-content"},r.a.createElement("span",{class:"close",onClick:this.handleModal},"\xd7"),r.a.createElement("img",{className:"modal-product-image",src:this.props.product.src,alt:this.props.product.name}))):"")}}]),t}(n.Component)),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.products,a=e.onAdd,n=e.onIncrement,c=e.onDecrement;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"product-list"},t.map(function(e){return r.a.createElement(h,{key:e.id,product:e,onDecrement:c,onIncrement:n,onAdd:a})})))}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{className:"product-image-cart",src:this.props.product.src,alt:this.props.product.name}),r.a.createElement("div",{className:"product-info"},r.a.createElement("p",{className:"product-name"},this.props.product.name),r.a.createElement("p",{className:"product-price"},"$",this.props.product.price)),r.a.createElement("div",{className:"product-total"},r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){return e.props.onDecrement(e.props.product)},className:"increment-and-decrement"},"\uff0d"),r.a.createElement("span",{className:this.getBadgeClasses()},this.props.product.quantity),r.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.product)},className:"increment-and-decrement"},"\uff0b")),r.a.createElement("p",null,"\u7e3d\u8a08$",this.props.product.price*this.props.product.quantity)),r.a.createElement("a",{onClick:function(){return e.props.onDelete(e.props.product.id)},className:"product-delete",href:"#1"},"x"))}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.product.quantity?"warning":"primary"}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={showCart:!1},a.handleCart=function(){a.setState({showCart:!a.state.showCart})},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cart,a=e.onIncrement,n=e.onDecrement,c=e.onDelete;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"#top"},"Pokemon")),r.a.createElement("div",{className:"shopping-cart"},r.a.createElement("button",{onClick:this.handleCart,className:"shopping-cart-button"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2/2772.svg",alt:"shopping-cart-icon",width:"30"}),r.a.createElement("span",{className:"shopping-cart-badge"},t.length))),this.state.showCart?r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"triangle"}),0===t.length?r.a.createElement("div",null,r.a.createElement("div",{className:"product-none"},r.a.createElement("p",null,"\u76ee\u524d\u6c92\u6709\u5546\u54c1")),r.a.createElement("button",{type:"button",className:t.length>0?" ":"disabled",disabled:0===t.length},"\u7d50\u5e33")):r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(g,{key:e.id,product:e,onIncrement:a,onDecrement:n,onDelete:c})}),r.a.createElement("b",null,"\u7e3d\u8cfc\u8cb7\u91d1\u984d$",t.reduce(function(e,t){return e+t.quantity*t.price},0)),r.a.createElement("div",null,r.a.createElement("button",{className:"check-out"},"\u7d50\u5e33")))):"")}}]),t}(n.Component),E=function(){return r.a.createElement("footer",{className:""},r.a.createElement("div",{className:"footer-links"},r.a.createElement("a",{href:"123"},"View Source on Github")),r.a.createElement("div",{className:"copyright"},"\xa9 2019 ",r.a.createElement("b",null,"Pokemon")))},y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={cart:[],term:"",products:[{id:1,name:"\u76ae\u5361\u4e18",price:100,quantity:1,src:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/2b3f6ff00db7a1efae21d85cfb8995eaff2da8d8.png"},{id:2,name:"\u5091\u5c3c\u9f9c",price:200,quantity:1,src:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png"},{id:3,name:"\u516d\u5c3e",price:300,quantity:1,src:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/f285c634efd141918f6ad066a6f59c20746d9050.png"},{id:4,name:"\u5999\u86d9\u7a2e\u5b50",price:400,quantity:1,src:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png"},{id:5,name:"\u5c0f\u706b\u9f8d",price:500,quantity:1,src:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png"},{id:6,name:"\u706b\u72d0\u72f8",price:600,quantity:1,src:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/466cc6aa93526c3b9038c11f1a0192e4eadc0761.png"},{id:7,name:"\u5361\u8482\u72d7",price:700,quantity:1,src:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/333e2aef290059dc46274b77ea4095094784316a.png"},{id:8,name:"\u8ff7\u5507\u59d0",price:800,quantity:1,src:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/8838c65ba52945317cda0d31f8de760860dd71ec.png"},{id:9,name:"\u9bc9\u9b5a\u738b",price:900,quantity:1,src:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/3755f6d1176c7f8c64f663dae13ef9f1406d007a.png"}]},a.handleIncrement=function(e){var t=Object(l.a)(a.state.cart),n=t.indexOf(e);t[n]=Object(s.a)({},e),t[n].quantity++,a.setState({cart:t})},a.handleIncrement2=function(e){var t=Object(l.a)(a.state.products),n=t.indexOf(e);t[n]=Object(s.a)({},e),t[n].quantity++,a.setState({products:t})},a.handleDecrement=function(e){var t=Object(l.a)(a.state.cart),n=t.indexOf(e);t[n]=Object(s.a)({},e),1!==t[n].quantity&&(t[n].quantity--,a.setState({cart:t}))},a.handleDecrement2=function(e){var t=Object(l.a)(a.state.products),n=t.indexOf(e);t[n]=Object(s.a)({},e),1!==t[n].quantity&&(t[n].quantity--,a.setState({products:t}))},a.handleDelete=function(e){var t=a.state.cart.filter(function(t){return t.id!==e});a.setState({cart:t})},a.handleAdd=function(e){var t=a.state.cart;if(t.some(function(t){return t.id===e.id})){var n=t.findIndex(function(t){return t.id===e.id});t[n].quantity+=e.quantity,a.setState({cart:t})}else t[t.length]=e,console.log(t);a.setState({cart:t})},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{cart:this.state.cart,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,AddCart:this.handleCart,handleSearch:this.handleSearch}),r.a.createElement(f,{products:this.state.products,onDecrement:this.handleDecrement2,onIncrement:this.handleIncrement2,onAdd:this.handleAdd}),r.a.createElement(E,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.4a0b5660.chunk.js.map