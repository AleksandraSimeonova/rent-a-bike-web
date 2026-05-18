import { html, render } from '../lib/lit-html.js';

const rootElement = document.getElementById("root");

const layoutTemplate = (body, ctx) => html`

 <header class="absolute inset-x-0 top-0 z-50">
    <nav aria-label="Global" class="flex items-center justify-between p-6 lg:px-8">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" class="h-8 w-auto" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" command="show-modal" commandfor="mobile-menu" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Open main menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="/" class="text-sm/6 font-semibold text-gray-900">Home</a>
        <a href="/catalog" class="text-sm/6 font-semibold text-gray-900">Catalog</a>

       ${ctx.isAuthenticated
    ? html`
        <a href="/catalog/addbike" class="text-sm/6 font-semibold text-gray-900">Add your bike</a>
  
      
        `
    : html`
        
        <a href="/register" class="text-sm/6 font-semibold text-gray-900">Register</a>
        `
  }


      </div>


    ${ctx.isAuthenticated
    ? html`
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="/logout" class="text-sm/6 font-semibold text-gray-900">Log out <span aria-hidden="true">&rarr;</span></a>
      </div>
        `
    : html`
        
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="/login" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
        `
  }

    </nav>
    <el-dialog>
      <dialog id="mobile-menu" class="backdrop:bg-transparent lg:hidden">
        <div tabindex="0" class="fixed inset-0 focus:outline-none">
          <el-dialog-panel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" class="h-8 w-auto" />
              </a>
              <button type="button" command="close" commandfor="mobile-menu" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Close menu</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
                  <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6 flex flex-col">
                      <a href="/" class="text-sm/6 font-semibold text-gray-900">Home</a>
                      <a href="/catalog" class="text-sm/6 font-semibold text-gray-900">Catalog</a>
                </div>
                <div class="space-y-2 py-6 flex flex-col">
                   ${ctx.isAuthenticated
    ? html`  
    <a href="/catalog/addbike" class="text-sm/6 font-semibold text-gray-900">Add your bike</a>
        <a href="/logout" class="text-sm/6 font-semibold text-gray-900">Log out <span aria-hidden="true">&rarr;</span></a> 
        `
    : html`
        <a href="/register" class="text-sm/6 font-semibold text-gray-900">Register</a>  
        <a href="/login" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>  
        
        `
  }

                </div>
              </div>
            </div>
          </el-dialog-panel>
        </div>
      </dialog>
    </el-dialog>
  </header>

        <div class="relative isolate px-6 pt-14 lg:px-8"> 
         ${body}
        </div>
        

        <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
        font-family: 'Poppins', sans-serif;
    }
</style>

<footer class="flex flex-col bg-slate-50 items-center justify-around w-full py-16 text-sm text-gray-800/70">
    <div class="flex items-center gap-8">
        <a href="#" class="font-medium text-gray-500 hover:text-black transition-all">
            Home
        </a>
        <a href="#" class="font-medium text-gray-500 hover:text-black transition-all">
            About
        </a>
        <a href="#" class="font-medium text-gray-500 hover:text-black transition-all">
            Services
        </a>
        <a href="#" class="font-medium text-gray-500 hover:text-black transition-all">
            Contact
        </a>
        <a href="#" class="font-medium text-gray-500 hover:text-black transition-all">
            Help
        </a>
    </div>
    <div class="flex items-center gap-4 mt-8 text-indigo-500">
        <a href="#" class="hover:-translate-y-0.5 transition-all duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </a>
        <a href="#" class="hover:-translate-y-0.5 transition-all duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </a>
        <a href="#" class="hover:-translate-y-0.5 transition-all duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </a>
        <a href="#" class="hover:-translate-y-0.5 transition-all duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </a>
        <a href="#" class="hover:-translate-y-0.5 transition-all duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 18c-4.51 2-5-2-7-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </a>
    </div>
    <p class="mt-8 text-center"> All rights reserved &copy; AS 2026  <a href="https://prebuiltui.com"></a> </p>
</footer>

`



export default function (ctx, next) {

  console.log(ctx.user);
  console.log(ctx.isAuthenticated);


  ctx.render = (templateResult) => {

    render(layoutTemplate(templateResult, ctx), rootElement)

  }

  next();

}