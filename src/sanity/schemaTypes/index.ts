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
    ],
}
