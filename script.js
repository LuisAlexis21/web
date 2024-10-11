document.getElementById('calculate-btn').addEventListener('click', function() {
    // Obtener los valores ingresados
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const cash = parseFloat(document.getElementById('cash').value);

    // Verificar que todos los campos estén llenos
    if (isNaN(price) || isNaN(quantity) || isNaN(cash)) {
        alert('Por favor, ingrese valores válidos en todos los campos.');
        return;
    }

    // Calcular el total
    const total = price * quantity;

    // Calcular el cambio
    const change = cash - total;

    // Mostrar el total y el cambio en los elementos correspondientes
    document.getElementById('total-output').innerText = `Total a pagar: $${total.toFixed(2)}`;
    document.getElementById('change-output').innerText = `Cambio a devolver: $${change >= 0 ? change.toFixed(2) : 'Monto insuficiente'}`;
});
