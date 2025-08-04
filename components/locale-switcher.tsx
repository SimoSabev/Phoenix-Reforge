"use client"

import { useLocale } from "next-intl"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "@/navigation" // Correct import from navigation.ts

export function LocaleSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()

  const handleLocaleChange = (newLocale: string) => {
    // The useRouter from next-intl/navigation handles the locale prefixing automatically.
    // We just need to push the new pathname.
    router.push(pathname, { locale: newLocale })
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleLocaleChange("en")}
        className={cn(
          "text-sm font-medium",
          currentLocale === "en" ? "text-dynamic-primary" : "text-dynamic-text-secondary hover:text-dynamic-primary/80",
        )}
      >
        EN
      </Button>
      <span className="text-dynamic-text-secondary">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleLocaleChange("bg")}
        className={cn(
          "text-sm font-medium",
          currentLocale === "bg" ? "text-dynamic-primary" : "text-dynamic-text-secondary hover:text-dynamic-primary/80",
        )}
      >
        BG
      </Button>
    </div>
  )
}
