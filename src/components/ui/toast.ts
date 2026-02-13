import type * as React from "react"

export interface Toast {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  variant?: "default" | "destructive"
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export type ToastActionElement = React.ReactElement<any>
export type ToastProps = Omit<Toast, "id">
