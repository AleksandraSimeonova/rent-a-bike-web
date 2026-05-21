import { html, render } from "lit-html";

const template = (onSubmit) => html`

<div  class="min-h-screen flex items-center justify-center p-10">
<form  @submit=${onSubmit}>
  <div class="space-y-12 ">

    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base/7 font-semibold text-gray-900">
        List your bike
      </h2>

      <p class="mt-1 text-sm/6 text-gray-600">
        This information will be displayed publicly so be careful what you share.
      </p>
    </div>

    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base/7 font-semibold text-gray-900">
        Personal Information
      </h2>

      <p class="mt-1 text-sm/6 text-gray-600">
        Use a permanent address where you can receive mail.
      </p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

        <div class="sm:col-span-3">
          <label for="brand" class="block text-sm/6 font-medium text-gray-900">
            Brand
          </label>

          <div class="mt-2">
            <input
              id="brand"
              type="text"
              name="brand"
              autocomplete="brand"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="model" class="block text-sm/6 font-medium text-gray-900">
            Model
          </label>

          <div class="mt-2">
            <input
              id="model"
              type="text"
              name="model"
              autocomplete="model"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="price" class="block text-sm/6 font-medium text-gray-900">
            Price
          </label>

          <div class="mt-2">
            <input
              id="price"
              type="number"
              name="price"
              step="0.01"
              autocomplete="off"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="size" class="block text-sm/6 font-medium text-gray-900">
            Size
          </label>

          <div class="mt-2 grid grid-cols-1">
            <select
              id="size"
              name="size"
              autocomplete="size"
              class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            >
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select>

            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            >
              <path
                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div class="col-span-full">
          <label for="image" class="block text-sm/6 font-medium text-gray-900">
            Image
          </label>

          <div class="mt-2">
            <input
              id="image"
              type="text"
              name="image"
              autocomplete="image"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

      </div>
    </div>

  </div>

  <div class="mt-6 flex items-center justify-end gap-x-6">
    <button
      type="button"
      class="text-sm/6 font-semibold text-gray-900"
    >
      Cancel
    </button>

    <button
      type="submit"
      class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Save
    </button>
  </div>
</form>
</div>

`;




export default async function(ctx){

    ctx.render(template());

}