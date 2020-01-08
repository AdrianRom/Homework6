$(document).ready(function () {
    // var cityId = "5131095"


    function getWeather(city) {

        var APIkey = "b6907d289e10d714a6e88b30761fae22";

        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=philadelphia&appid=b6907d289e10d714a6e88b30761fae22&units=imperial";
        

        $.ajax({
            type: "GET",
            url: queryURL,
            dataType: 'jsonp',
            success: function(data){
                debugger
            }
        })
    }

    getWeather("philadelphia");

    // debugger
    // localStorage.setItem("dog", "max");

    // debugger
    // var dog = localStorage.getItem("dog")



 
    

})