// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. 
//Por exemplo, a palavra “banana” seria invertida para “ananab”. 
//Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let ultimaLetra = '';
for (let index = word.length - 1; index >= 0; index -=1){
 ultimaLetra += word[index];  
}
console.log(ultimaLetra);

/*Utilize a estrutura de repetição for para escrever dois algoritmos: 
um que imprima no console a maior palavra desse array e outro que imprima a menor. 
Considere o número de caracteres de cada palavra.*/

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerWord = array[0];
let smallWord = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > biggerWord.length) {
        biggerWord = array[index];
    }
}

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < smallWord.length) {
        smallWord = array[index];
    }

}
console.log("A menor palavra é : "+smallWord);
console.log("A maior palavra é : "+biggerWord);



