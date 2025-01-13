export default class Utils {

    arredondar(valor) {

        //arredonda o valor e fixa em duas casa decimais

        return (Math.round(valor * 100) / 100).toFixed(2);

    }
    verificarFormato(formato) {
        const FORMATOS = ['EPUB', 'PDF'];
        if (FORMATOS.includes(formato)) {
            return formato;
        } else {
            throw new Error("Opção de formato inválida, favor escolher a opção correta!");

        }
    }
}