$(document).ready(function(){

  const form = document.querySelector('[name="verify"]');
const inputs = form.querySelectorAll('.inputs input');
const inputsArr = [...inputs];
const submitBtn = document.querySelector('input[type="submit"]');

const selectIfNotEmpty = function(e) {
  if (e.target.value) {
    e.target.select();
  }
}

const handleInput = function(e) {
  if (e.target.value && e.target.nextElementSibling) {
    e.target.nextElementSibling.focus();
  }
  if (!e.target.nextElementSibling && inputsArr.every(input => input.value)) {
    submitBtn.focus();
  }
}

const handleBackspace = function(e) {
  if (e.keyCode == 8 && e.target.value == '' && e.target.previousElementSibling) {
    e.target.previousElementSibling.focus(); 
  }
}

const handlePaste = function(e) {
  const data  = e.clipboardData.getData('text');
  inputs.forEach((input, i) => {
    input.value = data[i] || input.value
  })
  if (inputsArr.every(input => input.value)) {
    submitBtn.focus();
    console.log('ready for submit')
  }
  
}

const handleSubmit = function(e) {
  e.preventDefault();
  //console.log(completed)
}

const handleArrows = function(e) {
  if (e.keyCode == 37 && e.target.previousElementSibling) {// izq
    e.preventDefault();
    e.target.previousElementSibling.focus()
  }
   
  if (e.keyCode == 39 && e.target.nextElementSibling) {// der
    e.preventDefault();
    e.target.nextElementSibling.focus()
  }
}

inputs.forEach(input => {
  input.addEventListener('focus', selectIfNotEmpty)
})

inputs.forEach(input => {
  input.addEventListener('input', handleInput);
})

inputs.forEach(input => {
  input.addEventListener('keyup', handleBackspace);
})

inputs.forEach(input => {
  input.addEventListener('paste', handlePaste);
})

inputs.forEach(input => {
  input.addEventListener('keydown', handleArrows);
})

form.addEventListener('submit', handleSubmit);



});

function showPass() {
  var x = document.getElementById("passwordinp");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


$('.openmenu').click(
function(){
  $(".menu").css("right","0");
  $(".menu").css("opacity","1");
  $(".menu").css("visibility","visible");
  $(".closmenu").css("display","block");
  $(".openmenu").css("display","none");
});

$('.closmenu').click(
function(){
  $(".menu").css("right","-500px");
  $(".menu").css("opacity","0");
  $(".menu").css("visibility","hidden");
  $(".closmenu").css("display","none");
  $(".openmenu").css("display","block");
});

$('.car-request-pop-btn').click(
  function(){
    $(".car-request").css("top","0");
    $(".car-request").css("opacity","1");
    $(".car-request").css("visibility","visible");
  });

$('.close-car-req').click(
  function(){
    $(".car-request").css("top","100%");
    $(".car-request").css("opacity","0");
    $(".car-request").css("visibility","hidden");
  });

$('#charkheshi').on('click', function(){
  isChecked = $(this).is(':checked')
  
  if(isChecked){ 
    $('.rotate-box2').css('display','flex');
  }
  else{ 
    $('.rotate-box2').css('display','none');
  }
});

$('#charkheshi').on('click', function(){
  isChecked = $(this).is(':checked')
  
  if(isChecked){ 
    $('#rotate-bb').css('display','block');
  }

});

$('.close-rotate').click(
  function(){
    $("#rotate-bb").css("display","none");
});

$(".res-click").click(function() {
  $(this).closest(".mc-page-table-body").children('.mc-page-table-post').children('.res-dnone').slideToggle();
});

function rangeSlide(value) {
 document.getElementById('rangeValue').innerHTML = value;
}



const
range = document.getElementById('range'),
tooltip = document.getElementById('tooltip'),
setValue = ()=>{
    const
        newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
        newPosition = 16 - (newValue * 0.32);
    tooltip.innerHTML = `<span>${range.value}</span>`;
    tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
    document.documentElement.style.setProperty("--range-progress", `calc(${newValue}% + (${newPosition}px))`);
};
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);






