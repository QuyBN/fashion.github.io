window.onload= function() {
var like = document.querySelectorAll('.like')
console.log(like.length)
like = Array.from(like)

like.map(function(item){
    var likeItem = item.firstElementChild
    likeItem.onclick = function(e){
    e.preventDefault();
    this.innerHTML=
        `
        <i class="fas fa-check"></i>
        liked
        `
}
})


// fuction show, hiden comment

like.map(function(item,index){
    var comentItem = item.lastElementChild
    comentItem.onclick = function(e){
        e.preventDefault()
        var comment = document.querySelectorAll('.comment');
        comment = Array.from(comment)
        comment[index].classList.toggle('d_flex')
    }
    
})
// var comment = document.querySelectorAll('.comment');
// comment = Array.from(comment)


// console.log(comment)


var subcriceBtn = document.querySelector('.sidebar__subcribe button')
 
subcriceBtn.onclick = function(e) {
    e.preventDefault();
    var subFixed = document.querySelector('.subcribe__fixed')
       subFixed.style.display = 'block'
}

var hideSub = document.querySelector('.fixed__content i')
hideSub.onclick = function() {
    var subFixed = document.querySelector('.subcribe__fixed')
    subFixed.style.display='none'
}

}
