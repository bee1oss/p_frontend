import React from 'react';

const ReadMessage = () => {
  // For now, we use dummy data. Later you can fetch from API or database.
  const message = {
    name: "John Doe",
    email: "john@example.com",
    subject: "Interested in your portfolio",
    content: "Hi! I really liked your portfolio. Let's connect and discuss a project opportunity."
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">📨 Message Details</h2>

      <div className="mb-3">
        <strong>Name:</strong> {message.name}
      </div>
      <div className="mb-3">
        <strong>Email:</strong> {message.email}
      </div>
      <div className="mb-3">
        <strong>Subject:</strong> {message.subject}
      </div>
      <div className="mb-3">
        <strong>Message:</strong>
        <p className="mt-1 text-gray-700">{message.content}</p>
      </div>
    </div>
  );
};

export default ReadMessage;
