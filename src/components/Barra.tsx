interface BarraProps {
  corFundo: string
}

export default function (props: BarraProps) {
  return (
    <span className={` ${props.corFundo}
      ml-2 w-3 h-8 p-1.5 rounded-sm border-gray-100 border-2
    `}>
    </span>
  )
}