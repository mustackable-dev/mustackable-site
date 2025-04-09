import GitHub from "@/assets/images/github.svg";
import LinkedId from "@/assets/images/linkedin.svg";
import FormMessage from "@/assets/images/form_message.svg";
import Button from "./Button";
import { Link } from "@/i18n/navigation";
import { useSceneDataStore } from "@/hooks/useSceneDataStore";
import { useShallow } from "zustand/shallow";

interface ContactBarProps {
  vertical?: boolean;
}

export default function ContactBar({ vertical = false }: ContactBarProps) {
  const { referenceContactForm } = useSceneDataStore(
    useShallow((s) => ({ referenceContactForm: s.referenceContactForm })),
  );

  function scrollToContactForm() {
    if (referenceContactForm.current) {
      window.scrollTo({
        top: referenceContactForm.current.offsetTop,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className={`flex ${vertical ? "flex-col" : ""} gap-4 max-sm:gap-2`}>
      <Button title="Send contact form" onClick={scrollToContactForm}>
        <FormMessage className="size-6 max-sm:size-4" />
      </Button>
      <Button title="Open LinkedIn profile">
        <Link
          href="https://www.linkedin.com/company/mustackable"
          target="_blank"
          aria-label="Open Mustackable's LinkedIn profile"
        >
          <LinkedId className="size-6 max-sm:size-4" />
        </Link>
      </Button>
      <Button title="Open GitHub organization">
        <Link
          href="https://github.com/mustackable-dev"
          target="_blank"
          aria-label="Open Mustackable's GitHub profile"
        >
          <GitHub className="size-6 max-sm:size-4" />
        </Link>
      </Button>
    </div>
  );
}
