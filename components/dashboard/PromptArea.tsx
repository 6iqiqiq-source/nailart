"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import * as DialogPrimitive from "@radix-ui/react-dialog"

// ─── Utility ────────────────────────────────────────────────────────────────

function cn(...inputs: (string | false | null | undefined)[]): string {
  return inputs.filter(Boolean).join(" ")
}

// ─── Radix primitives ───────────────────────────────────────────────────────

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 rounded-md bg-[#303030] text-white/80 px-2 py-1 text-xs",
        "animate-in fade-in-0 zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
))
TooltipContent.displayName = "TooltipContent"

const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "start", sideOffset = 8, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[200px] rounded-2xl bg-[#252525] border border-white/[0.07] p-1.5",
        "shadow-[0_8px_32px_rgba(0,0,0,0.5)]",
        "animate-in data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
        "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = "PopoverContent"

const Dialog = DialogPrimitive.Root
const DialogPortal = DialogPrimitive.Portal
const DialogTrigger = DialogPrimitive.Trigger
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = "DialogOverlay"

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
        "w-full max-w-[90vw] md:max-w-[760px]",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        className
      )}
      {...props}
    >
      <div className="relative bg-[#202020] rounded-[24px] overflow-hidden shadow-2xl p-1">
        {children}
        <DialogPrimitive.Close className="absolute right-3 top-3 z-10 rounded-full bg-white/5 p-1 hover:bg-white/10 transition-all">
          <XIcon className="h-5 w-5 text-white/50 hover:text-white/80" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </div>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = "DialogContent"

// ─── Icons ──────────────────────────────────────────────────────────────────

const PlusIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...p}>
    <path d="M12 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const Settings2Icon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M20 7h-9" /><path d="M14 17H5" />
    <circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" />
  </svg>
)
const SendIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...p}>
    <path d="M12 5.25L12 18.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.75 12L12 5.25L5.25 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const XIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)
const GlobeIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="10" /><path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)
const PencilIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" />
  </svg>
)
const PaintBrushIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
    <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
    <path d="M14.5 17.5 4.5 15" />
  </svg>
)
const MicIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
  </svg>
)
const SparklesIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 3l1.88 5.76a1 1 0 0 0 .95.69H21l-4.94 3.57a1 1 0 0 0-.36 1.12L17.58 20 12 16.19 6.42 20l1.88-5.86a1 1 0 0 0-.36-1.12L3 9.45h6.17a1 1 0 0 0 .95-.69L12 3z" />
  </svg>
)

// ─── Tools list ─────────────────────────────────────────────────────────────

type Tool = { id: string; name: string; shortName: string; icon: React.FC<React.SVGProps<SVGSVGElement>>; extra?: string }

const toolsList: Tool[] = [
  { id: "createImage", name: "Create an image", shortName: "Image", icon: PaintBrushIcon },
  { id: "searchWeb", name: "Search the web", shortName: "Search", icon: GlobeIcon },
  { id: "writeCode", name: "Write or code", shortName: "Write", icon: PencilIcon },
]

// ─── PromptBox ───────────────────────────────────────────────────────────────

const PromptBox = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    const internalRef = React.useRef<HTMLTextAreaElement>(null)
    const containerRef = React.useRef<HTMLDivElement>(null)
    const fileInputRef = React.useRef<HTMLInputElement>(null)
    const [value, setValue] = React.useState("")
    const [imagePreview, setImagePreview] = React.useState<string | null>(null)
    const [selectedTool, setSelectedTool] = React.useState<string | null>(null)
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)
    const [isDialogOpen, setIsDialogOpen] = React.useState(false)
    const [mousePos, setMousePos] = React.useState({ x: -300, y: -300 })
    const [isHovered, setIsHovered] = React.useState(false)

    React.useImperativeHandle(ref, () => internalRef.current!, [])

    const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      if (containerRef.current) {
        const { left, top } = containerRef.current.getBoundingClientRect()
        setMousePos({ x: e.clientX - left, y: e.clientY - top })
        setIsHovered(true)
      }
    }, [])

    const handleMouseLeave = React.useCallback(() => {
      setIsHovered(false)
    }, [])

    React.useLayoutEffect(() => {
      const el = internalRef.current
      if (!el) return
      el.style.height = "auto"
      el.style.height = `${Math.min(el.scrollHeight, 240)}px`
    }, [value])

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
      setValue(e.target.value)
      props.onChange?.(e)
    }

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
      const file = e.target.files?.[0]
      if (file?.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onloadend = () => setImagePreview(reader.result as string)
        reader.readAsDataURL(file)
      }
      e.target.value = ""
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        // TODO: trigger submit
      }
    }

    const hasValue = value.trim().length > 0 || !!imagePreview
    const activeTool = selectedTool ? toolsList.find(t => t.id === selectedTool) : null
    const ActiveToolIcon = activeTool?.icon

    return (
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative flex flex-col rounded-[28px] p-2 transition-colors overflow-hidden",
          "bg-[#2a2a2a] border border-white/[0.07]",
          "shadow-[0_4px_40px_rgba(0,0,0,0.4)]",
          "focus-within:border-white/[0.12]",
          className
        )}
      >
        {/* Magic border gradient */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[28px] transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.35), transparent 70%)`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />
        {/* Magic spotlight gradient */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[28px] transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.055), transparent 80%)`,
          }}
        />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />

        {/* Image preview */}
        {imagePreview && (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <div className="relative mb-1 w-fit rounded-2xl px-1 pt-1">
              <DialogTrigger asChild>
                <button type="button" className="transition-transform hover:scale-[0.98]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imagePreview} alt="Preview" className="h-14 w-14 rounded-2xl object-cover" />
                </button>
              </DialogTrigger>
              <button
                onClick={(e) => { e.stopPropagation(); setImagePreview(null) }}
                className="absolute right-1.5 top-1.5 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-black/50 text-white/70 hover:text-white transition-colors"
              >
                <XIcon className="h-3 w-3" />
              </button>
            </div>
            <DialogContent>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imagePreview} alt="Full preview" className="w-full max-h-[90vh] object-contain rounded-[20px]" />
            </DialogContent>
          </Dialog>
        )}

        {/* Textarea */}
        <textarea
          ref={internalRef}
          rows={1}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Describe your YouTube video..."
          className={cn(
            "w-full resize-none border-0 bg-transparent px-3 py-3",
            "text-white placeholder:text-white/25",
            "text-[0.95rem] leading-[1.6]",
            "focus:ring-0 focus-visible:outline-none",
            "min-h-[48px] overflow-hidden"
          )}
          {...props}
        />

        {/* Bottom toolbar */}
        <div className="p-1">
          <TooltipProvider delayDuration={300}>
            <div className="flex items-center gap-1.5">

              {/* Attach */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-white/40 hover:text-white/70 hover:bg-white/[0.06] transition-colors cursor-pointer"
                  >
                    <PlusIcon className="h-5 w-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top"><p>Attach image</p></TooltipContent>
              </Tooltip>

              {/* Tools */}
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="flex h-8 items-center gap-1.5 rounded-full px-2.5 text-sm text-white/40 hover:text-white/70 hover:bg-white/[0.06] transition-colors cursor-pointer"
                      >
                        <Settings2Icon className="h-4 w-4" />
                        {!selectedTool && <span className="text-[0.8rem]">Tools</span>}
                      </button>
                    </PopoverTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="top"><p>Explore Tools</p></TooltipContent>
                </Tooltip>
                <PopoverContent side="top" align="start">
                  {toolsList.map(tool => (
                    <button
                      key={tool.id}
                      onClick={() => { setSelectedTool(tool.id); setIsPopoverOpen(false) }}
                      className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
                    >
                      <tool.icon className="h-4 w-4 flex-shrink-0" />
                      <span>{tool.name}</span>
                      {tool.extra && (
                        <span className="ml-auto text-xs text-white/25">{tool.extra}</span>
                      )}
                    </button>
                  ))}
                </PopoverContent>
              </Popover>

              {/* Active tool chip */}
              {activeTool && ActiveToolIcon && (
                <>
                  <div className="h-3.5 w-px bg-white/10" />
                  <button
                    onClick={() => setSelectedTool(null)}
                    className="flex h-8 items-center gap-1.5 rounded-full px-2.5 text-sm text-white/60 bg-white/[0.06] hover:bg-white/[0.1] transition-colors cursor-pointer"
                  >
                    <ActiveToolIcon className="h-4 w-4" />
                    <span className="text-[0.8rem]">{activeTool.shortName}</span>
                    <XIcon className="h-3.5 w-3.5 opacity-50" />
                  </button>
                </>
              )}

              {/* Right side */}
              <div className="ml-auto flex items-center gap-1.5">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="flex h-8 w-8 items-center justify-center rounded-full text-white/40 hover:text-white/70 hover:bg-white/[0.06] transition-colors cursor-pointer"
                    >
                      <MicIcon className="h-4 w-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top"><p>Voice input</p></TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="submit"
                      disabled={!hasValue}
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full transition-all",
                        "focus-visible:outline-none",
                        hasValue
                          ? "bg-white text-black hover:bg-white/85 cursor-pointer"
                          : "bg-white/[0.06] text-white/20 cursor-not-allowed"
                      )}
                    >
                      <SendIcon className="h-4 w-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top"><p>Generate</p></TooltipContent>
                </Tooltip>
              </div>
            </div>
          </TooltipProvider>
        </div>
      </div>
    )
  }
)
PromptBox.displayName = "PromptBox"

// ─── PromptArea (page-level component) ──────────────────────────────────────

export function PromptArea() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4">
      <div className="w-full max-w-2xl flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-[2rem] font-extrabold text-white tracking-[-0.03em] leading-[1.2] mb-3">
            What are you creating today?
          </h1>
          <p className="text-[0.9rem] text-white/30 leading-[1.6]">
            Describe your video and get AI-powered thumbnails that get clicks.
          </p>
        </div>
        <PromptBox />
      </div>
    </div>
  )
}
