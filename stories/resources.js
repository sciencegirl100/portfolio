fill(25, 35, 85);
textSize(24);
text('Github', xoff+64, yoff+32);
text('Blog', xoff, yoff+32);
text('Resume', xoff+150, yoff+32);
fill(0);
var temp_cursor = cursor_image;
if (mouseX >= xoff && mouseX < xoff+50){
  if (mouseY >= yoff+4 && mouseY < yoff+38){
    if (mouseRelease){
      window.location.href = "https://lizline.net";
    }
    cursor_image = 'grab';
  }else{
    cursor_image = temp_cursor;
  }
}else if(mouseX >= xoff+64 && mouseX < xoff+138){
  if (mouseY >= yoff+4 && mouseY < yoff+38){
    if (mouseRelease){
      window.location.href = "https://github.com/sciencegirl100";
    }
    cursor_image = 'grab';
  }else{
    cursor_image = temp_cursor;
  }
}else if(mouseX >= xoff+150 && mouseX < xoff+230){
  if (mouseY >= yoff+4 && mouseY < yoff+38){
    if (mouseRelease){
      window.location.href = "https://liz.cray.lgbt/ResumeJan2019.pdf";
    }
    cursor_image = 'grab';
  }else{
    cursor_image = temp_cursor;
  }
}else{
  cursor_image = temp_cursor;
}
