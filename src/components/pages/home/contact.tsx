import React from "react";
import { useTranslation } from "next-i18next";
import emailjs from "@emailjs/browser";

// hooks
import { useContactFV } from "@/hooks/form-validations/contact";

// icons
import { FaUser, FaCheckCircle } from "react-icons/fa";
import { FiMail, FiMessageSquare } from "react-icons/fi";

// components
import SectionTitle from "@/components/data_display/sectionTitle";
import { TextInput, Button, Box, Textarea } from "@mantine/core";
import { notifications } from "@mantine/notifications";

const Contact = () => {
  const { t } = useTranslation("home");
  const [loading, setLoading] = React.useState(false);
  const form = useContactFV();
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = form.onSubmit(() => {
    setLoading(true);

    emailjs
      .sendForm(
        "service_9jaj78h",
        "template_475lwnd",
        formRef.current as HTMLFormElement,
        "EuTWTWO2NCl2lVsaX"
      )
      .then(() => {
        notifications.show({
          message: t("contact.sendSuccess"),
          color: "green",
          icon: <FaCheckCircle />,
        });
      })
      .catch(() => {
        notifications.show({
          message: t("contact.sendFailure"),
          color: "red",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return (
    <div>
      <SectionTitle title={t("contact.title")} />
      <Box mx="auto" className="w-full dark:bg-dark-700 bg-light-400 px-8 py-8 rounded-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-5" ref={formRef}>
          {/* name */}
          <TextInput
            name="name"
            withAsterisk
            placeholder={t("contact.name") as string}
            {...form.getInputProps("name")}
            leftSection={<FaUser className="text-xl" />}
          />

          {/* email */}
          <TextInput
            withAsterisk
            placeholder={t("contact.email") as string}
            {...form.getInputProps("email")}
            leftSection={<FiMail className="text-xl" />}
            type="email"
            name="email"
          />

          {/* message */}
          <Textarea
            withAsterisk
            placeholder={t("contact.message") as string}
            {...form.getInputProps("message")}
            leftSection={<FiMessageSquare className="text-xl" />}
            name="message"
            styles={{
              input: { minHeight: 110 },
              section: { alignItems: "start", paddingTop: 5 },
            }}
          />

          {/* submit button */}
          <div className="flex justify-end mt-3">
            <Button
              type="submit"
              loading={loading}
              disabled={loading}
              size="md"
              className="sm:w-[300px] w-full"
            >
              {t("contact.submit")}
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
};

export default Contact;
