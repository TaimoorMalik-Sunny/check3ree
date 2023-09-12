import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    // bg-muted
    <div 
      className={cn("animate-pulse rounded-md bg-blue-500 ", className)}
      {...props}
    />
  )
}

export { Skeleton }
