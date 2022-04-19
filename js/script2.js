class GoodList {
	constructor() {
		this.goods = [];
		this.allGoods = [];
		this.sum = 0;
		this._takeGoods();
		this.render();
	}

	_takeGoods() {
		this.goods = [
			{ id: 1, title: 'Shirt', price: 150 },
			{ id: 2, title: 'Socks', price: 50 },
			{ id: 3, title: 'Jacket', price: 350 },
			{ id: 4, title: 'Shoes', price: 250 },
		];
	}

	countSum() {
		this.allGoods.forEach((good) => {
			this.sum += good.price;
		})
		return this.sum
	}

	render() {
		const goodsListHtml = document.querySelector('.goods-list');
		for (let good of this.goods) {
			const item = new GoodItem(good) // item - экземпляр класса GoodItem (1 строка из массива товаров)
			this.allGoods.push(item); // пушим строку из массива товаров в массив товаров на экране 
			goodsListHtml.innerHTML += item.render(); // добавляем разметку для экземпляра класса GoodItem и вставляем на страницу
		}

		document.querySelector('.total-sum').insertAdjacentHTML("afterbegin", `
			<br>
			<hr>
			<p>Общая сумма всех товаров: ${this.countSum()}</p>`)
	}
}


class GoodItem {    // формируем 1 продукт
	constructor(product) {
		this.id = product.id;
		this.title = product.title;
		this.price = product.price;
	}

	render() {
		return `
		<div class="goods-item" data-id=${this.id}>
			<h3>${this.title}</h3>
			<p>${this.price}</p>
		</div>
		`;
	}
}

const list = new GoodList;