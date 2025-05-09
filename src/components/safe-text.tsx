interface SafeTextProps {
  content: string[] | string
  className?: string
}

export default function SafeText({ content, className = "" }: SafeTextProps) {
  // Якщо контент - це масив рядків
  if (Array.isArray(content)) {
    return (
      <div className={`space-y-4 ${className}`}>
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    )
  }

  // Якщо контент - це один рядок
  return <p className={className}>{content}</p>
}
