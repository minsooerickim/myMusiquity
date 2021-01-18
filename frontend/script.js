
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const request = new XMLHttpRequest();

    const url = 'https://musiquity.herokuapp.com/search/?q=';

    var query_text = document.getElementById('pls').value;
    
    request.open("get", url + query_text);
    request.onload = function() {
        console.log(request.responseText);

        var obj = JSON.parse(request.responseText);
    
        var  spotifyNum = 0, youtubeNum = 0, youtubeMusicNum = 0;

        var pls = JSON.parse(obj);
        
        arry = [];
        const keys = Object.keys(pls);
        Object.entries(pls).forEach(([key, value]) => {

                Object.entries(value).forEach(([key, value]) => {
                    
                    console.log(value);
                });
                if (key == "spotify") {
                    spotifyNum++
                }
                if (key == "youtube") {
                    youtubeNum++
                }
                if (key == "youtube_music") {
                    youtubeMusicNum++
                }
        });
        console.log(spotifyNum);

        var i;
        for (i = 0; i < spotifyNum; i++) {
            var div = document.createElement("div");
            div.style.width = "200px";
            div.style.height = "200px";
            div.style.background = //album cover;
            div.style.marginLeft = "26%";
            div.style.marginTop = "50px";
            div.setAttribute("id", "1stDiv");
            document.getElementById("left-banner").appendChild(div);
            
            var h2 = document.createElement("h2");
            h2.setAttribute("id", "1sth2")
            document.getElementById("1stDiv").appendChild(h2);
            document.getElementById("1sth2").innerHTML = 'title';
            
        }
    }
        
    request.send();
});

