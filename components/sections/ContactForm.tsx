"use client";

import { useState, type FormEvent } from "react";
import { contactFormSchema } from "@/lib/validations";

type FieldErrors = Partial<Record<string, string[]>>;

const INITIAL_STATE = { name: "", email: "", phone: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleConsentChange(e: React.ChangeEvent<HTMLInputElement>) {
    setConsent(e.target.checked);
    if (e.target.checked) setConsentError("");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrors({});
    setServerError("");

    const parsed = contactFormSchema.safeParse(form);
    const consentValid = consent;

    if (!parsed.success || !consentValid) {
      if (!parsed.success) {
        setErrors(parsed.error.flatten().fieldErrors as FieldErrors);
      }
      if (!consentValid) {
        setConsentError("Morate potvrditi saglasnost pre slanja poruke.");
      }
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (res.ok) {
        setStatus("success");
        setForm(INITIAL_STATE);
        setConsent(false);
      } else {
        const data = await res.json().catch(() => ({}));
        setServerError(data.error ?? "Slanje poruke nije uspelo. Pokušajte ponovo.");
        setStatus("error");
      }
    } catch {
      setServerError("Greška u mreži. Proverite internet konekciju i pokušajte ponovo.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8">
        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
          <CheckIcon />
        </div>
        <h3 className="font-serif text-2xl font-bold text-primary mb-3">
          Poruka je uspešno poslata!
        </h3>
        <p className="text-gray-500 leading-relaxed max-w-md mb-8">
          Hvala vam na ukazanom poverenju. Kontaktiraćemo vas u najkraćem mogućem roku.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-primary hover:text-gold transition-colors underline underline-offset-4"
        >
          Pošaljite novu poruku
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Ime i prezime" required error={errors.name?.[0]}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Petar Petrović"
            className={inputClass(!!errors.name)}
            autoComplete="name"
          />
        </Field>
        <Field label="E-mail adresa" required error={errors.email?.[0]}>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ime@primer.com"
            className={inputClass(!!errors.email)}
            autoComplete="email"
          />
        </Field>
      </div>

      {/* Phone */}
      <Field label="Broj telefona" hint="Nije obavezno" error={errors.phone?.[0]}>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+381 6x xxx xxxx"
          className={inputClass(!!errors.phone)}
          autoComplete="tel"
        />
      </Field>

      {/* Message */}
      <Field label="Poruka" required error={errors.message?.[0]}>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          placeholder="Opišite ukratko vaš pravni slučaj ili pitanje..."
          className={`${inputClass(!!errors.message)} resize-none`}
        />
      </Field>

      {/* GDPR consent */}
      <div className={`border p-4 ${consentError ? "border-red-300 bg-red-50" : "border-cream-dark bg-cream"}`}>
        <label className="flex gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={handleConsentChange}
            className="mt-0.5 flex-shrink-0 w-4 h-4 accent-primary cursor-pointer"
          />
          <span className="text-xs text-gray-600 leading-relaxed">
            Saglasan/na sam da{" "}
            <strong className="text-primary">Advokatska kancelarija Veselinović</strong>,
            sa sedištem u Pančevu (Vojvode Živojina Mišića 6), obrađuje moje lične podatke
            (ime i prezime, e-mail adresu i broj telefona) isključivo u svrhu odgovora na
            upit koji sam uputio/la putem ovog formulara. Davanje saglasnosti je
            dobrovoljno, a mogu je opozvati u svakom trenutku slanjem zahteva na adresu{" "}
            <a
              href="mailto:advokat.veselinovic@gmail.com"
              className="text-primary underline underline-offset-2 hover:text-gold transition-colors"
            >
              advokat.veselinovic@gmail.com
            </a>
            . Obrada podataka vrši se u skladu sa{" "}
            <strong className="text-primary">
              Zakonom o zaštiti podataka o ličnosti
            </strong>{" "}
            (Sl. glasnik RS, br. 87/2018).{" "}
            <span className="text-red-500 font-semibold">*</span>
          </span>
        </label>
        {consentError && (
          <p className="mt-2 text-xs text-red-600 pl-7">{consentError}</p>
        )}
      </div>

      {/* Server error */}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3">
          {serverError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-primary hover:bg-primary-light disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 text-sm tracking-widest uppercase transition-colors duration-300 flex items-center justify-center gap-3"
      >
        {status === "loading" ? (
          <>
            <SpinnerIcon />
            Slanje u toku...
          </>
        ) : (
          "Pošaljite poruku"
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  hint,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <label className="text-sm font-semibold text-primary">
          {label}
          {required && <span className="text-gold ml-1">*</span>}
        </label>
        {hint && <span className="text-xs text-gray-400">{hint}</span>}
      </div>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full bg-cream border px-4 py-3 text-sm text-primary placeholder-gray-400",
    "focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors duration-200",
    hasError ? "border-red-400" : "border-cream-dark hover:border-gray-300",
  ].join(" ");
}

function CheckIcon() {
  return (
    <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}
