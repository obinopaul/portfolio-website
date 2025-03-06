"use client";

import React from "react"; // Import React
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ContactFormData, contactFormSchema } from "@/lib/schemas/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react"; // Import AlertCircle


interface ContactFormProps {
    isDisabled?: boolean;
}

export function ContactForm({ isDisabled = true }: ContactFormProps) {

  const {
    register,
    handleSubmit,
    formState: { errors }, // We only need 'errors' now
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });


  const onSubmit = async () => { // Simplified further
    return;
  };

  if (isDisabled) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Contact Form Disabled</AlertTitle>
        <AlertDescription>
          The contact form is currently unavailable. Please try again later, or email me directly at{" "}
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
            className="underline hover:text-red-400"
          >
            {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
          </a>.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            {...register("name")}
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
            disabled={isDisabled}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            {...register("email")}
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            disabled={isDisabled}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Your message..."
            {...register("message")}
            aria-describedby={errors.message ? "message-error" : undefined}
            aria-invalid={!!errors.message}
            disabled={isDisabled}
            rows={5}
            className={errors.message ? "border-red-500" : ""}
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={true}  // Hardcode disabled
          className="w-full"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
