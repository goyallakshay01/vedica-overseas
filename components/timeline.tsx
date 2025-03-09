import { cn } from "@/lib/utils"

export function Timeline({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative flex flex-col space-y-4", className)}>
      {children}
    </div>
  )
}

export function TimelineItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start space-x-4">
      {children}
    </div>
  )
}

export function TimelineOppositeContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-32 text-sm text-muted-foreground">
      {children}
    </div>
  )
}

export function TimelineSeparator({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      {children}
    </div>
  )
}

export function TimelineDot({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
      {children}
    </div>
  )
}

export function TimelineConnector() {
  return (
    <div className="my-1 w-0.5 flex-1 bg-border" />
  )
}

export function TimelineContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 pt-1">
      {children}
    </div>
  )
}