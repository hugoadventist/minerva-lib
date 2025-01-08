export default class Utils {
    formatarObjeto(array) {
        const novoArray = [];
        for (const [, obj] of array.entries()) {
            novoArray.push(
                {
                    ['index']: this.ultimoIndice(array),
                    ...obj,
                }
            );
        }
    }

    ultimoIndice(array) {
        return array.length - 1;
        
    }
}