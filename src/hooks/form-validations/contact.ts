import { useForm } from "@mantine/form";
import { useTranslation } from "react-i18next";

export const useContactFV = () => {
    const { t } = useTranslation("home");
    const emailRegex =
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    const form = useForm({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },

        validate: {
            name: (value) =>
                !value.length
                    ? ` ${t("contact.name")} ${t("contact.errors.required")}`
                    : value.length < 3
                        ? t("contact.errors.minLength")
                        : null,
            email: (value) =>
                !value.length
                    ? ` ${t("contact.email")} ${t("contact.errors.required")}`
                    : value.length < 3
                        ? t("contact.errors.minLength")
                        : !emailRegex.test(value)
                            ? t("contact.errors.email")
                            : null,
            message: (value) =>
                !value.length
                    ? ` ${t("contact.message")} ${t("contact.errors.required")}`
                    : value.length < 3
                        ? t("contact.errors.minLength")
                        : null,
        },
    });

    return form;
}