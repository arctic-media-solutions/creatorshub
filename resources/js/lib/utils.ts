import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistance, format } from "date-fns";

/**
 * Merge class names with Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Format currency values
 */
export function formatCurrency(amount: number, currency: string = "USD"): string {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
    }).format(amount);
}

/**
 * Format number with suffix (K, M, B)
 */
export function formatNumber(num: number): string {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + "B";
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
}

/**
 * Format date in relative time (e.g., "2 hours ago")
 */
export function formatRelativeTime(date: Date | string): string {
    return formatDistance(new Date(date), new Date(), { addSuffix: true });
}

/**
 * Format date in custom format
 */
export function formatDate(date: Date | string, formatString: string = "PPP"): string {
    return format(new Date(date), formatString);
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, length: number): string {
    return text.length > length ? text.substring(0, length) + "..." : text;
}

/**
 * Generate random color
 */
export function generateRandomColor(): string {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;

    return function executedFunction(...args: Parameters<T>) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Create URL-friendly slug
 */
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
}

/**
 * Get initials from name
 */
export function getInitials(name: string): string {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error("Failed to copy text: ", err);
        return false;
    }
}

/**
 * Get random item from array
 */
export function getRandomItem<T>(items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
}

/**
 * Check if device is mobile
 */
export function isMobile(): boolean {
    return window.innerWidth <= 768;
}

/**
 * Parse and validate JSON string
 */
export function parseJSON<T>(jsonString: string, fallback: T): T {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        return fallback;
    }
}

/**
 * Generate random ID
 */
export function generateId(length: number = 8): string {
    return Math.random()
        .toString(36)
        .substring(2, length + 2);
}

/**
 * Calculate read time for text content
 */
export function calculateReadTime(content: string, wordsPerMinute: number = 200): number {
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
}

/**
 * Format file size
 */
export function formatFileSize(bytes: number): string {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "0 Bytes";
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
}

/**
 * Deep merge objects
 */
export function deepMerge<T extends object = object>(
    target: T,
    source: T
): T {
    const output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((key) => {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] });
                } else {
                    output[key] = deepMerge(target[key], source[key]);
                }
            } else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    return output;
}

/**
 * Check if value is object
 */
function isObject(item: any): item is object {
    return item && typeof item === "object" && !Array.isArray(item);
}
