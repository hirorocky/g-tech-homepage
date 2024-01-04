import type { Metadata } from 'next'
import '@/styles/globals.css'
import styles from '@/styles/layout.module.scss'
import Image from 'next/image'
import { anton } from './fonts'

export const metadata: Metadata = {
  title: 'G-Tech',
  description: 'Connect in G-tech! コミュニティに参加してTechスキルの​ネットワークをつくりませんか？',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
{
  return (
    <html lang="ja">
      <body>
        <header className={styles.header}>
          <div className={`${styles.logo} ${anton.className}`}>
            <Image
              src="/logo.png"
              alt="G-tech Logo"
              width={52}
              height={54}
            />
            <div>G-Tech Tokyo</div>
          </div>
          <div>
            <a
              href="https://discord.com/invite/xSDd9qvZB7"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles['join-discord--pc']} ${anton.className}`}
            >
              Discordに参加
            </a>
            <a
              href="https://discord.com/invite/xSDd9qvZB7"
              target="_blank"
              rel="noopener noreferrer"
              className={styles['join-discord--sp']}
            >
              <Image
                src="/discord.png"
                alt="join discord"
                width={65}
                height={64}
              />
            </a>
          </div>
        </header>
        {children}
        <footer className={`${styles.footer} ${anton.className}`}>
          © 2024 by G-tech Tokyo
        </footer>
      </body>
    </html>
  )
}
