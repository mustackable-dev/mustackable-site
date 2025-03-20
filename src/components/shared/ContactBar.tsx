import GitHub from "../../assets/images/github.svg?react";
import LinkedId from "../../assets/images/linkedin.svg?react";
import FormMessage from "../../assets/images/form_message.svg?react";
import Button from "./Button";

interface ContactBarProps {
  vertical?: boolean;
}

export default function ContactBar({ vertical = false }: ContactBarProps) {
  return (
    <div className={`flex ${vertical ? "flex-col" : "flex-row"} gap-4`}>
      <Button>
        <FormMessage className="stroke-primary-color size-6" />
      </Button>
      <Button>
        <LinkedId className="fill-primary-color size-6" />
      </Button>
      <Button>
        <GitHub className="fill-primary-color size-6" />
      </Button>
    </div>
  );
}
