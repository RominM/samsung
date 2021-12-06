export const dropDownMobiles = () => {
   const header = document.querySelector('header');

   const title = document.createElement('h2');
   title.classList.add('mobiles');
   
   const ul = document.createElement('ul');
   ul.classList.add('dropDown','mobile_drop');
   ul.setAttribute('hidden', true);

   const liElems = [
      'Nouveautés',
      'Smartphones',
      'Tablettes',
      'Montres',
      'Galaxy Buds',
      'Accessoires',
      'One UI',
      'Pourquoi choisir Galaxy ?',
      'Les cadeaux Galaxy'
   ];

   liElems.forEach(elem => {
      const li = document.createElement('li');
      const a = document.createElement('a');

      a.href = '#';
      a.innerHTML = elem;

      li.append(a);
      ul.append(li);
   });
   header.append(ul);
}