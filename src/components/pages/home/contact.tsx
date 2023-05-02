import React from 'react';
import { useTranslation } from 'next-i18next';
import emailjs from '@emailjs/browser';

// hooks
import { useForm } from '@mantine/form';

// icons
import { FaUser, FaCheckCircle } from 'react-icons/fa';
import { FiMail, FiMessageSquare } from 'react-icons/fi';

// components
import SectionTitle from '@/components/data_display/sectionTitle';
import { TextInput, Button, Box, Textarea } from '@mantine/core';
import { notifications } from '@mantine/notifications';

const Contact = () => {
    const { t } = useTranslation("home");
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    const [loading, setLoading] = React.useState(false);

    const formRef = React.useRef<HTMLFormElement>(null);
    const form = useForm({
        initialValues: {
            name: "",
            email: '',
            message: ""
        },

        validate: {
            name: (value) => (
                !value.length
                    ? ` ${t("contact.name")} ${t("contact.errors.required")}`
                    : value.length < 3
                        ? t("contact.errors.minLength")
                        : null
            ),
            email: (value) => (
                !value.length
                    ? ` ${t("contact.email")} ${t("contact.errors.required")}`
                    : value.length < 3
                        ? t("contact.errors.minLength")
                        : !emailRegex.test(value)
                            ? t("contact.errors.email")
                            : null
            ),
            message: (value) => (
                !value.length
                    ? ` ${t("contact.message")} ${t("contact.errors.required")}`
                    : value.length < 3
                        ? t("contact.errors.minLength")
                        : null
            )
        },
    });

    const handleSubmit = form.onSubmit(() => {
        setLoading(true);

        emailjs.sendForm('service_9jaj78h', 'template_475lwnd', formRef.current as HTMLFormElement, 'EuTWTWO2NCl2lVsaX')
            .then(() => {
                notifications.show({
                    message: t("contact.sendSuccess"),
                    color: "green",
                    icon: <FaCheckCircle />,
                })
            })
            .catch(() => {
                notifications.show({
                    message: t("contact.sendFailure"),
                    color: "red"
                })
            })
            .finally(() => {
                setLoading(false)
            })
    })

    return (
        <div>
            <SectionTitle title={t("contact.title")} />
            <Box
                mx="auto"
                className='w-full dark:bg-dark-700 bg-light-400 px-8 py-8 rounded-md'
            >
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-y-5'
                    ref={formRef}
                >

                    {/* name */}
                    <TextInput
                        name="name"
                        withAsterisk
                        placeholder={t("contact.name") as string}
                        {...form.getInputProps('name')}
                        icon={<FaUser className='text-xl' />}
                    />

                    {/* email */}
                    <TextInput
                        withAsterisk
                        placeholder={t("contact.email") as string}
                        {...form.getInputProps('email')}
                        icon={<FiMail className='text-xl' />}
                        type='email'
                        name="email"
                    />

                    {/* message */}
                    <Textarea
                        withAsterisk
                        placeholder={t("contact.message") as string}
                        {...form.getInputProps('message')}
                        icon={<FiMessageSquare className='text-xl' />}
                        minRows={4}
                        name="message"
                    />

                    {/* submit button */}
                    <div className='flex justify-end mt-3'>
                        <Button
                            type="submit"
                            loading={loading}
                            disabled={loading}
                            size='md'
                            sx={{
                                ".mantine-Button-icon": {
                                    insetInlineEnd: "10px",
                                    position: "absolute"
                                }
                            }}
                            className='sm:w-[300px] w-full'
                        >
                            {t("contact.submit")}
                        </Button>
                    </div>
                </form>
            </Box>
        </div>
    )
}

export default Contact;