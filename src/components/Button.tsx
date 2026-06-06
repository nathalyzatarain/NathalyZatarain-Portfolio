type ButtonProps = {
  text: string
  variant?: 'primary' | 'secondary'
}

function Button({
  text,
  variant = 'primary',
}: ButtonProps) {

  const baseStyles =
    'px-8 py-4 rounded-full font-medium transition-all duration-300'

  const variants = {
    primary:
      'bg-purple-600 hover:bg-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.5)]',

    secondary:
      'border border-zinc-700 hover:border-purple-500 hover:text-purple-400',
  }

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {text}
    </button>
  )
}

export default Button