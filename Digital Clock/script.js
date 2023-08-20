function time(){
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var session="AM";
    if(h==0){
        h=12;
    }
    if(h>12){
        h=h-12;
        session="PM";
    }
    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    }
    document.getElementById("clock").innerHTML=h+":"+m+":"+s+" "+session;
    setTimeout(time,1000);
    }
    time();
    window.onload = function() {
        const a = Math.random();
      const a1=Math.floor(1+a*(19-1));
     
      quotes = [
        "Believe you can.",
        "Stay focused, succeed.",
        "Dreams fuel life.",
        "Rise after falling.",
        "Embrace each challenge.",
        "Choose to shine.",
        "Keep pushing forward.",
        "Create your path.",
        "Strive, thrive, conquer.",
        "Chase your goals.",
        "You've got this.",
        "Never give up.",
        "Winning begins within.",
        "Progress, not perfection.",
        "Leap, then soar.",
        "Time Turs all",
        "Inspire with action.",
        "Effort shapes destiny.",
        "Keep evolving daily.",
        "Find strength within."
    ]
        const dis = document.getElementById('q1');
        dis.textContent = quotes[a1];

      };
      
    
    time();