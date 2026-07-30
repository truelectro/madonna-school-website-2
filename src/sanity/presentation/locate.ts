import { DocumentLocationResolver } from 'sanity/presentation'
import { map } from 'rxjs'

export const locate: DocumentLocationResolver = (params, context) => {
    const { id, type } = params

    if (type === 'homePage') {
        return {
            locations: [
                {
                    title: 'Home Page',
                    href: '/',
                },
            ],
        }
    }

    if (type === 'aboutPage') {
        return {
            locations: [
                {
                    title: 'About Us',
                    href: '/about',
                },
            ],
        }
    }

    if (type === 'historyPage') {
        return {
            locations: [
                {
                    title: 'School History',
                    href: '/history',
                },
            ],
        }
    }

    if (type === 'hallOfFamePage') {
        return {
            locations: [
                {
                    title: 'Hall of Fame',
                    href: '/hall-of-fame',
                },
            ],
        }
    }

    if (type === 'staff') {
        return {
            locations: [
                {
                    title: 'Staff Directory',
                    href: '/about/staff',
                },
            ],
        }
    }

    if (type === 'academicsPage') {
        return {
            locations: [
                {
                    title: 'Academics & Calendar',
                    href: '/academics',
                },
            ],
        }
    }

    if (type === 'admissionsPage') {
        return {
            locations: [
                {
                    title: 'Admissions Policy',
                    href: '/admission',
                },
            ],
        }
    }

    if (type === 'anniversaryPlanPage') {
        return {
            locations: [
                {
                    title: 'Anniversary Plan',
                    href: '/anniversary-plan',
                },
            ],
        }
    }

    if (type === 'mosaPage') {
        return {
            locations: [
                {
                    title: 'MOSA (Alumni)',
                    href: '/mosa',
                },
            ],
        }
    }

    if (type === 'contactPage') {
        return {
            locations: [
                {
                    title: 'Contact Us',
                    href: '/contact',
                },
            ],
        }
    }

    if (type === 'news') {
        const doc$ = context.documentStore.listenQuery(
            `*[_id == $id][0]{slug, title}`,
            { id },
            { perspective: 'previewDrafts' }
        )

        return doc$.pipe(
            map((doc: any) => {
                if (!doc || !doc.slug?.current) {
                    return {
                        locations: [
                            {
                                title: 'News Directory',
                                href: '/news',
                            },
                        ],
                    }
                }
                return {
                    locations: [
                        {
                            title: doc.title || 'News Article',
                            href: `/news/${doc.slug.current}`,
                        },
                        {
                            title: 'News Index',
                            href: '/news',
                        },
                    ],
                }
            })
        )
    }

    return null
}
