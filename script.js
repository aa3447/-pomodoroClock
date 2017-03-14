"use strict"
$(function() {
    var running = false;
    var ID; 
    var ID2;
    var savedSecond = 0;
    var savedMin = 25;
    var savedHour = 0;
    var onBreak = false;
    
    
    
   $("#Clock").click(timer);
    
    function timer(){
        if(running){
            clearInterval(ID);
            running = false;
            $("#clockState").prop("disabled",false);
            $(".main button").prop("disabled",false);
       }else{
            running = true;
            var second;
            var min;
            var hour;
            $("#clockState").prop("disabled",true);
            $(".main button").prop("disabled",true);
            ID = setInterval(function(){
                second = parseInt($("#second").text());
                min =  parseInt($("#min").text());
                hour =  parseInt($("#hour").text());
               if( second > 0){
                   second--;
                   $("#second").text(second);
               }
                else if(second == 0 && min > 0){
                    second = 59;
                    min--;
                    $("#second").text(second);
                    $("#min").text(min);
                }
                else if(second == 0 && min == 0 && hour > 0){
                    second = 59;
                    min = 59;
                    hour--;
                    $("#second").text(second);
                    $("#min").text(min);
                    $("#hour").text(hour);
                }
                 else if( second == 0 && min == 0 && hour == 0){
                     if(onBreak){
                        clearInterval(ID);
                         $("#clockState").text("Work Time");
                         onBreak = false;
                     }else{
                        change();
                        $("#clockState").text("Break Time"); 
                        onBreak = true;
                     }
               }
           } , 1000);                      
       }
      }
    
    $("#clockState").click(function(){//updates button to appropret text
        if(onBreak){
            onBreak = false;
        }
        if($("#clockState").text() == "Work Time"){
            $("#clockState").text("Break Time"); 
            $("#Clock").prop("disabled",true);
        }else{
            $("#clockState").text("Work Time");
            $("#Clock").prop("disabled",false);
        }
        change();
        
    });
    function change(){//changes from the two states
        var second = parseInt($("#second").text());
        var min =  parseInt($("#min").text());
        var hour =  parseInt($("#hour").text());
        $("#durationsecond").text(savedSecond);
        $("#durationmin").text(savedMin);  
        $("#durationhour").text(savedHour);
        $("#second").text(savedSecond);
        $("#min").text(savedMin);  
        $("#hour").text(savedHour);  
        savedSecond = second;
        savedMin = min;
        savedHour = hour;
        
    }
    
    $(".main button").click(function(){//control the plus/minus buttons
        var value = $(this).val();
        var dur = parseInt($("#duration" + value).text());
        if($(this).text() == "+"){
                    dur++;
            }else{
               if(dur != 0){
                    dur--; 
                }    
            }
            $("#duration" + value).text(dur);
            $("#"+value).text(dur);
        
    });
    
     /* $("#NightMode").click(function(){
          if($("#NightMode").text() === "Night Mode")
        {
            $("body").css("background-color","black");
            $("body").css("color", "orange");
            $("button").css("color", "orange")
            $("#NightMode").text("Day Mode");
        }
          else{
            $("body").css("background-color","white");
            $("body").css("color", "black");
            $("button").css("color", "black");
            $("#NightMode").text("Night Mode");
          }
     });*/

});
   
