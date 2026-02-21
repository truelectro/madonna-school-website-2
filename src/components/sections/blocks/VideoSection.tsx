import { fileUrlFor } from '@/sanity/lib/client'

interface SanityFileAsset {
    _ref: string;
}

interface VideoSectionData {
    _type: 'videoSection';
    heading?: string;
    caption?: string;
    videoFile?: { asset?: SanityFileAsset };
    videoUrl?: string;
    background?: 'light' | 'dark';
}

// Convert a YouTube / Vimeo watch URL → embed URL
function toEmbedUrl(url: string): string {
    const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?rel=0`;

    const vmMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vmMatch) return `https://player.vimeo.com/video/${vmMatch[1]}`;

    return url; // already an embed URL or unrecognised
}

export function VideoSection({ data }: { data: VideoSectionData }) {
    const isDark = data.background === 'dark';

    // ── Resolve video source ──────────────────────────────────────────────────
    const fileAsset = data.videoFile?.asset;
    const directFileUrl = fileAsset?._ref ? fileUrlFor(fileAsset as SanityFileAsset) : null;
    const embedUrl = data.videoUrl ? toEmbedUrl(data.videoUrl) : null;

    // Uploaded file takes priority; fall back to embed URL
    const hasVideo = directFileUrl || embedUrl;

    if (!hasVideo) return null;

    return (
        <section className={`py-20 px-6 ${isDark ? 'bg-[#051324]' : 'bg-gray-50'}`}>
            <div className="container mx-auto max-w-5xl">

                {data.heading && (
                    <h2 className={`text-3xl md:text-4xl font-black text-center mb-4 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {data.heading}
                    </h2>
                )}

                {/* 16:9 responsive wrapper */}
                <div className="relative w-full overflow-hidden rounded-[24px] shadow-2xl aspect-video bg-black">

                    {directFileUrl ? (
                        // ── Native video file (drag & drop upload) ─────────────
                        <video
                            src={directFileUrl}
                            controls
                            playsInline
                            preload="metadata"
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        // ── YouTube / Vimeo embed ───────────────────────────────
                        <iframe
                            src={embedUrl!}
                            title={data.heading || 'Video'}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full border-0"
                        />
                    )}
                </div>

                {data.caption && (
                    <p className={`text-center mt-6 text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {data.caption}
                    </p>
                )}
            </div>
        </section>
    );
}
