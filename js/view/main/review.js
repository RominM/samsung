export const reviewAside = () => {
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