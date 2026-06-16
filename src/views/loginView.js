
import { html, render } from '../lib/lit-html.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../config/firebaseInit.js"
import page from '../lib/page.js';


const template = (onSubmit, errorMessage) => html`

  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" class="mx-auto h-10 w-auto" />
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-grey">Sign in to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    ${errorMessage
    ? html`<p class="mb-4 text-red-500 font-medium">
          ${errorMessage}
        </p>`
    : ''
  }
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
  <div class="flex items-center justify-between">
    <label for="password" class="block text-sm font-medium text-gray-700">
      Password
    </label>
  </div>

  <div class="mt-2">
    <input
      id="password"
      type="password"
      name="password"
      required
      autocomplete="current-password"
      class="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm
             placeholder:text-gray-400
             focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none
             sm:text-sm"
    />
  </div>
</div>
      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
      </div>
    </form>

   
  </div>
</div>`



export default function (ctx) {
  let errorMessage = '';

  const onSubmit = async (e) => {
    e.preventDefault();
    await loginFormSubmitHandler(ctx, e, (msg) => {
      errorMessage = msg;
      ctx.render(template(onSubmit, errorMessage));
    });
  };

  ctx.render(template(onSubmit, errorMessage));
}

async function loginFormSubmitHandler(ctx, e, setError) {
  const formData = new FormData(e.currentTarget);
  const { email, password } = Object.fromEntries(formData);

  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    page.redirect('/');
  } catch (err) {
    console.log(err.message);
    setError('Invalid email or password');
  }
}