var entries = {
    'project1': {
        'id': 'codia', 'name':'CODIA', 'icon': '../portfolio-pictures/icon%20v2/codia.png', 'category' : 'Electrical · Mechanical · Software',
        'skills' : "Inventor, Arduino, 3D printing, PCB Design, Shop Skills", 'date': '2019', 'points': ['sdafsd', 'well well well']
    },
    
    'project2' : {
        'id':'crowdmotions', 'name':'Crowd Motions - Smart Review Web Scraper', 'icon': '../portfolio-pictures/icon%20v2/crowdmotions.png', 'category' : 'Software',
        'skills' : 'Java, C#, Unity, Git', 'date': '2019', 'points': ['', '']
    },
    
    'project3': {
        'id':'twitter', 'name':'Cuckoos: Twitter Analyzer', 'icon': '../portfolio-pictures/icon%20v2/cuckoos.png', 'category' : 'Software',
        'skills' : 'Python', 'date': '2020', 'points': ['', '']
    },
    
    'project4' : {
        'id':'thermo', 'name':'Thermoelectric 3-in-1', 'icon': '../portfolio-pictures/icon%20v2/thermo.png', 'category' : 'Electrical · Software',
        'skills' : 'Thermoelectricity, Arduino, HTML', 'date': '2017', 'points': ['', '']
    },
    
    'project5' : {
        'id': 'ar', 'name':'AR Navigation', 'icon': '../portfolio-pictures/icon%20v2/ar.png', 'category' : 'Software',
        'skills' : 'Unity, Vuforia', 'date': '2019', 'points': ['', '']
    },
    
    'project6' : {
        'id':'booking', 'name':'Booking Program', 'icon': '../portfolio-pictures/icon%20v2/booking.png', 'category' : 'Software', 
        'skills' : 'Java', 'date': '2018', 'points': ['', '']
    },
    
    'project7': {
        'id': 'stock', 'name':'Tulip & Carnation: Stock Simulators', 'icon': '../portfolio-pictures/icon%20v2/stock.png', 'category' : 'Software',
        'skills' : 'Python', 'date': '2020', 'points': ['', '']
    },
    
    'project9' : {
        'id': 'shopping', 'name':'Virtual Personal Shopping Assistant', 'icon': '../portfolio-pictures/icon%20v2/janet%20.png', 'category' : 'Software · Electrical',
        'skills' : 'Python, Arduino', 'date': '2020', 'points': ['', '']
    },
    
    'project8': {
        'id':'2048', 'name':'2048', 'icon': '../portfolio-pictures/icon%20v2/2048.png', 'category' : 'Software',
        'skills' : 'Java, GUI', 'date': '2018', 'points': ['', '']
    },
    
    'project10': {
        'id':'light-flicker', 'name':'Light Flicker', 'icon': '../portfolio-pictures/icon%20v2/light%20flicker.png', 'category' : 'Arduino',
        'skills' : 'Arduino', 'date': '2020', 'points': ['', '']
    },
    
    'project11':{
        'id':'mountain-paths', 'name':'Mountain Paths', 'icon': '../portfolio-pictures/icon%20v2/mountain.png', 'category' : 'Software',
        'skills' : 'Java', 'date': '2018', 'points': ['', '']
    },
    
    'project12': {
        'id':'webid', 'name':'Web ID', 'icon': '../portfolio-pictures/icon%20v2/candy.png', 'category' : 'Electrical',
        'skills' : 'Arduino, HTML', 'date': '2019', 'points': ['', '']
    },
    
    'project13' : {
        'id':'toycar', 'name':'Toy Car', 'icon': '../portfolio-pictures/icon%20v2/car.png', 'category' : 'Electrical',
        'skills' : 'Electrical', 'date': '2017', 'points': ['', '']
    },
    
    'project14' : {
        'id':'encryption', 'name':'Enigma Writer', 'icon': '../portfolio-pictures/icon%20v2/enigma%20.png', 'category' : 'Mechanical · Software · Electrical',
        'skills' : 'VEX, Lego EV3, RobotC', 'date': '2019', 'points': ['', '']
    },
    
    'project15':{
        'id':'tictactoe', 'name':'Tic Tac Toe', 'icon': '../portfolio-pictures/icon%20v2/tictactoe.jpg', 'category' : 'Software',
        'skills' : 'C#, Unity', 'date': '2020', 'points': ['', '']
    },
    
    'project16': {
        'id':'good-doggo', 'name':'Good Dog', 'icon': '../portfolio-pictures/icon%20v2/good%20doggo.png', 'category' : 'Mechanical · Electrical',
        'skills' : 'Mechanical, Arduino', 'date': '2020', 'points': ['', '']
    }
   // 'project' : {'name':'', 'icon': '', 'category' : ''},

};

document.getElementById('All').style.display = "block";
document.getElementById('loadmore1').style.visibility = 'visible';
if (window.innerWidth < 400) smalltab1();
else tab1func();

function tab1func() {
    var tab = 'allcol'; 
    var number = 1; 

    var keys = []; 
    for (var key in entries){
        keys.push(entries[key]);
    }

    for (var i = 0; i < keys.length; i++){
        if (number > 4){
            number = 1; 
        }

         //console.log(keys[i].id + ' ');

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

        console.log('key ' + keys[i]);

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
                <img> </img>\
                <p id = "'+ keys[i].id + 'modalp"> </p>';

        for (var j = 0; j < keys[i].points.length; j++){
           // console.log(keys[i].points[j]); 
            content += '<p>'+ keys[i].points[j] + '<p>';
        }
        
        content += '</div>\
         </div>';
         $("#popup").append(content);

         $("#" + keys[i].id + "modalp").load('https://raw.githubusercontent.com/elliexu119/Personal-Website/master/october%2030%2C%202020/test.html');


         
    }
}

const buttons = document.querySelectorAll('button.portfolioButton');
for (const button of buttons) {
   button.addEventListener('click', event => {
        //console.log( button.id+'Modal');
        document.getElementById( button.id+'Modal').style.display = "block";

        document.getElementById(button.id+'Close').onclick = function() {
            document.getElementById(button.id+'Modal').style.display = "none";
        }
   });
}

  