export const secondHeadPart = () => {
   titleHead();
   globalNav();
   buyItBtn();
};

const titleHead = () => {
   const mainNavSecondary = document.querySelector('.main-nav-secondary');

   const h2 = document.createElement('h2');
   h2.innerHTML = 'Neo QLED';

   mainNavSecondary.append(h2);
};

const globalNav = () => {
   const mainNavSecondary = document.querySelector('.main-nav-secondary');
   
   const nav3 = document.createElement('nav');
   nav3.classList.add('nav_3');

   const ulGlobal = document.createElement('ul');
   ulGlobal.classList.add('global');

   const global = [
      'Présentation',
      'Ciné séries',
      'Gaming',
      'Sport',
      'Trouver en magasin'
   ];

   for (let i = 0; i < global.length; i++) {
      const li = document.createElement('li');
      li.classList.add('global__li');

      const a = document.createElement('a');
      a.href = '#';
      a.innerHTML += global[i].toUpperCase();

      li.append(a);
      ulGlobal.append(li);
   }

   nav3.append(ulGlobal);
   mainNavSecondary.append(nav3);
};

const buyItBtn = () => {
   const mainNavSecondary = document.querySelector('.main-nav-secondary');

   const buyBtn = document.createElement('button');
   buyBtn.classList.add('buy-btn');
   buyBtn.innerHTML = 'ACHETER';

   mainNavSecondary.append(buyBtn);
};