import React from "react";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-slate-600 mb-4">
        Have a question, suggestion, or want to report an issue? We’d love to
        hear from you.
      </p>
      <ul className="space-y-3">
        <li>
          📧 <strong>Email:</strong>{" "}
          <a href="mailto:support@sandeshsetu.com" className="text-blue-600">
            aakash2428cse2420@kiet.edu
          </a>
        </li>
        <li>
          📞 <strong>Phone:</strong> +91-7505278027
        </li>
        <li>
          📍 <strong>Address:</strong> SandeshSetu HQ, 2nd Floor, Tech Park,
          Meerut, India
        </li>
      </ul>
      <p className="text-slate-600 mt-6">
        Or fill out our <span className="text-blue-600">feedback form</span> to
        reach us directly.
      </p>
    </div>
  );
}
