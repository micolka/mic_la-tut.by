(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{292:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(27),o=n(28),r=n(30),l=n(29),i=n(31),s=n(0),c=n.n(s),u=n(34),f=n(16),m=function(e){return{isAuth:e.authData.isAuthorised,isInProcess:e.authData.isAuthInProcess}},p=function(e){var t=function(t){function n(){return Object(a.a)(this,n),Object(r.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(i.a)(n,t),Object(o.a)(n,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(u.a,{to:"/login"})}}]),n}(c.a.Component);return Object(f.b)(m)(t)}},293:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2yzNo",fontImage:"ProfileInfo_fontImage__33zlM",btnSendImage:"ProfileInfo_btnSendImage__2qcAv",inputSendImage:"ProfileInfo_inputSendImage__3NyFg",Contacts:"ProfileInfo_Contacts__16S0c",formError:"ProfileInfo_formError__1kllg",btnEditP:"ProfileInfo_btnEditP__2YsO1",inputInfo:"ProfileInfo_inputInfo__3cfJH",areaInfo:"ProfileInfo_areaInfo__1qXCD"}},297:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__1giM0",posts:"MyPosts_posts__2TNe9",inputPost:"MyPosts_inputPost__2fOYd",btnSendPost:"MyPosts_btnSendPost__2wq0v"}},298:function(e,t,n){e.exports={item:"Post_item__2TPp4"}},299:function(e,t,n){e.exports={profileBlock:"Profile_profileBlock__fnQVW",postContainer:"Profile_postContainer__1CiUq",profileInfo:"Profile_profileInfo__1i-G5"}},300:function(e,t,n){"use strict";n.r(t);var a=n(27),o=n(28),r=n(30),l=n(29),i=n(31),s=n(0),c=n.n(s);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],a=!0,o=!1,r=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(s){o=!0,r=s}finally{try{a||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=n(293),m=n.n(f),p=n(118),d=n.n(p),b=function(e){var t=u(Object(s.useState)(e.status),2),n=t[0],a=t[1],o=u(Object(s.useState)(!1),2),r=o[0],l=o[1];Object(s.useEffect)((function(){a(e.status)}),[e.status]);return c.a.createElement(c.a.Fragment,null,!r&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){e.isOwner&&l(!0)}},e.status||"------")),r&&c.a.createElement("div",null,c.a.createElement("input",{autoFocus:!0,onBlur:function(){l(!1),e.updateStatus(n)},value:n,onChange:function(e){a(e.currentTarget.value)}})))},h=n(39),E=n(129),v=Object(E.a)({form:"editProfileForm"})((function(e){var t=e.handleSubmit,n=e.profile,a=e.error;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement("b",null,"Full name: ")," ",Object(h.c)("Full name","fullName",h.a,[],m.a.inputInfo)),c.a.createElement("div",null,c.a.createElement("b",null,"About me: ")," ",Object(h.c)("About me","aboutMe",h.b,[],m.a.areaInfo)),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job: ")," ",Object(h.c)("","lookingForAJob",h.a,[],null,{type:"checkbox"})),c.a.createElement("div",null,c.a.createElement("b",null,"Job description: "),Object(h.c)("Job description","lookingForAJobDescription",h.b,[],m.a.areaInfo)),c.a.createElement("b",null,"Contacts: ")," ",Object.keys(n.contacts).map((function(e){return c.a.createElement("div",{key:e,className:m.a.Contacts},c.a.createElement("b",null,e),Object(h.c)(n.contacts[e],"contacts."+e,h.a,[],m.a.inputInfo))})),a&&c.a.createElement("div",{className:m.a.formError},a),c.a.createElement("button",{className:m.a.btnEditP},"save"))})),g=function(e){var t=e.profile,n=e.isOwner,a=e.switchToEditMode;return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("b",null,"Full name: ")," ",t.fullName),c.a.createElement("div",null,c.a.createElement("b",null,"About me: ")," ",t.aboutMe),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job: ")," ",t.lookingForAJob?"Yes":"No"),c.a.createElement("div",null,c.a.createElement("b",null,"Job description: ")," ",t.lookingForAJobDescription),c.a.createElement("b",null,"Contacts: ")," ",Object.keys(t.contacts).map((function(e){return c.a.createElement(_,{key:e,contactMean:e,contactValue:t.contacts[e]})})),n&&c.a.createElement("button",{className:m.a.btnEditP,onClick:a},"Edit information"))},_=function(e){var t=e.contactMean,n=e.contactValue;return c.a.createElement("div",{className:m.a.Contacts},c.a.createElement("b",null,t),": ",n)},P=function(e){var t=u(Object(s.useState)(!1),2),n=t[0],a=t[1];if(!e.profile)return e.toggleFetching(!0),c.a.createElement(c.a.Fragment,null);e.toggleFetching(!1);return c.a.createElement("div",null,c.a.createElement(b,{isOwner:e.isOwner,status:e.status,updateStatus:e.updateStatus}),c.a.createElement("div",{className:m.a.descriptionBlock},c.a.createElement("img",{src:e.profile.photos.large||d.a,alt:"ava"}),e.isOwner&&c.a.createElement("div",null,c.a.createElement("input",{className:m.a.inputSendImage,id:"input_file",type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}),c.a.createElement("label",{className:m.a.btnSendImage,htmlFor:"input_file"},"Change avatar")),n?c.a.createElement(v,{initialValues:e.profile,profile:e.profile,onSubmit:function(t){e.updateProfileInfo(t,e.profile.userId).then((function(){a(!1)}))}}):c.a.createElement(g,{switchToEditMode:function(){a(!0)},isOwner:e.isOwner,profile:e.profile})))},I=n(95),O=n(297),k=n.n(O),y=n(298),j=n.n(y),S=function(e){return c.a.createElement("div",{className:j.a.item},c.a.createElement("img",{src:"https://cdn4.iconfinder.com/data/icons/halloween-colored-1/96/halloween_monster_zombie_96-512.png",alt:"zombie ava"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"like ",e.likeCount)))},w=n(89),N=n(44),C=Object(N.a)(50),F=Object(E.a)({form:"publishPostForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(w.a,{placeholder:"Type something here",name:"postTxtValue",component:h.b,validate:[N.b,C],className:k.a.inputPost})),c.a.createElement("div",null,c.a.createElement("button",{className:k.a.btnSendPost},"Add post")))})),A=function(e){var t=e.posts.map((function(e){return c.a.createElement(S,{key:e.id,message:e.message,likeCount:e.likeCount})}));return c.a.createElement("div",{className:k.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(F,{onSubmit:function(t){var n=t.postTxtValue;e.addPost(n)}}),c.a.createElement("div",{className:k.a.posts},t))},M=n(16),D=Object(M.b)((function(e){return{posts:e.profileData.posts}}),{addPost:I.a})(A),B=n(299),J=n.n(B),T=function(e){return c.a.createElement("div",{className:J.a.profileBlock},c.a.createElement("div",{className:J.a.profileInfo},c.a.createElement(P,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,toggleFetching:e.toggleFetching,savePhoto:e.savePhoto,updateProfileInfo:e.updateProfileInfo})),e.isOwner&&c.a.createElement("div",{className:J.a.postContainer},c.a.createElement(D,null)))},x=n(34),U=n(292),V=n(8),q=n(10),z=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId),this.props.showUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement(T,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,updateProfileInfo:this.props.updateProfileInfo,savePhoto:this.props.savePhoto,toggleFetching:this.props.toggleIsFetching})}}]),t}(c.a.Component);t.default=Object(V.d)(Object(M.b)((function(e){return{profile:e.profileData.profile,status:e.profileData.status,userId:e.authData.userId}}),{showUserProfile:I.e,getUserStatus:I.c,updateStatus:I.g,savePhoto:I.d,updateProfileInfo:I.f,toggleIsFetching:q.e}),x.f,U.a)(z)}}]);
//# sourceMappingURL=3.95294c2b.chunk.js.map