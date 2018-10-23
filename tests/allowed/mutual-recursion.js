class A {
	constructor() {
		this.b = new B()
	}
}

class B {
	get a() {
		if (this.a != null) {
			this.a = new A()
		}
		return this.a
	}
}

function isEven(n) {
	return n === 0 ? true : isOdd(n - 1)
}

function isOdd(n) {
	return n === 0 ? false : isEven(n - 1)
}
