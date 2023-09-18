import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    // bg-muted
    <div 
      className={cn("animate-pulse rounded-md bg-gray-300 ", className)}
      {...props}
    />
  )
}

export { Skeleton }
