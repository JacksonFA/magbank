import './Loading.sass'

export function Loading() {
  return (
    <div className="w-full h-max bg-purple-100 color-light flex-center gap-md spinner">
      <span className="font-md">Carregando...</span>
      <div className="half-spinner"></div>
    </div>
  )
}
