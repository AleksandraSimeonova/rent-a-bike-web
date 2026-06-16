
import { html, render } from 'lit-html';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../config/firebaseInit.js"
import page from 'page';


const template = (onSubmit) => html`

  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" class="mx-auto h-10 w-auto" />
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-grey">Sign up to your account</h2>
  </div>
 
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form @submit=${onSubmit} action="#" method="POST" class="space-y-6">
         <div>
             <label for="email" class="block text-sm font-medium text-gray-700">
               Email address
             </label>

             <div class="mt-2">
               <input
                 id="email"
                 type="email"
                 name="email"
                 required
                 autocomplete="email"
                 class="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm
                        placeholder:text-gray-400
                        focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none
                        sm:text-sm"
               />
             </div>
        </div>

      <div>
              <div>
                <label for="password" class="block text-sm font-medium text-gray-700">
                  Password
                </label>
              
                <div class="mt-1">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    required
                    autocomplete="new-password"
                    class="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm
                           placeholder:text-gray-400
                           focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none
                           sm:text-sm"
                  />
                </div>
              </div>


                    <div>
                      <label for="password2" class="block mt-1 text-sm font-medium text-gray-700">
                        Repeat password
                      </label>
                    
                      <div class="mt-1">
                        <input
                          id="password2"
                          type="password"
                          name="password2"
                          required
                          autocomplete="new-password"
                          class="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm
                                 placeholder:text-gray-400
                                 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none
                                 sm:text-sm"
                        />
                      </div>
                    </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign up</button>
      </div>
    </form>

  </div>
</div>`

   
   export default function (ctx) {
     ctx.render(template(registerFormSubmitHandler))
   }
   
   async function registerFormSubmitHandler(e) {
   
     e.preventDefault();
   
     const formData = new FormData(e.currentTarget);
     const { email, password } = Object.fromEntries(formData);
   
     try {
   
       await createUserWithEmailAndPassword(auth, email, password);
       
       page.redirect('/');
   
     } catch (err) {
       console.log(err.message)
     }
   

   }