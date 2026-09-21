import { useState } from "react";

// To go live: create a free account at emailjs.com, then fill these in
// and uncomment the emailjs.send() call below.
// import emailjs from "@emailjs/browser";
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      // Remove the two lines above's comment once EmailJS is configured.
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 border-t hairline">
      <div className="container-lab">
        <p className="eyebrow mb-3">Contact</p>
        <h2 className="font-head text-3xl font-semibold mb-8">
          Let's build something.
        </h2>

        <div className="flex gap-6 text-sm mb-10 font-mono">
          <a href="mailto:your-email@example.com" className="hover:text-signal">
            Email
          </a>
          <a href="https://github.com/your-username" className="hover:text-signal">
            GitHub
          </a>
          <a href="https://linkedin.com/in/your-username" className="hover:text-signal">
            LinkedIn
          </a>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md space-y-4">
          <Field
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <Field
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          <Field
            label="Subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          />
          <div>
            <label className="text-xs font-mono text-ink-light/50 dark:text-ink-dark/50">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="mt-1 w-full bg-transparent border hairline rounded-md px-3 py-2 text-sm focus:outline-none focus:border-signal"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-signal text-base-dark font-medium text-sm px-5 py-3 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "sent" && (
            <p className="text-sm text-emerald-500">
              Message sent. I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500">
              Something went wrong — try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="text-xs font-mono text-ink-light/50 dark:text-ink-dark/50">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        className="mt-1 w-full bg-transparent border hairline rounded-md px-3 py-2 text-sm focus:outline-none focus:border-signal"
      />
    </div>
  );
}
