let grade =[100,40,90,22,45,98,30,59];
let gr = grade.sort(gra);

gr.forEach(print);

function gra(x,y){
    return x-y;
}

function print(element){
    console.log(element);
}