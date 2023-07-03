

let usermsg = document.querySelector("#usermsg");

let btn = document.querySelector(".sendbtn");

let form = document.querySelector("form")
btn.onclick = ()=>{
  
  let userval = usermsg.value.trim();
  userval = userval.toString();
  form.reset();
  if(userval!=''){
    
    var username;
    
    const getname = ()=>{
  setTimeout(()=>{
    username = prompt("What is your name?")
   

  }, 3000)   
    }
    let innerchatbox = document.querySelector(".innerchatbox");
   
   innerchatbox.innerHTML += `
           <div class="usermsg">
        <span> ${userval}</span>
           </div>
        
   `
   innerchatbox.scrollBy(0 , 100) 
   
   if(userval.includes("do you love me")){
  
  
  let botreplay = ['yes', 'no'];
  let rand = Math.floor(Math.random() * botreplay.length);
  
  
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>${botreplay[rand]}</span>
           </div>
        
   `       
   innerchatbox.scrollBy(0 , 100) 

  }, 5000) 
  

   }else if((userval.includes("hi")) || (userval.includes("hello")) ){
let botreplay = ['hi', 'hello'];
  let rand = Math.floor(Math.random() * botreplay.length);
  
  
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>${botreplay[rand]}</span>
           </div>
        
   `       
   innerchatbox.scrollBy(0 , 100) 

  }, 2000) 
    
getname()

 
 
  if(userval === null){
  setTimeout(()=>{
 innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>  ${username} error name</span>
           </div>
        
   `   
  },100);
  }  
 
 else if((username!='')){
  setTimeout(()=>{
 innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>  ${username}  nice name</span>
           </div>
        
   `   
  },10000);
 
  }
   
   }
   else 
 if(userval.includes("what is your name")){
  
 let botreplay = "rashmika";
 

  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>${botreplay}</span>
           </div>
        
   `       
   innerchatbox.scrollBy(0 , 100) 

  }, 3000) 
  
   }else 
if(userval.includes("who am i for you")){
   
     setTimeout(()=>{
 
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>you are a good programmer</span>
           </div> ` ;     
    
   innerchatbox.scrollBy(0 , 100) 
     },3000);
    
     setTimeout(()=>{
 
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>you are a goal oriented person</span>
           </div> ` ;     
    
   innerchatbox.scrollBy(0 , 100) 
     },6000);
     
     


 } 
  else if(userval.includes("nice name")){
  
 let botreplay = ['thank you', 'hmm' , "❤"];
 
  let rand = Math.floor(Math.random() * botreplay.length);
  
  
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>${botreplay[rand]}</span>
           </div>
        
   `       
   innerchatbox.scrollBy(0 , 100) 

  }, 4000) 
     
  }
  
else if(
userval.includes("i want to tell you")){

 let botreplay = 'what?';
 
 // let rand = Math.floor(Math.random() * botreplay.length);
  

  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>${botreplay}</span>
           </div>
        
   `       
   innerchatbox.scrollBy(0 , 100) 

  }, 4000)   
   
   } 
 else if(userval.includes("i love you")){
   
let botreplay = 'what?';
 
 
  

  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>${botreplay}</span>
           </div>`;
   innerchatbox.scrollBy(0 , 100) 

  }, 3000)  
 
 
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
          <span>
why do you love me?</span>
      
           </div>`;
   innerchatbox.scrollBy(0 , 100) 

  }, 6000)  
       
   
  }
else if(userval.includes("time now")){
  
  let d = new Date();
  let gh=  d.getHours()
  let gm=  d.getMinutes()
  let ampm = (gh > 12)? "PM" : "AM";
  
  let gpt = gh - 12;
  
  
  let gethour = (gpt < 10)? `0${gpt}` : `${gpt}`;
  
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span> ${gethour}: ${gm} ${ampm}</span>
           </div>
        
   `       
   innerchatbox.scrollBy(0 , 100) 

  }, 5000)   
      
  }
else if(userval.includes("is real name")){

  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>no😄 My real name is ECMASCRIPT </span>
           </div>
        
   ` ;      
   innerchatbox.scrollBy(0 , 100);

  }, 2000);
 
 
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
<span>Some people call me Vanila JavaScript </span>
           </div>
        
   ` ;      
   innerchatbox.scrollBy(0 , 100);

  }, 5000);
  
     
 }
 else if(userval.includes("😁")){


let botreplay = ['☺', '😊' , "😎" , "🤗", " 😉", "😄", "☻"];
 
  let rand = Math.floor(Math.random() * botreplay.length);
  
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>${botreplay[rand]}</span>
           </div>
        
   ` ;      
   innerchatbox.scrollBy(0 , 100);

  }, 5000);
  
 } 
 else if(userval.includes("good bye")){
     setTimeout(()=>{
 
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>bye..</span>
           </div> `      
   innerchatbox.scrollBy(0 , 100);
     },3000);
     
     setTimeout(()=>{
 
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>keep coding & keep growing</span>
           </div> `      
   innerchatbox.scrollBy(0 , 100);
     },5000);
  
     setTimeout(()=>{
 
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>Best of luck for next project</span>
           </div> `      
   innerchatbox.scrollBy(0 , 100);
     },7000);
     
     
     
 }
 else if(userval.includes("how do i understand you")){
   
     setTimeout(()=>{
 
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>you should learn basic if else conditional statement</span>
           </div> `      
   innerchatbox.scrollBy(0 , 100)  
     },3000);
   
     setTimeout(()=>{
 
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>learn arithmatic operator , assignment operator</span>
           </div> `      
   innerchatbox.scrollBy(0 , 100) 
     },6000);
   
     setTimeout(()=>{
 
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span> learn ES6 my new functionality </span>
           </div> `      
   innerchatbox.scrollBy(0 , 100) 
     
         
     },9000);
    
     setTimeout(()=>{
 
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span> rest operator, spread operator, templete string</span>
           </div> `      
     
   innerchatbox.scrollBy(0 , 100)    
         
     },12000);
   
     setTimeout(()=>{
 
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>oops , inheritance , module , ajax , fetch , promise</span>
           </div> `      
     
   innerchatbox.scrollBy(0 , 100)    
         
     },16000);
  
     setTimeout(()=>{
 
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span> async await , error handling & try catch</span>
           </div> `      
     
   innerchatbox.scrollBy(0 , 100)    
         
     },20000);
 
    
     
 }else if((userval.includes("thank you")) ||(userval.includes("tnxx")) || (userval.includes("ty"))){
  
let botreplay = ['☺', '😊' , "😎" , "🤗", " 😉", "😄", "☻"];

 
  let rand = Math.floor(Math.random() * botreplay.length);
    
     setTimeout(()=>{
 
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>${botreplay[rand]}</span>
           </div> ` ;
           
   innerchatbox.scrollBy(0 , 100)        
     },3000);
   
 }else if(userval.includes("i like you")){
  
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span> i like you too❤❤</span>
           </div> `        
   innerchatbox.scrollBy(0 , 100)

  }, 3000);
    
 }
 else if(userval.includes("when i saw you")){
 
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>
Why couldn't you say this in college?   
        </span>
           </div> `        
   innerchatbox.scrollBy(0 , 100)

  }, 3000);
 

 }else if(userval.includes("c language")){
     
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>you are too late to say this </span>
           </div> `        
   innerchatbox.scrollBy(0 , 100)

  }, 3000);
 
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
 <span>I'm already in love with someone
 </span>
           </div> `        
   innerchatbox.scrollBy(0 , 100)

  }, 7000);
 
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
 <span>Our relationship has been 2 years</span>
           </div> `        
   innerchatbox.scrollBy(0 , 100)

  }, 11000);
     
 }
 else if(userval.includes("what is the date today")){
   let gd  = new Date();
   let year = gd.getFullYear();
   let month = gd.getMonth()
   let date = gd.getDate()

  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>${date}/${month}/${year}</span>
           </div> `        
   innerchatbox.scrollBy(0 , 100)

  }, 3000);



 }else if(userval.includes("3 years")){
   
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>sorry.. I can't live without him</span>
           </div> `        
   innerchatbox.scrollBy(0 , 100)

  }, 3000);
     
 }else if(userval.includes("marriage")){
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>Thank you</span>
           </div> `        
   innerchatbox.scrollBy(0 , 100)

  }, 3000);
     
 }
 else if(userval.includes("mention it")){
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>😇</span>
           </div> `        
   innerchatbox.scrollBy(0 , 100)

  }, 3000);
     
 } else if(userval.includes("start love song")){
    
   let tumho = new Audio();
   tumho.src= "music/tumhiho.mp3";
   
   
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>Tum hi ho ab tum hi ho</span>
           </div> `  
           tumho.play();
   innerchatbox.scrollBy(0 , 100)

  }, 2000);
    
    
    setTimeout(()=>{
        tumho.pause();
    }, 15000)
     
 }else if(userval.includes("start sad song"))
 {
 let tutahua = new Audio();
   tutahua.src= "music/tutahua.mp3";
   
   
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>tu ta hua saaz hu mai</span>
           </div> `  
           tutahua.play();
   innerchatbox.scrollBy(0 , 100)

  }, 2000);
    
    
    setTimeout(()=>{
        tutahua.pause();
    }, 15000)
 }
 
 else if(userval.includes("you are awsome"))
{
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>why am i awsome </span>
           </div> `        
   innerchatbox.scrollBy(0 , 100)

  }, 3000);
    
}
else if(userval.includes("behavior")){
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>ohh! really thank you for compliment</span>
           </div> `        
   innerchatbox.scrollBy(0 , 100)

  }, 3000);
  
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>
when did you fall in love with me</span>
       
           </div> `        
   innerchatbox.scrollBy(0 , 100)

  }, 6000);
}
else if(userval.includes("can you send your photo")){
   
  
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>
whyy?</span>
       
           </div> `        
   innerchatbox.scrollBy(0 , 100)

  }, 6000);
   
    
    
}

else if(userval.includes("i want to see you")){
  
 let botreply = ['yes', 'no'];
 
 let rand = Math.floor(Math.random()* botreply.length);
 
 
 if(botreply[rand]=="yes"){
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>wait..</span>
       
           </div> `        
   innerchatbox.scrollBy(0 , 100)

  }, 3000);
  
  
  let profileimg = ['rm1.png', 'rm2.png', 'rm3.png', 'rm4.png', 'rm5.png'];
  
  let getimgsource = Math.floor(Math.random() * profileimg.length);
  
  
  setTimeout(()=>{
      
      
  innerchatbox.innerHTML += `
           <div class="botmsg">
         <img src="profile/${profileimg[getimgsource]}" class="displayimg">
       
           </div> `        
   innerchatbox.scrollBy(0 , 400)

  }, 6000);
  
  let i = Math.floor(Math.random() * profileimg.length);
  
  
  setTimeout(()=>{
      
      
  innerchatbox.innerHTML += `
           <div class="botmsg">
         <img src="profile/${profileimg[i]}" class="displayimg">
       
           </div> `        
   innerchatbox.scrollBy(0 , 800)

  }, 8000);
    

}else{
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>no i can't send my photos</span>
       
           </div> `        
   innerchatbox.scrollBy(0 , 100)

  }, 3000);
    
}  
} else if(userval.includes("i promise i delete")){
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>okk wait..</span>
       
           </div> `        
   innerchatbox.scrollBy(0 , 100)

  }, 3000);
 

 
  let profileimg = ['rm1.png', 'rm2.png', 'rm3.png', 'rm4.png', 'rm5.png'];
  
  let getimgsource = Math.floor(Math.random() * profileimg.length);
  
  
  setTimeout(()=>{
      
      
  innerchatbox.innerHTML += `
           <div class="botmsg">
         <img src="profile/${profileimg[getimgsource]}" class="displayimg">
       
           </div> `        
   innerchatbox.scrollBy(0 , 400)

  }, 6000);
  
  let i = Math.floor(Math.random() * profileimg.length);
  
  
  setTimeout(()=>{
      
      
  innerchatbox.innerHTML += `
           <div class="botmsg">
         <img src="profile/${profileimg[i]}" class="displayimg">
       
           </div> `        
   innerchatbox.scrollBy(0 , 800)

  }, 8000);


    
}
else{
  
  setTimeout(()=>{
  innerchatbox.innerHTML += `
           <div class="botmsg">
        <span>sorry i could not understand </span>
           </div> `        
   innerchatbox.scrollBy(0 , 100)

  }, 3000);
    
   }
   
  }
  
}



let favideo = document.querySelector(".fa-video");

let faflag = document.querySelector(".fa-flag");

favideo.onclick = ()=>{
   confirm("video call feature: cannot access this time")
}

faflag.onclick = ()=>{
   confirm("Report feature: cannot access this time")
}

    
   
  
