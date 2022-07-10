function refreshTime(){
    const date = new Date();

    let year = date.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    let month = date.getMonth()+1;
    let monthName = monthNames[month];

    let num = date.getDate();

    var day = date.getDay();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(day);
    var dayName = days[d.getDay()- 1];


    let th = date.getHours();
    let tm = date.getMinutes();
    let ts = date.getSeconds();

    //console.log(num, monthName, year, dayName, tm, th, ts);


    document.getElementById('date-num').innerHTML = num;
    document.getElementById('date-month').innerHTML = monthName;
    document.getElementById('year').innerHTML = year;
    document.getElementById('day').innerHTML = dayName;




    document.getElementById('hr').innerHTML= th +" : ";
    document.getElementById('min').innerHTML = tm +": ";
    document.getElementById('sec').innerHTML = ts;

}
setInterval(refreshTime, 1000);
