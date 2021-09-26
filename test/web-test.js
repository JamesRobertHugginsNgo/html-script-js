import { default as render, tag } from '../index.js';
import lorem from '../lorem.js';

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const content = render([
	tag('header', null, [
		tag('h1', { 'style': 'text-transform: capitalize;' }, [lorem(1).replace(/,/g, '').replace(/\./g, '')])
	]),
	tag('p', null, [lorem(randomIntFromInterval(1, 25))]),
	tag('p', null, [lorem(randomIntFromInterval(1, 25))]),
	tag('p', null, [lorem(randomIntFromInterval(1, 25))]),
	tag('footer', null, [
		tag('p', null, ['FOOTER'])
	])
]);

document.body.innerHTML = content;
