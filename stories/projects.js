fill(25, 35, 85);
textSize(24);
text('The Box', xoff, yoff+32);
text('Joke Call', xoff+112, yoff+32);
text('Dynamic Magic Band', xoff+226, yoff+32);
text('md-Display', xoff, yoff+64);
fill(0);
text('More to come!', xoff+140, yoff+64);

var temp_cursor = cursor_image;
/* LINK: The Box */
if (mouseX >= xoff && mouseX < xoff+98){
  if (mouseY >= yoff+4 && mouseY < yoff+38){
    if (mouseRelease){
      window.location.href = "https://github.com/sciencegirl100/theBox";
    }
    cursor_image = 'grab';
  }else{
    cursor_image = temp_cursor;
  }
  /* LINK: Joke Call */
}else if(mouseX >= xoff+112 && mouseX < xoff+206){
  if (mouseY >= yoff+4 && mouseY < yoff+38){
    if (mouseRelease){
      window.location.href = "https://github.com/sciencegirl100/JokeCall";
    }
    cursor_image = 'grab';
  }else{
    cursor_image = temp_cursor;
  }
/* LINK: Magic Band*/
}else if(mouseX >= xoff+226 && mouseX < xoff+470){
  if (mouseY >= yoff+4 && mouseY < yoff+38){
    if (mouseRelease){
      window.location.href = "https://github.com/sciencegirl100/dynamic-magic-band";
    }
    cursor_image = 'grab';
  }else{
    cursor_image = temp_cursor;
  }
}else{
  cursor_image = temp_cursor;
}
/* LINK: md-display*/
if (mouseY >= yoff+40 && mouseY < yoff+64){
  if(mouseX >= xoff && mouseX < xoff+120){
      if (mouseRelease){
        window.location.href = "https://github.com/sciencegirl100/md-display";
      }
      cursor_image = 'grab';
    }else{
      cursor_image = temp_cursor;
    }
}
