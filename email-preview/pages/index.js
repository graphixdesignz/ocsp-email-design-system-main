import { useContext } from "react";
import Head from "next/head";
import styled from "@emotion/styled";

import Nav from "../components/Nav";
import NavGroup from "../components/NavGroup";
import NavList, { NavItem, NavLink } from "../components/NavList";
import LinkButton from "../components/LinkButton";
import { Title, SubTitle, Heading } from "../components/Text";
import ColorSelector, { ColorDefault } from "../components/ColorSelect";

import PreviewContext from "../components/PreviewContext";

import { primary, greyLight, colorWays } from "../lib/colors";

/**
 * Email Modules
 */

// brand
import Signifier from "./modules/signifier.mdx";
import HeaderSignIn from "./modules/header-sign-in.mdx";
import Footer from "./modules/footer.mdx";

// Content
import DynamicHeadline from "./modules/dynamic-headline.mdx";
import HeroHeadline from "./modules/hero-headline.mdx";
import PlainText from "./modules/plain-text.mdx";
import Quote from "./modules/quote.mdx";
import OverheadHeadline from "./modules/overhead-headline.mdx";
import Editorial from "./modules/editorial.mdx";
import Offer from "./modules/offer.mdx";

// Commerce
import AccountSummary from "./modules/account-summary.mdx";
import TransactionalTable from "./modules/transactional-table.mdx";
import Survey from "./modules/survey.mdx";
import SavingsChart from "./modules/savings-chart.mdx";

// lists
import IconList from "./modules/icon-list.mdx";
import CheckmarkList from "./modules/checkmark-list.mdx";
import BulletList from "./modules/bullet-list.mdx";
import NumberedList from "./modules/numbered-list.mdx";
import IconLinkList from "./modules/icon-link-list.mdx";

// media
import Video from "./modules/video.mdx";
import ResponsiveImage from "./modules/responsive-image.mdx";
import SplitImage from "./modules/split-image.mdx";
import ThirdsImage from "./modules/thirds-image.mdx";
import DualImage from "./modules/dual-image.mdx";
import Comparison from "./modules/comparison.mdx";

// layout
import MasterLayout from "./modules/master-layout.mdx";
import Spacer from "./modules/spacer.mdx";

// icons
import SelectedIcons from "./reference/selected-icons.mdx";

// references
import ColorTestPage from "./reference/color-test.mdx";
import ColorTintTestPage from "./reference/color-tint-test.mdx";

/**
 * Recipes
 */

import AquisitionProduct from "./recipes/acquisition-product.mdx";
import AquisitionInformational from "./recipes/acquisition-informational.mdx";
import AcquisitionRecoOffer1 from "./recipes/acquisition-reco-offer-1.mdx";
import AcquisitionRecoOffer2 from "./recipes/acquisition-reco-offer-2.mdx";
import AcquisitionWtbKsp from "./recipes/acquisitionwtbksp.mdx";
import BillingStandard from "./recipes/billing-standard.mdx";
import BillingDetailed from "./recipes/billing-detailed.mdx";
import OnboardingWelcome from "./recipes/onboarding-welcome.mdx";
import OnboardingGettingStarted from "./recipes/onboarding-getting-started.mdx";
import OnboardingAddOn from "./recipes/onboarding-add-on.mdx";
import ConfirmationShipping from "./recipes/confirmation-shipping.mdx";
import ConfirmationOrder from "./recipes/confirmation-order.mdx";
import Update from "./recipes/update.mdx";
import AccountMaintenanceStandard from "./recipes/account-maintenance-standard.mdx";
import AccountMaintenanceDetailed from "./recipes/account-maintenance-detailed.mdx";
import EndOfLifeMultiple from "./recipes/eol-multiple-actions.mdx";
import EndOfLifeSingle from "./recipes/eol-single-action.mdx";
import NotificationsStandard from "./recipes/notifications-standard.mdx";
import NotificationsInstructions from "./recipes/notifications-instructions.mdx";
import NotificationsImage from "./recipes/notifications-image.mdx";
import UsageStandard from "./recipes/usage-standard.mdx";
import UsageGuided from "./recipes/usage-guided.mdx";

import CoBrandOnboardingWelcome from "./recipes/cobrand-onboarding-welcome.mdx";
import CoBrandOnboardingGettingStarted from "./recipes/cobrand-onboarding-getting-started.mdx";
import CoBrandOrderConfirmation from "./recipes/cobrand-shipping-order-confirmation.mdx";
import CoBrandOrderDetailedConfirmation from "./recipes/cobrand-shipping-order-detailed-confirmation.mdx";
import TermsOfService from "./recipes/terms-of-service.mdx";

import SurveyImage from "./recipes/survey-image.mdx";
import SurveyStandard from "./recipes/survey-standard.mdx";

/** Page content */
import {
    SiteIntro,
    RecipesIntro,
    ModulesIntro,
    HowToModule,
    HowToRecipe,
    Outro,
} from "../components/Home";

const Container = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    background-color: ${greyLight};
    overflow-y: auto;
    scroll-behavior: smooth;
`;

const Body = styled.div`
    padding: 1rem;
    width: calc(100vw - 200px);
    max-width: 1024px;
    margin-left: 200px;
    height: 100vh;
`;

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 200px;
    border-right: 1px solid ${primary};
    overflow-y: auto;
    scroll-behavior: smooth;
    background-color: #ffffff;
    position: fixed;
    height: 100vh;
`;

const Header = styled.header`
    padding: 0.5rem;
`;

const Anchor = styled.a`
    display: block;
    margin-top: 5rem;
    &:first-of-type {
        margin-top: 0;
    }
`;

const PageTitle = styled(Title)`
    margin-bottom: 3rem;
`;

const NavHeading = styled(Heading)`
    /* margin: 1rem 0; */
    padding: 1rem 0.5rem;
    border-bottom: 1px solid #000;
`;

export default function Home({ includeModules }) {
    const { setColors } = useContext(PreviewContext);
    const { white, blue, lavender, green, purple, pink } = colorWays;

    return (
        <Container>
            <Head>
                <title>CS Email Design System</title>
            </Head>
            <Sidebar>
                <Header>
                    <Heading>
                        <a href="#site-intro">CS Email Design System</a>
                    </Heading>
                </Header>
                <Nav>
                    <NavGroup open title="Colors">
                        <NavList>
                            <NavItem>
                                <ColorDefault
                                    name="color"
                                    colorWay={white}
                                    title="White"
                                    onClick={() => setColors([], "neutral")}
                                    checked
                                />
                            </NavItem>
                            <NavItem>
                                <ColorSelector
                                    name="color"
                                    colorWay={blue}
                                    title="Blue"
                                    onClick={() => setColors(blue, "blue")}
                                />
                            </NavItem>
                            <NavItem>
                                <ColorSelector
                                    name="color"
                                    colorWay={lavender}
                                    title="Lavender"
                                    onClick={() =>
                                        setColors(lavender, "lavender")
                                    }
                                />
                            </NavItem>
                            <NavItem>
                                <ColorSelector
                                    name="color"
                                    colorWay={green}
                                    title="Green"
                                    onClick={() => setColors(green, "green")}
                                />
                            </NavItem>
                            <NavItem>
                                <ColorSelector
                                    name="color"
                                    colorWay={purple}
                                    title="Purple"
                                    onClick={() => setColors(purple, "purple")}
                                />
                            </NavItem>
                            <NavItem>
                                <ColorSelector
                                    name="color"
                                    colorWay={pink}
                                    title="Pink"
                                    onClick={() => setColors(pink, "pink")}
                                />
                            </NavItem>
                        </NavList>
                    </NavGroup>
                    <NavHeading>
                        <a href="#recipes-intro">Recipes</a>
                    </NavHeading>
                    <NavGroup title="Acquisition">
                        <NavList>
                            <NavItem>
                                <NavLink href="#recipe-acquisition-product">
                                    Product Driven
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#recipe-acquisition-informational">
                                    Information Driven
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#recipe-acquisition-reco-offer-1">
                                    Reco / Offer #1
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#recipe-acquisition-reco-offer-2">
                                    Reco / Offer #2
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#recipe-acquisitionwtbksp">
                                    WTB / KSP
                                </NavLink>
                            </NavItem>
                        </NavList>
                    </NavGroup>
                    <NavGroup title="Onboarding">
                        <NavList>
                            <NavItem>
                                <NavLink href="#recipe-onboarding-welcome">
                                    Welcome
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#recipe-onboarding-getting-started">
                                    Getting Started
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#recipe-onboarding-add-on">
                                    Add-On
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#recipe-survey-with-image">
                                    Survey with Image
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#recipe-survey-standard">
                                    Survey Standard
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#terms-of-service">
                                    Terms of Service
                                </NavLink>
                            </NavItem>
                        </NavList>
                    </NavGroup>
                    <NavGroup title="Shipping">
                        <NavList>
                            <NavItem>
                                <NavLink href="#recipe-confirmation-shipping">
                                    Shipping
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#recipe-confirmation-order">
                                    Order
                                </NavLink>
                            </NavItem>
                        </NavList>
                    </NavGroup>
                    <NavGroup title="Billing">
                        <NavList>
                            <NavItem>
                                <NavLink href="#recipe-billing-standard">
                                    Standard
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#recipe-billing-detailed">
                                    Detailed
                                </NavLink>
                            </NavItem>
                        </NavList>
                    </NavGroup>
                    <NavGroup title="Usage">
                        <NavList>
                            <NavItem>
                                <NavLink href="#recipe-usage-multiple">
                                    Standard Recommendations
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#recipe-usage-guided">
                                    Guided Recommendations
                                </NavLink>
                            </NavItem>
                        </NavList>
                    </NavGroup>
                    <NavGroup title="Account Maint.">
                        <NavList>
                            <NavItem>
                                <NavLink href="#recipe-account-maintenance-standard">
                                    Standard
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#recipe-account-maintenance-detailed">
                                    Detailed
                                </NavLink>
                            </NavItem>
                        </NavList>
                    </NavGroup>
                    <NavGroup title="Update">
                        <NavList>
                            <NavItem>
                                <NavLink href="#recipe-update">
                                    Product/Service
                                </NavLink>
                            </NavItem>
                        </NavList>
                    </NavGroup>
                    <NavGroup title="Notifications">
                        <NavList>
                            <NavItem>
                                <NavLink href="#recipe-notifications-standard">
                                    Standard
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#recipe-notifications-instructions">
                                    With Instructions
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#recipe-notifications-image">
                                    With Image
                                </NavLink>
                            </NavItem>
                        </NavList>
                    </NavGroup>
                    <NavGroup title="End of Life">
                        <NavList>
                            <NavItem>
                                <NavLink href="#recipe-eol-single-action">
                                    Single Actions
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#recipe-eol-multiple-action">
                                    Multiple Actions
                                </NavLink>
                            </NavItem>
                        </NavList>
                    </NavGroup>
                    <NavGroup title="Co-Branded">
                        <NavList>
                            <NavItem>
                                <NavLink href="#recipe-cobrand-onboarding-welcome">
                                    Onboarding Welcome
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#recipe-cobrand-onboarding-getting-started">
                                    Onboarding Getting Started
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#recipe-cobrand-shipping-order-confirmation">
                                    Order Confirmation
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#recipe-cobrand-shipping-order-detailed-confirmation">
                                    Detailed Order Confirmation
                                </NavLink>
                            </NavItem>
                        </NavList>
                    </NavGroup>

                    {includeModules && (
                        <>
                            <NavHeading>
                                <a href="#modules-intro">Modules</a>
                            </NavHeading>
                            <NavGroup title="Brand">
                                <NavList>
                                    <NavItem>
                                        <NavLink href="#brand-signifier">
                                            Signifier
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#brand-header">
                                            Header
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#brand-footer">
                                            Footer
                                        </NavLink>
                                    </NavItem>
                                </NavList>
                            </NavGroup>
                            <NavGroup title="Content">
                                <NavList>
                                    <NavItem>
                                        <NavLink href="#content-dynamic-headline">
                                            Dynamic Headline
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#content-hero-headline">
                                            Hero Headline
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#content-overhead-headline">
                                            Overhead Headline
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#content-plain-text">
                                            Plain Text
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#content-editorial">
                                            Editorial
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#content-quote">
                                            Quote
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#content-offer">
                                            Offer
                                        </NavLink>
                                    </NavItem>
                                </NavList>
                            </NavGroup>
                            <NavGroup title="Commerce">
                                <NavList>
                                    <NavItem>
                                        <NavLink href="#commerce-account-summary">
                                            Account Summary
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#commerce-transactional-table">
                                            Transactional Table
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#commerce-survey">
                                            Survey
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#savings-chart">
                                            Cost Savings
                                        </NavLink>
                                    </NavItem>
                                </NavList>
                            </NavGroup>
                            <NavGroup title="Lists">
                                <NavList>
                                    <NavItem>
                                        <NavLink href="#lists-icon-list">
                                            Icon List
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#lists-checkmark-list">
                                            Checkmark List
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#lists-bullet-list">
                                            Bulleted List
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#lists-numbered-list">
                                            Numbered List
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#lists-icon-link-list">
                                            Icon Link List
                                        </NavLink>
                                    </NavItem>
                                </NavList>
                            </NavGroup>
                            <NavGroup title="Media">
                                <NavList>
                                    <NavItem>
                                        <NavLink href="#media-responsive-image">
                                            Responsive Image
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#media-split-image">
                                            Split Image
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#media-thirds-image">
                                            Thirds Image
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#media-dual-image">
                                            Dual Image
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#media-comparison">
                                            Comparison
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#media-video">
                                            Video
                                        </NavLink>
                                    </NavItem>
                                </NavList>
                            </NavGroup>
                        </>
                    )}
                    <NavHeading>
                        <a href="#resources">Resources</a>
                    </NavHeading>
                    <NavGroup title={"Layout"}>
                        <NavList>
                            <NavItem>
                                <NavLink href="#master">Master Layout</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#spacer">Spacer</NavLink>
                            </NavItem>
                        </NavList>
                    </NavGroup>
                    <NavGroup title={"Icons"}>
                        <NavList>
                            <NavItem>
                                <NavLink href="#selected-icons">
                                    Selected Icons
                                </NavLink>
                            </NavItem>
                        </NavList>
                    </NavGroup>

                    <NavGroup title={"References"}>
                        <NavList>
                            <NavItem>
                                <NavLink href="#color-test">Color Test</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#color-tint-test">
                                    Color Tint Test
                                </NavLink>
                            </NavItem>
                        </NavList>
                    </NavGroup>
                </Nav>
            </Sidebar>
            <Body>
                <article>
                    <Anchor name="site-intro" />
                    <SiteIntro components={{ h1: PageTitle }} />
                    <section>
                        <Anchor name="recipes-intro" />
                        <RecipesIntro components={{ h1: PageTitle }} />
                        <HowToRecipe />

                        <SubTitle>Acquisition</SubTitle>
                        <p>
                            Entice new and existing users to HP products and
                            services by delivering focused communications.
                        </p>
                        <Anchor name="recipe-acquisition-product" />
                        <AquisitionProduct inline />
                        <LinkButton
                            href="/recipes/acquisition-product"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <Anchor name="recipe-acquisition-informational" />
                        <AquisitionInformational inline />
                        <LinkButton
                            href="/recipes/acquisition-informational"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <Anchor name="recipe-acquisition-reco-offer-1" />
                        <AcquisitionRecoOffer1 inline />
                        <LinkButton
                            href="/recipes/acquisition-reco-offer-1"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <Anchor name="recipe-acquisition-reco-offer-2" />
                        <AcquisitionRecoOffer2 inline />
                        <LinkButton
                            href="/recipes/acquisition-reco-offer-2"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <Anchor name="recipe-acquisitionwtbksp" />
                        <AcquisitionWtbKsp inline />
                        <LinkButton
                            href="/recipes/acquisitionwtbksp"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <SubTitle>Onboarding</SubTitle>
                        <p>
                            Equip new members with relevant and contextual
                            resources to maximize their HP experience.
                        </p>
                        <Anchor name="recipe-onboarding-welcome" />
                        <OnboardingWelcome inline />
                        <LinkButton
                            href="/recipes/onboarding-welcome"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <Anchor name="recipe-onboarding-getting-started" />
                        <OnboardingGettingStarted inline />
                        <LinkButton
                            href="/recipes/onboarding-getting-started"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <Anchor name="recipe-onboarding-add-on" />
                        <OnboardingAddOn inline />
                        <LinkButton
                            href="/recipes/onboarding-add-on"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <Anchor name="recipe-survey-with-image" />
                        <SurveyImage inline />
                        <LinkButton
                            href="/recipes/survey-with-image"
                            target="_blank">
                            View in new tab
                        </LinkButton>

                        <Anchor name="recipe-survey-standard" />
                        <SurveyStandard inline />
                        <LinkButton
                            href="/recipes/survey-standard"
                            target="_blank">
                            View in new tab
                        </LinkButton>

                        <Anchor name="terms-of-service" />
                        <TermsOfService inline />
                        <LinkButton
                            href="/recipes/terms-of-service"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <SubTitle>Shipping</SubTitle>
                        <p>
                            Keep users informed about shipping and order
                            information with prompt and timely communications.
                        </p>
                        <Anchor name="recipe-confirmation-shipping" />
                        <ConfirmationShipping inline />
                        <LinkButton
                            href="/recipes/confirmation-shipping"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <Anchor name="recipe-confirmation-order" />
                        <ConfirmationOrder inline />
                        <LinkButton
                            href="/recipes/confirmation-order"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <SubTitle>Billing</SubTitle>
                        <p>
                            Provide users with timely billing updates for their
                            HP products or services.
                        </p>
                        <Anchor name="recipe-billing-standard" />
                        <BillingStandard inline />
                        <LinkButton
                            href="/recipes/billing-standard"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <Anchor name="recipe-billing-detailed" />
                        <BillingDetailed inline />
                        <LinkButton
                            href="/recipes/billing-detailed"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <SubTitle>Usage</SubTitle>
                        <p>
                            Keep users up to date about their current usage
                            levels with straightforward messages that quickly
                            communicate cost savings in a visual format.
                        </p>
                        <Anchor name="recipe-usage-multiple" />
                        <UsageStandard inline />
                        <LinkButton
                            href="/recipes/usage-multiple"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <Anchor name="recipe-usage-guided" />
                        <UsageGuided inline />
                        <LinkButton
                            href="/recipes/usage-guided"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <SubTitle>Account Maintenance</SubTitle>
                        <p>
                            Inform users about account changes with
                            communications that walk through key information and
                            account status in a visual format.
                        </p>
                        <Anchor name="recipe-account-maintenance-standard" />
                        <AccountMaintenanceStandard inline />
                        <LinkButton
                            href="/recipes/account-maintenance-standard"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <Anchor name="recipe-account-maintenance-detailed" />
                        <AccountMaintenanceDetailed inline />
                        <LinkButton
                            href="/recipes/account-maintenance-detailed"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <SubTitle>Update</SubTitle>
                        <p>
                            Inform users about service updates by walking them
                            through key information and account status.
                        </p>
                        <Anchor name="recipe-update" />
                        <Update inline />
                        <LinkButton href="/recipes/update" target="_blank">
                            View in new tab
                        </LinkButton>
                        <SubTitle>Notificationss</SubTitle>
                        <p>
                            This recipe communicates a key update or alert with
                            a combination of imagery and a list of next steps.
                        </p>
                        <Anchor name="recipe-notifications-standard" />
                        <NotificationsStandard inline />
                        <LinkButton
                            href="/recipes/notifications-standard"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <Anchor name="recipe-notifications-instructions" />
                        <NotificationsInstructions inline />
                        <LinkButton
                            href="/recipes/notifications-instructions"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <Anchor name="recipe-notifications-image" />
                        <NotificationsImage inline />
                        <LinkButton
                            href="/recipes/notifications-image"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <SubTitle>End of Life</SubTitle>
                        <p>
                            Create consideration for a customer who’s recently
                            left. Use enticing messaging and a more visual email
                            to bring that message to life.{" "}
                        </p>
                        <Anchor name="recipe-eol-single-action" />
                        <EndOfLifeSingle inline />
                        <LinkButton
                            href="/recipes/eol-single-action"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                        <Anchor name="recipe-eol-multiple-action" />
                        <EndOfLifeMultiple inline />
                        <LinkButton
                            href="/recipes/eol-multiple-actions"
                            target="_blank">
                            View in new tab
                        </LinkButton>

                        <SubTitle>Co-Branded Recipes</SubTitle>
                        <p>
                            Layouts like these examples can be used to welcome
                            new users who have purchased multiple products or
                            services and help them get started.
                        </p>

                        <Anchor name="recipe-cobrand-onboarding-welcome" />
                        <CoBrandOnboardingWelcome inline />
                        <LinkButton
                            href="/recipes/cobrand-onboarding-welcome"
                            target="_blank">
                            View in new tab
                        </LinkButton>

                        <Anchor name="recipe-cobrand-onboarding-getting-started" />
                        <CoBrandOnboardingGettingStarted inline />
                        <LinkButton
                            href="/recipes/cobrand-onboarding-getting-started"
                            target="_blank">
                            View in new tab
                        </LinkButton>

                        <Anchor name="recipe-cobrand-shipping-order-confirmation" />
                        <CoBrandOrderConfirmation inline />
                        <LinkButton
                            href="/recipes/cobrand-shipping-order-confirmation"
                            target="_blank">
                            View in new tab
                        </LinkButton>

                        <Anchor name="recipe-cobrand-shipping-order-detailed-confirmation" />
                        <CoBrandOrderDetailedConfirmation inline />
                        <LinkButton
                            href="/recipes/cobrand-shipping-order-detailed-confirmation"
                            target="_blank">
                            View in new tab
                        </LinkButton>
                    </section>

                    {/* Begin modules */}

                    {includeModules && (
                        <section>
                            <Anchor name="modules-intro" />
                            <ModulesIntro components={{ h1: PageTitle }} />
                            <HowToModule />

                            <SubTitle>Brand</SubTitle>
                            <Anchor name="brand-signifier" />
                            <Signifier inline />
                            <LinkButton
                                href="/modules/signifier"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            <Anchor name="brand-header" />
                            <HeaderSignIn inline />
                            <LinkButton
                                href="/modules/header-sign-in"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            <Anchor name="brand-footer" />
                            <Footer inline />
                            <LinkButton href="/modules/footer" target="_blank">
                                View in new tab
                            </LinkButton>

                            <SubTitle>Content</SubTitle>

                            <Anchor name="content-dynamic-headline" />
                            <DynamicHeadline inline />
                            <LinkButton
                                href="/modules/dynamic-headline"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            <Anchor name="content-hero-headline" />
                            <HeroHeadline inline />
                            <LinkButton
                                href="/modules/hero-headline"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            <Anchor name="content-overhead-headline" />
                            <OverheadHeadline inline />
                            <LinkButton
                                href="/modules/overhead-headline"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            <Anchor name="content-plain-text" />
                            <PlainText inline />
                            <LinkButton
                                href="/modules/plain-text"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            <Anchor name="content-editorial" />
                            <Editorial inline />
                            <LinkButton
                                href="/modules/editorial"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            <Anchor name="content-quote" />
                            <Quote inline />
                            <LinkButton href="/modules/quote" target="_blank">
                                View in new tab
                            </LinkButton>

                            <Anchor name="content-offer" />
                            <Offer inline />
                            <LinkButton href="/modules/offer" target="_blank">
                                View in new tab
                            </LinkButton>

                            <SubTitle>Commerce</SubTitle>

                            <Anchor name="commerce-account-summary" />
                            <AccountSummary inline />
                            <LinkButton
                                href="/modules/account-summary"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            <Anchor name="commerce-transactional-table" />
                            <TransactionalTable inline />
                            <LinkButton
                                href="/modules/transactional-table"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            {/* survey goes here */}
                            <Anchor name="commerce-survey" />
                            <Survey inline />
                            <LinkButton href="/modules/survey" target="_blank">
                                View in new tab
                            </LinkButton>

                            <Anchor name="savings-chart" />
                            <SavingsChart inline />
                            <LinkButton
                                href="/modules/savings-chart"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            <SubTitle>Lists</SubTitle>

                            <Anchor name="lists-icon-list" />
                            <IconList inline />
                            <LinkButton
                                href="/modules/icon-list"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            <Anchor name="lists-checkmark-list" />
                            <CheckmarkList inline />
                            <LinkButton
                                href="/modules/checkmark-list"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            <Anchor name="lists-bullet-list" />
                            <BulletList inline />
                            <LinkButton
                                href="/modules/bullet-list"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            <Anchor name="lists-numbered-list" />
                            <NumberedList inline />
                            <LinkButton
                                href="/modules/bullet-list"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            <Anchor name="lists-icon-link-list" />
                            <IconLinkList inline />
                            <LinkButton
                                href="/modules/icon-link-list"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            <SubTitle>Media </SubTitle>

                            <Anchor name="media-responsive-image" />
                            <ResponsiveImage inline />
                            <LinkButton
                                href="/modules/responsive-image"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            <Anchor name="media-split-image" />
                            <SplitImage inline />
                            <LinkButton
                                href="/modules/split-image"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            <Anchor name="media-thirds-image" />
                            <ThirdsImage inline />
                            <LinkButton
                                href="/modules/thirds-image"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            <Anchor name="media-dual-image" />
                            <DualImage inline />
                            <LinkButton
                                href="/modules/dual-image"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            <Anchor name="media-comparison" />
                            <Comparison inline />
                            <LinkButton
                                href="/modules/comparison"
                                target="_blank">
                                View in new tab
                            </LinkButton>

                            <Anchor name="media-video" />
                            <Video inline />
                            <LinkButton href="/modules/media" target="_blank">
                                View in new tab
                            </LinkButton>
                        </section>
                    )}

                    <Anchor name="resources" />
                    <PageTitle>Resources</PageTitle>
                    <SubTitle>Layout Helpers:</SubTitle>
                    <Anchor name="master" />
                    <MasterLayout inline />
                    <LinkButton href="/modules/master-layout" target="_blank">
                        View in new tab
                    </LinkButton>

                    <Anchor name="spacer" />
                    <Spacer inline />
                    <LinkButton href="/modules/spacer" target="_blank">
                        View in new tab
                    </LinkButton>

                    <SubTitle>Icons:</SubTitle>
                    <Anchor name="selected-icons" />
                    <SelectedIcons inline />
                    <LinkButton
                        href="/reference/selected-icons"
                        target="_blank">
                        View in new tab
                    </LinkButton>

                    <SubTitle>Reference and tests:</SubTitle>
                    <Anchor name="color-test" />
                    <ColorTestPage inline />
                    <LinkButton href="/reference/color-test" target="_blank">
                        View in new tab
                    </LinkButton>

                    <Anchor name="color-tint-test" />
                    <ColorTintTestPage inline />
                    <LinkButton
                        href="/reference/color-tint-test"
                        target="_blank">
                        View in new tab
                    </LinkButton>
                </article>
                <Outro />
            </Body>
        </Container>
    );
}

export async function getStaticProps() {
    return {
        props: {
            includeModules: process.env.INCLUDE_MODULES === "true",
        },
    };
}
