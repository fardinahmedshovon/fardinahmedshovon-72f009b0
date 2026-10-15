import { useState } from "react";
import { ArrowUpRight, Check, Copy, UserRoundPlus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const EMAIL = "contact@shovon.iam.bd";

export default function ContactActions() {
  const [copied, setCopied] = useState(false);
  const [copying, setCopying] = useState(false);

  async function copyEmail() {
    setCopying(true);
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copied", { description: EMAIL, duration: 2500 });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast.error("Couldn’t copy email", { description: EMAIL, duration: 5000 });
    } finally {
      setCopying(false);
    }
  }

  return (
    <div className="pv-contact-bar mt-10 inline-flex items-center gap-1 rounded-full p-1.5">
      <Button asChild className="pv-contact-primary h-10 rounded-full px-5 sm:px-6">
        <a href={`mailto:${EMAIL}`}>
          Get in touch
          <ArrowUpRight aria-hidden="true" />
        </a>
      </Button>
      <span aria-hidden="true" className="pv-contact-divider" />
      <Button
        variant="ghost"
        className="pv-contact-action h-10 rounded-full px-3 sm:px-4"
        disabled={copying}
        onClick={copyEmail}
        aria-label="Copy email"
        title="Copy email"
      >
        {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        <span className="hidden sm:inline">{copied ? "Copied" : "Copy Email"}</span>
      </Button>
      <span aria-hidden="true" className="pv-contact-divider" />
      <Button asChild variant="ghost" className="pv-contact-action h-10 rounded-full px-3 sm:px-4">
        <a
          href="/downloads/Fardin_Ahmed_Shovon.vcf"
          download="Fardin_Ahmed_Shovon.vcf"
          aria-label="Save contact"
          title="Save contact"
        >
          <UserRoundPlus aria-hidden="true" />
          <span className="hidden sm:inline">Save Contact</span>
        </a>
      </Button>
    </div>
  );
}
