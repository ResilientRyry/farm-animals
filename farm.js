//user clicks image and image moves around and makes noises.
$(document).ready(function(){
  // var location = Math.floor(Math.random() *500);
  $('#rooster').on('click',function(){
    var location = Math.floor(Math.random() *500);
  $('#rooster').css({top: location, left:location});
  $('#roosterN').get(0).play();
  });

  $('#pig').on('click',function(){
    var location = Math.floor(Math.random() *500);
  $('#pig').css({top: location, left:location});
  $('#pigN').get(0).play();
  });

  $('#lamb').on('click',function(){
    var location = Math.floor(Math.random() *500);
  $('#lamb').css({top: location, left:location});
  $('#lambN').get(0).play();
  });
});
