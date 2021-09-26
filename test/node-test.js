// const fs = import('fs');
import fs from 'fs';
import { default as render, tag } from '../index.js';
import lorem from '../lorem.js';

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const content = render([
	tag('!DOCTYPE', { html: null }),
	tag('html', { 'lang': 'en' }, [
		tag('head', null, [
			tag('meta', { 'charset': 'UTF-8' }),
			tag('meta', { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edge' }),
			tag('meta', { 'name': 'viewpory', 'content': 'width=device-width, initial-scale=1.0' }),
			tag('title', null, ['HELLO WORLD'])
		]),
		tag('body', null, [
			tag('header', null, [
				tag('h1', { 'style': 'text-transform: capitalize;' }, [lorem(1).replace(/,/g, '').replace(/\./g, '')])
			]),
			tag('p', null, [lorem(randomIntFromInterval(1, 25))]),
			tag('p', null, [lorem(randomIntFromInterval(1, 25))]),
			tag('p', null, [lorem(randomIntFromInterval(1, 25))]),
			tag('footer', null, [
				tag('p', null, ['FOOTER'])
			])
		])
	])
]);

fs.writeFile('node-test.html', content, (error) => {
	if (error) {
		console.error(error);
		return;
	}

	console.log(content);
});
