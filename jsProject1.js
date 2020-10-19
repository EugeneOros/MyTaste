
var dishTabCheck = [{elementId : "1", isActive : false},
{elementId : "2", isActive : false},
{elementId : "3", isActive : false},
{elementId : "4", isActive : false},
{elementId : "5", isActive : false},
{elementId : "6", isActive : false},
{elementId : "7", isActive : false},
{elementId : "8", isActive : false},
];

var arr = ['foo', 'bad'];

arr.length =0 ;
arr.push('ops');
console.log(arr);

var numOfId = 8;

//*******************************************openCloseElement*************************************************** */

function closeAll(){
    for (var i=0; i<dishTabCheck.length; i++){
        if(dishTabCheck[i].isActive == true) {
            dishTabCheck[i].isActive = false;
           var d = document.getElementById("dishDescription"+dishTabCheck[i].elementId);
    
          d.style.transform="scaleY(0)" 
            document.getElementById(dishTabCheck[i].elementId).style.transform = "rotateY(0deg)"
        }
    }
      
}

function open(id){
    dishTabCheck[id-1].isActive = true;
    document.getElementById("dishDescription"+id).style.transform="scaleY(1)" ;  
    document.getElementById(id).style.transform = "rotateY(180deg)";
}

function openClose(id){
    
    if(dishTabCheck[id-1].isActive == true){
        closeAll();       
    }
    else{
        closeAll();    
        open(id);   
    }
    return true;
}

/*****************************************************addingNewElement***************************************************** */

function appearAddField(){
    document.getElementById("addField").style.height="500px";
    document.getElementById("addField").style.transform="scaleY(1)";
}

function closeAddField(){
    document.getElementById("notFilled").innerHTML = "";
    document.getElementById('name').value = "";
    document.getElementById("description").value = "";
    document.getElementById("addField").style.transform="scaleY(0)";
    document.getElementById("addField").style.height="0px";
    document.getElementById("imgAddress").value = "";
}


function createDish(){

    //adding dish div
    var beforElement = document.getElementById("dish"+numOfId);
    numOfId++;
    dishTabCheck.push({elementId : numOfId, isActive : false});
    var dish = document.createElement('div');
     dish.setAttribute("id", "class");
     dish.id = "dish" + numOfId;
     dish.className = "dish";
     beforElement.after(dish);

    // adding dishImgBtn div
    var dishImgBtn = document.createElement('div');
    dishImgBtn.setAttribute("id", "class", "onclick");
    dishImgBtn.className = "dishImgBtn"; 
    dishImgBtn.id = numOfId;
    dishImgBtn.onclick = function (){
        openClose(this.id);
    };
    dish.appendChild(dishImgBtn);

    //adding DeleteBtn
    var dishDeleteBtn = document.createElement('img');
    dishDeleteBtn.onclick = function(){
        document.getElementById("dish"+dishImgBtn.id).style.cssText ='visibility: hidden; opacity: 0;';
        document.getElementById("dish"+dishImgBtn.id).style.display = "none";
    }
    dishDeleteBtn.style.cssText = 'position: absolute; top: 5px; right: 5px; z-index: 200; height: 40px; width: 40px;  cursor:pointer; border: none;';
    dishDeleteBtn.src = "img/cancel.png";
    dish.appendChild(dishDeleteBtn);
    
    


    // adding frontImg div
    var frontImg = document.createElement('div');
    frontImg.className = "frontImg";
    dishImgBtn.appendChild(frontImg);

    var imgDish = document.createElement('div');
    imgDish.className = "imgDish";
    frontImg.appendChild(imgDish);

    var dishNameFront = document.createTextNode(document.getElementById('name').value );
    frontImg.appendChild(dishNameFront);

    var imgFront = document.createElement('img');
    imgFront.src = document.getElementById("imgAddress").value;
    imgDish.appendChild(imgFront);


    //adding backImg div    
    var backImg = document.createElement('div');
    backImg.className = "backImg";
    dishImgBtn.appendChild(backImg);

    var imgDishB = document.createElement('div');
    imgDishB.className = "imgDish";
    backImg.appendChild(imgDishB);

    var dishNameBack = document.createTextNode(document.getElementById('name').value );
    backImg.appendChild(dishNameBack);

    var imgBack = document.createElement('img');
    imgBack.src = "img/spices.jpg";
    imgDishB.appendChild(imgBack);

    
    //adding dishDescription div
    var dishDescription = document.createElement('div');
    dishDescription.setAttribute("class", "id");
    dishDescription.id = "dishDescription" + numOfId;
    dishDescription.className = "dishDescription";

    var par = document.createElement('p');
    var textDescription = document.createTextNode(document.getElementById("description").value );
    par.appendChild(textDescription);
    dishDescription.appendChild(par);

    dish.appendChild(dishDescription);    
}

function addDish(){
    var name = document.getElementById('name').value;
    var description = document.getElementById("description").value;
    if (name == "" || description == "") {
       document.getElementById("notFilled").innerHTML = "please enter data"; 
    }else{
      if(document.getElementById('imgAddress').value == "")document.getElementById('imgAddress').value = "img/noImg.jpg"
      createDish();  
      closeAddField();    
    }
    return false;  
}

/*********************************************************************************************************** */