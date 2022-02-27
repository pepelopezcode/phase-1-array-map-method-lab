const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
  
  const newArray =tutorials.map(function(string){
   const words = string.split(' '); 
   const wordsLength = words.length;
   for (let i = 0; i < wordsLength; i++){
     words[i] = words[i][0].toUpperCase() + words[i].substring(1)
     //console.log(words)
   }
   string = words.join(' ')
   console.log(string)
     return string
  })
 return newArray
  
}
titleCased()