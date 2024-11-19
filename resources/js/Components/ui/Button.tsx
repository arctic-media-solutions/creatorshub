import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-white dark:ring-offset-gray-950",
    {
        variants: {
            variant: {
                default:
                    "bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90",
                destructive:
                    "bg-red-500 text-gray-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90",
                outline:
                    "border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50",
                secondary:
                    "bg-gray-100 text-gray-900 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",
                ghost:
                    "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50",
                link: "text-gray-900 underline-offset-4 hover:underline dark:text-gray-50",
                gradient:
                    "bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white",
                success:
                    "bg-green-500 text-white hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800",
                warning:
                    "bg-yellow-500 text-white hover:bg-yellow-600 dark:bg-yellow-700 dark:hover:bg-yellow-800",
                info: "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800",
                light:
                    "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-800",
            },
            size: {
                default: "h-10 px-4 py-2",
                xs: "h-7 px-2 text-xs",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                xl: "h-12 rounded-md px-10 text-lg",
                icon: "h-10 w-10",
            },
            rounded: {
                default: "rounded-md",
                full: "rounded-full",
                none: "rounded-none",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            rounded: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
         className,
         variant,
         size,
         rounded,
         asChild = false,
         loading = false,
         leftIcon,
         rightIcon,
         children,
         disabled,
         ...props
     }, ref) => {
        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                className={cn(
                    buttonVariants({ variant, size, rounded, className })
                )}
                ref={ref}
                disabled={disabled || loading}
                {...props}
            >
                {loading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {!loading && leftIcon && (
                    <span className="mr-2 inline-flex">{leftIcon}</span>
                )}
                {children}
                {!loading && rightIcon && (
                    <span className="ml-2 inline-flex">{rightIcon}</span>
                )}
            </Comp>
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };
