import { Title, ContentWrapper } from '../../layouts/AppLayout.style';
import { PriceHighlight } from './SubBanner.style';


const SubBanner = () => (
    <ContentWrapper>
        <Title>
            <PriceHighlight>Our Project</PriceHighlight>
        </Title>
    </ContentWrapper>
);

export default SubBanner; 