/**
 * Test file at: 
 * https://docs.google.com/spreadsheets/d/1QQtmeZwY25O8M5Vb1Pg-DBedO-udD0VD9EDMweOBUwI/edit?usp=sharing
 * 
 * /

/*global $*/
$(function(){
  console.log("window is ready");
  
  var dataset;
  
  /*global d3*/
  d3.csv("../data/minions.csv", function(error, data){
    if(error){
      // error occurs
    }else{
      dataset = data;
      console.log("data loaded");
    }
  });
  
});