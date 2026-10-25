import styled from 'styled-components';
import AppLayout from '../layouts/AppLayout';
import { GradientText } from '../layouts/AppLayout.style';
import PageMeta from '../components/PageMeta';
import PageCta from '../components/Article/PageCta';
import { PAGES } from '../seo';
import { canHover } from '../styles/animations';
import {
  ArticlePage, ArticleInner, ArticleIntro, Eyebrow, ArticleTitle, Lede, P, InlineLink,
} from '../components/Article/Article.style';

type Faq = { q: string; a: string; link?: { to: string; label: string } };

// Plain text answers, so the same words feed the page and the FAQ structured data
const FAQS: Faq[] = [
  {
    q: 'How long does it take to build my website?',
    a: 'Most sites go live within 4 weeks. We start with a quick chat about your business, then design, build and test the site, setting up WhatsApp, bookings and Google along the way.',
  },
  {
    q: 'How much does a website cost?',
    a: 'A custom website with every page your business needs is S$4,000 one-time, or you can choose our Monthly plan. For our first 10 clients, the build is free and the first 3 months cost nothing; after that it is S$25/month for hosting.',
    link: { to: '/pricing', label: 'See all our prices' },
  },
  {
    q: "What's the catch with the free website offer?",
    a: "There isn't a hidden one. We're building free websites for our first 10 clients to prove our work brings in customers. In return we ask for an honest review and permission to show your site as a case study. After 3 free months, hosting is S$25/month, or you can host it yourself.",
  },
  {
    q: 'Can I cancel anytime?',
    a: "Yes. The Monthly plan has no minimum term. Tell us you'd like to cancel and we won't charge you for the rest of the month.",
  },
  {
    q: 'What is hosting, and do I need it?',
    a: 'Hosting is what keeps your website online 24/7. We run it on fast, secure servers, keep backups and renew the security padlock in the browser for you. Every website needs hosting somewhere; if you host it yourself, you set this up and pay a hosting company directly.',
  },
  {
    q: 'What is the 5% guarantee?',
    a: "On the Monthly plan, at least 5 in every 100 visitors click one of your key buttons, like Book Now, Enquire or WhatsApp, from your first month. In any month they don't, you don't pay for that month.",
    link: { to: '/guarantee', label: 'How we measure it' },
  },
  {
    q: 'How many pages will my website have?',
    a: "As many as your business needs, usually 5 to 10. Before we start, we agree your main pages (Home, Services, About, FAQ and Contact) plus pages that answer the questions your customers ask most, and list them in your quote. Pages added later are S$100 each.",
  },
  {
    q: 'Can my website take WhatsApp messages and bookings?',
    a: 'Yes. WhatsApp chat, online bookings and enquiry forms are set up as part of the build, so visitors can reach you in one tap from their phone.',
  },
  {
    q: 'Will my website show up on Google?',
    a: "We build every site to be fast and search-ready, set up your Google Business Profile and connect Google Search Console. No one can honestly guarantee a ranking, but these basics give you the best start.",
  },
  {
    q: 'What do you need from me?',
    a: 'Your logo, a few photos, and the details of what you offer, such as services, prices and opening hours. If you need help with the writing, we can draft it with you.',
  },
  {
    q: 'Who will I be working with?',
    a: 'You work directly with the people who design and build your site, with no account managers in between. We reply to every message within 1 day.',
  },
  {
    q: 'Can I make changes after launch?',
    a: 'Yes. Unlimited edits are included on the Monthly plan. On the One-Time plan, edits are free for 3 months, then optional at S$50/month.',
  },
];

const FaqList = styled.div`
  padding-bottom: 1rem;
  border-top: 1px solid rgb(255 255 255 / 8%);
`;

// Native <details>: opens with a tap, works without JavaScript, and the answers
// are still in the page for search engines
const Item = styled.details`
  border-bottom: 1px solid rgb(255 255 255 / 8%);

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.375rem 0;
    cursor: pointer;
    list-style: none;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.4;
    color: #fff;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::after {
    content: '+';
    flex: none;
    font-size: 1.5rem;
    font-weight: 400;
    color: #a084ff;
    transition: transform 200ms ease;
  }

  &[open] summary::after {
    transform: rotate(45deg);
  }

  summary:focus-visible {
    outline: 2px solid #f780ff;
    outline-offset: 4px;
    border-radius: 4px;
  }

  ${canHover} {
    summary:hover {
      color: #e4dcff;
    }
  }

  > div {
    padding-bottom: 1.5rem;
  }

  > div > p:first-child {
    margin-top: 0;
  }
`;

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const Faq = () => (
  <AppLayout>
    <PageMeta page={PAGES.faq} />
    {/* In the page itself (not the head manager), so it's in the pre-rendered HTML */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <ArticlePage>
      <ArticleInner>
        <ArticleIntro>
          <Eyebrow>FAQ</Eyebrow>
          <ArticleTitle>Questions <GradientText>we get asked</GradientText></ArticleTitle>
          <Lede>Straight answers about getting a website with RumiLab. Can&apos;t find yours? WhatsApp us.</Lede>
        </ArticleIntro>

        <FaqList>
          {FAQS.map(({ q, a, link }) => (
            <Item key={q}>
              <summary>{q}</summary>
              <div>
                <P>{a}</P>
                {link && <P><InlineLink to={link.to}>{link.label}</InlineLink></P>}
              </div>
            </Item>
          ))}
        </FaqList>

        <PageCta />
      </ArticleInner>
    </ArticlePage>
  </AppLayout>
);

export default Faq;
