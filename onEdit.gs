/*
AMR 7/27/2017
Jonathan Thornton

on Edit functions to facilitate tracking of Rep Sales and Retention for Republic Services 

*/

//Master controller function - handler class to run onEdits in sequence
function onEdit(event){
  var activeSheet = event.source.getActiveSheet().getName();
  if(activeSheet === 'Sales Tracker'){
    dateStamp(event, activeSheet);
    timeStamp(event, activeSheet);
  } else if (activeSheet === 'Retention Tracker'){
    dateStamp(event, activeSheet);
    timeStamp(event, activeSheet);
  } 
}





