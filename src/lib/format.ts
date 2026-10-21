export const formatPrice = (n: number) => `₹${n.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`

/** Join truthy class names */
export const cx = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(' ')
