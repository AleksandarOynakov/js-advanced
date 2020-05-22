function solve() {
   let addButtons = document.getElementsByClassName('add-product');
   Array.from(addButtons).forEach(button => button.addEventListener('click', addProduct));
   document.getElementsByClassName('checkout')[0].addEventListener('click', checkout);
   let textArea = document.getElementsByTagName('textarea')[0];
   let addedToCart = {};
   function addProduct() {
      let price = this.parentNode.parentNode.getElementsByClassName('product-line-price')[0].textContent;

      let name = this.parentNode.parentNode.getElementsByClassName('product-title')[0].textContent;

      textArea.textContent += `Added ${name} for ${price} to the cart.\n`;
      if (addedToCart.hasOwnProperty(name)) {
         addedToCart[name] += Number(price);
      }
      else{
         addedToCart[name] = Number(price);
      }
   }

   function checkout(){
      textArea.textContent += `You bought ${Object.keys(addedToCart).join(', ')} for ${Object.values(addedToCart).reduce((a,c) => a+c,0).toFixed(2)}.`;
      Array.from(addButtons).forEach(button => button.removeEventListener('click', addProduct));
      document.getElementsByClassName('checkout')[0].removeEventListener('click', checkout);
   }
}