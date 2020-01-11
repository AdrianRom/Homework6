$(document).ready(function () {
    // var cityId = "5131095"
    var currentDayHTML = document.getElementsByClassName("current-day");


    function forecast(city) {

        var APIkey = "6f0f594690b75a6bba0cc5af02c91545";

        var queryURL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APIkey}&units=metric`;
        

        return $.ajax({
            type: "GET",
            url: queryURL,
            timeout: 0,
            headers:{
                "content-type": "application/json"
            }, 
            success: function(){},
            failure: function(){}
        })
    }

    function setHTML (days){
        for (var i = 0; i < days.length; i = i + 8){
            console.log(days[i]);
            var correctDate = new Date(days[i].dt_txt);
            correctDate.setHours(correctDate.getHours() - 5);
            if(i == 0){
                for(let day of currentDayHTML){
                    if(day.id == "c_title") day.textContent = correctDate.toLocaleDateString();
                    else if(day.id == "c_temp") day.textContent = days[i].main.temp;
                    else if(day.id == "c_humidity") day.textContent = days[i].main.humidity;
                    else if(day.id == "c_wind") day.textContent = days[i].wind.speed;
                }
            }

            if(i == 32) i--;
        }
    }
    forecast("Philadelphia").then( function(result){
        //console.log(result);
        setHTML(result.list);
    });
    



    // debugger
    // var dog = localStorage.getItem("dog")



 
})