export const createHeader = () => {
   logo();
   productsNav();
   customersNav();
}

const logo = () => {
   const mainNavPrimary = document.querySelector('.main-nav-primary');
   const linkHome = document.createElement('a');
   linkHome.classList.add('linkhome');
   linkHome.href = "./../../index.html";

   const h1 = document.createElement('h1');
   const logoImg = document.createElement('img');
   logoImg.classList.add('logo-img');
   logoImg.src = "../../images_samsung/samsung_svg.svg";

   h1.append(logoImg);
   linkHome.append(h1)
   mainNavPrimary.append(linkHome)
}

const productsNav = () => {
   const mainNavPrimary = document.querySelector('.main-nav-primary');

   const nav1 = document.createElement('nav');
   nav1.classList.add('nav_1');

   const ulProduts = document.createElement('ul');
   ulProduts.classList.add('products');

   const products = [
      'Mobiles', 
      'TV & Audio',
      'Électroménager',
      'Informatique',
      'Display',
      'Maison Connectée',
      'Offre',
      '#Sélections'
   ];

   for (let i = 0; i < products.length; i++) {
      const li = document.createElement('li');
      li.classList.add('.product__li');

      const a = document.createElement('a');
      a.href = '#';
      a.innerHTML += products[i];

      li.append(a);
      ulProduts.append(li)
   };

   nav1.append(ulProduts)
   mainNavPrimary.append(nav1)
}

const customersNav = () => {
   const mainNavPrimary = document.querySelector('.main-nav-primary');

   const nav2 = document.createElement('nav');
   nav2.classList.add('nav_2');

   const ulCustomer = document.createElement('ul');
   ulCustomer.classList.add('customer');

   const customer = [
      'Explore',
      'Assistance',
      'Pour les professionnels'
   ]

   for (let i = 0; i < customer.length; i++) {
      const li = document.createElement('li');
      li.classList.add('.customer__li');

      const a = document.createElement('a');
      a.href = '#';
      a.innerHTML += customer[i];

      li.append(a);
      ulCustomer.append(li)      
   }

   nav2.append(ulCustomer);
   mainNavPrimary.append(nav2);
}