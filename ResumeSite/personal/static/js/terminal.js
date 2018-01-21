var showText = function (target, message, index, interval) {    
  if (index < message.length) { 
    $(target).append(message[index++]); 
    setTimeout(function () { showText(target, message, index, interval); }, interval); 
  } 
}
    
$(function () { 
 
  showText("#msg1", "Oh hey, do you like the website? its still a work in progress", 0, 80);    
 
}); 


$(function () { 
 
  showText("#msg2", "Oh hey,", 0, 80);    
 
}); 

$(function () { 
 
  showText("#msg3", "Are you liking the site so far?", 0, 80);    
 
}); 

$(function () { 
 
  showText("#msg4", "well give me some time I'm sure it will improve", 0, 80);    
 
}); 