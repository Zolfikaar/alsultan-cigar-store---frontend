let listItems = document.querySelectorAll('.navigation li');

let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let close = document.querySelector('.toggle ion-icon[name="close"]');
let menu = document.querySelector('.toggle ion-icon[name="menu"]');

// add hovered class in selected list item

  listItems.forEach((item) => {
    let listItemTitle = item.querySelector('a .title').innerHTML;
    // let activeListItem = item.querySelector('a');
    // Adding class hovered when mouse is over the list item
    item.addEventListener('mouseover', () => {
      item.classList.add('hovered')
      item.setAttribute('title', listItemTitle);
      // console.log(item);
    })

    // Removeing class hovered when mouse is leave the list item
    item.addEventListener('mouseleave', () => {
      item.classList.remove('hovered')
    })

    // Adding class active to to list item when clicked
    // item.addEventListener('click', () => {

    //   activeListItem.classList.add('active');
      
    // })
  });




// Menu Toggle
toggle.onclick = function() {
  navigation.classList.toggle('active');
  main.classList.toggle('active');

  if(navigation.classList.contains('active')) {
    menu.style.display = 'none';
    close.style.display = 'block';
  } else {
    menu.style.display = 'block';
    close.style.display = 'none';
  }
}

// User drop down menu toggle
const resultBox = document.querySelector('.result-box'),
      selectBtn = document.querySelector('.select-btn')

selectBtn.addEventListener('click', () => {
  resultBox.classList.toggle('active');
  selectBtn.classList.toggle('active');
})