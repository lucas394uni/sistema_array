let automoveis = [];
let posicao = -1;

function incluir() {
  const marca = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value;
  const ano = document.getElementById('ano').value;
  const cor = document.getElementById('cor').value;

  automoveis.push({ marca, modelo, ano, cor });
  posicao = automoveis.length - 1;
  mostrar();
}

function editar() {
  if (posicao >= 0) {
    automoveis[posicao] = {
      marca: document.getElementById('marca').value,
      modelo: document.getElementById('modelo').value,
      ano: document.getElementById('ano').value,
      cor: document.getElementById('cor').value
    };
    mostrar();
  }
}

function remover() {
  if (posicao >= 0) {
    automoveis.splice(posicao, 1);
    posicao = Math.min(posicao, automoveis.length - 1);
    mostrar();
  }
}

function anterior() {
  if (posicao > 0) {
    posicao--;
    mostrar();
  }
}

function proximo() {
  if (posicao < automoveis.length - 1) {
    posicao++;
    mostrar();
  }
}

function mostrar() {
  if (posicao >= 0 && automoveis[posicao]) {
    const auto = automoveis[posicao];
    document.getElementById('marca').value = auto.marca;
    document.getElementById('modelo').value = auto.modelo;
    document.getElementById('ano').value = auto.ano;
    document.getElementById('cor').value = auto.cor;
    document.getElementById('posicaoAtual').textContent = `Registro ${posicao + 1} de ${automoveis.length}`;
  } else {
    document.getElementById('marca').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('ano').value = '';
    document.getElementById('cor').value = '';
    document.getElementById('posicaoAtual').textContent = 'Nenhum registro.';
  }
}