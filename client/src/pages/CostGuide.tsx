import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AppLayout from '../layouts/AppLayout';
import PageMeta from '../components/PageMeta';
import PageCta from '../components/Article/PageCta';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';
import { CTAGroup } from '../components/WhatsAppButton/WhatsAppButton.style';
import { CTAButton, breakpoints, GradientText } from '../layouts/AppLayout.style';
import { CTA_LABEL } from '../data/offer';
import { PAGES } from '../seo';
import {
  ArticlePage, ArticleInner, ArticleIntro, Eyebrow, ArticleTitle, Lede, Updated,
  Section, H2, H3, P, List, Note, InlineLink, Highlight,
} from '../components/Article/Article.style';

// The official pricing page: one card per way to buy, so owners know the cost and
// exactly what it covers before they get in touch.

const TopActions = styled(CTAGroup)`
  justify-content: flex-start;
  margin-top: 2rem;
`;

const Cards = styled.div`
  display: grid;
  gap: 1.25rem;
  padding-bottom: 2.5rem;
`;

const PriceCard = styled.article<{ $featured?: boolean }>`
  padding: 1.75rem 1.5rem;
  border-radius: 1rem;
  border: 1px solid ${({ $featured }) => ($featured ? 'rgb(247 128 255 / 45%)' : 'rgb(255 255 255 / 10%)')};
  background: ${({ $featured }) =>
    $featured
      ? 'linear-gradient(160deg, rgb(160 132 255 / 16%), rgb(247 128 255 / 6%) 60%, transparent)'
      : 'rgb(255 255 255 / 3%)'};

  @media (min-width: ${breakpoints.md}) {
    padding: 2rem 2.25rem;
  }
`;

const CardName = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #c9b8ff;
`;

const Price = styled.p`
  margin-top: 0.75rem;
  font-size: clamp(2.25rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.03em;
  color: #fff;

  small {
    margin-left: 0.375rem;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0;
    color: #b3adc4;
  }
`;

const Tagline = styled.p`
  margin-top: 0.75rem;
  font-size: 1.0625rem;
  font-weight: 600;
  color: #fff;
`;

const Offer = styled.p`
  margin-top: 1rem;
  padding: 0.875rem 1rem;
  border-radius: 0.625rem;
  background: rgb(247 128 255 / 10%);
  font-size: 0.9375rem;
  line-height: 1.55;
  color: #f3e9ff;

  strong {
    color: #fff;
  }
`;

const Fits = styled.p`
  margin-top: 1.25rem;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #9d97ad;

  strong {
    color: #c4bfd3;
    font-weight: 600;
  }
`;

const AddOnTable = styled.dl`
  margin-top: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgb(255 255 255 / 8%);
  }

  div:last-child {
    border-bottom: none;
  }

  dt {
    color: #c4bfd3;
  }

  dd {
    flex: none;
    color: #fff;
    font-weight: 600;
  }
`;

const QA = styled.div`
  margin-top: 1.5rem;

  h3:first-child {
    margin-top: 0;
  }
`;

const ContinueLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  margin-top: 1rem;
  list-style: none;
`;

const CostGuide = () => (
  <AppLayout>
    <PageMeta page={PAGES.cost} />
    <ArticlePage>
      <ArticleInner>
        <ArticleIntro>
          <Eyebrow>Pricing</Eyebrow>
          <ArticleTitle>Plans and <GradientText>pricing</GradientText></ArticleTitle>
          <Lede>
            Custom websites for Singapore small businesses. Pay once, or pay monthly and let us keep improving your
            site. Every price is listed here, with nothing hidden.
          </Lede>
          <Updated>Updated October 2026 · Prices in Singapore dollars</Updated>
          <TopActions>
            <CTAButton as={Link} to="/contact">{CTA_LABEL}</CTAButton>
            <WhatsAppButton />
          </TopActions>
        </ArticleIntro>

        <Cards>
          <PriceCard>
            <CardName>One-Time</CardName>
            <Price>S$4,000</Price>
            <Tagline>Pay once for a custom website you keep.</Tagline>
            <List>
              <li>Custom design and development, built for phones first</li>
              <li>Every page your business needs: your main pages plus pages answering your customers&apos; top questions, usually 5 to 10, listed in your quote</li>
              <li>WhatsApp, online bookings and enquiry forms set up</li>
              <li>Google Business Profile connected</li>
              <li>Hosting and unlimited edits free for the first 3 months</li>
            </List>
            <Fits>
              <strong>Who this fits:</strong> businesses that want to pay once and handle changes themselves, or
              only now and then. After 3 months, hosting is S$25/month and unlimited edits are an optional
              S$50/month. The 5% guarantee and monthly report aren&apos;t included.
            </Fits>
          </PriceCard>

          <PriceCard $featured>
            <CardName>Monthly</CardName>
            <Price>S$198<small>/ month</small></Price>
            <Tagline>Your website, looked after and improved every month.</Tagline>
            <Offer>
              <strong>Founding offer, first 10 clients only:</strong> <Highlight>the build is free</Highlight> and the first 3 months are
              S$0. After that, just S$25/month for hosting, or host it yourself.
            </Offer>
            <List>
              <li>The same custom website as One-Time</li>
              <li>Hosting and unlimited edits included</li>
              <li>A monthly progress report: visits, button clicks and how close you are to 5%</li>
              <li>
                The <InlineLink to="/guarantee">5% guarantee</InlineLink>: any month under 5%, you don&apos;t pay
              </li>
              <li>No minimum term. Cancel anytime</li>
            </List>
            <Fits>
              <strong>Who this fits:</strong> businesses that want more enquiries and would rather we keep the site
              working than manage it themselves.
            </Fits>
          </PriceCard>

          <PriceCard>
            <CardName>Add-ons</CardName>
            <Tagline>Extras, priced upfront.</Tagline>
            <AddOnTable>
              <div><dt>Page outside the agreed scope</dt><dd>S$100 each</dd></div>
              <div><dt>Articles or blog section</dt><dd>S$300</dd></div>
              <div><dt>Hosting (One-Time plan, after 3 months)</dt><dd>S$25/month</dd></div>
              <div><dt>Unlimited edits (One-Time plan, after 3 months)</dt><dd>S$50/month</dd></div>
            </AddOnTable>
            <Fits>Anything not listed here is quoted before we start, never added to your bill afterwards.</Fits>
          </PriceCard>
        </Cards>

        <Section>
          <H2>Quick answers</H2>
          <QA>
            <H3>What does the S$4,000 One-Time plan include?</H3>
            <P>A custom website with every page your business needs (usually 5 to 10, agreed in your quote), WhatsApp, bookings and your Google Business Profile set up, plus 3 months of free hosting and edits.</P>
            <H3>What does the Monthly plan include?</H3>
            <P>The same website, plus hosting, unlimited edits, a monthly progress report and the 5% guarantee. You can cancel anytime.</P>
            <H3>What happens after the 3 free months on the founding offer?</H3>
            <P>You pay S$25/month for hosting, or host it yourself. Nothing else is charged unless you ask for extra work.</P>
            <H3>Why don&apos;t you charge by the number of pages?</H3>
            <P>
              Because pages aren&apos;t the goal; customers are. Google and AI assistants like ChatGPT recommend
              businesses whose websites clearly answer the questions people ask. So we plan your pages around those
              questions and agree the list in your quote, instead of squeezing everything into a fixed number.
            </P>
            <H3>Are there any hidden costs?</H3>
            <P>No. Add-ons are listed above, and anything else is quoted and agreed before we start.</P>
          </QA>
        </Section>

        <Section>
          <H2>Continue</H2>
          <ContinueLinks>
            <li><InlineLink to="/guarantee">How the 5% guarantee works</InlineLink></li>
            <li><InlineLink to="/faq">FAQ</InlineLink></li>
            <li><InlineLink to="/portfolio">Our work</InlineLink></li>
            <li><InlineLink to="/#pricing">Compare plans</InlineLink></li>
          </ContinueLinks>
          <Note>Last checked against our current plans in October 2026.</Note>
        </Section>

        <PageCta
          title="Get your website started"
          text="Tell us what you need and we'll reply within 1 day. Our first 10 clients get the build for free."
        />
      </ArticleInner>
    </ArticlePage>
  </AppLayout>
);

export default CostGuide;
