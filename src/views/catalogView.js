import {html, render} from '../lib/lit-html.js';

const template = () => html`
    <div>
      <h1>Bicycles Page </h1>
</div>  
`;

export default function(ctx){

    ctx.render(template());

}