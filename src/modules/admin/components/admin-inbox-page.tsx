import { Card } from "@/components/ui";
import { getContactMessages, markMessageRead } from "../actions/inbox-actions";

export async function AdminInboxPage() {
  const messages = await getContactMessages();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Inbox</h1>
      {messages.length === 0 ? (
        <p className="text-zinc-600 dark:text-zinc-400">
          No hay mensajes. Configurá MONGODB_URI y enviá un mensaje desde
          /contact.
        </p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <Card key={String(msg._id)} className={msg.read ? "opacity-60" : ""}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium">{msg.name}</p>
                  <p className="text-sm text-zinc-500">{msg.email}</p>
                  <p className="mt-2 text-sm">{msg.message}</p>
                </div>
                {!msg.read && (
                  <form
                    action={async () => {
                      "use server";
                      await markMessageRead(String(msg._id));
                    }}
                  >
                    <button
                      type="submit"
                      className="text-sm font-medium text-zinc-900 underline dark:text-zinc-100"
                    >
                      Marcar leído
                    </button>
                  </form>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
