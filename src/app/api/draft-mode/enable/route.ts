import { validatePreviewUrl } from '@sanity/preview-url-secret'
import { draftMode } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/sanity/lib/client'

const token = process.env.SANITY_API_READ_TOKEN

export async function GET(request: NextRequest) {
    const { isValid, redirectTo = '/' } = await validatePreviewUrl(
        client.withConfig({ token }),
        request.url
    )

    if (!isValid) {
        return new NextResponse('Invalid preview secret', { status: 401 })
    }

    const draft = await draftMode()
    draft.enable()

    return NextResponse.redirect(new URL(redirectTo, request.url))
}
