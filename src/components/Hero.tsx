import classNames from 'classnames'

interface Props {
  backgroundClass?: string
}

export default function Hero(props: Props) {
  const { backgroundClass } = props
  return (
    <section
      className={classNames('relative flex w-full h-150', backgroundClass ?? 'bg-hero')}
    ></section>
  )
}
