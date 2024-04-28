import classNames from 'classnames'

interface Props {
  type: 'inflow' | 'outflow'
  arrow: 'left' | 'right'
}

export default function AnimatedBar(props: Props) {
  const { type, arrow } = props

  return (
    <div
      className={classNames('relative w-full h-1', type === 'inflow' ? 'bg-inflow' : 'bg-outflow')}
    >
      <span
        className={classNames(
          'block h-full relative',
          'after:content-[""] after:inset-0 after:absolute after:z-1 after:animated-bar after:overflow-hidden',
          type === 'inflow' ? 'after:animate-move-forwards' : 'after:animate-move-backwards',
          'before:content-[""] before:absolute before:z-10 before:w-2 before:h-2 before:border-[8px] before:-top-1.5',
          type === 'inflow' ? 'before:border-l-inflow' : 'before:border-outflow',
          arrow === 'left'
            ? 'before:-left-2.5 before:border-t-transparent before:border-l-transparent before:border-b-transparent'
            : 'before:-right-2.5 before:border-t-transparent before:border-r-transparent before:border-b-transparent',
        )}
      />
    </div>
  )
}
