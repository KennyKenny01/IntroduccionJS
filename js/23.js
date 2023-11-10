const metodoPago = 'efectivo';

switch(metodoPago){
    case 'tarjeta':
        console.log('pagaste con tarjetas');
        break;
        case 'cheque':
                console.log('El usuario va a pagar con cheque, necesitaremos revisar el cheque y le informaremos via correo');
                break;
        case 'efectivo':
        console.log('El usuario va a pagar con efectivo');
        break;
        default:
            console.log('aun no haz pagado')
            break;
            
}