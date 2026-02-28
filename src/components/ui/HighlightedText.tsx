/**
 * HighlightedText — Safely renders CMS text that may contain
 * <span class="text-sky-400">…</span> highlights WITHOUT using
 * dangerouslySetInnerHTML.
 *
 * Any HTML other than the whitelisted highlight pattern is rendered
 * as escaped plain text, preventing XSS.
 */

import React from "react";

interface HighlightedTextProps {
    text: string;
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    highlightClassName?: string;
}

/**
 * Parses the input string and returns React elements.
 * Only `<span class="text-sky-400">…</span>` (single or double quotes)
 * is rendered as an actual <span>. Everything else stays as plain text.
 */
function parseHighlights(
    text: string,
    highlightClassName: string
): React.ReactNode[] {
    // Match <span class="text-sky-400">…</span> with either quote style
    const regex = /<span\s+class=["']text-sky-400["']\s*>(.*?)<\/span>/gi;

    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
        // Push the text before this match (plain, escaped by React)
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }
        // Push the highlighted span as a React element
        parts.push(
            <span key={match.index} className={highlightClassName}>
                {match[1]}
            </span>
        );
        lastIndex = regex.lastIndex;
    }

    // Push any remaining text after the last match
    if (lastIndex < text.length) {
        // Strip any remaining HTML tags as a safety net
        parts.push(text.slice(lastIndex).replace(/<[^>]*>/g, ""));
    }

    return parts;
}

export function HighlightedText({
    text,
    as: Tag = "span",
    className,
    highlightClassName = "text-sky-400",
}: HighlightedTextProps) {
    const children = parseHighlights(text, highlightClassName);

    return <Tag className={className}>{children}</Tag>;
}
