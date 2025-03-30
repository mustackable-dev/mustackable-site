import { useRef } from "react";

export default function ContactForm() {
  const ref = useRef(null);
  return <div className="visible" ref={ref}></div>;
}
