
var mImage = document.querySelector('img');

mImage.onclick = function(){
    var mySrc = mImage.getAttribute('src');
    if(mySrc === 'images/google.png'){
        mImage.setAttribute('src','images/baidu.png');
    }else{
        mImage.setAttribute('src',"images/google.png");
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var name = prompt('Please enter your name.');
    localStorage.setItem('name',name);
    myHeading.textContent = 'Hello ' + name;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello again,'+storedName;
}
myButton.onclick = function(){
    setUserName();
}