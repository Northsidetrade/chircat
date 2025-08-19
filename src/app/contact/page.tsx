export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-700 mb-6">Tell me about your project. I’ll reply within 24 hours.</p>

      <form
        action="https://formspree.io/f/YOUR_FORM_ID_OR_URL"
        method="POST"
        className="grid gap-4"
      >
        <input name="name" placeholder="Your name" required className="border rounded-md p-3" />
        <input type="email" name="email" placeholder="Email" required className="border rounded-md p-3" />
        <input name="subject" placeholder="Subject" className="border rounded-md p-3" />
        <textarea name="message" placeholder="Project details…" rows={6} required className="border rounded-md p-3" />
        <button className="bg-black text-white rounded-md py-3 hover:bg-gray-800" type="submit">
          Send
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-3">
        Prefer email? <a className="underline" href="mailto:you@example.com">you@example.com</a>
      </p>
    </section>
  );
}
