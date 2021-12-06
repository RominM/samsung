export const headSection = () => {
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

