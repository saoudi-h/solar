import { cn } from '@/lib/utils'
import './global.css'
import { RootProvider } from 'fumadocs-ui/provider'
import { Bricolage_Grotesque, Poppins, Victor_Mono } from 'next/font/google'
import type { ReactNode } from 'react'
import { Provider as JotaiProvider } from 'jotai'
import { ReactLenis } from 'lenis/react'

const heading = Bricolage_Grotesque({
    subsets: ['latin'],
    variable: '--font-heading',
})

const body = Poppins({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-body',
})

const mono = Victor_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
})

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="en"
            className={cn(heading.variable, body.variable, mono.variable, body.className)}
            suppressHydrationWarning>
            <body className="flex flex-col min-h-screen">
                <RootProvider>
                    <JotaiProvider>
                        <ReactLenis root options={{ autoRaf: true }}>
                            {children}
                        </ReactLenis>
                    </JotaiProvider>
                </RootProvider>
            </body>
        </html>
    )
}
