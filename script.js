
// callback example

const url = "https://api.thedogapi.com/v1/breeds";

// display of the fetched data from the Guvi() function
let data;
function display_data(data) 
{
    let suman = document.getElementById("suman");
    suman.innerHTML = data;
}
//fetching the data from the API
function fetch_data_from_api(url, my_callback_function) 
{
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    request.onload = function () {
    data = my_callback_function((request.response));
    };
  
}

// calling the callback function fetch_data_from_api() which calls display_data()
fetch_data_from_api(url, display_data);