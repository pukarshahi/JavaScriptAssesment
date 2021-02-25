//QUESTION NO. 1
let names = ['Ram', 'Shyam', 'Hari','Ramkumar'];
function longstr(){
    let str = "";
    for(name of names){
            if(name.length>str.length){
                str = name;
            }
        }   
        console.log(str);
    }

//QUESTION NO. 2
function RemoveCharacter(a,b){
    let c = a.replace(/[^0-9a-zA-Z]/gi, ' ');
    let d = b.replace(/[^0-9a-zA-Z]/gi, ' ');
    console.log(c.toUpperCase());
    console.log(d.toUpperCase());
}

//QUESTION NO. 4
function takeFullName(name){
    let fullName = name.split(" ");
    if(fullName.length===3){
    console.log( {firstName:fullName[0],middlename:fullName[1], lastName:fullName[2]})
    }
    else{
        console.log({firstName:fullName[0],lastName:fullName[1]})
    }
}


//QUESTION NO. 5
function ArrToStr(){
    let a = ["Hello", "Beautiful", "World"];
    let b = (a.join(" "));
    console.log(b);
}