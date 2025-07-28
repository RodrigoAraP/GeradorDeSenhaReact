'use client'
import { useEffect, useState } from "react";
import opcoes from "@/data/OpcoesCaracteres";
import Checkbok from "@/components/Checkbok";
import Senha from "@/model/Senha";
import ExibeSenha from "@/components/ExibeSenha";
import ForcaSenha from "@/components/ForcaSenha";

export default function Home() {
  const [tamanho, setTamanho] = useState<number>(8)
  const [tiposCaracteres, setTiposCaracteres] = useState(opcoes);
  const [senha, setSenha] = useState<string>('')
  const [forcaSenha, setForcaSenha] = useState<number>(3)

  useEffect(() => {
    setForcaSenha(Senha.calcularForca(tamanho, tiposCaracteres))
  }, [tamanho, tiposCaracteres])

  const handleChange = (indice: number) => {
    const aux = [...tiposCaracteres]
    aux[indice].valor = !aux[indice].valor
    setTiposCaracteres([...aux])
  }

  const gerarSenha = () => {
    const novaSenha = Senha.gerarSenha(tamanho, tiposCaracteres)
    setSenha(novaSenha)
  }

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl text-gray-200 mb-4 text-center font-bold">Gerador de Senhas</h1>
      <div className="w-1/4 bg-slate-700 text-gray-200 rounded-md p-8">
        <div className="flex gap-3 text-2xl flex-col">
          <label className="flex justify-between">
            <span>Tamanho da Senha: </span>
            <span className="text-blue-500">{tamanho}</span>
          </label>
          <input type="range" min={5} max={30} value={tamanho}
            onChange={(e) => setTamanho(+e.target.value)} />
        </div>
        <div className="flex flex-col my-3">
          {tiposCaracteres.map((opcoes, i) => {
            return (
              <Checkbok key={opcoes.id}
                id={opcoes.id}
                texto={opcoes.nome}
                selecionado={opcoes.valor}
                handleChange={() => handleChange(i)}
              />
            )
          })}
        </div>
        <ForcaSenha forca={forcaSenha} />
        <button onClick={gerarSenha} className={`
            text-white bg-blue-500 text-lg font-bold w-full rounded p-2 mt-3
          `}>
          Gerar Senha
        </button>
        <ExibeSenha senha={senha} />
      </div>
    </main>
  );
}
