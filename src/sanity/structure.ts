export const structure = (S: any) =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Settings & Single Pages')
                .child(
                    S.list()
                        .title('Settings & Single Pages')
                        .items([
                            S.listItem()
                                .title('About Page')
                                .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
                            S.listItem()
                                .title('Anniversary Plan Page')
                                .child(S.document().schemaType('anniversaryPlanPage').documentId('anniversaryPlanPage')),
                            S.listItem()
                                .title('Contact Page')
                                .child(S.document().schemaType('contactPage').documentId('contactPage')),
                            S.listItem()
                                .title('Hall of Fame Page')
                                .child(S.document().schemaType('hallOfFamePage').documentId('hallOfFamePage')),
                            S.listItem()
                                .title('History Page')
                                .child(S.document().schemaType('historyPage').documentId('historyPage')),
                            S.listItem()
                                .title('MOSA Page')
                                .child(S.document().schemaType('mosaPage').documentId('mosaPage')),
                        ])
                ),

            S.divider(),

            ...S.documentTypeListItems().filter(
                (listItem: any) =>
                    !['aboutPage', 'anniversaryPlanPage', 'contactPage', 'hallOfFamePage', 'historyPage', 'mosaPage'].includes(
                        listItem.getId()
                    )
            ),
        ])
