//1.구구단 출력
// for(let i=2; i<=9; i++){
//     for(let j=1; j<=9; j++){
//         console.log(i + " * " + j + " = " + i*j);
//     }
//     console.log(" ");
// }

//2.별찍기
/*
   *
  ***
 *****
******* 

*/
let star = '*';

// for(let i = 1; i <= 4; i++){
//     for(let n = 3; n >= 4-i; n--){
//         process.stdout.write(" ");
        
//     }
//     for(let j = 1; j <= i; j++){
//         process.stdout.write("*");
        
//     }
//     for(let o = 3; o >= 4-i; o--){
//         process.stdout.write(" ");
        
//     }
//     process.stdout.write('\n');

// }

for(let i = 0; i < 4; i++){
    for(let n = 1; n < 4-i; n++){
        process.stdout.write(" ");
        
    }
    for(let j = 0; j < (i*2)+1; j++){
        process.stdout.write("*");
        
    }
    process.stdout.write('\n');
}


