function suma(a) {
	return function(b) {
		return a + b
	}
}

const suma2 = suma(2)

suma2(3)
