export const createMain = () => {
   headSection();
   mainBtns();
   aside();
};

const headSection = () => {
   const section = document.querySelector('.head-section');

   const bgHeadSection = document.createElement('div');
   bgHeadSection.classList.add('head-section__bg');

   const bgTop = document.createElement('img');
   bgTop.classList.add('bg-top');
   bgTop.src = './../../../images_samsung/neo-top-bg.webp';

   const tvTop = document.createElement('img');
   tvTop.src = './../../../images_samsung/tv-top.webp';
   tvTop.classList.add('tv-top')

   const p = document.createElement('p');
   p.classList.add('head-section_para');

   const h3 = document.createElement('h3');
   h3.innerHTML = 'Neo QLED';

   const headSectionSpan = document.createElement('span');
   headSectionSpan.classList.add('head-section_span')
   headSectionSpan.innerHTML = 'L\'excellence sans compromis';

   p.append(h3, headSectionSpan);
   
   bgHeadSection.append(bgTop, tvTop);
   section.append(bgHeadSection, p);
}

const mainBtns = () => {
   const section = document.querySelector('.head-section');

   const mainBtns1 = document.createElement('div');
   mainBtns1.classList.add('mainBtns1');

   const lightBtn1 = document.createElement('button');
   lightBtn1.classList.add('light-btn1');
   lightBtn1.innerHTML = 'Luminosité';
   const experienceBtn1 = document.createElement('button');
   experienceBtn1.classList.add('experience-btn1');
   experienceBtn1.innerHTML = 'Experience';
   const durabilityBtn1 = document.createElement('button');
   durabilityBtn1.classList.add('durability-btn1');
   durabilityBtn1.innerHTML = 'Durabilité';

   mainBtns1.append(lightBtn1, experienceBtn1, durabilityBtn1);
   section.append(mainBtns1);
}

const aside = () => {
   const section = document.querySelector('.head-section');

   const aside = document.createElement('aside');

   const review1 = document.createElement('div');
   review1.classList.add('review-as1');
   const review1Img = document.createElement('img');
   review1Img.src = './../../../images_samsung/review-numeriques.png';

   const review2 = document.createElement('div');
   review2.classList.add('review-as2');
   const review2Img = document.createElement('img');
   review2Img.src = './../../../images_samsung/review-avcesar.webp'
  
   const review3 = document.createElement('div');
   review3.classList.add('review-as3');
   const review3Img = document.createElement('img');
   review3Img.src = './../../../images_samsung/review-mustav.webp';
   
   const review4 = document.createElement('div');
   review4.classList.add('review-as4');
   const review4Img = document.createElement('img');
   review4Img.src = './../../../images_samsung/review-frandroid.webp';

   review1.append(review1Img);
   review2.append(review2Img);
   review3.append(review3Img);
   review4.append(review4Img);

   aside.append(review1, review2, review3, review4);
   section.append(aside);
}