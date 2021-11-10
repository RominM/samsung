export const firstHeadPart = () => {
   logo();
   productsNav();
   forProNav();
   customerNav();
};

const logo = () => {
   const mainNavPrimary = document.querySelector('.main-nav-primary');
   const linkHome = document.createElement('a');
   linkHome.classList.add('linkHome');
   linkHome.href = "./../../index.html";

   const h1 = document.createElement('h1');
   const logoImg = document.createElement('img');
   logoImg.classList.add('logo-img');
   logoImg.src = "../../images_samsung/samsung_svg.svg";

   h1.append(logoImg);
   linkHome.append(h1)
   mainNavPrimary.append(linkHome)
};

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
      'Displays',
      'Maison Connectée',
      'Offre',
      '#Sélections'
   ];

   for (let i = 0; i < products.length; i++) {
      const li = document.createElement('li');
      li.classList.add('products__li');

      const a = document.createElement('a');
      a.href = '#';
      a.innerHTML += products[i];

      li.append(a);
      ulProduts.append(li)
   };

   nav1.append(ulProduts)
   mainNavPrimary.append(nav1)
};

const forProNav = () => {
   const mainNavPrimary = document.querySelector('.main-nav-primary');

   const nav2 = document.createElement('nav');
   nav2.classList.add('nav_2');

   const ulForPro = document.createElement('ul');
   ulForPro.classList.add('forPro');

   const customer = [
      'Explore',
      'Assistance',
      'Pour les professionnels'
   ];

   for (let i = 0; i < customer.length; i++) {
      const li = document.createElement('li');
      li.classList.add('forPro__li');

      const a = document.createElement('a');
      a.href = '#';
      a.innerHTML += customer[i];

      li.append(a);
      ulForPro.append(li);     
   }

   nav2.append(ulForPro);
   mainNavPrimary.append(nav2);
};

const customerNav = () => {
   const mainNavPrimary = document.querySelector('.main-nav-primary');
   const divCustomer = document.createElement('div');
   divCustomer.classList.add('divCustomer');
   
   const search = document.createElement('a');
   const searchImg = document.createElement('img');
   searchImg.src = './../../images_samsung/search-solid.svg';

   const cart = document.createElement('a');
   const cartImg = document.createElement('img');
   cartImg.src = './../../images_samsung/shopping-cart-solid.svg';

   const user = document.createElement('a');
   const userImg = document.createElement('img');
   userImg.src = './../../images_samsung/user-regular.svg';

   search.append(searchImg);
   cart.append(cartImg);
   user.append(userImg);

   divCustomer.append(search, cart, user);
   mainNavPrimary.append(divCustomer);
};