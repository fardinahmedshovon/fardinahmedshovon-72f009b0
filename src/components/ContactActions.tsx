import { useState } from "react";
import { Check, Copy, UserRoundPlus } from "lucide-react";
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
    } catch {
      toast.error("Couldn’t copy email", { description: EMAIL, duration: 5000 });
    } finally {
      setCopying(false);
    }
  }

  return (
    <div className="pv-contact-actions mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
      <Button variant="ghost" className="pv-contact-action h-11 min-w-32" disabled={copying} onClick={copyEmail} onBlur={() => setCopied(false)}>
        {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        {copied ? "Copied" : "Copy Email"}
      </Button>
      <Button asChild variant="ghost" className="pv-contact-action h-11 min-w-32">
        <a href="/downloads/Fardin_Ahmed_Shovon.vcf" download="Fardin_Ahmed_Shovon.vcf">
          <UserRoundPlus aria-hidden="true" />
          Save Contact
        </a>
      </Button>
    </div>
  );
}