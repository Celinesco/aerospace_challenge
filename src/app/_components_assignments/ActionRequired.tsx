'use client';
import { Button } from "@tremor/react";

export default function ActionRequired({ action }: { action: boolean }) {
    const shimmer =
        'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-red-500 before:to-transparent';

    if (action) {
        return (
            <div className={`${shimmer} relative flex items-center justify-center h-24 mb-4 rounded bg-red-200`}>
                <p className="text-2xl text-gray-900 dark:text-gray-500">
                    ⚠️ Action required
                </p>
                <Button className="absolute top-2 right-2">Fix all your problems</Button>
            </div>
        )
    } else {
        return (
            <div className="relative flex items-center justify-center h-24 mb-4 rounded bg-green-100">
                <p className="text-2xl text-gray-900 dark:text-gray-500">
                    No action is required
                </p>
            </div>
        )

    }
}