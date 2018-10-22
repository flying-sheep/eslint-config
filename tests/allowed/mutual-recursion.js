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
