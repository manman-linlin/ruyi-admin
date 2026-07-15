import { cn } from '../../utils/cn'

const glassTiers = {
  default: '', standard: 'glass-standard',
  elevated: 'glass-elevated', premium: 'glass-premium',
}
const paddings = { none: '', sm: '', md: '', lg: '' }

export default function Card({
  variant = 'default', padding = 'md', hover, bordered,
  spotlight, className, children, ...rest
}) {
  return (
    <div
      className={cn(
        'rui-card',
        glassTiers[variant],
        hover && 'hover-lift',
        bordered && 'rui-card--bordered',
        spotlight && 'card-spotlight',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

function CardHeader({ className, children }) {
  return <div className={cn('rui-card__header', className)}>{children}</div>
}
function CardBody({ className, children }) {
  return <div className={cn('rui-card__body', className)}>{children}</div>
}
function CardFooter({ className, children }) {
  return <div className={cn('rui-card__footer', className)}>{children}</div>
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter
