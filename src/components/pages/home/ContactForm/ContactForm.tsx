import { useSceneDataStore } from "../../../../stores/SceneDataStore";
import { useShallow } from "zustand/shallow";
import { useState } from "react";
import { useTranslations } from "next-intl";
// import { useContactForm } from "../../../../hooks/useContactForm";

export default function ContactForm({ characterLimit = 1000, headerTitle = "" }) {
  const t = useTranslations("home-page.contact-form");
  const [characterCount, setCharacterCount] = useState(0);
  const [messageSent, setMessageSent] = useState(false);
  const { stackWithHaloWidth, delay } = useSceneDataStore(
    useShallow((s) => ({
      stackWithHaloWidth: s.sceneData?.stackWithHaloWidth ?? 0,
      delay: (s.sceneData?.animationTimings[4] ?? 0) + (s.sceneData?.baseDelay ?? 0) + 1000,
    })),
  );
  // const { sendContactForm } = useContactForm();

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
        <div
          className="flex flex-col items-center gap-6 max-sm:gap-3"
          style={{
            width: stackWithHaloWidth * 3,
          }}
        >
          <h2 className="text-theme-text-heading w-full text-center font-black">
            {headerTitle.toUpperCase()}
          </h2>
          <div className="flex w-full flex-col items-center gap-4 max-sm:gap-2">
            <div className="flex w-full gap-4 max-sm:gap-2">
              <input
                type="text"
                name="nameInput"
                tabIndex={0}
                className="input w-full"
                placeholder={t("name")}
              />
              <input
                type="email"
                className="input w-full"
                name="emailInput"
                tabIndex={1}
                placeholder={t("email")}
              />
            </div>
            <textarea
              className="input w-full"
              maxLength={1000}
              placeholder={t("message")}
              tabIndex={2}
              style={{
                height: stackWithHaloWidth * 1.5,
                resize: "none",
              }}
              onChange={(x) => {
                setCharacterCount(x.target.value.length);
              }}
            />
            <div className="flex w-full items-center justify-between gap-4 max-sm:gap-2">
              <p className="text-left">
                <i>{`${characterCount.toString()}/${characterLimit.toString()}`}</i>
              </p>
              <button
                onClick={() => {
                  // sendContactForm();
                  setMessageSent(true);
                }}
              >
                <div className="border-theme-secondary hover:border-theme-primary hover:text-theme-primary cursor-pointer rounded-sm border-1 px-4 py-2 shadow-sm transition-colors duration-300 max-sm:p-1">
                  {t("send")}
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
