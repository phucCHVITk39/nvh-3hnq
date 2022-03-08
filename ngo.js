function jump_buttonmusic(){
  var navDuration = 150,
      showmusicbt =  $("span.show_music_button");
chats =
[
"Anh Vkhanh nói iu cậu nhiều lắm đấy",
"Nghe nhạc cùng pé nè",
"Hey you, chọt tui 1 cái đê",
"Lên là lên là lên là lên",
"Kìa con bướm vàng là la",
"Chị có muốn bé hát hông ?",
"Bé là đệ tử của anh Vkhanh đấy :)",
"Oh yeah, click me baby",
"Em có yêu anh Vkhanh không",
"Chị iu xinh đẹp quá nè",
"Anh Vkhanh mê chị lắm đó",
]
var chat = chats[Math.floor(Math.random()*chats.length)];
 
showmusicbt.animate({ marginTop : "-0.45em"}, navDuration).animate({ marginTop :"0.45em"}, navDuration)
.animate({ marginTop : "-0.25em"}, navDuration).animate({ marginTop :"0.25em"}, navDuration)
.animate({ marginTop : "-0.55em"}, navDuration).animate({ marginTop :"0.55em"}, navDuration,function(){
showmusicbt.find('p').text(chat).slideDown('slow');
});
 
setTimeout(function(){
showmusicbt.find('p').slideUp('slow');
},12000);
 
}
 
$(document).ready(function(){
 
jump_buttonmusic();
setInterval(function() {
jump_buttonmusic();
},30000);
 
$("span.show_music_button").click(function(){
$("#show_music").fadeIn("fast");
});
 
$("a.closediv").click(function(){
$("#show_music").fadeOut("fast");
});
 
});