

// const food = ['alo', 'bartha' , 'derosh', 'cicign', 'joba', 'begun'];

// console.log(food.sort()); // alphanumeric order
// console.log(food.reverse()); // reverse means last taka first hobe..

// console.log(food.join(' - '));


// console.log(food.includes('joba'));


// console.log(Array.isArray(food));// array tape cheeck

// const medicine = ['napa', 'hestrcin' ,'aztromycin'];


// console.log(medicine.concat(food).sort().reverse()); 





/**
 * Send welecome message to everyone over the age of the data array of all members of a  club and send a greeting message is the personober the age 40 , of course,send the massage  through a function a and those who are under 18 years of age, Give the message to be attentive 
 */





/**
 * Assignment 1  
 * Create a MERN stack,laravel,Django, GOlan,Wordpress,java deves stedent data structure and make their total income sheet with per developer data,find specific students.
 */

 const students =[
    ['Ashraful huq', 40 , 'Dhaka', 200, 'MERN'],
    ['Mominul huq', 30 , 'Sylhet', 500, 'MERN'],
    ['Palash Ahamd', 30 , 'Sylhet', 500, 'MERN'],
    ['Ripon das', 18 , 'Dhaka', 300 ,'laravel'],
    ['Md.habib mia', 28 , 'Mhonganj', 200, 'laravel'],
    ['Md.Hira mia', 16 , 'Mhonganj', 300, 'Wordpress'],
    ['Shorif Rhaim', 18 , 'Dhaka', 300 , 'Wordpress'],
    ['Anadda Sarker', 45 , 'Sunamganj', 300, 'java '],
    ['Ripon das', 18 , 'Sunamganj', 200, 'java '],
    ['Ripon das', 18 , 'Syhelt', 300, 'GOlan'],
]



for (let i = 0; i < students.length ; i++){
 
  
    if (students[i] [1] < 40 && students[i] [4]  == 'Wordpress')  {

        students[i].map(data => console.log(data));
    }

}