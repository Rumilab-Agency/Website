import { Link } from 'react-router-dom';
import { CTAButtonLarge } from '../../layouts/AppLayout.style';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';
import { CTAGroup } from '../WhatsAppButton/WhatsAppButton.style';
import { CTA_LABEL } from '../../data/offer';
import { Closing, ClosingTitle, ClosingText } from './Article.style';

type Props = { title?: string; text?: string };

// The same next step at the end of every reading page
const PageCta = ({
  title = 'Ready when you are',
  text = 'Tell us about your business. It takes about a minute, and we reply within 1 day.',
}: Props) => (
  <Closing>
    <ClosingTitle>{title}</ClosingTitle>
    <ClosingText>{text}</ClosingText>
    <CTAGroup>
      <CTAButtonLarge as={Link} to="/contact">{CTA_LABEL}</CTAButtonLarge>
      <WhatsAppButton size="large" />
    </CTAGroup>
  </Closing>
);

export default PageCta;
