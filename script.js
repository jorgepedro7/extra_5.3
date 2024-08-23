let h1Element = document.createElement('h1');
h1Element.innerText = "Loja Proz Edu";
h1Element.id = "titulo";

let body = document.querySelector("body");
body.appendChild(h1Element);

let mainElement = document.createElement('main');
body.appendChild(mainElement);

const produtoProz = document.createElement("article");
produtoProz.innerHTML = `
    <div id="produto">
        <h2>Nome do Curso: Introdução à Programação</h2>
        <p>Descrição: Aprenda os fundamentos da programação com este curso introdutório, ideal para iniciantes.</p>
        <p>Preço: R$ 150,00</p>
        <img src="https://via.placeholder.com/150" alt="Imagem do curso">
    </div>
`;

mainElement.appendChild(produtoProz);

console.log(h1Element);
console.log(produtoProz);
