import React, { useState } from "react";

const CalculaIdade = () => {
  const [anoAtual] = useState(2024);
  const [mêsAtual] = useState('9');

  const [anoNascimento, setAnoNascimento] = useState('');
  const [mêsNascimento, setMêsNascimento] = useState('');

  const [mensagem, setMensagem] = useState('');

  const calcularIdade = () => {
    if (anoNascimento && mêsNascimento) {
      const idade = anoAtual - anoNascimento;
      if (mêsNascimento === mêsAtual) {
        setMensagem(`Você tem ${idade} anos e completará aniversário este mês.`);
      } else if (mêsNascimento > mêsAtual) {
        setMensagem(`Você tem ${idade - 1} anos, completará ${idade} em ${mêsNascimento}.`);
      } else {
        setMensagem(`Você tem ${idade} anos.`);
      }
    } else {
      setMensagem('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div>
      <input
        type="number"
        value={anoNascimento}
        onChange={(e) => setAnoNascimento(e.target.value)}
        placeholder="Digite seu ano de nascimento"
      />

      <select
        value={mêsNascimento}
        onChange={(e) => setMêsNascimento(e.target.value)}
      >
        <option value="">Selecione o mês</option>
        <option value="1">Janeiro</option>
        <option value="2">Fevereiro</option>
        <option value="3">Março</option>
        <option value="4">Abril</option>
        <option value="5">Maio</option>
        <option value="6">Junho</option>
        <option value="7">Julho</option>
        <option value="8">Agosto</option>
        <option value="9">Setembro</option>
        <option value="10">Outubro</option>
        <option value="11">Novembro</option>
        <option value="12">Dezembro</option>
      </select>

      <button onClick={calcularIdade}>Descobrir a Idade</button>

      <p>{mensagem}</p>
    </div>
  );
};

export default CalculaIdade;