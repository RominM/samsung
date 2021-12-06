export const mainBtns = () => {
   const section = document.querySelector('.head-section');

   const mainBtns1 = document.createElement('div');
   mainBtns1.classList.add('mainBtns1');

   const lightBtn1 = document.createElement('button');
   lightBtn1.classList.add('light-btn1');
   lightBtn1.innerHTML = 'Luminosité'.toUpperCase();
   const experienceBtn1 = document.createElement('button');
   experienceBtn1.classList.add('experience-btn1');
   experienceBtn1.innerHTML = 'Experience'.toUpperCase();
   const durabilityBtn1 = document.createElement('button');
   durabilityBtn1.classList.add('durability-btn1');
   durabilityBtn1.innerHTML = 'Durabilité'.toUpperCase();

   mainBtns1.append(lightBtn1, experienceBtn1, durabilityBtn1);
   section.append(mainBtns1);
}
