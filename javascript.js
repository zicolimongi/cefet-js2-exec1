var expandButton = document.getElementsByTagName('button');
for(i=0;i< expandButton.length; i++){
    expandButton[i].addEventListener('click',function(e){
        if(this.parentElement.classList.contains('expandido')){
            this.innerHTML = '+';
            this.parentElement.classList.remove('expandido');
        }
        else{
            this.innerHTML = '-';
            this.parentElement.classList.add('expandido');
        }
    });
}
