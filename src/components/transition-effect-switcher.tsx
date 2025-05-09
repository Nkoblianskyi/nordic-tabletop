"use client"

import { useTransitionEffect } from "./animations/transition-provider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export default function TransitionEffectSwitcher() {
  const { effect, setEffect } = useTransitionEffect()

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-background border border-border rounded-lg p-4 shadow-lg">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Переходи між сторінками:</p>
        <Select value={effect} onValueChange={(value) => setEffect(value as any)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Виберіть ефект" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fade">Затухання</SelectItem>
            <SelectItem value="slide">Ковзання</SelectItem>
            <SelectItem value="scale">Масштабування</SelectItem>
            <SelectItem value="flip">Обертання</SelectItem>
            <SelectItem value="none">Без ефекту</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
