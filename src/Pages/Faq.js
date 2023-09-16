import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MotionHoc from "./MotionHoc";
import "../css/Faq.css";

const FaQComponent = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "¿Cuándo será lanzado Number_Bot?",
      answer:
        "Number_Bot está en pleno desarrollo, por lo que esperamos que esté terminado a finales de 2024",
    },
    {
      question: "¿Puedo ayudar al desarrollo?",
      answer:
        "Si. En el menú de la izquierda en el apartado 'Contribución', mandanos un correo electrónico diciendo los conocimientos y como influiría en el desarrollo. Con eso nos pondremos en contacto con usted, para detallar la información.",
    },
    // Agrega más preguntas frecuentes aquí
  ]);

  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };

  return (
    <div className="faq-container">
      <h1>FaQ</h1>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div
            className={`faq-header ${isOpen === index ? "open" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            <h3>{faq.question}</h3>
            <div className="faq-icon">
              <span className="plus">+</span>
              <span className="minus">-</span>
            </div>
          </div>
          <AnimatePresence>
            {isOpen === index && (
              <motion.div
                className={`faq-content ${isOpen === index ? "open" : ""}`}
                initial={{}}
                animate={{}}
                exit={{}}
              >
                <p>{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

const FaQ = MotionHoc(FaQComponent);

export default FaQ;
