function insertUrl(){
    var names = document.getElementById("name").value;   
    var year = document.getElementById("year").value;
    var url = document.getElementById("url");
     if(names != '' && year != ''){
        url.innerHTML = `https://localhost:8080/?name=${names}&year=${year}`;
    }else if(names != ''){
        url.innerHTML = `https://localhost:8080/?name=${names}`;
    }else if(year != ''){
        url.innerHTML = `https://localhost:8080/?year=${year}`;
    }
   
}