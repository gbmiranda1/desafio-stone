# desafio-stone
A função main recebe um array de objetos com as despesas da viagem e um array com os nomes das pessoas que participaram da viagem. A função main chama a função addUpExpenses. Essa função é responsável percorrer o array de despesas e multiplicar a quantidade(amount) pelo preço por unidade (unitPrice). Em seguida mandamos esse total para a função shareExpenses, que recebe o total das despesas e os membros e divide o valor entre eles, já criando o dicionário(objeto). Ao final eu verifico se a divisão está correta, para fazer isso basta verificar se o valor pago para cada integrante * o número de integrantes é igual ao valor total de despesas, se for, só retorno o objeto, senão, coloco a ultima pessoa do array que irá pagar o menor ou maior valor entre todos. Ao final, retorno o dicionário.

Para fazer os calculos o exemplo a seguir:
Uma viagem tem custo de 5 reais e vou dividir para 3 pessoas. Isso vai gerar algo como 1.67 para cada pessoa, então eu pego esse valor e multiplo por 3(número de pessoas no passeio)
 - 1.67*3 = 5,01.

 - Esse resultado eu subtraio do total da viagem

 - 5,01 - 5 = 0,01

 - Essa diferença eu subtraio ao ultimo integrante do passeio

 - Pessoa 1 - 1.67
 - Pessoa 2 - 1.67
 - Pessoa 3 - (1.67 - 0,01 = 1,66)

 - Agora somando 1.67+1.67+1.66 obtemos 5 reais. Dessa forma, conseguimos que o passeio inteiro seja pago com o valor exato!

Para rodar lembre-se: a função recebe um array de objetos e nomes de viajantes:

- Obs: Para acessar os valores basta colocar namesToPay["nomedointegrante"] no aba console do navegador. 

Eu também tomei a liberdade de fazer uma aplicação web front-end do desafio:

https://github.com/gbmiranda1/front-despesas-stone (git - desafio react.js) 

https://front-despesas-stone.vercel.app/ (hospedagem - desafio react.js)