import { useSceneDataStore } from "@/hooks/useSceneDataStore";
import { useShallow } from "zustand/shallow";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useAppForm } from "@/hooks/useAppForm";
import { processContactForm } from "@/services/contactService";
import { contactFormDataSchema } from "@/types/ContactFormData";

export default function ContactForm({ headerTitle = "" }) {
  const t = useTranslations("form");
  const [characterCount, setCharacterCount] = useState(0);
  const [messageSent, setMessageSent] = useState(false);
  const { stackWithHaloWidth, delay } = useSceneDataStore(
    useShallow((s) => ({
      stackWithHaloWidth: s.sceneData?.stackWithHaloWidth ?? 0,
      delay: (s.sceneData?.animationTimings[4] ?? 0) + (s.sceneData?.baseDelay ?? 0) + 1000,
    })),
  );

  const Form = useAppForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    validators: {
      onChange: contactFormDataSchema,
    },
    onSubmit: ({ value }) => {
      setMessageSent(true);
      Promise.resolve(processContactForm(value))
        .then((x) => {
          console.log(x ? "Valid email address" : "Invalid email address");
        })
        .catch(() => {
          console.log("dris");
        });
    },
  });

  return (
    <div
      className="animate-pop-in py-16 max-sm:py-8"
      style={{ animationDelay: `${delay.toString()}ms` }}
    >
      {messageSent ? (
        <div
          className="text-theme-text-heading flex items-center text-center font-extrabold"
          style={{ width: stackWithHaloWidth * 3, height: stackWithHaloWidth }}
        >
          <h2>{t("message-received")}</h2>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void Form.handleSubmit();
          }}
        >
          <div
            className="flex flex-col items-center gap-3 max-sm:gap-2"
            style={{
              width: stackWithHaloWidth * 3,
            }}
          >
            <h2 className="text-theme-text-heading w-full text-center font-black">
              {headerTitle.toUpperCase()}
            </h2>
            <div className="flex w-full gap-4 max-sm:gap-2">
              <Form.AppField name="name">
                {(field) => (
                  <field.TextField
                    placeholder={t("name")}
                    errorMessage={t("name-error")}
                    tabIndex={0}
                  />
                )}
              </Form.AppField>
              <Form.AppField name="email">
                {(field) => (
                  <field.TextField
                    placeholder={t("email")}
                    errorMessage={t("email-error")}
                    tabIndex={1}
                  />
                )}
              </Form.AppField>
            </div>
            <div className="w-full" style={{ height: stackWithHaloWidth * 1.5 }}>
              <Form.AppField name="message">
                {(field) => (
                  <field.MultilineTextField
                    placeholder={t("message")}
                    tabIndex={2}
                    onChange={(e) => {
                      setCharacterCount(e.target.value.length);
                    }}
                    maxLength={contactFormDataSchema.shape.message.maxLength ?? 0}
                    errorMessage={t("message-error")}
                  />
                )}
              </Form.AppField>
            </div>
            <div className="flex h-fit w-full items-center justify-between gap-4 max-sm:gap-2">
              <p className="text-left">
                <i>{`${characterCount.toString()}/${(contactFormDataSchema.shape.message.maxLength ?? 0).toString()}`}</i>
              </p>
              <Form.AppForm>
                <Form.FormSubmitButton label={t("send")} />
              </Form.AppForm>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
