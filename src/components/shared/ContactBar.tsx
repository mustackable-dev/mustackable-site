import GitHub from "../../assets/images/github.svg?react";
import LinkedId from "../../assets/images/linkedin.svg?react";
import FormMessage from "../../assets/images/form_message.svg?react";
import Button from "./Button";

interface ContactBarProps {
  vertical?: boolean;
}

export default function ContactBar({ vertical = false }: ContactBarProps) {
  return (
    <div
      className={`flex ${vertical ? "flex-col" : "flex-row"} gap-4 max-sm:gap-2`}
    >
      <Button>
        <FormMessage className="size-6 max-sm:size-4" />
      </Button>
      <Button>
        <LinkedId className="size-6 max-sm:size-4" />
      </Button>
      <Button>
        <GitHub className="size-6 max-sm:size-4" />
      </Button>
    </div>
  );
}
