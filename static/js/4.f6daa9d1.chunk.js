(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[4],{100:function(e,t,a){"use strict";a.r(t);var n=a(22),i=a(2),l=a(3),r=a(4),u=a(6),o=a(5),s=a(7),c=a(0),d=a.n(c),h=a(94),p=a(31),m=a(99),g=a.n(m),v=a(14),f=a(13),b=a(39),E=a(17),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"email address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},passWord:{elementType:"input",elementConfig:{type:"password",placeholder:"password  "},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSingUp:!0},a.inputChangedHandler=function(e,t){var l=Object(i.a)({},a.state.controls,Object(n.a)({},t,Object(i.a)({},a.state.controls[t],{value:e.target.value,valid:a.checkValidity(e.target.value,a.state.controls[t].validation),touched:!0})));a.setState({controls:l})},a.submitHandler=function(e){e.preventDefault(),a.props.onAuth(a.state.controls.email.value,a.state.controls.passWord.value,a.state.controls.isSingUp)},a.switchAuthModeHandler=function(){a.setState((function(e){return{isSingUp:!e.isSingUp}}))},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"checkValidity",value:function(e,t){var a=!0;if(!t)return!0;if(t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),t.isEmail){a=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&a}if(t.isNumeric){a=/^\d+$/.test(e)&&a}return a}},{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.controls)t.push({id:a,config:this.state.controls[a]});var n=t.map((function(t){return d.a.createElement(h.a,{invalid:!t.config.valid,shouldValidated:t.config.validation,key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,touched:t.config.touched,value:t.config.value,changed:function(a){return e.inputChangedHandler(a,t.id)}})}));this.props.loading&&(n=d.a.createElement(b.a,null));var i=null;this.props.error&&(i=d.a.createElement("p",null," ",this.props.error.message," "));var l=null;return this.props.isAuthenticated&&(l=d.a.createElement(E.a,{to:this.props.authRedirectPath})),d.a.createElement("div",{className:g.a.Auth},l,i,d.a.createElement("form",{onSubmit:this.submitHandler},n,d.a.createElement(p.a,{btnType:"Success"},"SUBMIT"),d.a.createElement(p.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"switch to ",this.state.isSingUp?"signIN":"signUp")))}}]),t}(c.Component);t.default=Object(f.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!=e.auth.tokenId,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirect}}),(function(e){return{onAuth:function(t,a,n){return e(v.b(t,a,n))},onAuthRedirectPath:function(){return e(v.d("/"))}}}))(y)},94:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(95),r=a.n(l);t.a=function(e){var t=[r.a.InputElement],a=null,n=null;switch(e.invalid&&e.shouldValidated&&e.touched&&t.push(r.a.invalid),e.invalid&&e.touched&&(n=i.a.createElement("p",{style:{color:"red",margin:"5px 0"}},"please Enter a valid value")),e.elementType){case"input":a=i.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":a=i.a.createElement("textarea",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":a=i.a.createElement("select",{className:t.join(" "),onChange:e.changed,value:e.value},e.elementConfig.options.map((function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:a=i.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value}))}return i.a.createElement("div",{className:r.a.Input},i.a.createElement("label",{className:r.a.Label},e.label),a,n)}},95:function(e,t,a){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",invalid:"Input_invalid__1XscM"}},99:function(e,t,a){e.exports={Auth:"Auth_Auth__1Zul_"}}}]);
//# sourceMappingURL=4.f6daa9d1.chunk.js.map