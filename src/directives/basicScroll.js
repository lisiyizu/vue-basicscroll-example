import * as basicScroll from 'basicscroll'

let obj = {};
let count = 0;

const basicScrollDirective = {
	bind (el, binding, vnode) {
		console.log('bind')
		let defaults = {
			elem: el,
			from: 'top-bottom',
			to: 'middle-middle',
			direct: true,
			props: {
				'--o': {
					from: .01,
					to: .99
				},
				'--r': {
					from: '0',
					to: '1turn'
				},
				'--ty': {
					from: '100px',
					to: '0',
				}
			}
		}
		let options = Object.assign({}, defaults, binding.value);
		const instance = basicScroll.create(options)
		obj['count'+count] = instance;
		el.dataset.count = count;
		count++
	},
	inserted: function (el, binding,vnode) {
		console.log('inserted')
		obj['count' + el.dataset.count].start()
		setTimeout(()=>{
			obj['count' + el.dataset.count].calculate()
			obj['count' + el.dataset.count].update()
		},0)
		console.log(obj)
	},
	updated: function (el, binding, vnode, oldVnode) {
		console.log('updated')
	},
	componentUpdated: function (el, binding, vnode, oldVnode) {
		console.log('componentUpdated')
	}
	,
	unbind: function (el, binding, vnode) {
		console.log('unbind')
		obj['count' + el.dataset.count].destroy()
		delete obj['count' + el.dataset.count];
	}
}
export default basicScrollDirective;