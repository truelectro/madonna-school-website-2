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
import { welcomeSectionType } from './blocks/welcomeSection'
import { philosophySectionType } from './blocks/philosophySection'
import { differenceSectionType } from './blocks/differenceSection'
import { homePageType } from './singletons/homePage'
import { aboutPageType } from './singletons/aboutPage'
import { historyPageType } from './singletons/historyPage'
import { anniversaryPlanPageType } from './singletons/anniversaryPlanPage'
import { contactPageType } from './singletons/contactPage'
import { mosaPageType } from './singletons/mosaPage'
import { hallOfFamePageType } from './singletons/hallOfFamePage'

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
        welcomeSectionType,
        philosophySectionType,
        differenceSectionType,
        homePageType,
        aboutPageType,
        historyPageType,
        anniversaryPlanPageType,
        contactPageType,
        mosaPageType,
        hallOfFamePageType,
    ],
}
