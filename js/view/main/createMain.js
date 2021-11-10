export const createMain = () => {
   headSection();
};

const headSection = () => {
   const section = document.querySelector('.head-section');

   const p = document.createElement('p');
   p.classList.add('head-section_para');

   const h3 = document.createElement('h3');
   h3.innerHTML = 'Neo QLED';

   const headSectionSpan = document.createElement('span');
   headSectionSpan.classList.add('head-section_span')
   headSectionSpan.innerHTML = 'L\'excellence sans compromis';

   p.append(h3, headSectionSpan);
   section.append(p);
}