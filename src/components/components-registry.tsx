'use client';

import { ContentObject, GlobalProps } from '@/types';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import { Annotated } from './Annotated';

type DynamicComponentProps = ContentObject & {
    global?: GlobalProps;
};

// ✅ كائن المكونات يجب أن يكون فوق DynamicComponent
const components: Record<string, ComponentType<any>> = {
    CheckboxFormControl: dynamic(() => import('./molecules/FormBlock/CheckboxFormControl')),
    ContactSection: dynamic(() => import('./sections/ContactSection')),
    CtaSection: dynamic(() => import('./sections/CtaSection')),
    DividerSection: dynamic(() => import('./sections/DividerSection')),
    EmailFormControl: dynamic(() => import('./molecules/FormBlock/EmailFormControl')),
    FeaturedItem: dynamic(() => import('./sections/FeaturedItemsSection/FeaturedItem')),
    FeaturedItemsSection: dynamic(() => import('./sections/FeaturedItemsSection')),
    FeaturedPostsSection: dynamic(() => import('./sections/FeaturedPostsSection')),
    FeaturedProjectsSection: dynamic(() => import('./sections/FeaturedProjectsSection')),
    FormBlock: dynamic(() => import('./molecules/FormBlock')),
    HeroSection: dynamic(() => import('./sections/HeroSection')),
    ImageBlock: dynamic(() => import('./molecules/ImageBlock')),
    MediaGallerySection: dynamic(() => import('./sections/MediaGallerySection')),
    PostFeedSection: dynamic(() => import('./sections/PostFeedSection')),
    ProjectFeedSection: dynamic(() => import('./sections/ProjectFeedSection')),
    RecentPostsSection: dynamic(() => import('./sections/RecentPostsSection')),
    RecentProjectsSection: dynamic(() => import('./sections/RecentProjectsSection')),
    QuoteSection: dynamic(() => import('./sections/QuoteSection')),
    SelectFormControl: dynamic(() => import('./molecules/FormBlock/SelectFormControl')),
    LabelsSection: dynamic(() => import('./sections/LabelsSection')),
    TestimonialsSection: dynamic(() => import('./sections/TestimonialsSection')),
    TextareaFormControl: dynamic(() => import('./molecules/FormBlock/TextareaFormControl')),
    TextFormControl: dynamic(() => import('./molecules/FormBlock/TextFormControl')),
    TextSection: dynamic(() => import('./sections/TextSection')),
    VideoBlock: dynamic(() => import('./molecules/VideoBlock')),
    PageLayout: dynamic(() => import('./layouts/PageLayout')),
    PostLayout: dynamic(() => import('./layouts/PostLayout')),
    PostFeedLayout: dynamic(() => import('./layouts/PostFeedLayout')),
    ProjectLayout: dynamic(() => import('./layouts/ProjectLayout')),
    ProjectFeedLayout: dynamic(() => import('./layouts/ProjectFeedLayout')),

    // 🟡 مكونات مخصصة جديدة
    MarkdownSection: dynamic(() => import('./sections/MarkdownSection')),
    DesignsSection: dynamic(() => import('./sections/DesignsSection')),
    ImageTextSection: dynamic(() => import('./sections/ImageTextSection')),
    ServicesSection: dynamic(() => import('./sections/ServicesSection')),
    SocialIconsSection: dynamic(() => import('./sections/SocialIconsSection')),
    FeatureSliderSection: dynamic(() => import('./sections/FeatureSliderSection')),
    BeforeAfterSection: dynamic(() => import('./sections/BeforeAfterSection')),
    ProductShowcaseSection: dynamic(() => import('./sections/ProductShowcaseSection')),
    ShowcaseScrollerSection: dynamic(() => import('./sections/ShowcaseScrollerSection')),
    PortfolioGallerySection: dynamic(() => import('./sections/PortfolioGallerySection')),
    MarqueeAnnouncementBar: dynamic(() => import('./sections/MarqueeAnnouncementBar')),
    StoreExamplesSection: dynamic(() => import('./sections/StoreExamplesSection')),
    FeatureShowcaseSection: dynamic(() => import('./sections/FeatureShowcaseSection')),
    FaqSection: dynamic(() => import('./sections/FaqSection')),
    OfferSection: dynamic(() => import('./sections/OfferSection')),
    FeatureIconsSection: dynamic(() => import('./sections/FeatureIconsSection')),
    FaqAccordionSection: dynamic(() => import('./sections/FaqAccordionSection')),
    TestimonialsSlider: dynamic(() => import('./sections/TestimonialsSlider')),
    TestimonialSwiperSection: dynamic(() => import('./sections/TestimonialSwiperSection')),
    PrivacyPolicy: dynamic(() => import('./sections/PrivacyPolicy')),
    terms: dynamic(() => import('./sections/terms')),
    refund: dynamic(() => import('./sections/refund')),
    'terms-and-conditions': dynamic(() => import('./sections/terms-and-conditions')),
    checkout: dynamic(() => import('./sections/checkout')),



    VideoShowcaseSection: dynamic(() => import('./sections/VideoShowcaseSection')),
    privacy: dynamic(() => import('./sections/privacy')), // ✅ تم تسجيله هنا
};

export const DynamicComponent: React.FC<DynamicComponentProps> = (props) => {
    const modelName = props.type;

    if (!modelName) {
        throw new Error(`Object does not have a 'type' property: ${JSON.stringify(props, null, 2)}`);
    }

    const Component = components[modelName];
    if (!Component) {
        throw new Error(`No component matches type: '${modelName}'`);
    }

    return (
        <Annotated content={props}>
            <Component {...props} />
        </Annotated>
    );
};
