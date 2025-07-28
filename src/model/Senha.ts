import IdsCaracteres from "./idsCaracteres";
import OpcaoCaractere from "./OpcaoCaractere";

export default class Senha {
  static opcoesTem(id: string, opcoes: OpcaoCaractere[]) {
    const opcao = opcoes.find(o => o.id === id)
    return opcao!.valor
  }

  static gerarSenha(tamanho: number, opcoes: OpcaoCaractere[]) {
    let caracteresPossiveis = ''

    if (Senha.opcoesTem(IdsCaracteres.NUMEROS, opcoes)) caracteresPossiveis += '0123456789'
    if (Senha.opcoesTem(IdsCaracteres.MAIUSCULAS, opcoes)) caracteresPossiveis += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (Senha.opcoesTem(IdsCaracteres.MINUSCULAS, opcoes)) caracteresPossiveis += 'abcdefghijklmnopqrstuvwxyz'
    if (Senha.opcoesTem(IdsCaracteres.ESPECIAIS, opcoes)) caracteresPossiveis += '!@#$%^&*()_+-"`[]{}|;:,.<>?'

    let senha = ''

    for (let i = 0; i < tamanho; i++) {
      const aleatorio = Math.floor(Math.random() * caracteresPossiveis.length)
      senha += caracteresPossiveis.charAt(aleatorio)
    }

    return senha
  }

  static calcularForca(tamanho: number, opcoes: OpcaoCaractere[]) {
    const temNumeros = +Senha.opcoesTem(IdsCaracteres.NUMEROS, opcoes)
    const temMaiusculas = +Senha.opcoesTem(IdsCaracteres.MAIUSCULAS, opcoes)
    const temMinusculas = +Senha.opcoesTem(IdsCaracteres.MINUSCULAS, opcoes)
    const temEspeciais = +Senha.opcoesTem(IdsCaracteres.ESPECIAIS, opcoes)

    const qtdeTipos = temNumeros + temMaiusculas + temMinusculas + temEspeciais

    if (tamanho < 8 || qtdeTipos < 2) return 1
    if (qtdeTipos === 4 && tamanho >= 12) return 3
    return 2
  }
}