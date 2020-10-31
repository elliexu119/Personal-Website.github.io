
var entries;
$.getJSON("https://raw.githubusercontent.com/elliexu119/Personal-Website/master/october%2030%2C%202020/projects.json", function(result){
    $.each(result, function(i, field){
    entries = field; 
    });
    main(); 

    const buttons = document.querySelectorAll('button.portfolioButton');
    for (const button of buttons) {
    button.addEventListener('click', event => {
            console.log( button.id+'Modal');
            document.getElementById( button.id+'Modal').style.display = "block";

            document.getElementById(button.id+'Close').onclick = function() {
                document.getElementById(button.id+'Modal').style.display = "none";
            }
    });
    }

});

function main (){
    document.getElementById('All').style.display = "block";
    document.getElementById('loadmore1').style.visibility = 'visible';
    if (window.innerWidth < 400) smalltab1();
    else tab1func();
}

function tab1func() {
    var tab = 'allcol'; 
    var number = 1; 

    var keys = []; 
    console.log (entries.length);
    for (var i = 0; i < entries.length; i++){

        keys.push(entries[i]);
        console.log(entries[i]);
    }

    for (var i = 0; i < keys.length; i++){
        if (number > 4){
            number = 1; 
        }

        console.log(keys[i].id + ' ');

        var content = '<button class = "portfolioButton" id='+ keys[i].id +'>\
                <div class="container">\
                    <img src='+ keys[i].icon +' alt="Avatar" class="image">\
                    <div class="overlay">\
                        <div class="textbox">\
                            <div class="text">' + keys[i].name + '</div>\
                            <div class="smoltext">'+ keys[i].category +'</div>\
                            <div class="smoltext">Click to see more</div>\
                        </div>\
                    </div>\
                </div>\
            </button>';

        //console.log('key ' + keys[i]);

        $("#portfolio").append(content);

        //console.log(document.getElementById(keys[i].name));
        document.getElementById(tab + number).appendChild(document.getElementById(keys[i].id));
        document.getElementById(keys[i].id).style.display = "block";
        number += 1; 
    }
    loadmore("none");
    popupSetup();


}

function smalltab1() {
    var keys = []; 
    for (var key in entries){
        keys.push(entries[key]);
    }

    for (var i = 0; i < keys.length; i++){
        var content = '<button class = "portfolioButton" id='+ keys[i].id +'>\
                <div class="container">\
                    <img src='+ keys[i].icon +' alt="Avatar" class="image">\
                    <div class="overlay">\
                        <div class="textbox">\
                            <div class="text">' + keys[i].name + '</div>\
                            <div class="smoltext">'+ keys[i].category +'</div>\
                            <div class="smoltext">Click to see more</div>\
                        </div>\
                    </div>\
                </div>\
            </button>';

        console.log(keys[i]);

        $("#portfolio").append(content);

        //console.log(document.getElementById(keys[i].name));
        document.getElementById('allcol1').appendChild(document.getElementById(keys[i].id));
        document.getElementById(keys[i].id).style.display = "block";
        number += 1; 
    }

    loadmore("none");

}

function loadmore(status) {
    var hidden = ['light-flicker', 'mountain-paths', 'webid', 'toycar', 'encryption', 'good-doggo', '2048', 'toycar', 'tictactoe'];
    for (var i = 0; i < hidden.length; i ++){
        //console.log(hidden[i]);
        document.getElementById(hidden[i]).style.display = status; 

    }
}

function button1() {
    document.getElementById('loadmore1').style.visibility = 'hidden';
    loadmore("block");
}   

function popupSetup(){
    var keys = []; 
    for (var key in entries){
        keys.push(entries[key]);
    }
    for (var i = 0; i < keys.length; i++){ //keys.length
        //console.log('modal title ' + keys[i].id + 'Modal'); 
         var content = '<div id= "'+ keys[i].id + 'Modal' + '" class="modal">\
            <div class="modal-content">\
                <span class="close" id = "' + keys[i].id + 'Close' + '">&times;</span>\
                <h1>'+ keys[i].name + '</h1>\
                <h2>' + keys[i].skills + '</h2>\
                <h2 style = "font-weight: lighter">' + keys[i].date + '</h2>\
                <div id = "'+ keys[i].id + 'modalp"> </div>\
                </div>\
            </div>';
         $("#popup").append(content);

         $("#" + keys[i].id + "modalp").load('https://raw.githubusercontent.com/elliexu119/Personal-Website/master/october%2030%2C%202020/projects/'+ keys[i].id'.html');


         
    }
}



  