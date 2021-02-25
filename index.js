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

//QUESTION NO. 6
function FindWord(){
    let words = ["paper","table", "exam", "hall"];
    for(word of words){
        if(word == "exam"){
            console.log(`The word "exam" is at index ${words.indexOf(word)}`);
            return true;
        }

    }
}

//QUESTION NO. 7
function carsCount(){
    const cars= [{name:'ford'}, {name:'lexus'}, {name:'maserati'}, {name:'ford'}];
    let arr=cars.map((car)=>{
        return car.name;
    })
    console.log(arr);
    
    const duplicate=arr.filter((value,index)=>{
        return arr.indexOf(value)!=index;
    });
    console.log(duplicate);
    }

//QUESTION NO.3
function IsoToLocal(){
    const IsoTime = "2021-02-23T17:56:17.366+00:00"
    console.log(`ISO time is: ${IsoTime}`);
    let LocalTime = new Date(IsoTime);
    console.log(`Local time is: ${LocalTime}`);
}

//QUESTION NO. 8
