const createItem = require('./createItem');
describe('a função createItem', () => {
  it('cria um item válido', () => {
    const expectItem = {name:'morango', unit: 'kg', price:5.99, quantity:20 };
    const item = createItem('morango', 'kg', 5.99, 20);    
    expect(item).toEqual(expectItem);
  });

  it('utiliza zero como quantidade padrão', () => {
    const expected = 0;
    const item = createItem('morango', 'kg', 5.99, );
    expect(item).toHaveProperty('quantity', expected);
});

  it('Lança um erro quando não recebe parâmetros', () =>{
    const expect = null;
    const item = createItem('morango', 'kg', 5.99, 20);
    expect(item).toThrow(expect);
  });
  it.todo('Lança um erro se o nome do item não é uma string');
  it.todo('Lança um erro se o preço é negativo');
  it.todo('Lança um erro se o preço é zero');
});