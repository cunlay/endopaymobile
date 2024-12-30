function ajaxObj( meth, url ) { 
  var x = new XMLHttpRequest(); 
  x.open( meth, url, true ); 
  x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");    
  return x; 
} 

function ajaxReturn(x){  
  if(x.readyState == 4){ 
  if(x.status == 200){
  return true; 
  }else{
  return false;
  }
  }
} 

function ajaxTimeout(x){
   x.abort();   
   return x.status;
}