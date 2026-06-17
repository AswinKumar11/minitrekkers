"use client";
import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID"; // 🔁 Replace with your Formspree endpoint

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    kid: "",
    area: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // 1️⃣ Send to Formspree (email to you)
    try {
      await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "Parent name": form.name,
          Phone: form.phone,
          Child: form.kid,
          Area: form.area,
          Message: form.message,
        }),
      });
    } catch (_) {
      // Don't block WhatsApp even if Formspree fails
    }

    // 2️⃣ Open WhatsApp with pre-filled message
    const lines = [
      "Hi MiniTrekkers!",
      "",
      `*Parent:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Child:* ${form.kid}`,
      form.area ? `*Area:* ${form.area}` : "",
      form.message ? `*Message:* ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/916369561845?text=${encodeURIComponent(lines)}`,
      "_blank",
    );

    setStatus("done");
  };

  return (
    <section id="contact" className="bg-white py-24 px-[5%]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <div>
          <p className="text-xs font-semibold tracking-[2.5px] uppercase text-ochre mb-3">
            Get in touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-black leading-tight mb-4">
            Ready for your child&apos;s first trek?
          </h2>
          <p className="text-black leading-relaxed mb-8">
            Fill in the form and we&apos;ll reach out with upcoming trek
            details, age groups, and how to join the community.
          </p>

          <div className="space-y-5">
            {/* Location */}
            <a
              href="https://www.google.com/maps/place/11%C2%B004'28.9%22N+77%C2%B000'05.2%22E/@11.0746954,76.9988639,17z/data=!3m1!4b1!4m4!3m3!8m2!3d11.0746954!4d77.0014388!18m1!1e1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <div className="w-11 h-11 rounded-full bg-green-light flex items-center justify-center shrink-0 text-lg">
                &#x1F4CD;
              </div>
              <div>
                <div className="font-semibold text-sm text-black">
                  Location
                </div>
                <div className="text-sm text-black group-hover:underline">
                  Coimbatore, Tamil Nadu
                </div>
              </div>
            </a>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-green-light flex items-center justify-center shrink-0 text-lg">
                &#x1F4DE;
              </div>
              <div>
                <div className="font-semibold text-sm text-black">
                  Phone
                </div>
                <a
                  href="tel:+916369561845"
                  className="text-sm text-green-mid hover:underline"
                >
                  +91 63695 61845
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-4">
              <a
                href="https://www.instagram.com/MiniTrekkers.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-green-light flex items-center justify-center hover:bg-ochre-light transition-colors"
                aria-label="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1b4332"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="#1b4332" />
                </svg>
              </a>
              <div>
                <div className="font-semibold text-sm text-black">
                  Instagram
                </div>
                <a
                  href="https://www.instagram.com/MiniTrekkers.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-mid hover:underline"
                >
                  @MiniTrekkers.in
                </a>
              </div>
            </div>
          </div>

          {/* Circular Instagram button */}
        </div>

        {/* Form */}
        <div>
          {status === "done" ? (
            <div className="bg-green-light rounded-2xl p-8 text-center">
              <div className="text-4xl mb-3">&#x1F389;</div>
              <div className="font-semibold text-black text-lg mb-1">
                Opening WhatsApp...
              </div>
              <div className="text-sm text-black">
                Your message is pre-filled. Just tap Send!
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-black tracking-wide">
                    Parent&apos;s name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm bg-cream outline-none focus:border-green-mid transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-black tracking-wide">
                    Phone number
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm bg-cream outline-none focus:border-green-mid transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-black tracking-wide">
                  Child&apos;s name &amp; age
                </label>
                <input
                  name="kid"
                  value={form.kid}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Arjun, 9 years old"
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm bg-cream outline-none focus:border-green-mid transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-black tracking-wide">
                  Your area
                </label>
                <input
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                  placeholder="e.g. RS Puram, Saravanampatti..."
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm bg-cream outline-none focus:border-green-mid transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-black tracking-wide">
                  Anything you&apos;d like to know?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Questions about difficulty, gear, safety..."
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm bg-cream outline-none focus:border-green-mid transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-ochre text-black font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send via WhatsApp"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
