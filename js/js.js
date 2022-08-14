
window.onload=function(){
    let searchBtn=getElementsByClassName('search-submit')
    searchBtn.onclick=openSearch(e)
}

function openSearch(e){
    let e=document.getElementsByClassName('search-text').innerhtml;
    window.open('https://www.baidu.com/s?wd='+e)
}
