// let input = require('readline-sync')

// let hangman_pics = [`
//     +---+
//         |
//         |
//         |
//         ===`,`
//     +---+
//     o   |
//         |
//         |
//         ===`,`
//     +---+
//     o   |
//     |   |
//         |
//         ===`,`
//     +---+
//     o   |
//    /|   |
//         |
//         ===`,`
//     +---+
//     o   |
//    /|\\  |
//         |
//         ===`,`
//     +---+
//     o   |
//    /|\\  |
//    /    |
//         ===`,`
//     +---+
//     o   |
//    /|\\  |
//    / \\  |
//         ===`]


// let words = ["opposite",'mango','orange']
// let sec_in = Math.floor(Math.random()*(words.length-1))
// let secret_word = words[sec_in]
// let word_list = secret_word.split('')
// let word_len = secret_word.length
// let blanks = "_".repeat(word_len)
// let guessed = false
// let c=0
// let hang_pic = 1
// let lives = 6

// console.log(`-------->>>-----guess the word-------${blanks}-------->>>--------${hangman_pics[0]}`)

// while (guessed == false){
//     input_letter = input.question("--------guess the letter:")
//     if (secret_word.includes(input_letter)){
//         for (char of secret_word){
//             if (input_letter == char){
//                 if (word_list.includes(input_letter)){
//                     blanks = blanks.split('')
//                     for(char of word_list){
//                         if (char == input_letter){
//                             var letter_index = word_list.indexOf(char)
//                             word_list[letter_index] = '_'
//                             blanks[letter_index] = char
//                         } 
//                     }
//                     blanks = blanks.join("")
//                     c++
//                 }
//             }
//         }
//     }
//     else {
//         lives--
//         if(lives==0) {
//             console.log(`---------oops...you lost------${hangman_pics[6]}...Game Over..!!---------`)
//             break
//         }
//         console.log(`--------Wrong Guess....you have ${lives} live(s) left--------${hangman_pics[hang_pic]}-------`)
//         hang_pic++
//     }
//     if(c == word_len) {
//         guessed = true
//         console.log(`-------WOW!!!....You have guessed the word ${blanks} ....You Won!!--------`)
//         break
//     }
//     console.log(`---------${blanks}-------you have ${lives} live(s) left--------\n`)
// }
