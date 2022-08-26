
window.onload=function(){
    let searchBtn=document.querySelector('.search-submit');
    searchBtn.onclick=function (){openSearch()
    };
}

function openSearch(){
    let e=document.querySelector('.search-text').value;
    window.open('https://www.baidu.com/s?wd='+e)
}