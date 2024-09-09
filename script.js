// input			// output
// "hello"   			{ h: 1, e: 1, l: 2, o: 1 }
// "aabbbcc"			{ a: 2, b: 3, c: 2 }

function hitungkarakter(str){
    const hasil = {};

    // if(hasil[karakter])
    for(let i=0; i < str.length; i++){
        let karakter = str[i];

        if(hasil[karakter]){
            hasil[karakter] = hasil[karakter] + 1;
        }else {
            hasil[karakter] = 1;
        }
    }
    return hasil;
}
const input1 = "aabbbcc";
const input2 = "hello";

console.log(hitungkarakter(input1));
console.log(hitungkarakter(input2));