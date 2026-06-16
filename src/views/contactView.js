import { html } from 'lit-html';

const template = () => html`
  <div class="min-h-screen flex items-center justify-center px-6 py-12 lg:px-8">

    <div class="w-full max-w-4xl">

      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900">
          Contact Us
        </h1>
        <p class="mt-3 text-lg text-gray-500">
          We’re here to help you with anything related to Rent a Bike.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <!-- Email -->
        <div class="rounded-2xl bg-white shadow-md ring-1 ring-gray-200 p-6 text-center">
          <div class="text-indigo-600 text-2xl mb-3">📧</div>
          <h3 class="text-lg font-semibold text-gray-900">Email</h3>
          <p class="mt-2 text-gray-500 text-sm">support@rentabike.com</p>
          <p class="text-gray-400 text-xs mt-1">Reply within 24h</p>
        </div>

        <!-- Phone -->
        <div class="rounded-2xl bg-white shadow-md ring-1 ring-gray-200 p-6 text-center">
          <div class="text-indigo-600 text-2xl mb-3">📞</div>
          <h3 class="text-lg font-semibold text-gray-900">Phone</h3>
          <p class="mt-2 text-gray-500 text-sm">+359 88 123 4567</p>
          <p class="text-gray-400 text-xs mt-1">Mon - Fri, 9:00 - 18:00</p>
        </div>

        <!-- Location -->
        <div class="rounded-2xl bg-white shadow-md ring-1 ring-gray-200 p-6 text-center">
          <div class="text-indigo-600 text-2xl mb-3">📍</div>
          <h3 class="text-lg font-semibold text-gray-900">Office</h3>
          <p class="mt-2 text-gray-500 text-sm">
            Sofia Tech Park, Bulgaria
          </p>
          <p class="text-gray-400 text-xs mt-1">Headquarters</p>
        </div>

      </div>

      <!-- Extra section -->
      <div class="mt-12 bg-indigo-50 rounded-2xl p-8 text-center">
        <h2 class="text-xl font-semibold text-gray-900">
          Need quick help?
        </h2>
        <p class="mt-2 text-gray-600">
          Check our FAQ or contact us through any of the channels above.
        </p>

        <div class="mt-4 text-sm text-gray-500">
          🚴 We usually respond faster than you can fix a flat tire.
        </div>
      </div>

    </div>
  </div>
`;

export default function (ctx) {
  ctx.render(template());
}