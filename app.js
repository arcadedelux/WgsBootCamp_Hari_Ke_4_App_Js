
//core module
//file system
// const fs = require('fs')
// console.log(fs)

// //menuliskan string ke file(syncronus)
// fs.writeFileSync('test.txt','Hello World secara synchronous ulang!')

// //membuka file
// fs.readFile('test.txt','utf-8',(err,data)=>{
//     if(err) throw err 
//     console.log(data)
// })

//coba read line

const readline =require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const q0 = 'Whats your name? ';
const q1 = 'Whats your number?';
const q2 = 'Whats your email?';

const arr = [q0, q1, q2,];
let res = '';

//fungsi Generate pertanyaan dengan input user
const tanya = i => {
  if (i < arr.length) {
    rl.question(arr[i], (answer) => {
      res += '\n' + answer;
      tanya(i + 1);
    });
  } else {
      console.log(`Thank you : ${res}`);
      rl.close();
  }
};
tanya(0);