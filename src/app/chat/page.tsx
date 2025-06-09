import { Metadata } from "next"
import { Chat } from "@/components/chat/chat"

export const metadata: Metadata = {
  title: "Chat",
  description: "Chat with AI to generate landing pages",
}

export default function ChatPage() {
  return (
    <div className="container flex h-screen flex-col">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Chat</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <div className="col-span-4">
            <Chat />
          </div>
          <div className="col-span-3">
            <div className="h-full rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold">Preview</h3>
                <div className="mt-4 h-[calc(100vh-12rem)] overflow-auto rounded-lg border bg-background p-4">
                  <div id="preview" className="prose prose-sm max-w-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 