function skillsactive(){
document.querySelector(".Skills").addEventListener('click',()=>{
  let skillsdiv = document.querySelector('.skills-content')
  let  experiencediv = document.querySelector('.experience-content');
  let educationdiv = document.querySelector('.education-content');
   
  skillsdiv.style.display = "block"
  experiencediv.style.display = "none";
  educationdiv.style.display = "none";
})}


function experienceactive(){
  document.querySelector(".Experience").addEventListener('click',()=>{
    let skillsdiv = document.querySelector('.skills-content')
    let  experiencediv = document.querySelector('.experience-content');
    let educationdiv = document.querySelector('.education-content');
     
    skillsdiv.style.display = "none"
    experiencediv.style.display = "block";
    educationdiv.style.display = "none";
  })
  }

function educationactive(){
  document.querySelector(".Education").addEventListener('click',()=>{
    let skillsdiv = document.querySelector('.skills-content')
    let  experiencediv = document.querySelector('.experience-content');
    let educationdiv = document.querySelector('.education-content');
     
    skillsdiv.style.display = "none"
    experiencediv.style.display = "none";
    educationdiv.style.display = "block";
  })
  }
