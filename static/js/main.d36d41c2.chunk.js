(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(41)},34:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),l=(a(34),a(1)),s=a(2),p=a(4),i=a(3),u=a(5),d=(a(35),a(14)),m=a(11),h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,value:a.props.product.quantity},a.handleModal=function(){a.setState({modal:!a.state.modal}),"hidden"===document.body.style.overflow?document.body.style.overflow="auto":document.body.style.overflow="hidden"},a.handleChange=function(e){e.target.value=e.target.value.replace(/^0|\D/g,"");e.target.value>99&&(e.target.value=99),""===e.target.value?a.props.product.quantity=e.target.value:a.props.product.quantity=parseInt(e.target.value),a.setState({value:a.props.product.quantity})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"product"},r.a.createElement("img",{className:"product__image",src:this.props.product.src,alt:this.props.product.name,onClick:this.handleModal}),r.a.createElement("div",{className:"product__name"},this.props.product.name),r.a.createElement("div",null,r.a.createElement("p",{className:"product__unit-price"},"$",this.props.product.price),r.a.createElement("button",{onClick:function(){return e.props.onDecrement(e.props.product)},className:"product__button"},"\uff0d"),r.a.createElement("input",{className:"product__input",value:this.props.product.quantity,onChange:this.handleChange}),r.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.product)},className:"product__button"},"\uff0b"),r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){return e.props.onAdd(e.props.product)},className:"product-action__button"},"\u52a0\u5165\u8cfc\u7269\u8eca")))),this.state.modal?r.a.createElement("div",{className:"modal",onClick:this.handleModal},r.a.createElement("div",{className:"modal-content"},r.a.createElement("span",{className:"modal__close",onClick:this.handleModal},"\xd7"),r.a.createElement("img",{className:"modal-product__image",src:this.props.product.src,alt:this.props.product.name}),r.a.createElement("div",null,this.props.product.name))):"")}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.products,a=e.onAdd,n=e.onIncrement,c=e.onDecrement;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"products"},t.map(function(e){return r.a.createElement(h,{key:e.id,product:e,onDecrement:c,onIncrement:n,onAdd:a})})))}}]),t}(n.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{className:"cart-item-image",src:this.props.product.src,alt:this.props.product.name}),r.a.createElement("div",{className:"cart-item-name"},this.props.product.name),r.a.createElement("div",{className:"cart-item-total"},r.a.createElement("p",null,r.a.createElement("b",{className:"total-price"},"$",this.props.product.price)," x"," ",this.props.product.quantity),r.a.createElement("button",{onClick:function(){return e.props.onDelete(e.props.product)},className:"cart-item__action"},"\u522a\u9664")))}}]),t}(n.Component),v=a(13),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={showCart:!1},a.handleCart=function(){a.setState({showCart:!a.state.showCart})},a.handleCartOpen=function(){a.setState({showCart:!0})},a.handleCartClose=function(){a.setState({showCart:!1})},a.scrollTop=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cart,a=e.onIncrement,n=e.onDecrement,c=e.onDelete;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo",onClick:this.scrollTop},r.a.createElement("img",{className:"logo-image",src:"./images/pokeball.png",alt:"pokeball"}),"Pokemon"),r.a.createElement("div",{className:"cart-drawer",onClick:this.handleCart,onMouseEnter:this.handleCartOpen,onMouseLeave:this.handleCartClose},r.a.createElement("button",{className:"cart-drawer-button"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2/2772.svg",alt:"cart-drawer-icon",width:"30"}),r.a.createElement("span",{className:"cart-drawer-badge"},t.length))),this.state.showCart?r.a.createElement("div",{className:"cart-drawer-content",onMouseEnter:this.handleCartOpen,onMouseLeave:this.handleCartClose},r.a.createElement("div",{className:"cart-drawer-triangle"}),0===t.length?r.a.createElement("div",null,r.a.createElement("div",{className:"cart-drawer--empty"},r.a.createElement("img",{src:"./images/smile.png",alt:"smile",className:"cart-drawer--empty__image"}),r.a.createElement("p",null,"\u5c1a\u7121\u5546\u54c1"))):r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(g,{key:e.id,product:e,onIncrement:a,onDecrement:n,onDelete:c})}),r.a.createElement("div",null,r.a.createElement(v.b,{to:"/checkout"},r.a.createElement("button",{className:"cart-drawer-link__button"},"\u67e5\u770b\u6211\u7684\u8cfc\u7269\u8eca"))))):"")}}]),t}(n.Component),E=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-links"},r.a.createElement("a",{href:"https://github.com/v8661087/react-shopping-cart"},"View Source on Github")),r.a.createElement("div",{className:"footer-copyright"},"\xa9 2019 ",r.a.createElement("b",null,"Pokemon")))},y=a(15),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={showAddToCart:!1},a.handleIncrement=function(e){var t=Object(m.a)(a.props.data.cart),n=Object(m.a)(a.props.data.products);e.quantity++,a.setState({cart:t,products:n})},a.handleDecrement=function(e){var t=Object(m.a)(a.props.data.cart),n=Object(m.a)(a.props.data.products);e.quantity>1&&(e.quantity--,a.setState({cart:t,products:n}))},a.handleDelete=function(e){var t=a.props.data.cart,n=t.indexOf(e);-1!==n&&(t.splice(n,1),a.setState({cart:t}))},a.handleAdd=function(e){var t=a.props.data.cart;if(""===e.quantity&&(e.quantity=1),t.some(function(t){return t.id===e.id})){var n=t.findIndex(function(t){return t.id===e.id});t[n].quantity+=Number(e.quantity),a.setState({cart:t})}else t[t.length]=JSON.parse(JSON.stringify(e));a.setState({cart:t,showAddToCart:!0}),setTimeout(function(){return a.setState({cart:t,showAddToCart:!1})},1500)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.title="Pokemon"}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{cart:this.props.data.cart,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,handleSearch:this.handleSearch}),r.a.createElement(f,{products:this.props.data.products,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onAdd:this.handleAdd}),r.a.createElement(E,null),this.state.showAddToCart?r.a.createElement("div",{className:"product-added"},r.a.createElement("div",null,r.a.createElement("img",{src:"./images/checkmark.png",alt:"checkmark",width:"150"})),r.a.createElement("div",null,"\u5546\u54c1\u5df2\u52a0\u5165\u8cfc\u7269\u8eca")):"")}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(_,{data:this.props.data})}}]),t}(n.Component),N=Object(y.b)(function(e){return{data:e}})(k),O=a(20),w={cart:[{id:1,name:"\u76ae\u5361\u4e18",price:100,quantity:1,src:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/2b3f6ff00db7a1efae21d85cfb8995eaff2da8d8.png"}],products:[{id:1,name:"\u76ae\u5361\u4e18",price:100,quantity:1,src:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/2b3f6ff00db7a1efae21d85cfb8995eaff2da8d8.png"},{id:2,name:"\u5091\u5c3c\u9f9c",price:200,quantity:1,src:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png"},{id:3,name:"\u516d\u5c3e",price:300,quantity:1,src:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/f285c634efd141918f6ad066a6f59c20746d9050.png"},{id:4,name:"\u5999\u86d9\u7a2e\u5b50",price:400,quantity:1,src:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png"},{id:5,name:"\u5c0f\u706b\u9f8d",price:500,quantity:1,src:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png"},{id:6,name:"\u706b\u72d0\u72f8",price:600,quantity:1,src:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/466cc6aa93526c3b9038c11f1a0192e4eadc0761.png"},{id:7,name:"\u5361\u8482\u72d7",price:700,quantity:1,src:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/333e2aef290059dc46274b77ea4095094784316a.png"},{id:8,name:"\u8ff7\u5507\u59d0",price:800,quantity:1,src:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/8838c65ba52945317cda0d31f8de760860dd71ec.png"},{id:9,name:"\u9bc9\u9b5a\u738b",price:900,quantity:1,src:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/3755f6d1176c7f8c64f663dae13ef9f1406d007a.png"}]};window.Data=w;var j=Object(O.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return(arguments.length>1?arguments[1]:void 0).type,e});window.store=j;var C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={alert:!1,value:a.props.product.quantity},a.handleAlert=function(){a.setState({alert:!a.state.alert}),"hidden"===document.body.style.overflow?document.body.style.overflow="auto":document.body.style.overflow="hidden"},a.handleChange=function(e){a.props.onChange(a.props.product),e.target.value=e.target.value.replace(/^0|\D/g,"");e.target.value>99&&(e.target.value=99),""===e.target.value?a.props.product.quantity=e.target.value:a.props.product.quantity=parseInt(e.target.value),a.setState({value:a.props.product.quantity})},a.handleBlur=function(e){""===e.target.value&&(a.props.product.quantity=1),a.props.onChange(a.props.product)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cart-page-item"},r.a.createElement("div",{className:"cart-page-product-header__product"},r.a.createElement("div",null,r.a.createElement("img",{className:"cart-page-product-header__product-image",src:this.props.product.src,alt:this.props.product.name})),r.a.createElement("div",null," ",this.props.product.name)),r.a.createElement("div",{className:"cart-page-product-header__unit-price"},"$",this.props.product.price),r.a.createElement("div",{className:"cart-page-product-header__quantity"},r.a.createElement("button",{onClick:function(){return e.props.onDecrement(e.props.product)},className:"product__button"},"\uff0d"),r.a.createElement("input",{className:"product__input",value:this.props.product.quantity,onChange:this.handleChange,onBlur:this.handleBlur}),r.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.product)},className:"product__button"},"\uff0b")),r.a.createElement("div",{className:"cart-page-product-header__total-price total-price"},"$",this.props.product.price*this.props.product.quantity),r.a.createElement("div",{className:"cart-page-product-header__action"},r.a.createElement("button",{onClick:this.handleAlert,className:"cart-page-product-header__action-button"},"\u522a\u9664"))),r.a.createElement(r.a.Fragment,null,this.state.alert?r.a.createElement("div",{className:"popup"},r.a.createElement("div",{className:"popup-content"},r.a.createElement("div",{className:"popup-content__title"},"\u4f60\u78ba\u5b9a\u8981\u79fb\u9664\u9019\u500b\u5546\u54c1\u55ce\uff1f"),r.a.createElement("div",{className:"popup-content__message"},this.props.product.name),r.a.createElement("div",{className:"popup-content__action"},r.a.createElement("button",{className:"popup-content__action-confirm",onClick:function(){return e.props.onDelete(e.props.product)}},"\u78ba\u5b9a"),r.a.createElement("button",{className:"popup-content__action-cancle",onClick:this.handleAlert},"\u53d6\u6d88")))):""))}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).handleIncrement=function(e){var t=Object(m.a)(a.props.data.cart),n=Object(m.a)(a.props.data.products);e.quantity++,a.setState({cart:t,products:n})},a.handleDecrement=function(e){var t=Object(m.a)(a.props.data.cart),n=Object(m.a)(a.props.data.products);1!==e.quantity&&(e.quantity--,a.setState({cart:t,products:n}))},a.handleDelete=function(e){var t=a.props.data.cart,n=t.indexOf(e);-1!==n&&(t.splice(n,1),a.setState({cart:t})),document.body.style.overflow="auto"},a.handleChange=function(){var e=a.props.data.cart;a.setState({cart:e})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.title="Pokemon | \u8cfc\u7269\u8eca"}},{key:"render",value:function(){var e=this,t=this.props.data.cart.map(function(t){return r.a.createElement(C,{key:t.id,product:t,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,onDelete:e.handleDelete,onChange:e.handleChange})}),a=this.props.data.cart.reduce(function(e,t){return e+t.quantity*t.price},0);return r.a.createElement("div",{className:"cart-page"},r.a.createElement("div",{className:"cart-page-logo"},r.a.createElement(v.b,{to:"/"},r.a.createElement("img",{className:"logo-image",src:"./images/pokeball.png",alt:"pokeball"}),"Pokemon | \u8cfc\u7269\u8eca")),this.props.data.cart.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cart-page-product-header"},r.a.createElement("div",{className:"cart-page-product-header__product"},"\u5546\u54c1"),r.a.createElement("div",{className:"cart-page-product-header__unit-price"},"\u55ae\u50f9"),r.a.createElement("div",{className:"cart-page-product-header__quantity"},"\u6578\u91cf"),r.a.createElement("div",{className:"cart-page-product-header__total-price"},"\u7e3d\u8a08"),r.a.createElement("div",{className:"cart-page-product-header__action"},"\u64cd\u4f5c")),t,r.a.createElement("div",{className:"cart-page-footer"},"\u7e3d\u8cfc\u8cb7\u91d1\u984d(",this.props.data.cart.reduce(function(e,t){return e+t.quantity},0),"\u500b\u5546\u54c1):",r.a.createElement("b",{className:"total-price2"},"$",a),r.a.createElement("button",{className:"checkout__button"},"\u7d50\u5e33"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cart-page--empty"},r.a.createElement("img",{className:"cart-page--empty__image",src:"./images/smile.png",alt:"smile"}),r.a.createElement("div",{className:"cart-page--empty__text"},"\u4f60\u7684\u8cfc\u7269\u8eca\u9084\u662f\u7a7a\u7684"),r.a.createElement(v.b,{to:"/"},r.a.createElement("button",{className:"cart-page--empty__button"},"\u7e7c\u7e8c\u8cfc\u7269")))))}}]),t}(n.Component),D=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(q,{data:this.props.data}))}}]),t}(n.Component),S=Object(y.b)(function(e){return{data:e}})(D),A=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{store:j},r.a.createElement(v.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:N}),r.a.createElement(d.a,{exact:!0,path:"/checkout",component:S})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.d36d41c2.chunk.js.map