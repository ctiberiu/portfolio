import { useToast } from "@/hooks/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <div className="fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
      {toasts.map(function (toast) {
        return (
          <div
            key={toast.id}
            className="mb-2 flex w-full items-center justify-between gap-4 rounded-lg border border-border bg-card p-4 shadow-lg"
          >
            <div className="flex flex-col gap-1">
              {toast.title && (
                <div className="font-display font-semibold text-foreground">
                  {toast.title}
                </div>
              )}
              {toast.description && (
                <div className="text-sm text-muted-foreground">
                  {toast.description}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
