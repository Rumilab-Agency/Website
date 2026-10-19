import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_URL } from '../../data/contact';
import { WhatsAppLink } from './WhatsAppButton.style';

interface WhatsAppButtonProps {
  size?: 'regular' | 'large';
  iconOnly?: boolean;
  className?: string;
}

// Secondary CTA for visitors who'd rather message us than fill in the form.
const WhatsAppButton = ({ size = 'regular', iconOnly = false, className }: WhatsAppButtonProps) => (
  <WhatsAppLink
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    $size={size}
    $iconOnly={iconOnly}
    aria-label={iconOnly ? 'Chat with us on WhatsApp' : undefined}
    title={iconOnly ? 'Chat with us on WhatsApp' : undefined}
  >
    <FaWhatsapp aria-hidden="true" />
    {!iconOnly && <span>WhatsApp us</span>}
  </WhatsAppLink>
);

export default WhatsAppButton;
