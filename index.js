const book = document.getElementById('book');

const imgElement = document.getElementById('book-image');
const authorElement = document.getElementById('book-author');
const yearElement = document.getElementById('book-year');
const titleElement = document.getElementById('book-title');

fetch('https://romyleads.github.io/my-favorite-book/book.json')
	//  Promise<res>
	.then(res => {
		//
		if (res.status === 404) {
			titleElement.textContent = 'not found message';
			throw new Error('not found message');
		}
		if (res.ok) {
			return res.json();
		} else {
			throw new Error('Something went wrong');
		}
	})
	.then(data => {
		console.log(data);
		const { title, src } = data;

		titleElement.textContent = title;
		imgElement.src = src;
		imgElement.alt = title;
		imgElement.style.width = '200px';
		authorElement.textContent = `Author: ${data.author}`;
		yearElement.textContent = `Year: ${data.year}`;
		yearElement.style.fontWeight = 'bold';
	})
	.catch(err => {
		console.log(err.message); // Custom not found message
	});
