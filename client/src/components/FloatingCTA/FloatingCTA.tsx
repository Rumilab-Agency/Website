import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FloatingCTAButton } from './FloatingCTA.style';
import { WHATSAPP_URL } from '../../data/contact';

// Pages that already offer WhatsApp beside their own actions, where a bubble
// would only cover the form's buttons on a phone.
const HIDDEN_ON = ['/contact'];

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const update = () => {
      const { scrollY, innerHeight } = window;
      const nearBottom = scrollY + innerHeight > document.documentElement.scrollHeight - 150;
      setVisible(scrollY > innerHeight * 0.6 && !nearBottom);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [pathname]);

  if (HIDDEN_ON.includes(pathname)) return null;

  return (
    <FloatingCTAButton
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      $visible={visible}
      tabIndex={visible ? 0 : -1}
    >
      <FaWhatsapp aria-hidden="true" />
    </FloatingCTAButton>
  );
};

export default FloatingCTA;
