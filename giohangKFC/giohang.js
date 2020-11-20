const items = [{
        name: 'Pizza 001',
        price: 5.9,
        quanlity: 1
    },
    {
        name: 'Pizza 002',
        price: 6.9,
        quanlity: 1
    },
    {
        name: 'Pizza 003',
        price: 7.9,
        quanlity: 1
    },
]

const SHIPPING = 2

function render() {
	// body...
	let subTotal = 0;
	items.forEach(item =>{
		subTotal += item.quanlity + item.price
	})
	const  total = subTotal + SHIPPING;

	const html = items.map(item =>` 
		<li class="order-item">
            <span class="item-name">${item.name}</span>
            <span class="item-quanlity">
                <button>-</button>
                <input type="number" value="${item.quanlity}">
                <button>+</button>
            </span>
            <span class="item-price">
                <span>$${(item.quanlity + item.price).toFixed(2)}</span>
                <button class="btn-delete">x</button>
            </span>
        </li>
	`).join('')
	('#order-items').innerHTML = html


	('#sub-total').innerText = `$${subTotal.toFixed(2)}`
	('#shipping').innerText = `$${SHIPPING}`
	('#total').innerText = `$${total}`
}	

function add(){
	items.push({
		name: `Pizaa $(Math.random().toFixed(3))`,
		quanlity: 1,
		price: Math.random()*10
	})
	render()
	
}
('#btn-add').addEventListener('click', ()=>{
	add()
})
render()