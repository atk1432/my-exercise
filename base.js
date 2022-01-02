var categoryItem = document.querySelectorAll('.category__item')
var description = document.querySelectorAll('.description')
var tab = document.querySelector('.tab')

categoryItem.forEach((item) => {

    item.onclick = (e) => {

        var index = Array.from(categoryItem).indexOf(item)
        

        for (var i = 0; i < categoryItem.length; i++) {
            categoryItem[i].className = 'category__item'
            description[i].className = 'description'
        }
        
        categoryItem[index].className += ' active'
        description[index].className += ' active'

        moveTab(index)
    }

})

function moveTab(index) {
    var categoryItemWidth = 0;
    var categoryItemPadding = 0;
    for (var i = 0; i < index; i++) {
        categoryItemWidth += categoryItem[i + 1].offsetWidth
    }
    tab.style.transform = `translateX(${categoryItemWidth}px)`
    tab.style.width = `${categoryItem[index].offsetWidth}px`
}

moveTab(0)