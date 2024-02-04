const produtos = [{nome:"computador", categoria: "tecnologia", preço:"800"},
                 {nome:"Telemovel", categoria: "tecnologia", preço:"500"},
                 {nome:"TV", categoria: "tecnologia", preço:"750"}]

let produtoTabela=document.getElementById("produtoLista"); 

for(i=0;i<produtos.length;i++){

    let produtoTabelalinha = document.createElement('tr');
    let produtoTabelaDadosNome = document.createElement('td');
    produtoTabelaDadosNome.innerHTML = produtos[i].nome;
    produtoTabelalinha.appendChild(produtoTabelaDadosNome);
    produtoTabela.appendChild(produtoTabelalinha);

    let produtoTabelaDadosCategoria = document.createElement('td');
    produtoTabelaDadosCategoria.innerHTML = produtos[i].categoria;
    produtoTabelalinha.appendChild(produtoTabelaDadosCategoria);
    produtoTabela.appendChild(produtoTabelalinha);

    let produtoTabelaDadosPreco = document.createElement('td');
    produtoTabelaDadosPreco.innerHTML = produtos[i].preço;
    produtoTabelalinha.appendChild(produtoTabelaDadosPreco);
    produtoTabela.appendChild(produtoTabelalinha);

}