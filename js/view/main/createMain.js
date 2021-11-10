export const createMain = () => {
   headSection();
};

const headSection = () => {
   const section = document.querySelector('.head-section');

   const bgHeadSection = document.createElement('div');
   bgHeadSection.classList.add('head-section__bg');

   const bgImg = document.createElement('img');
   bgImg.classList.add('bg-img');
   bgImg.src = './../../../images_samsung/neo-top-bg.webp';

   const bgImgAbs = document.createElement('img');
   bgImgAbs.src = './../../../images_samsung/tv-top.webp';
   bgImgAbs.classList.add('tv-img')

   const p = document.createElement('p');
   p.classList.add('head-section_para');

   const h3 = document.createElement('h3');
   h3.innerHTML = 'Neo QLED';

   const headSectionSpan = document.createElement('span');
   headSectionSpan.classList.add('head-section_span')
   headSectionSpan.innerHTML = 'L\'excellence sans compromis';

   p.append(h3, headSectionSpan);
   
   bgHeadSection.append(bgImg, bgImgAbs);
   section.append(bgHeadSection, p);
}