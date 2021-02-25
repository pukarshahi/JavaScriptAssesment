//QUESTION NO. 1
function longStr(){
    let names = ['Ram', 'Shyam', 'Hari','Ramkumar'];
    let str = "";
    for(name of names){
            if(name.length>str.length){
                str = name;
            }
        }   
        return str;
    }
    document.getElementById("answer1").innerHTML=longStr()

//QUESTION NO. 2
function removeCharacter(a){
    let c = a.replace(/[^0-9a-zA-Z]/gi, ' ');

    // let d = b.replace(/[^0-9a-zA-Z]/gi, ' ');
    return c.toUpperCase();
}
document.getElementById("answer2").innerHTML=removeCharacter("Hello_World")

//QUESTION NO. 4
function takeFullName(name){
    let fullName = name.split(" ");
    if(fullName.length===3){
        const obj1={firstName:fullName[0],middlename:fullName[1], lastName:fullName[2]};
        return JSON.stringify(obj1);
    }
    else{
        return JSON.stringify({firstName:fullName[0],lastName:fullName[1]});
    }
}
document.getElementById("answer4").innerHTML=takeFullName("Pukar Shahi")

//QUESTION NO. 5
function arrToStr(){
    let a = ["Hello", "Beautiful", "World"];
    let b = (a.join(" "));
    return b;
}
document.getElementById("answer5").innerHTML=arrToStr()

//QUESTION NO. 6
function findWord(){
    let words = ["paper","table", "exam", "hall"];
    for(word of words){
        if(word === "exam"){
            // console.log(`The word "exam" is at index ${words.indexOf(word)}`);
            return true;
        }

    }
}
document.getElementById("answer6").innerHTML=findWord()

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
    return duplicate;
    }
document.getElementById("answer7").innerHTML=carsCount();

//QUESTION NO.3
function isoToLocal(){
    const IsoTime = "2021-02-23T17:56:17.366+00:00"
   
    let LocalTime = new Date(IsoTime);
    return(`ISO time is: ${IsoTime}<br/> Local time is: ${LocalTime}`);
}
document.getElementById("answer3").innerHTML=isoToLocal();

//QUESTION NO. 8
function destruc(){
    const obj1 = {
        _id: "5bb752fac800bb022cee5abe",
        roles: ["a","b"],
        Is_active: true,
        name: {
            firstnaam: 'Pukar',
            lastnaam: 'Shahi'
        },
        password: {
            pw: 'HelloWorld'
        },
        created_at: "2020-10-12T05:07:04.509+00:00",
        updated_at: "2020-10-12T05:07:04.946+00:00",
        __v:0
        };
        const{roles, Is_active, name} = obj1;
        // console.log(roles);
        // console.log(name);
        // console.log(Is_active);
        return (`${roles} <br/>${ Is_active }<br/> ${JSON.stringify({name})}`);
}
document.getElementById("answer8").innerHTML=destruc()
