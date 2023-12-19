'use client';
import { Button } from "@tremor/react";

export default function ActionRequired({ action }: { action: boolean }) {

    const handleClick = async () => {
        // tried with put, post but both methods are not allowed
        // left get and make nd make an alert

        try {
            const res = await fetch(`${process.env.API_URL}${process.env.B_ENDPOINT}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            alert("Problem solved, you saved the planet!")
            if (!res.ok) {
                throw new Error("Something went wrong")
            }
            const resJson = await res.json()

            // console.log(resJson)

        } catch (err) {
            console.log("ERROR", err)
        }
    }

    const shimmer =
        'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-red-500 before:to-transparent';

    if (action) {
        return (
            <div className={`${shimmer} relative flex items-center justify-center h-24 mb-4 rounded bg-red-200 dark:bg-red-900`}>
                <p className="text-2xl text-gray-900 dark:text-white">
                    ⚠️ Action required
                </p>
                <Button
                    onClick={handleClick} className="absolute top-2 right-2 dark:bg-blue-600 dark:text-white">Fix all</Button>
            </div>
        )
    } else {
        return (
            <div className="relative flex items-center justify-center h-24 mb-4 rounded bg-green-100 dark:bg-emerald-500">
                <p className="text-2xl text-gray-900">
                    No action is required
                </p>
            </div>
        )

    }
}