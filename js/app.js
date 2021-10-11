// document.getElementById('tab-2-content').addEventListener('click',show2)

// function show2() {
//     document.getElementById('tab-1-content').classList.remove('show')
//     document.getElementById('tab-3-content').classList.remove('show')
//     document.getElementById('tab-2-content').classList.add('show')
// }

const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

function selectItem(e) {
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //Grab content item from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    //Add show class
    tabContentItem.classList.add('show')
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

tabItems.forEach(item => item.addEventListener('click', selectItem))

