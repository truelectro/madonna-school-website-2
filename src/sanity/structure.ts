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

// Block types, singletons, and collection types managed inside nested folders
const hiddenTypes = [
    'page',
    'calendarEvent',
    'heroSection',
    'textWithImageSection',
    'callToActionSection',
    'gallerySection',
    'videoSection',
    'anniversaryPlan',
    'hallOfFame',
    'staff',
    'news',
    ...singletonTypes,
]

export const structure = (S: any) =>
    S.list()
        .title('Content')
        .items([
            // 🏠 Home
            S.listItem()
                .title('🏠 Home')
                .child(S.document().schemaType('homePage').documentId('homePage')),

            // ℹ️ About Us (Folder)
            S.listItem()
                .title('ℹ️ About Us')
                .child(
                    S.list()
                        .title('About Us')
                        .items([
                            S.listItem()
                                .title('ℹ️ Main About Page')
                                .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
                            S.listItem()
                                .title('📜 School History')
                                .child(S.document().schemaType('historyPage').documentId('historyPage')),
                            S.listItem()
                                .title('🏆 Hall of Fame')
                                .child(S.document().schemaType('hallOfFamePage').documentId('hallOfFamePage')),
                            S.listItem()
                                .title('👥 Staff Members')
                                .child(S.documentTypeList('staff').title('Staff Members')),
                        ])
                ),

            // 🎓 Academics & Admissions (Folder)
            S.listItem()
                .title('🎓 Academics & Admissions')
                .child(
                    S.list()
                        .title('Academics & Admissions')
                        .items([
                            S.listItem()
                                .title('🎓 Academics & Calendar')
                                .child(S.document().schemaType('academicsPage').documentId('academicsPage')),
                            S.listItem()
                                .title('💼 Admissions & Policy')
                                .child(S.document().schemaType('admissionsPage').documentId('admissionsPage')),
                        ])
                ),

            // 🎉 Anniversary & News (Folder)
            S.listItem()
                .title('🎉 Anniversary & News')
                .child(
                    S.list()
                        .title('Anniversary & News')
                        .items([
                            S.listItem()
                                .title('🎉 Anniversary Plan (@ 60)')
                                .child(S.document().schemaType('anniversaryPlanPage').documentId('anniversaryPlanPage')),
                            S.listItem()
                                .title('📰 News & Announcements')
                                .child(S.documentTypeList('news').title('News & Announcements')),
                        ])
                ),

            // 🎓 MOSA (Alumni)
            S.listItem()
                .title('🎓 MOSA (Alumni)')
                .child(S.document().schemaType('mosaPage').documentId('mosaPage')),

            // 📞 Contact
            S.listItem()
                .title('📞 Contact')
                .child(S.document().schemaType('contactPage').documentId('contactPage')),

            // 📄 Custom Pages
            S.listItem()
                .title('📄 Custom Pages')
                .child(S.documentTypeList('page').title('Custom Pages')),

            S.divider(),

            // ── Any other remaining collections ───────────────────
            ...S.documentTypeListItems().filter(
                (listItem: any) => !hiddenTypes.includes(listItem.getId())
            ),
        ])
