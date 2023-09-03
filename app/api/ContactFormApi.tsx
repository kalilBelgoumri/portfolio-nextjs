"use client";
import React, { useState } from "react";
import config from "../config/config";

// is this a hook personal for sending email
export const useContactForm = () => {
  const apiKey = config.BREVO_API_KEY;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const HandleContactForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (success) {
      return setSuccess("Message sent!");
    }
    if (errMsg) {
      return setErrMsg("Erreur lors de l'envoi du message.");
    }
    if (open) {
      return setOpen(false);
    }

    if (formData.name && formData.email && formData.message) {
      const SibApiV3Sdk = require("sib-api-v3-typescript");
      const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

      // Configure API key authorization
      apiInstance.setApiKey(
        SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
        `${apiKey}`
      );
      const sendSmtpEmail = {
        to: [{ email: "kalil.belgoumri@gmail.com" }], // Replace with your email address
        sender: {
          name: formData.name,
          email: formData.email,
        },
        subject: "New Contact Form Submission",
        htmlContent: `Message from ${formData.name}: ${formData.message}`,
      };

      try {
        await apiInstance.sendTransacEmail(sendSmtpEmail);
        setSuccess("Email sent successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setOpen(true);
      } catch (error) {
        console.error("Error sending email:", error);
        setErrMsg("Error sending email");
        setOpen(true);
      }
    } else {
      setErrMsg("Please enter all fields");
      setOpen(true);
    }
  };
  return {
    HandleContactForm,
    formData,
    setFormData,
    success,
    errMsg,
    open,
    setOpen,
  };
};
