(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(42)},37:function(e,t,n){"use strict";n.r(t);t.default={apiKey:"AIzaSyC6DoS89xkhNLy2TneVXatxg_nx9d_nqG8",authDomain:"react-firebase-boilerpla-5394b.firebaseapp.com",databaseURL:"https://react-firebase-boilerpla-5394b.firebaseio.com",projectId:"react-firebase-boilerpla-5394b",storageBucket:"",messagingSenderId:"2758520686",appId:"1:2758520686:web:e5873e33d58c6390"}},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(23),o=n.n(l),i=n(3),u=n(12),s=r.a.createContext(null),c=function(e){return function(t){return r.a.createElement(s.Consumer,null,function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))})}},m=s,p=n(7),h=n(18),d=n.n(h),f=(n(35),n(37).default),E={apiKey:f.apiKey,authDomain:f.authDomain,databaseURL:f.databaseURL,projectId:f.projectId,storageBucket:f.storageBucket,messagingSenderId:f.messagingSenderId,appId:f.appId},b=function e(){var t=this;Object(p.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},d.a.initializeApp(E),this.auth=d.a.auth()},g=c(function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doSignOut},"Sign Out")}),v="/home",w=r.a.createContext(null),S=n(8),C=n(10),O=n(9),j=n(11),y=function(e){var t=function(t){function n(e){var t;return Object(p.a)(this,n),(t=Object(C.a)(this,Object(O.a)(n).call(this,e))).state={authUser:null},t}return Object(j.a)(n,t),Object(S.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged(function(t){t?e.setState({authUser:t}):e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(w.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return c(t)},P=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"Landing")),r.a.createElement("li",null,r.a.createElement(i.b,{to:v},"Home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/account"},"Account")),r.a.createElement("li",null,r.a.createElement(g,null)))},I=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/signin"},"Sign In")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"Landing")))},U=function(){return r.a.createElement(w.Consumer,null,function(e){return e?r.a.createElement(P,null):r.a.createElement(I,null)})},k=function(){return r.a.createElement("div",null,"Landing")},A=n(13),x=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(C.a)(this,Object(O.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=(t.username,t.email),r=t.password;e.preventDefault(),n.props.firebase.doCreateUserWithEmailAndPassword(a,r).then(function(e){n.setState({username:"",email:"",password:"",passwordConfirmation:"",error:null}),n.props.history.push(v)}).catch(function(e){n.setState({error:e})})},n.onChange=function(e){n.setState(Object(A.a)({},e.target.name,e.target.value))},n.state={username:"",email:"",password:"",passwordConfirmation:"",error:null},n}return Object(j.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.password,l=e.passwordConfirmation,o=e.error,i=a!==l||""===a||""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Username"}),r.a.createElement("input",{name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Email"}),r.a.createElement("input",{name:"password",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordConfirmation",value:l,onChange:this.onChange,type:"password",placeholder:"Password Confirmation"}),r.a.createElement("button",{disabled:i,type:"submit"},"Sign Up"),o&&r.a.createElement("p",null,o.message))}}]),t}(r.a.Component),D=function(){return r.a.createElement("p",null,"Don't have an account?",r.a.createElement(i.b,{to:"/signup"},"Sign Up"))},L=Object(u.e)(c(x)),W=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Sign Up"),r.a.createElement(L,null))},R=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(C.a)(this,Object(O.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.email;e.preventDefault(),n.props.firebase.doPasswordReset(t).then(function(){n.setState({email:"",error:null})}).catch(function(e){n.setState({error:e})})},n.onChange=function(e){n.setState(Object(A.a)({},e.target.name,e.target.value))},n.state={email:"",error:null},n}return Object(j.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.error,a=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email"}),r.a.createElement("button",{disabled:a,type:"submit"},"Submit"),n&&r.a.createElement("p",null,n.message))}}]),t}(r.a.Component),B=function(){return r.a.createElement("p",null,r.a.createElement(i.b,{to:"/pw-forget"},"Forgot Password?"))},K=c(R),z=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(K,null)," ")},F=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(C.a)(this,Object(O.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;e.preventDefault(),n.props.firebase.doSignInWithEmailAndPassword(a,r).then(function(e){n.setState({email:"",password:"",error:null}),n.props.history.push(v)}).catch(function(e){n.setState({error:e})})},n.onChange=function(e){n.setState(Object(A.a)({},e.target.name,e.target.value))},n.state={email:"",password:"",error:null},n}return Object(j.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error,l=""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email"}),r.a.createElement("input",{name:"password",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:l,type:"submit"},"Sign In"),a&&r.a.createElement("p",null,a.message))}}]),t}(r.a.Component),H=Object(u.e)(c(F)),J=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Sign In"),r.a.createElement(H,null),r.a.createElement(D,null),r.a.createElement(B,null))},_=function(){return r.a.createElement("div",null,"Home")},q=function(){return r.a.createElement("div",null,"Account")},G=function(){return r.a.createElement("div",null,"Admin")},M=y(function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(U,null),r.a.createElement("hr",null),r.a.createElement(u.a,{exact:!0,path:"/",component:k}),r.a.createElement(u.a,{path:"/signup",component:W}),r.a.createElement(u.a,{path:"/signin",component:J}),r.a.createElement(u.a,{path:"/pw-forget",component:z}),r.a.createElement(u.a,{path:v,component:_}),r.a.createElement(u.a,{path:"/account",component:q}),r.a.createElement(u.a,{path:"/admin",component:G})))});o.a.render(r.a.createElement(m.Provider,{value:new b},r.a.createElement(M,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.adb0b7a7.chunk.js.map