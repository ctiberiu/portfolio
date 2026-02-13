import { useToast } from "@/hooks/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <div className="fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
      {toasts.map(function (toast) {
        const isDestructive = toast.variant === "destructive"

        return (
          <div
            key={toast.id}
            className={
              isDestructive
                ? "mb-2 flex w-full items-center justify-between gap-4 bg-background p-4 brutal-border brutal-shadow-sm"
                : "mb-2 flex w-full items-center justify-between gap-4 bg-green-500 p-4 brutal-border brutal-shadow-sm"
            }
          >
            <div className="flex flex-col gap-1">
              {toast.title && (
                <div
                  className={
                    isDestructive
                      ? "font-display font-semibold text-red-600"
                      : "font-display font-semibold text-black"
                  }
                >
                  {toast.title}
                </div>
              )}
              {toast.description && (
                <div
                  className={
                    isDestructive
                      ? "text-sm text-red-600"
                      : "text-sm text-black"
                  }
                >
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
