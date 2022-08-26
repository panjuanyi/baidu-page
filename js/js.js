
// class太多，弄个封装的函数，获取className
function getByClass(clsName,parent){
    let oParent=parent?document.getElementById(parent):document
    let oClass= oParent.querySelector(clsName)
    return oClass
}

window.onload=function(){
    openSearch()

}

function openSearch(){
    let seBtn=getByClass('.search-submit')
    seBtn.onclick=bdSearch
    document.onkeyup=function(e){
    if(e.key=='Enter'){
        bdSearch()
        }
    }  
}

function bdSearch(){
    let kw=getByClass('.search-text').value;
    window.open('https://www.baidu.com/s?wd='+kw)
}