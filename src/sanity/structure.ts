// All singleton type IDs — these get their own dedicated tab and are NOT shown in the default list
const singletonTypes = [
    'homePage',
    'aboutPage',
    'historyPage',
    'anniversaryPlanPage',
    'contactPage',
    'hallOfFamePage',
    'mosaPage',
    'admissionsPage',
    'academicsPage',
]

// Block types and legacy collection types that should never appear as standalone list items
const hiddenTypes = [
    'page',
    'heroSection',
    'textWithImageSection',
    'callToActionSection',
    'gallerySection',
    'videoSection',
    'anniversaryPlan',
    'hallOfFame',
    ...singletonTypes,
]

export const structure = (S: any) =>
    S.list()
        .title('Content')
        .items([
            // ── Page singletons (one tab each) ──────────────────────
            S.listItem()
                .title('🏠 Home')
                .child(S.document().schemaType('homePage').documentId('homePage')),
            S.listItem()
                .title('ℹ️ About')
                .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
            S.listItem()
                .title('📜 History')
                .child(S.document().schemaType('historyPage').documentId('historyPage')),
            S.listItem()
                .title('🎉 Anniversary Plan')
                .child(S.document().schemaType('anniversaryPlanPage').documentId('anniversaryPlanPage')),
            S.listItem()
                .title('🏆 Hall of Fame')
                .child(S.document().schemaType('hallOfFamePage').documentId('hallOfFamePage')),
            S.listItem()
                .title('🎓 MOSA (Alumni)')
                .child(S.document().schemaType('mosaPage').documentId('mosaPage')),
            S.listItem()
                .title('📞 Contact')
                .child(S.document().schemaType('contactPage').documentId('contactPage')),
            S.listItem()
                .title('💼 Admissions')
                .child(S.document().schemaType('admissionsPage').documentId('admissionsPage')),
            S.listItem()
                .title('🎓 Academics')
                .child(S.document().schemaType('academicsPage').documentId('academicsPage')),

            S.divider(),

            // ── Collections (lists of many documents) ───────────────
            ...S.documentTypeListItems().filter(
                (listItem: any) => !hiddenTypes.includes(listItem.getId())
            ),
        ])
