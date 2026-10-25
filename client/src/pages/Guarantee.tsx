import AppLayout from '../layouts/AppLayout';
import { GradientText } from '../layouts/AppLayout.style';
import PageMeta from '../components/PageMeta';
import PageCta from '../components/Article/PageCta';
import { PAGES } from '../seo';
import {
  ArticlePage, ArticleInner, ArticleIntro, Eyebrow, ArticleTitle, Lede, Updated, Answer,
  Section, H2, P, List, TableWrap, Table, Note, InlineLink, Highlight,
} from '../components/Article/Article.style';

// Exactly how the 5% guarantee is measured, so it can be checked, not just trusted
const Guarantee = () => (
  <AppLayout>
    <PageMeta page={PAGES.guarantee} />
    <ArticlePage>
      <ArticleInner>
        <ArticleIntro>
          <Eyebrow>The guarantee</Eyebrow>
          <ArticleTitle>How we measure <GradientText>the 5% guarantee</GradientText></ArticleTitle>
          <Lede>
            A guarantee is only worth something if you can check it. Here is exactly what we promise, how it&apos;s
            counted, and what happens in a month that falls short.
          </Lede>
          <Updated>Updated October 2026</Updated>
        </ArticleIntro>

        <Answer>
          <strong>The promise:</strong> from your first month, <Highlight>at least 5 in every 100 visitors</Highlight> to your website
          click one of your key buttons, like Book Now, Enquire or WhatsApp. In any month they don&apos;t, you
          don&apos;t pay for that month, and we keep improving the site until they do. It applies on the Monthly
          plan.
        </Answer>

        <Section>
          <H2>What counts as a key button</H2>
          <P>
            Before launch, we agree your key buttons with you: the actions that mean a visitor wants to do business
            with you. Usually these are:
          </P>
          <List>
            <li>WhatsApp and call buttons</li>
            <li>Book now or appointment buttons</li>
            <li>Enquire, Get a quote and Contact us</li>
            <li>Sending an enquiry or booking form</li>
          </List>
          <P>
            Menu links, social media icons and buttons that only move around the page don&apos;t count. We write the
            agreed list down so there&apos;s no argument later.
          </P>
        </Section>

        <Section>
          <H2>How it&apos;s counted</H2>
          <P>
            Every key button is tracked in Google Analytics. Each calendar month, we take the number of visitors who
            clicked at least one key button and divide it by the total number of visitors.
          </P>
          <TableWrap>
            <Table>
              <thead>
                <tr><th>Example month</th><th>Visitors</th><th>Clicked a key button</th><th>Result</th></tr>
              </thead>
              <tbody>
                <tr><td>Guarantee met</td><td>1,200</td><td>72</td><td>6%: you pay as normal</td></tr>
                <tr><td>Guarantee missed</td><td>800</td><td>28</td><td>3.5%: that month is free</td></tr>
              </tbody>
            </Table>
          </TableWrap>
          <P>
            A visitor who clicks several key buttons counts once, so the number can&apos;t be inflated. You see the
            figures every month in your progress report.
          </P>
        </Section>

        <Section>
          <H2>The fine print, in plain words</H2>
          <List>
            <li><strong>Monthly plan only.</strong> One-Time sites aren&apos;t covered, because we don&apos;t look after them month to month.</li>
            <li><strong>We need to host the site,</strong> with tracking in place. We can&apos;t measure, or fix, a site hosted elsewhere.</li>
            <li><strong>At least 100 visitors that month.</strong> With fewer, one or two clicks swing the percentage too much to be fair to either side.</li>
            <li><strong>Your key buttons stay on the site.</strong> If they&apos;re removed or changed without us, that month can&apos;t be measured.</li>
            <li><strong>Bots don&apos;t count.</strong> Known bot and spam traffic is filtered out before we calculate.</li>
            <li><strong>Singapore visitors only.</strong> We count visitors from Singapore, since they&apos;re the ones who can become your customers. If your business serves customers overseas, we agree the countries that count with you instead.</li>
          </List>
        </Section>

        <Section>
          <H2>What it doesn&apos;t cover</H2>
          <P>
            The guarantee is about your website doing its job: turning visitors into people who reach out. It
            doesn&apos;t promise sales, because those also depend on your prices, your stock and how quickly you
            reply, which we don&apos;t control. It also doesn&apos;t promise a number of visitors or a Google ranking.
          </P>
        </Section>

        <Section>
          <H2>What we do when a month falls short</H2>
          <List>
            <li>We look at where visitors drop off and what they click instead.</li>
            <li>We change the page: clearer buttons, better wording, faster loading, fewer steps.</li>
            <li>We check again the next month. You don&apos;t pay for any month under 5%.</li>
          </List>
          <P>
            Questions about how it works? See the <InlineLink to="/faq">FAQ</InlineLink>, or ask us directly.
          </P>
          <Note>The guarantee&apos;s full terms are set out in your service agreement.</Note>
        </Section>

        <PageCta />
      </ArticleInner>
    </ArticlePage>
  </AppLayout>
);

export default Guarantee;
