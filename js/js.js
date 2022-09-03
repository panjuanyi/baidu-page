
// class太多，弄个封装的函数，获取className
function getByClass(clsName,parent){
    let oParent=parent?document.getElementById(parent):document
    let oClass= oParent.querySelector(clsName)
    return oClass
}

window.onload=function(){
    // 搜索
    openSearch()
    // 下拉框的
    openSubList()

}

function openSearch(){
    let seBtn=getByClass('.search-submit')
    // 鼠标事件-搜索
    seBtn.onclick=function(e){
    // 防止冒泡
    e.stopPropagation()
    bdSearch()
    } 

    // 键盘enter事件-搜索
    document.onkeyup=function(e){
    if(e.key=='Enter'){
        bdSearch()
        }
    }
}

// 链接到百度的函数
function bdSearch(){
    let kw=getByClass('.search-text').value;
    window.open('https://www.baidu.com/s?wd='+kw)
}

// 判定文本框内内容，确定展开下拉菜单


function openSubList(){
    let oSearchText=getByClass('search-text')
    let searchClear=getByClass('search-clear')
    let ssl=getByClass('.search-sub-list');

    oSearchText.onfocus=function(){
        if(oSearchText.value.length==0)
        {
            searchClear.style.display = "none";
            ssl.style.display = "none";
        }
        else{
            searchClear.style.display = "block";
            ssl.style.display = "block";
            }
    }    

    oSearchText.onblur=function(){
        ssl.style.display = "none";
        if(oSearchText.value.length==0)
        {
            searchClear.style.display = "none";
        }
        else{
            searchClear.style.display = "block";
            }

    }


    /* emm，设个定时器？？？
     let timer=null;
     clearInterval (timer);
    timer=setInterval(function() {
        // 看看搜索框里的文字
        let kw=getByClass('.search-text').value;

        // 对清除和下拉搜索框声明个变量，方便后续操作
        let sc=getByClass('.search-clear');
        let ssl=getByClass('.search-sub-list');

        // 设个判定条件-旗帜，默认false：隐藏状态
        let flag=false;

        // 有字则下拉，没字就隐藏
        if(kw.length==0){
        flag=false
        }
        else{
        flag=true
        }

        //如果在空白处点击，则隐藏
        document.onclick = function () {
        flag=false
        };
        
        console.log(kw.length,flag)
        // 为什么这边flag一直是true啊？？？

        if(flag==false){
        sc.style.display = "none";
        ssl.style.display = "none";
        }
        else{
        sc.style.display = "block";
        ssl.style.display = "block";
        }
    }, 30);
    */
}