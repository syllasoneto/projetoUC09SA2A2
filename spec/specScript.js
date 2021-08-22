describe('Multiplicação de 2 números', function () {
    describe('Multiplicação por zero', function () {
        it('Deve retornar zero quando um dos fatores for igual a zero', function () {
            expect(multiplicaAxB(3,0)).toBe(0);
            expect(multiplicaAxB(-5,0)).toBe(0);
            expect(multiplicaAxB(9.385,0)).toBe(0);
            expect(multiplicaAxB(0,9.385)).toBe(0);
        });
    });

    describe('Multiplicação de 2 inteiros', function () {
        it('Deve retornar um número inteiro quando dois números inteiros forem informados', function () {
            expect(multiplicaAxB(3,1)).toBe(3);
            expect(multiplicaAxB(250,5)).toBe(1250);
            expect(multiplicaAxB(1450,15)).toBe(21750);
        });
    });

    describe('Multiplicação com números decimais', function () {
        it('Deve retornar um número decimal com 6 posições depois da vírgula, quando o resultado tiver decimais. Deve retornar um número inteiro quando não houver decimais.', function () {
            expect(multiplicaAxB(3.5,2)).toBe(7);
            expect(multiplicaAxB(55.25,5)).toBe('276.250000');
            expect(multiplicaAxB(8.4568,9.745)).toBe('82.411516');
        });
    });
}
)