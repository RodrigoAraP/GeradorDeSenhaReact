import { IconCopy } from "@tabler/icons-react"
import { useState } from "react"

export interface ExibeSenhaProps {
  senha: string
}

export default function (props: ExibeSenhaProps) {
  const [mostrarAviso, setMostrarAviso] = useState<boolean>(false)

  const copiar = () => {
    navigator.clipboard.writeText(props.senha)
    setMostrarAviso(true)
    setTimeout(() => setMostrarAviso(false), 1500)
  }

  return (
    <div className="mt-3">
      {props.senha.trim() !== '' && (
        <>
          <span className="font-bold text-lg">Senha Gerada:</span>
          <div className="flex justify-between p-2 border bg-gray-100 rounded text-slate-800">
            {props.senha}
            <IconCopy onClick={copiar} className="hover:text-blue-500 cursor-pointer" />
          </div>
        </>
      )}
      {mostrarAviso && <p className="mt-2 text-blue-500 text-center">Senha copiada!</p>}
    </div>
  )
}