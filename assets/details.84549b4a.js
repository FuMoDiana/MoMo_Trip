import{c as ne,n as J,t as ce,d as le,j as Q,aO as he,l as fe,a as d,J as se,aK as pe,I as E,w as ie,x as ve,aP as ye,k as ge,m as oe,U as Me,N as $e,a3 as xe,a4 as ae,p as be,af as Ie,a9 as N,ak as r,aa as n,ab as l,an as L,ae as e,F as w,al as R,aQ as re,aj as m,ar as Z,aq as Se,am as W,ac as de,ad as ue,aR as Pe,ap as we,z as _e,aS as Te,ag as ke}from"./index.b6ee15c5.js";import{H as Ce}from"./index.fa36b063.js";import{a as Re,S as Be}from"./index.e82be291.js";import{u as Ne,b as Ae}from"./use-refs.3a567fb0.js";const[Fe,B]=ne("nav-bar"),Le={title:String,fixed:Boolean,zIndex:J,border:ce,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean};var ze=le({name:Fe,props:Le,emits:["click-left","click-right"],setup(t,{emit:s,slots:i}){const u=Q(),o=he(u,B),h=v=>s("click-left",v),f=v=>s("click-right",v),y=()=>i.left?i.left():[t.leftArrow&&d(E,{class:B("arrow"),name:"arrow-left"},null),t.leftText&&d("span",{class:B("text")},[t.leftText])],a=()=>i.right?i.right():d("span",{class:B("text")},[t.rightText]),g=()=>{const{title:v,fixed:M,border:b,zIndex:x}=t,$=fe(x),I=t.leftArrow||t.leftText||i.left,S=t.rightText||i.right;return d("div",{ref:u,style:$,class:[B({fixed:M}),{[pe]:b,"van-safe-area-top":t.safeAreaInsetTop}]},[d("div",{class:B("content")},[I&&d("div",{class:[B("left"),se],onClick:h},[y()]),d("div",{class:[B("title"),"van-ellipsis"]},[i.title?i.title():v]),S&&d("div",{class:[B("right"),se],onClick:f},[a()])])])};return()=>t.fixed&&t.placeholder?o(g):g()}});const Ve=ie(ze),[De,U]=ne("rate");function Ee(t,s,i,u){return t>=s?{status:"full",value:1}:t+.5>=s&&i&&!u?{status:"half",value:.5}:t+1>=s&&i&&u?{status:"half",value:Math.round((t-s+1)*1e10)/1e10}:{status:"void",value:0}}const He={size:J,icon:oe("star"),color:String,count:Me(5),gutter:J,readonly:Boolean,disabled:Boolean,voidIcon:oe("star-o"),allowHalf:Boolean,voidColor:String,touchable:ce,iconPrefix:String,modelValue:$e(0),disabledColor:String};var Ge=le({name:De,props:He,emits:["change","update:modelValue"],setup(t,{emit:s}){const i=Ne(),[u,o]=Ae(),h=Q(),f=()=>t.readonly||t.disabled||!t.touchable,y=ve(()=>Array(+t.count).fill("").map((_,c)=>Ee(t.modelValue,c+1,t.allowHalf,t.readonly)));let a,g,v=Number.MAX_SAFE_INTEGER,M=Number.MIN_SAFE_INTEGER;const b=()=>{g=ae(h);const _=u.value.map(ae);a=[],_.forEach((c,p)=>{v=Math.min(c.top,v),M=Math.max(c.top,M),t.allowHalf?a.push({score:p+.5,left:c.left,top:c.top,height:c.height},{score:p+1,left:c.left+c.width/2,top:c.top,height:c.height}):a.push({score:p+1,left:c.left,top:c.top,height:c.height})})},x=(_,c)=>{for(let p=a.length-1;p>0;p--)if(c>=g.top&&c<=g.bottom){if(_>a[p].left&&c>=a[p].top&&c<=a[p].top+a[p].height)return a[p].score}else{const k=c<g.top?v:M;if(_>a[p].left&&a[p].top===k)return a[p].score}return t.allowHalf?.5:1},$=_=>{!t.disabled&&!t.readonly&&_!==t.modelValue&&(s("update:modelValue",_),s("change",_))},I=_=>{f()||(i.start(_),b())},S=_=>{if(!f()&&(i.move(_),i.isHorizontal())){const{clientX:c,clientY:p}=_.touches[0];be(_),$(x(c,p))}},T=(_,c)=>{const{icon:p,size:k,color:P,count:A,gutter:H,voidIcon:G,disabled:F,voidColor:O,allowHalf:j,iconPrefix:X,disabledColor:Y}=t,V=c+1,D=_.status==="full",C=_.status==="void",K=j&&_.value>0&&_.value<1;let ee;H&&V!==+A&&(ee={paddingRight:xe(H)});const me=te=>{b(),$(j?x(te.clientX,te.clientY):V)};return d("div",{key:c,ref:o(c),role:"radio",style:ee,class:U("item"),tabindex:F?void 0:0,"aria-setsize":A,"aria-posinset":V,"aria-checked":!C,onClick:me},[d(E,{size:k,name:D?p:G,class:U("icon",{disabled:F,full:D}),color:F?Y:D?P:O,classPrefix:X},null),K&&d(E,{size:k,style:{width:_.value+"em"},name:C?G:p,class:U("icon",["half",{disabled:F,full:!C}]),color:F?Y:C?O:P,classPrefix:X},null)])};return ye(()=>t.modelValue),ge("touchmove",S,{target:h}),()=>d("div",{ref:h,role:"radiogroup",class:U({readonly:t.readonly,disabled:t.disabled}),tabindex:t.disabled?void 0:0,"aria-disabled":t.disabled,"aria-readonly":t.readonly,onTouchstartPassive:I},[y.value.map(T)])}});const Oe=ie(Ge);function je(t){return Ce.get({url:"/detail/infos/",params:{houseId:t}})}const z=Ie("details",{state:()=>({houseId:0,cityInfos:{},mainPart:{},swiperPics:{},swiperData:{},dynamicModule:{},facilityShow:[]}),actions:{async fetchCityInfos(t){this.houseId=t;const s=await je(t);this.cityInfos=s.data,this.mainPart=s.data.mainPart,this.dynamicModule=this.mainPart.dynamicModule,this.swiperPics=s.data.mainPart.topModule.housePicture.housePics;for(let u of this.swiperPics){let o=this.swiperData[u.enumPictureCategory];o||(o=[],this.swiperData[u.enumPictureCategory]=o),o.push(u)}let i=0;for(let u=0;u<this.dynamicModule.facilityModule.houseFacility.houseFacilitys.length;u++)u===this.dynamicModule.facilityModule.houseFacility.facilitySort[i]&&(this.facilityShow.push(this.dynamicModule.facilityModule.houseFacility.houseFacilitys[u]),i++)}}});const Xe={key:0,class:"swiper"},Ye=["src"],Ze={class:"indicator"},qe={class:"item"},Ke={key:0},Ue={__name:"detail-swiper",setup(t){const s=z();function i(o){return o.replace("\u3010","").replace("\u3011","").replace("\uFF1A","")}function u(o){return s.swiperData[o.enumPictureCategory].findIndex(f=>f.url===o.url)+1}return(o,h)=>{const f=Re,y=Be;return r(s).mainPart?(n(),l("div",Xe,[d(y,{autoplay:3e3,"lazy-render":""},{indicator:L(({active:a,total:g})=>[e("div",Ze,[(n(!0),l(w,null,R(r(s).swiperData,(v,M,b)=>{var x,$;return n(),l("div",{key:M,class:re(["infos",{active:((x=r(s).swiperPics[a])==null?void 0:x.enumPictureCategory)==M}])},[e("span",qe,m(i(v[0].title)),1),(($=r(s).swiperPics[a])==null?void 0:$.enumPictureCategory)==M?(n(),l("span",Ke,m(u(r(s).swiperPics[a]))+"/"+m(v.length),1)):Z("",!0)],2)}),128))])]),default:L(()=>[(n(!0),l(w,null,R(r(s).swiperPics,a=>(n(),Se(f,{key:a},{default:L(()=>[e("img",{src:a.url},null,8,Ye)]),_:2},1024))),128))]),_:1})])):Z("",!0)}}},Je=N(Ue,[["__scopeId","data-v-60834821"]]);const Qe=t=>(de("data-v-ea53231e"),t=t(),ue(),t),We={class:"briefInfos"},et={class:"houseInfo"},tt={class:"tags"},st={class:"comment section"},ot={class:"left"},at={class:"score"},nt={class:"title"},ct={class:"brief"},lt={class:"right"},it={class:"count"},rt={class:"position section"},dt={class:"address"},ut={class:"right"},_t=Qe(()=>e("span",null,"\u5730\u56FE-\u5468\u8FB9",-1)),mt={__name:"brief-infos",setup(t){const s=z();return(i,u)=>{var h,f,y,a,g,v,M,b,x,$,I,S,T,_,c,p,k;const o=E;return n(),l("div",We,[e("div",et,[e("h2",null,m((h=r(s).mainPart)==null?void 0:h.houseName),1)]),e("div",tt,[(n(!0),l(w,null,R((f=r(s).mainPart)==null?void 0:f.houseTags,P=>{var A;return n(),l(w,{key:P.tagCode},[P.tagText?(n(),l("span",{key:0,class:"item",style:W({color:P.tagText.color,border:P.tagText.border,background:P.tagText.background.color})},m((A=P.tagText)==null?void 0:A.text),5)):Z("",!0)],64)}),128))]),e("div",st,[e("div",ot,[e("span",at,m((g=(a=(y=r(s).mainPart)==null?void 0:y.topModule)==null?void 0:a.commentBrief)==null?void 0:g.overall),1),e("span",nt,m((b=(M=(v=r(s).mainPart)==null?void 0:v.topModule)==null?void 0:M.commentBrief)==null?void 0:b.scoreTitle),1),e("span",ct,m((I=($=(x=r(s).mainPart)==null?void 0:x.topModule)==null?void 0:$.commentBrief)==null?void 0:I.commentBrief),1)]),e("div",lt,[e("span",it,m((_=(T=(S=r(s).mainPart)==null?void 0:S.topModule)==null?void 0:T.commentBrief)==null?void 0:_.totalCount)+"\u6761\u8BC4\u8BBA",1),d(o,{name:"arrow"})])]),e("div",rt,[e("span",dt,m((k=(p=(c=r(s).mainPart)==null?void 0:c.topModule)==null?void 0:p.nearByPosition)==null?void 0:k.address),1),e("div",ut,[_t,d(o,{name:"arrow"})])])])}}},ht=N(mt,[["__scopeId","data-v-ea53231e"]]);const ft=t=>(de("data-v-931b8685"),t=t(),ue(),t),pt={class:"detailSection"},vt={class:"title"},yt={class:"content"},gt=ft(()=>e("h2",null,"\u6211\u662F\u9ED8\u8BA4\u5185\u5BB9",-1)),Mt={key:0,class:"more"},$t={class:"text"},xt={__name:"detail-section",props:{title:{type:String,default:"\u9ED8\u8BA4\u6807\u9898"},moreInfos:{type:String}},setup(t){return(s,i)=>{const u=E;return n(),l("div",pt,[e("div",vt,[e("h2",null,m(t.title),1)]),e("div",yt,[Pe(s.$slots,"default",{},()=>[gt],!0)]),t.moreInfos?(n(),l("div",Mt,[e("span",$t,m(t.moreInfos),1),d(u,{name:"arrow"})])):Z("",!0)])}}},q=N(xt,[["__scopeId","data-v-931b8685"]]);const bt={class:"facility"},It={class:"facilities"},St={class:"title"},Pt=["src"],wt={class:"text"},Tt={class:"tags"},kt={class:"text"},Ct={__name:"houseFacility",setup(t){const s=z();return(i,u)=>{const o=E;return n(),l("div",bt,[d(q,{title:"\u623F\u5C4B\u8BBE\u65BD",moreInfos:"\u67E5\u770B\u66F4\u591A\u8BBE\u65BD"},{default:L(()=>[e("div",It,[(n(!0),l(w,null,R(r(s).facilityShow,(h,f)=>(n(),l("div",{key:f,class:"bigType"},[e("div",St,[e("img",{src:h.icon,alt:""},null,8,Pt),e("div",wt,m(h.groupName),1)]),e("div",Tt,[(n(!0),l(w,null,R(h.facilitys.slice(0,4),(y,a)=>(n(),l("div",{key:y,class:"tag"},[e("div",kt,[d(o,{name:"passed",color:"green"}),we(" "+m(y.name),1)])]))),128))])]))),128))])]),_:1})])}}},Rt=N(Ct,[["__scopeId","data-v-7eb3310a"]]);const Bt={class:"landlord"},Nt={class:"contentInfos"},At={class:"titlePic"},Ft=["src"],Lt={class:"landlordName"},zt={class:"namePic"},Vt=["src"],Dt={class:"landlordText"},Et={class:"hotelName"},Ht={class:"tags"},Gt={class:"summarys"},Ot={class:"summaryName"},jt={class:"percent"},Xt={class:"count"},Yt={__name:"house-landlord",setup(t){const s=z();return(i,u)=>(n(),l("div",Bt,[d(q,{title:"\u623F\u4E1C\u4ECB\u7ECD",moreInfos:"\u67E5\u770B\u623F\u4E1C\u4E3B\u9875"},{default:L(()=>{var o,h,f,y,a,g,v,M,b,x;return[e("div",Nt,[e("div",At,[e("img",{src:(h=(o=r(s).dynamicModule)==null?void 0:o.landlordModule)==null?void 0:h.topScroll,alt:""},null,8,Ft)]),e("div",Lt,[e("div",zt,[e("img",{src:(y=(f=r(s).dynamicModule)==null?void 0:f.landlordModule)==null?void 0:y.hotelLogo,alt:""},null,8,Vt)]),e("div",Dt,[e("span",Et,m((g=(a=r(s).dynamicModule)==null?void 0:a.landlordModule)==null?void 0:g.hotelName),1),e("div",Ht,[(n(!0),l(w,null,R((M=(v=r(s).dynamicModule)==null?void 0:v.landlordModule)==null?void 0:M.hotelTags,($,I)=>{var S,T,_;return n(),l("span",{class:re(["tag",{borderLeft:I!==((_=(T=(S=r(s).dynamicModule)==null?void 0:S.landlordModule)==null?void 0:T.hotelTags)==null?void 0:_.length)-1}]),style:W({color:$.tagText.color})},m($.tagText.text),7)}),256))])])]),e("div",Gt,[(n(!0),l(w,null,R((x=(b=r(s).dynamicModule)==null?void 0:b.landlordModule)==null?void 0:x.hotelSummary,($,I)=>(n(),l("div",{key:I,class:"summary"},[e("div",Ot,m($.title),1),e("div",jt,m($.introduction),1),e("div",Xt,m($.tip),1)]))),128))])])]}),_:1})]))}},Zt=N(Yt,[["__scopeId","data-v-f72ecdf7"]]);const qt={class:"comments"},Kt={class:"scores"},Ut={class:"score"},Jt={class:"scoreText"},Qt={class:"scoreSummary"},Wt={class:"title"},es={class:"count"},ts={class:"scoreTags"},ss={class:"commentTags"},os={class:"commentInfo"},as={class:"user"},ns={class:"headPic"},cs=["src"],ls={class:"nameTime"},is={class:"username"},rs={class:"date"},ds={class:"commentText"},us={__name:"house-comments",setup(t){var o,h,f,y;const s=z(),i=`\u67E5\u770B\u5168\u90E8${(h=(o=s.dynamicModule)==null?void 0:o.commentModule)==null?void 0:h.totalCount}\u6761\u8BC4\u8BBA`,u=(y=(f=s.dynamicModule)==null?void 0:f.commentModule)==null?void 0:y.overall;return(a,g)=>{const v=Oe;return n(),l("div",qt,[d(q,{title:"\u70ED\u95E8\u8BC4\u8BBA",moreInfos:i},{default:L(()=>{var M,b,x,$,I,S,T,_,c,p,k,P,A,H,G,F,O,j,X,Y,V,D;return[e("div",Kt,[e("div",Ut,[e("div",Jt,m((b=(M=r(s).dynamicModule)==null?void 0:M.commentModule)==null?void 0:b.overall),1)]),e("div",Qt,[e("div",Wt,m(($=(x=r(s).dynamicModule)==null?void 0:x.commentModule)==null?void 0:$.scoreTitle),1),e("div",es,m((S=(I=r(s).dynamicModule)==null?void 0:I.commentModule)==null?void 0:S.totalCount)+"\u6761\u8BC4\u8BBA",1),d(v,{"model-value":r(u),size:"12px",color:"rgb(244,153,48)",readonly:"","allow-half":""},null,8,["model-value"])]),e("div",ts,[(n(!0),l(w,null,R((_=(T=r(s).dynamicModule)==null?void 0:T.commentModule)==null?void 0:_.subScores,(C,K)=>(n(),l("span",{key:K,class:"tagText"},m(C),1))),128))])]),e("div",ss,[(n(!0),l(w,null,R((p=(c=r(s).dynamicModule)==null?void 0:c.commentModule)==null?void 0:p.commentTagVo,(C,K)=>(n(),l("div",{class:"commentTag",style:W({color:C.color,background:C.backgroundColor})},m(C.text),5))),256))]),e("div",os,[e("div",as,[e("div",ns,[e("img",{src:(A=(P=(k=r(s).dynamicModule)==null?void 0:k.commentModule)==null?void 0:P.comment)==null?void 0:A.userAvatars,alt:""},null,8,cs)]),e("div",ls,[e("div",is,m((F=(G=(H=r(s).dynamicModule)==null?void 0:H.commentModule)==null?void 0:G.comment)==null?void 0:F.userName),1),e("div",rs,m((X=(j=(O=r(s).dynamicModule)==null?void 0:O.commentModule)==null?void 0:j.comment)==null?void 0:X.checkInDate),1)])]),e("div",ds,m((D=(V=(Y=r(s).dynamicModule)==null?void 0:Y.commentModule)==null?void 0:V.comment)==null?void 0:D.commentDetail),1)])]}),_:1})])}}},_s=N(us,[["__scopeId","data-v-8e509baf"]]);const ms={class:"rules"},hs={class:"orderRules"},fs={key:0,class:"rule"},ps={class:"name"},vs={class:"content"},ys={__name:"house-rules",setup(t){const s=z();return(i,u)=>(n(),l("div",ms,[d(q,{title:"\u9884\u5B9A\u987B\u77E5"},{default:L(()=>{var o,h;return[e("div",hs,[(n(!0),l(w,null,R((h=(o=r(s).dynamicModule)==null?void 0:o.rulesModule)==null?void 0:h.orderRules,(f,y)=>(n(),l(w,null,[f.introduction?(n(),l("div",fs,[e("div",ps,m(f.title),1),e("div",vs,m(f.introduction),1)])):Z("",!0)],64))),256))])]}),_:1})]))}},gs=N(ys,[["__scopeId","data-v-ed8aa793"]]);const Ms={class:"positionMap"},$s={__name:"house-position",setup(t){var h,f,y,a;const s=z(),i=(f=(h=s.dynamicModule)==null?void 0:h.positionModule)==null?void 0:f.longitude,u=(a=(y=s.dynamicModule)==null?void 0:y.positionModule)==null?void 0:a.latitude,o=Q();return _e(()=>{let g=new BMapGL.Map(o.value),v=new BMapGL.Point(i,u);g.centerAndZoom(v,15);let M=new BMapGL.Marker(v);g.addOverlay(M),g.enableScrollWheelZoom(!0)}),(g,v)=>(n(),l("div",Ms,[d(q,{title:"\u4F4D\u7F6E\u5468\u8FB9",moreInfos:"\u67E5\u770B\u66F4\u591A\u5468\u8FB9\u4FE1\u606F"},{default:L(()=>[e("div",{class:"baiduMap",ref_key:"mapRef",ref:o},null,512)]),_:1})]))}},xs=N($s,[["__scopeId","data-v-92ef991b"]]);const bs={class:"details"},Is={class:"navbar"},Ss={__name:"details",setup(t){const s=Te(),i=ke(),u=z(),o=s.params.id;_e(()=>{u.fetchCityInfos(o)});function h(){i.push("/home")}return(f,y)=>{const a=Ve;return n(),l("div",bs,[e("div",Is,[d(a,{title:"\u623F\u5C4B\u8BE6\u60C5","left-text":"\u8FD4\u56DE","left-arrow":"",onClickLeft:h})]),d(Je),d(ht),d(Rt),d(Zt),d(xs),d(_s),d(gs)])}}},Cs=N(Ss,[["__scopeId","data-v-5bbc73b6"]]);export{Cs as default};
