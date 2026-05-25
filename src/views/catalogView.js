import bikesApi from '../api/bikesApi.js';
import { html, render } from '../lib/lit-html.js';
import { ref, get } from 'firebase/database';

const template = (bikes) => html`
   <div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="sr-only">Products Bikes</h2>

    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

    ${bikes.map(bike =>html`
      
      <a href="/catalog/${bike.id}/details" class="group">
        <img src=${bike.imageUrl} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
        <h3 class="mt-3 text-lg font-medium text-gray-900">Brand: ${bike.brand}</h3>
        <p class="mt-0 text-xs font-medium text-gray-800">Model:  ${bike.model}</p>
        <h3 class="mt-1 text-sm text-gray-700">Size: ${bike.size}</h3>
        <p class="mt-0 text-lg font-medium text-gray-900">Price: ${bike.price} €</p>
      </a>
        
      `)}

    </div>
  </div>
</div>
 
`;

export default async function (ctx) {


  try {

    const bikes = await bikesApi.getAll();

    ctx.render(template(bikes));

  } catch (err) {
    console.log(err.message);


  }



}