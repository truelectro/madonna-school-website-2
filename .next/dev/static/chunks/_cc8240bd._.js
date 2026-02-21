(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/sanity/schemaTypes/staff.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "staffType",
    ()=>staffType
]);
(()=>{
    const e = new Error("Cannot find module 'sanity'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const staffType = defineType({
    name: 'staff',
    title: 'Staff Member',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Headmistress / Administration',
                        value: 'administration'
                    },
                    {
                        title: 'Teaching Staff',
                        value: 'teaching'
                    },
                    {
                        title: 'Non-Teaching Staff',
                        value: 'non_teaching'
                    }
                ]
            },
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'role',
            type: 'string'
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'bio',
            type: 'text'
        }),
        defineField({
            name: 'order',
            type: 'number',
            title: 'Display Order'
        })
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemaTypes/news.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "newsType",
    ()=>newsType
]);
(()=>{
    const e = new Error("Cannot find module 'sanity'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const newsType = defineType({
    name: 'news',
    title: 'News & Events',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime'
        }),
        defineField({
            name: 'mainImage',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        })
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemaTypes/page.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pageType",
    ()=>pageType
]);
(()=>{
    const e = new Error("Cannot find module 'sanity'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const pageType = defineType({
    name: 'page',
    title: 'Page Content',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'heroImage',
            type: 'image'
        }),
        defineField({
            name: 'pageBuilder',
            title: 'Page Builder (Modular Layout)',
            type: 'array',
            of: [
                {
                    type: 'heroSection'
                },
                {
                    type: 'textWithImageSection'
                },
                {
                    type: 'callToActionSection'
                },
                {
                    type: 'gallerySection'
                }
            ]
        }),
        defineField({
            name: 'content',
            title: 'Simple Content (Optional / Legacy)',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        })
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemaTypes/calendarEvent.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calendarEventType",
    ()=>calendarEventType
]);
(()=>{
    const e = new Error("Cannot find module 'sanity'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const calendarEventType = defineType({
    name: 'calendarEvent',
    title: 'Calendar Event',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Event Title',
            type: 'string',
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'date',
            title: 'Event Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD'
            },
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'term',
            title: 'Academic Term / Semester',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'First Term',
                        value: 'first_term'
                    },
                    {
                        title: 'Second Term',
                        value: 'second_term'
                    },
                    {
                        title: 'Third Term',
                        value: 'third_term'
                    },
                    {
                        title: 'Full Year / Other',
                        value: 'other'
                    }
                ]
            }
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text'
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'date'
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemaTypes/hallOfFame.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hallOfFameType",
    ()=>hallOfFameType
]);
(()=>{
    const e = new Error("Cannot find module 'sanity'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const hallOfFameType = defineType({
    name: 'hallOfFame',
    title: 'Hall of Fame / Awards',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title of Award / Competition',
            type: 'string',
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Presidential Award',
                        value: 'presidential_award'
                    },
                    {
                        title: 'Competition / Quiz',
                        value: 'competition'
                    },
                    {
                        title: 'Academic Result',
                        value: 'academic_result'
                    }
                ]
            },
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text'
        }),
        defineField({
            name: 'recipients',
            title: 'Recipients / Details',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
            description: 'List the names of the recipients or achievements associated with this entry.'
        }),
        defineField({
            name: 'image',
            title: 'Image (Optional)',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'order',
            type: 'number',
            title: 'Display Order'
        })
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemaTypes/anniversaryPlan.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anniversaryPlanType",
    ()=>anniversaryPlanType
]);
(()=>{
    const e = new Error("Cannot find module 'sanity'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const anniversaryPlanType = defineType({
    name: 'anniversaryPlan',
    title: 'Anniversary Strategic Plan',
    type: 'document',
    fields: [
        defineField({
            name: 'activity',
            title: 'Activity',
            type: 'string',
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'steps',
            title: 'Steps / Description',
            type: 'text',
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'resources',
            title: 'Resources Needed',
            type: 'text'
        }),
        defineField({
            name: 'personInCharge',
            title: 'Person in Charge',
            type: 'string',
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'timeline',
            title: 'Timeline',
            type: 'string',
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'outcome',
            title: 'Outcome / Goal',
            type: 'string'
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Use this to manually order the rows in the strategic plan table.'
        })
    ],
    preview: {
        select: {
            title: 'activity',
            subtitle: 'timeline'
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemaTypes/blocks/heroSection.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "heroSectionType",
    ()=>heroSectionType
]);
(()=>{
    const e = new Error("Cannot find module 'sanity'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const heroSectionType = defineType({
    name: 'heroSection',
    title: 'Hero Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
            title: 'Heading',
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'subheading',
            type: 'text',
            title: 'Subheading'
        }),
        defineField({
            name: 'backgroundImage',
            type: 'image',
            title: 'Background Image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'ctaLabel',
            type: 'string',
            title: 'CTA Button Label'
        }),
        defineField({
            name: 'ctaLink',
            type: 'string',
            title: 'CTA Button Link (URL or Path)'
        })
    ],
    preview: {
        select: {
            title: 'heading',
            media: 'backgroundImage'
        },
        prepare ({ title, media }) {
            return {
                title: title || 'Hero Section',
                subtitle: 'Hero Section',
                media: media
            };
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemaTypes/blocks/textWithImageSection.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "textWithImageSectionType",
    ()=>textWithImageSectionType
]);
(()=>{
    const e = new Error("Cannot find module 'sanity'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const textWithImageSectionType = defineType({
    name: 'textWithImageSection',
    title: 'Text with Image Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
            title: 'Heading'
        }),
        defineField({
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ],
            title: 'Content'
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true
            },
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'imagePosition',
            type: 'string',
            title: 'Image Position',
            options: {
                list: [
                    {
                        title: 'Left',
                        value: 'left'
                    },
                    {
                        title: 'Right',
                        value: 'right'
                    }
                ],
                layout: 'radio'
            },
            initialValue: 'left'
        })
    ],
    preview: {
        select: {
            title: 'heading',
            media: 'image'
        },
        prepare ({ title, media }) {
            return {
                title: title || 'Text with Image Section',
                subtitle: 'Text with Image',
                media: media
            };
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemaTypes/blocks/callToActionSection.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "callToActionSectionType",
    ()=>callToActionSectionType
]);
(()=>{
    const e = new Error("Cannot find module 'sanity'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const callToActionSectionType = defineType({
    name: 'callToActionSection',
    title: 'Call to Action Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
            title: 'Heading',
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'text',
            type: 'text',
            title: 'Short Description'
        }),
        defineField({
            name: 'buttonLabel',
            type: 'string',
            title: 'Button Label',
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'buttonLink',
            type: 'string',
            title: 'Button Link',
            validation: (Rule)=>Rule.required()
        })
    ],
    preview: {
        select: {
            title: 'heading'
        },
        prepare ({ title }) {
            return {
                title: title || 'Call to Action',
                subtitle: 'CTA Section'
            };
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemaTypes/blocks/gallerySection.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gallerySectionType",
    ()=>gallerySectionType
]);
(()=>{
    const e = new Error("Cannot find module 'sanity'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const gallerySectionType = defineType({
    name: 'gallerySection',
    title: 'Image Gallery Section',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
            title: 'Gallery Heading (Optional)'
        }),
        defineField({
            name: 'images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                }
            ],
            title: 'Images',
            validation: (Rule)=>Rule.min(1).required()
        })
    ],
    preview: {
        select: {
            title: 'heading',
            images: 'images'
        },
        prepare ({ title, images }) {
            return {
                title: title || 'Gallery Section',
                subtitle: images ? `${images.length} images` : 'Gallery Section'
            };
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/schemaTypes/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schema",
    ()=>schema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$staff$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/staff.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/news.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$page$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/page.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$calendarEvent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/calendarEvent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$hallOfFame$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/hallOfFame.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$anniversaryPlan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/anniversaryPlan.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$heroSection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/blocks/heroSection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$textWithImageSection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/blocks/textWithImageSection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$callToActionSection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/blocks/callToActionSection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$gallerySection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/blocks/gallerySection.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const schema = {
    types: [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$staff$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staffType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["newsType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$page$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$calendarEvent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calendarEventType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$hallOfFame$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hallOfFameType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$anniversaryPlan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["anniversaryPlanType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$heroSection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroSectionType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$textWithImageSection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textWithImageSectionType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$callToActionSection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callToActionSectionType"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$blocks$2f$gallerySection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gallerySectionType"]
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sanity/sanity.config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'sanity'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'sanity/desk'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/schemaTypes/index.ts [app-client] (ecmascript)");
;
;
;
const projectId = ("TURBOPACK compile-time value", "yi6lk936") || 'your-project-id';
const dataset = ("TURBOPACK compile-time value", "production") || 'production';
const __TURBOPACK__default__export__ = defineConfig({
    basePath: '/admin',
    projectId,
    dataset,
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"],
    plugins: [
        deskTool()
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/Studio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Studio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-sanity/dist/studio/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/sanity.config.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Studio() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NextStudio"], {
        config: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$sanity$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }, void 0, false, {
        fileName: "[project]/src/components/admin/Studio.tsx",
        lineNumber: 7,
        columnNumber: 12
    }, this);
}
_c = Studio;
var _c;
__turbopack_context__.k.register(_c, "Studio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next-sanity/dist/NextStudioNoScript.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>NextStudioLayout,
    "t",
    ()=>NextStudioNoScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
const style = {
    height: "100vh",
    maxHeight: "100dvh",
    overscrollBehavior: "none",
    WebkitFontSmoothing: "antialiased",
    overflow: "auto"
};
const NextStudioLayout = ({ children })=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        id: "sanity",
        "data-ui": "NextStudioLayout",
        style,
        children
    });
};
const styles = {
    outer: {
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        background: "#fff",
        zIndex: 1
    },
    inner: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        fontFamily: "helvetica, arial, sans-serif"
    }
};
const NextStudioNoScript = ()=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("noscript", {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            style: styles.outer,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                style: styles.inner,
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("h1", {
                        children: "JavaScript disabled"
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("p", {
                        children: [
                            "Please ",
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("a", {
                                href: "https://www.enable-javascript.com/",
                                children: "enable JavaScript"
                            }),
                            " in your browser and reload the page to proceed."
                        ]
                    })
                ]
            })
        })
    });
;
 //# sourceMappingURL=NextStudioNoScript.js.map
}),
"[project]/node_modules/next-sanity/dist/studio/client-component/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NextStudio",
    ()=>NextStudioLazyClientComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
const NextStudioClientComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/node_modules/next-sanity/dist/NextStudio.js [app-client] (ecmascript, async loader)"));
function NextStudioLazyClientComponent(props) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: null,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(NextStudioClientComponent, {
            ...props
        })
    });
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/next-sanity/dist/studio/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NextStudio",
    ()=>NextStudioWithBridge,
    "metadata",
    ()=>metadata,
    "viewport",
    ()=>viewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$NextStudioNoScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-sanity/dist/NextStudioNoScript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$client$2d$component$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-sanity/dist/studio/client-component/index.js [app-client] (ecmascript)");
;
;
;
;
const viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover"
};
const metadata = {
    referrer: "same-origin",
    robots: "noindex"
};
const bridgeScript = "https://core.sanity-cdn.com/bridge.js";
function NextStudioWithBridge(props) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preloadModule"])(bridgeScript, {
        as: "script"
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("script", {
                src: bridgeScript,
                async: true,
                type: "module",
                "data-sanity-core": true
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$client$2d$component$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextStudio"], {
                ...props
            })
        ]
    });
}
;
 //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=_cc8240bd._.js.map