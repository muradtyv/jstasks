
let value = prompt("enter value:");

let s1 ="";
let s2 ="";

function numberToText(){
    if(value.length==1){
        switch(value[0]){
            case '1':
                s1 = "bir";
                break;
            case '2':
               s1 = "iki";
                break;
            case '3':
                s1 = "uc";
                break;
            case '4':
                s1 = "dord";
                break;
            case '5':
                s1 = "besh";
                break;
            case '6':
                s1 = "alti";
                break;
            case '7':
                s1 = "yeddi";
                break;
            case '8':
                s1 = "sekkiz";
                break;
            case '9':
                s1 = "doqquz";
                break;
        }
    
    }else if(value.length==2){  
             switch(value[0]){
                case '1':
                    s1="on";
                    break;
                case '2':
                    s1="iyirmi";
                    break;
                case '3':
                    s1="otuz";
                    break;
                case '4':
                    s1="qirx";
                    break;
                case '5':
                    s1="elli";
                    break;
                case '6':
                    s1="altmish";
                    break;
                case '7':
                   s1="yetmish";
                    break;
                case '8':
                    s1="seksen";
                    break;
                case '9':
                    s1="dogsan";
                    break;
            }   
            switch(value[1]){
                case '1':
                    s2="bir";
                    break;
                case '2':
                    s2="iki";
                    break;
                case '3':
                    s2="uc";
                    break;
                case '4':
                    s2="dord";
                    break;
                case '5':
                    s2="besh";
                    break;
                case '6':
                    s2="alti";
                    break;
                case '7':
                   s2="yeddi";
                    break;
                case '8':
                    s2="sekkiz";
                    break;
                case '9':
                    s2="doqquz";
                    break;
            }  
    }
    console.log(s1+" "+s2);
}
numberToText();