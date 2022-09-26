const tabItems=document.querySelectorAll('.tab-item');
const tabContentItems=document.querySelectorAll('.tab-content-item')

function selectItem(e){
    removeborder();
    removeshow();
    this.classList.add('tab-border');
    const tabContentItem=document.querySelector(`#${this.id}-content`)
    tabContentItem.classList.add('show');
}

function removeborder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeshow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}


tabItems.forEach(item => item.addEventListener('click',selectItem));