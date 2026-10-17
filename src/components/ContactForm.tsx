import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const EMAIL = "contact@shovon.iam.bd";
// Public Web3Forms access key (safe to ship). Empty = fallback to a prefilled email draft.
const WEB3FORMS_KEY = "";

const schema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "A little more detail, please").max(2000),
});

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("botcheck")) return;
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Errors = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as keyof Errors] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const { name, email, message } = parsed.data;

    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(`Hello from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      onOpenChange(false);
      return;
    }

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New message from ${name}`,
          from_name: "shovon.iam.bd",
          name,
          email,
          message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error();
      toast.success("Message sent", { description: "I’ll get back to you soon." });
      form.reset();
      onOpenChange(false);
    } catch {
      toast.error("Couldn’t send message", { description: `Email me at ${EMAIL}` });
    } finally {
      setSending(false);
    }
  }

  const field = "pv-form-field w-full rounded-xl px-4 py-3 text-[15px] outline-none";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="pv-form-dialog max-w-md rounded-2xl text-left">
        <DialogHeader>
          <DialogTitle
            className="text-2xl"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Let’s talk.
          </DialogTitle>
          <DialogDescription className="pv-form-muted">
            Share a bit about your idea — I usually reply within a day or two.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} noValidate className="mt-2 space-y-4">
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />
          {(
            [
              ["name", "Name", "text", "name"],
              ["email", "Email", "email", "email"],
            ] as const
          ).map(([n, label, type, ac]) => (
            <div key={n}>
              <label htmlFor={`cf-${n}`} className="pv-form-label mb-1.5 block text-[11px] uppercase tracking-[0.22em]">
                {label}
              </label>
              <input id={`cf-${n}`} name={n} type={type} autoComplete={ac} maxLength={n === "name" ? 100 : 255} className={field} aria-invalid={!!errors[n]} />
              {errors[n] && <p className="pv-form-error mt-1 text-xs">{errors[n]}</p>}
            </div>
          ))}
          <div>
            <label htmlFor="cf-message" className="pv-form-label mb-1.5 block text-[11px] uppercase tracking-[0.22em]">
              Message
            </label>
            <textarea id="cf-message" name="message" rows={5} maxLength={2000} className={`${field} resize-none`} aria-invalid={!!errors.message} />
            {errors.message && <p className="pv-form-error mt-1 text-xs">{errors.message}</p>}
          </div>
          <Button type="submit" disabled={sending} className="pv-contact-primary h-11 w-full rounded-full">
            {sending ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Send aria-hidden="true" />}
            {sending ? "Sending…" : "Send message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
