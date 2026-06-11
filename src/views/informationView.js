import {html} from '../lib/lit-html.js';

const template = () => html `
<div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <svg aria-hidden="true" class="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200">
      <defs>
        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" stroke-width="0" />
    </svg>
  </div>
  <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
    <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="lg:pr-4">
        <div class="lg:max-w-lg">
          <p class="text-base/7 font-semibold text-indigo-600">.....</p>
          <h1 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">About us</h1>
          <p class="mt-6 text-xl/8 text-gray-700">We are a team of people who believe that movement is freedom and that the bicycle is one of the best ways to explore the world around us. We created this project with the idea of making bicycle rentals easy, fast, and accessible for everyone.

</p>
        </div>
      </div>
    </div>
    <div class="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
      <img src="https://media.istockphoto.com/id/475680439/photo/mountain-biking-british-columbia.jpg?s=2048x2048&w=is&k=20&c=GghU-eX4xAv8cpcnJzLPJjrhXBi1JBr_ZM9Bb7H6p4M=" alt="" class="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228" />
    </div>
    <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="lg:pr-4">
        <div class="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">

          
          <h1 class="mt-3 text-2x1 font-bold tracking-tight text-gray-900">...</h1>
          <p class="mt-6 text-xl/7 text-gray-700">Whether you are looking for a relaxing ride in the city, a sports challenge, or an adventure in nature, you will find the right bicycle for every situation with us. We take care of every bicycle with attention to detail — regular maintenance, safety, and comfort are our top priorities. We want every customer to feel safe and satisfied when they set out on their journey. Our mission is simple: to make cycling accessible, enjoyable, and a part of everyday life for more people.</p>
        </div>
      </div>
    </div>
  </div>
</div>

`;


export default function(ctx){

    ctx.render(template())
}

