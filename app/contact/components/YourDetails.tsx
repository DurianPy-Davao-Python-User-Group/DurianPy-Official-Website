import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function YourDetails() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isFormValid =
      emailRegex.test(email.trim()) &&
      subject.trim().length > 0 &&
      message.trim().length > 0;

    setIsValid(isFormValid);
  }, [email, subject, message]);

  return (
    <div className="flex flex-col justify-between gap-auto max-w-[563px] p-10 w-full h-[calc(100vh-100px)] max-h-[738px] rounded-[50px] bg-radial-custom text-white">
      <span className="text-[2.5rem] font-semibold text-white text-shadow-md">
        Your details
      </span>

      {/* Email Input */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-2 font-semibold text-web-body-font "
        >
          Email
        </label>
        <Input
          id="email"
          type="text"
          placeholder="Your Email"
          className="w-full caret-white"
          variant="contact-unfilled"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Subject Input */}
      <div className="mb-4">
        <label
          htmlFor="subject"
          className="block mb-2 font-semibold text-web-body-font "
        >
          Subject
        </label>
        <Input
          id="subject"
          type="text"
          placeholder="Message Subject"
          className="w-full caret-white"
          variant="contact-unfilled"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      {/* Message Textarea */}
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block mb-2 font-semibold text-web-body-font "
        >
          Message
        </label>
        <textarea
          id="message"
          placeholder="Your Message"
          className="w-full p-2 bg-transparent rounded text-base focus:outline-none caret-white text-web-body-font "
          rows={4}
          style={{ resize: 'none', maxHeight: '150px' }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button
        variant="footer"
        className="max-w-[148px] text-dark-green"
        disabled={!isValid}
      >
        Send
      </Button>
    </div>
  );
}
