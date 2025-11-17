import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", message: "" });
  const [status, setStatus] = useState(null);

  const backend = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch(`${backend}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Something went wrong");
      setStatus("Thank you! We will reach out shortly.");
      setForm({ name: "", phone: "", date: "", message: "" });
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  };

  return (
    <section id="contact" className="bg-amber-900 py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-50">Book a Mehndi Artist</h2>
          <p className="text-amber-100/80 mt-3">
            Share your details and preferred date. We’ll confirm availability and pricing.
          </p>
          <ul className="mt-6 space-y-2 text-amber-100/80 text-sm">
            <li>• Bridal and party packages</li>
            <li>• Natural, skin-safe henna</li>
            <li>• On-location service available</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="bg-amber-50 rounded-2xl p-6 border border-amber-200/70 shadow space-y-4">
          <div>
            <label className="block text-sm font-semibold text-amber-900 mb-1">Full Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border-amber-300 focus:ring-rose-600 focus:border-rose-600"
              placeholder="e.g., Aisha Sharma"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-1">Phone</label>
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border-amber-300 focus:ring-rose-600 focus:border-rose-600"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-amber-900 mb-1">Event Date</label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full rounded-lg border-amber-300 focus:ring-rose-600 focus:border-rose-600"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-amber-900 mb-1">Message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border-amber-300 focus:ring-rose-600 focus:border-rose-600"
              placeholder="Tell us about the venue, number of guests, and preferred style"
            />
          </div>
          <button type="submit" className="w-full py-3 rounded-full bg-gradient-to-r from-rose-700 to-amber-700 text-amber-50 font-semibold shadow hover:opacity-90 transition">
            Send Enquiry
          </button>
          {status && <p className="text-center text-sm text-amber-900">{status}</p>}
        </form>
      </div>
    </section>
  );
}
