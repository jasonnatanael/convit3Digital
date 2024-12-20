export default class senha {
    static nova(tamanho: number = 15): string {
        const minusculas = 'abcdefghijklmnopqrstuvwxyz';
        const maiusculas = minusculas.toUpperCase();
        const numeros = '0123456789';
        const especiais = '!@#$%&*';

        const grupos = [minusculas, maiusculas, numeros, especiais];
        const senha = [];

        for (let i = 0; i < tamanho; i++) {
            const grupo = grupos[Math.floor(Math.random() * grupos.length)];
            const index = Math.floor(Math.random() * grupo.length);
            senha.push(grupo[index]);
        }

        return senha.join('');
    };
}