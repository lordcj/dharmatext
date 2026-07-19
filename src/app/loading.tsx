/**
 * Global Loading Skeleton
 * Improves Core Web Vitals (INP) by showing instant feedback.
 */
export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="space-y-4 text-center">
                <div className="text-5xl font-serif text-gold-400/30 animate-pulse select-none">ॐ</div>
                <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-gold-400/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gold-400/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gold-400/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    );
}
