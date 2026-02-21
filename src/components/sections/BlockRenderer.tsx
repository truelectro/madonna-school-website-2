import { HeroSection } from "./blocks/HeroSection";
import { TextWithImageSection } from "./blocks/TextWithImageSection";
import { CallToActionSection } from "./blocks/CallToActionSection";
import { GallerySection } from "./blocks/GallerySection";

export function BlockRenderer({ blocks }: { blocks: any[] }) {
    if (!blocks || blocks.length === 0) return null;

    return (
        <>
            {blocks.map((block: any, index: number) => {
                const type = block._type;
                const key = block._key || String(index);

                switch (type) {
                    case "heroSection":
                        return <HeroSection key={key} data={block} />;
                    case "textWithImageSection":
                        return <TextWithImageSection key={key} data={block} />;
                    case "callToActionSection":
                        return <CallToActionSection key={key} data={block} />;
                    case "gallerySection":
                        return <GallerySection key={key} data={block} />;
                    default:
                        console.warn(`Unknown block type: ${type}`);
                        return null;
                }
            })}
        </>
    );
}
