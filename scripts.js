const baseUrls = {
  soma: 'https://calculadora-soma.vercel.app/api/add',
  subtracao: 'https://calculadora-subtracao.vercel.app/api/subtract',
  multiplicacao: 'https://calculadora-multiplicacao.vercel.app/api/multiply',
  divisao: 'https://calculadora-divisao.vercel.app/api/divide',
};

async function calcular() {
  const a = document.getElementById('valorA').value;
  const b = document.getElementById('valorB').value;
  const operacao = document.getElementById('operacao').value;
  const resultadoDiv = document.getElementById('resultado');

  if (a === '' || b === '') {
    resultadoDiv.innerText = 'Preencha os dois valores!';
    return;
  }

  try {
    const url = `${baseUrls[operacao]}?a=${a}&b=${b}`;
    const resposta = await fetch(url);
    const json = await resposta.json();

    if (json.error) {
      resultadoDiv.innerText = `Erro: ${json.error}`;
    } else {
      resultadoDiv.innerText = `Resultado: ${json.result}`;
    }
  } catch (erro) {
    resultadoDiv.innerText = 'Erro ao conectar com o serviço.';
  }
}
