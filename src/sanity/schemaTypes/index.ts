import { type SchemaTypeDefinition } from 'sanity'
import { staffType } from './staff'
import { newsType } from './news'
import { pageType } from './page'
import { calendarEventType } from './calendarEvent'
import { hallOfFameType } from './hallOfFame'
import { anniversaryPlanType } from './anniversaryPlan'
import { heroSectionType } from './blocks/heroSection'
import { textWithImageSectionType } from './blocks/textWithImageSection'
import { callToActionSectionType } from './blocks/callToActionSection'
import { gallerySectionType } from './blocks/gallerySection'
import { videoSectionType } from './blocks/videoSection'
import { homeWelcomeSectionType } from './blocks/homeWelcomeSection'
import { homePhilosophySectionType } from './blocks/homePhilosophySection'
import { homeDifferenceSectionType } from './blocks/homeDifferenceSection'
import { homePageType } from './singletons/homePage'
import { aboutPageType } from './singletons/aboutPage'
import { historyPageType } from './singletons/historyPage'
import { anniversaryPlanPageType } from './singletons/anniversaryPlanPage'
import { contactPageType } from './singletons/contactPage'
import { mosaPageType } from './singletons/mosaPage'
import { hallOfFamePageType } from './singletons/hallOfFamePage'
import { curriculumPageType } from './singletons/curriculumPage'
import { admissionPageType } from './singletons/admissionPage'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        staffType,
        newsType,
        pageType,
        calendarEventType,
        hallOfFameType,
        anniversaryPlanType,
        heroSectionType,
        textWithImageSectionType,
        callToActionSectionType,
        gallerySectionType,
        videoSectionType,
        homeWelcomeSectionType,
        homePhilosophySectionType,
        homeDifferenceSectionType,
        homePageType,
        aboutPageType,
        historyPageType,
        anniversaryPlanPageType,
        contactPageType,
        mosaPageType,
        hallOfFamePageType,
        curriculumPageType,
        admissionPageType,
    ],
}
