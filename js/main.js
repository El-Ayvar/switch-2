let dia = `martes`;
function tengoClases(dia) {
    switch (`dia`)  {
        case `lunes`:
        case `martes`:
            console.log(`tienes clases con Cèsar`);
            break;
        default :
            console.log('tienes clases con no se quien')
    }
}
console.log(tengoClases(dia))
