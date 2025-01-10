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

    objetosDentroDeOutro(array1, array2) {
        // Função auxiliar para comparar objetos
        function compararObjetos(obj1, obj2) {
            for (let chave in obj1) {
                if (obj1.hasOwnProperty(chave)) {
                    if (obj1[chave] !== obj2[chave]) {
                        return false;
                    }
                }
            }
            return true;
        }

        // Verifica se todos os objetos de array1 estão em array2
        return array1.every(function (obj1) {
            return array2.some(function (obj2) {
                return compararObjetos(obj1, obj2);
            });
        });
    }
}