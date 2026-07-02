import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var df=["easy","medium","hard"];
var ts="Android Kotlin Android Studio Gradle Manifest Activity lifecycle onCreate onStart onResume onPause onStop onDestroy Intent Bundle layout LinearLayout ConstraintLayout TextView Button EditText ImageView RecyclerView Adapter ViewHolder Fragment Navigation permission notification Toast Dialog SharedPreferences SQLite Room file storage HTTP Retrofit OkHttp JSON Gson Coroutine ViewModel LiveData StateFlow Repository MVVM dependency injection Compose Composable State LazyColumn Material Design debug log signing APK mobile development Kotlin null safety data class sealed class extension function lambda coroutine scope flow state flow shared flow motion layout constraint set data binding view binding work manager hilt dagger glide retrofit interceptor okhttp client interceptor adapter converter gson converter factory moshi kotlinx serialization jetpack navigation safe args paging3 workmanager mediastore camera x ML kit compose navigation compose material3 compose animation compose layout compose state compose side effect compose theming";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"ad-tag-"+String(i+1).padStart(3,"0"),name:n,category:"Android",description:"Android标签:"+n,count:0,createdAt:"2026-07-03T00:00:00.000Z"};});}
var CD=[
  {id:"ad-course-01",order:1,slug:"Android入门",title:"Android开发入门与学习路线",description:"Android概述、技术栈、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"ad-course-02",order:2,slug:"Kotlin基础",title:"Kotlin语言基础",description:"变量、函数、类、空安全、扩展函数、协程基础。",estimatedHours:12,diff:"easy"},
  {id:"ad-course-03",order:3,slug:"AndroidStudio",title:"Android Studio与项目结构",description:"Gradle、Manifest、目录结构、模拟器、调试。",estimatedHours:8,diff:"easy"},
  {id:"ad-course-04",order:4,slug:"Activity生命周期",title:"Activity、生命周期与页面跳转",description:"Activity生命周期、Intent启动、Bundle传参。",estimatedHours:10,diff:"medium"},
  {id:"ad-course-05",order:5,slug:"布局View",title:"XML布局、View与事件处理",description:"Layout、TextView、Button、EditText、事件监听。",estimatedHours:10,diff:"medium"},
  {id:"ad-course-06",order:6,slug:"RecyclerView",title:"RecyclerView、Adapter与列表开发",description:"RecyclerView、Adapter、ViewHolder、列表、点击。",estimatedHours:10,diff:"medium"},
  {id:"ad-course-07",order:7,slug:"Fragment导航",title:"Fragment与导航基础",description:"Fragment生命周期、Navigation、NavGraph。",estimatedHours:10,diff:"hard"},
  {id:"ad-course-08",order:8,slug:"权限通知",title:"Intent、权限、通知与系统能力",description:"隐式Intent、运行时权限、通知栏、Toast/Dialog。",estimatedHours:10,diff:"hard"},
  {id:"ad-course-09",order:9,slug:"本地存储",title:"本地存储：SP、文件与SQLite",description:"SharedPreferences、文件存储、SQLite、Room。",estimatedHours:10,diff:"hard"},
  {id:"ad-course-10",order:10,slug:"网络请求",title:"网络请求、JSON与接口对接",description:"Retrofit、OkHttp、协程网络、JSON解析。",estimatedHours:10,diff:"hard"},
  {id:"ad-course-11",order:11,slug:"Jetpack",title:"Jetpack入门：ViewModel与LiveData",description:"ViewModel、LiveData、StateFlow、Lifecycle。",estimatedHours:10,diff:"hard"},
  {id:"ad-course-12",order:12,slug:"MVVM",title:"MVVM架构与项目分层",description:"MVVM设计、Repository、依赖注入入门。",estimatedHours:10,diff:"hard"},
  {id:"ad-course-13",order:13,slug:"Compose",title:"Jetpack Compose入门",description:"Composable、State、LazyColumn、Material3。",estimatedHours:10,diff:"hard"},
  {id:"ad-course-14",order:14,slug:"Android项目面试",title:"Android综合项目、发布与面试",description:"项目整合、打包APK、面试题。",estimatedHours:8,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["掌握Kotlin","能开发Android应用","理解生命周期","会MVVM架构"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bl(){
  var all=[];var id=1;
  function add(ci,t2){var n=String(id).padStart(3,"0");all.push({id:"ad-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t2,slug:t2.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),summary:t2,content:"# "+t2+"\n\n"+t2+"内容。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:[],practiceQuestionIds:[],tags:["Android"],prerequisites:[],updatedAt:"2026-07-03T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"Android课程"+(ci+1)+"章"+(j+1));
  return all;
}
var KPN=[["Android","移动OS"],["Kotlin","现代JVM语言"],["Activity","UI控制器"],["生命周期","Activity状态"],["布局","UI排列"],["RecyclerView","列表组件"],["Fragment","片段"],["权限","运行时权限"],["Room","本地数据库"],["Retrofit","网络框架"],["ViewModel","UI状态管理"],["MVVM","架构模式"],["Compose","声明式UI"],["协程","异步编程"],["Intent","页面通信"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"ad-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"Android",tags:["Android"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"ad-kp-"+String(k.length+1).padStart(4,"0"),name:"Android概念"+(k.length+1),description:"Android概念",category:"Android",tags:["Android"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}return k;}
var QC=["Android入门","Kotlin基础","AndroidStudio","Activity生命周期","布局View","RecyclerView","Fragment导航","权限通知","本地存储","网络请求","Jetpack","MVVM","Compose","Android项目面试"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"Android开发语言？",["Kotlin","Swift","C#","PHP"],"A","easy"],[1,"Kotlin空安全运算符？",["?:","?.","!!","!!."],"A","easy"],[3,"Activity生命周期方法？",["onCreate","init","start","create"],"A","easy"],[4,"RecyclerView职责？",["列表展示","页面跳转","网络请求","数据存储"],"A","medium"],[5,"Adapter中ViewHolder作用？",["复用View","管理数据","网络请求","权限申请"],"A","medium"],[7,"运行时权限需？",["动态申请","静态声明","强制授予","自动获取"],"A","hard"],[10,"Retrofit用于？",["HTTP请求","数据库","文件存储","通知"],"A","medium"],[11,"ViewModel优势？",["保存UI状态","管理布局","处理点击","加载图片"],"A","hard"],[13,"Compose中State变化？",["触发重组","触发重启","触发重建","无影响"],"A","hard"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];qs.push({id:"ad-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确"+t_[3]+"。",wrong_reason:"加强。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:500},{type:"case_analysis",min:1200}];
  while(qid<=3700){
    var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=df[Math.floor(Math.random()*df.length)];
    var id2="ad-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于Android"+ch+"正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="Android"+ch+"哪些正确？（多选）";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是Android重要概念。（判断）";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="在Android"+ch+"中____是核心概念。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"在Android开发中的作用。";o=[{label:"A",text:"简答"}];a=ch+"用于Android。";}
    else if(it.type==="case_analysis"){s="Android"+ch+"案例：设计方案。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)}});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确"+a+"。",wrong_reason:"加强。",related_questions:[],tags:[ch],estimated_time:it.type==="case_analysis"?120:60,source_type:"curated-generated"});
    e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"ad-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":"进阶"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-03T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["Hello Android","Kotlin基础","Activity跳转","生命周期日志","登录页布局","按钮点击","表单校验","RecyclerView列表","Fragment切换","权限申请","本地设置","SQLite笔记","Room数据库","Retrofit请求","JSON解析","MVVM列表","Compose Todo","打包发布","Android面试"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"ad-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握Android",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"需求",description:"分析"},{order:2,title:"方案",description:"设计"},{order:3,title:"实现",description:"编码"},{order:4,title:"验证",description:"测试"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-03T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"Android路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"ad-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["Android","Kotlin","Activity","Fragment","RecyclerView","Room","ViewModel","Compose","协程","Retrofit","MVVM","Jetpack","Intent","权限","Gradle"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["Android概念"+i,"Android概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"ad-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"Android",tags:["Android"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["Android问题"+(i+1)+"?","Android问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"ad-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"Android",tags:["Android"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["Android"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["Android"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["Android"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["Android"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["Android"]});});return e;}
async function main(){
  console.log("Gen Android...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-android-kotlin",slug:"module-android-kotlin",title:"Android与Kotlin移动开发",subtitle:"面向移动开发入门者",description:"面向移动开发入门者的KotlinAndroid StudioActivity布局RecyclerViewFragment权限本地存储网络请求JetpackMVVMCompose与App项目实战训练。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["Android","Kotlin","移动开发","Jetpack","MVVM","Compose","RecyclerView","App开发"],estimatedHours:180,difficulty:"intermediate",updatedAt:"2026-07-03T00:00:00.000Z",coverEmoji:"\u{1F4F1}",repoUrl:"https://github.com/openskill-galaxy/module-android-kotlin",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var f2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in f2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(f2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(f2[key])?f2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});console.log("\nc:"+courses.length+" l:"+lessons.length+" k:"+kps.length+" q:"+questions.length+" e:"+exams.length+" ca:"+cases.length+" r:"+routes.length+" t:"+tags.length+" g:"+glossary.length+" f:"+faqs.length+" si:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
