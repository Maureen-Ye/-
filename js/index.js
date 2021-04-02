//回到顶部
window.onload = function () {
    var oBtn = document.getElementById('md-top');
    //用处，避免当按钮触发页面回到顶部时页面滚动这个过程未结束，用户此时人为滚动时页面不会准确响应用户

    var bSys = true;
    var timer = null;

    window.onscroll = function () {
        //导航栏鼠标滑动固定
        var zhi =document.documentElement.scrollTop;
        var one=document.getElementById("three");
        /* console.log(zhi);*/
        if(zhi>200){
            one.style.position="fixed";
            one.style.zIndex="5000";
        }else {
            one.style.position="";
            one.style.zIndex="0";
        }
        //当认为滚动页面，关闭定时器
        if(!bSys){
            clearInterval(timer);
        }
        bSys = false;
    }
    oBtn.onclick = function () {
        //每30ms执行一次 scrollTop+iSpeed
        timer = setInterval(function () {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            //算速度 除以的数值越大，速度越慢
            var iSpeed = Math.floor(0-scrollTop/5);
            if(scrollTop == 0){
                //不关闭定时器，会导致第一次回到顶部之后，导致不能在响应用户的滚动，不定的触发回到顶部，
                clearInterval(timer);
            }
            //当按钮启动页面滚动，设置为true
            bSys = true;
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop +iSpeed;
        },30)
    }
}
//owl 的jq代码
var IndexCarouselOne = $('#Indexcarousel-one')
IndexCarouselOne.owlCarousel({
    items:1,
    loop:true,
    dots:true,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
})
var carouselOne = $('#carousel-one')
carouselOne.owlCarousel({
    items:5,
    loop:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
var carouselTwo = $('#carousel-two')
carouselTwo.owlCarousel({
    items:3,
    loop:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
//ShopSingle页面 数字变化
var Changenumbers =new Vue({
    el:'#ShopSingle_two_left_one',
    data:{
        numbers:2,
    },
    methods: {
        countnum:function (val) {
            if(val=="jian"){
                if(this.numbers>0){
                    this.numbers--;
                }
            }
            if(val=="jia"){
                if(this.numbers>=0){
                    this.numbers++;
                }
            }
        }
    }
})
//ShopSingle页面 选择显示
var xian_shi=new Vue({
    el:'#ShopSingle_two_left_two',
    data:{
        changcolor1:"color:#484848",
        changcolor2:"color:#484848",
        xian:"Description",
        Description:"Description",
        Reviews:"Reviews"
    },
    methods:{
        choose:function (val) {
            if(val==1){
                this.xian=this.Description;
                this.changcolor2="color:#484848"
                this.changcolor1="color:#fc5a6b";
            }
            if(val==2){
                this.xian=this.Reviews;
                this.changcolor1="color:#484848"
                this.changcolor2="color:#fc5a6b";
            }
        },
    }
})
//ShopSingle页面 边框改变
var changstyle=function (val) {
    var choose_one=document.getElementById("choose_one");
    var choose_two=document.getElementById("choose_two");
    if(val=="choose_one"){
        choose_two.style.border="";
        choose_two.style.borderBottom="";
        choose_one.style.border="1px solid #dddddd";
        choose_one.style.borderBottom="0";
    }
    if(val=="choose_two"){
        choose_one.style.border="";
        choose_one.style.borderBottom="";
        choose_two.style.border="1px solid #dddddd";
        choose_two.style.borderBottom="0";
    }
}
//全局颜色变换
var discoloration =function (val) {
    var Getcsslink = document.getElementsByTagName("link")[0];
    if (val=='pink'){
        Getcsslink.href="css/pink.css";
    }else if (val=='olive'){
        Getcsslink.href="css/olive.css";
    }else if (val=='purple'){
        Getcsslink.href="css/purple.css";
    }else if (val=='blue'){
        Getcsslink.href="css/blue.css";
    }else if (val=='green'){
        Getcsslink.href="css/green.css";
    }else if (val=='orange'){
        Getcsslink.href="css/orange.css";
    }else{

    }
}
//全局颜色板变换隐藏显示
var i=0;
var ColorSetting=function () {

    var Getchangecolor=document.getElementById("changecolor");
    if(i===0){
        Getchangecolor.style.left="0px";
        i=1;
    }else if(i===1){
        Getchangecolor.style.left="-185px";
        i=0;
    }
}