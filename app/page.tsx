"use client"

import Image from 'next/image'
import styles from '@/styles/page.module.scss'
import { anton } from './fonts'
import { useState } from 'react'

export default function Home()
{
  const [isAboutExpanded, setIsExpanded] = useState(false)
  const handleExpandClick = () =>
  {
    setIsExpanded(true)
  }

  const aboutExpandLinkClasses = isAboutExpanded ? styles.disabled : ""
  const aboutExpandedClasses = isAboutExpanded ? "" : styles.disabled

  return (
    <main className={styles.container}>
      <div className={styles['welcome-image']}>
        <div className={styles['welcome-image__box']}>
          <div className={`${styles.title} ${anton.className}`}>
            Connect
            <br />
            in G-Tech!
          </div>
          <div className={styles.description}>
            コミュニティに参加してTechスキルの
            <br />
            ネットワークをつくりませんか？
          </div>
        </div>
      </div>

      <h2 className={`${styles['header-2']} ${anton.className}`}>G-Tech Tokyo とは</h2>
      <div className={styles['about--pc']}>
        <div className={styles.description}>
          <p className={styles.divided}>
            G-Tech Tokyoは、IT系の仕事に携わる人々が集うLGBTコミュニティです。
            テクノロジーを基盤にして、多様なアイデンティティを持った人と人が本当に心から繋がることが出来るコミュニティを作ることを目指しています。
          </p>
          <p>
            プログラマーやシステムエンジニア、プロダクトマネージャーなどシステム開発に関わる仕事をしている皆さん、ぜひお気軽に参加してみてください。普段の仕事に関するお話や技術的な知識の交換の機会を作ったり、イチからプロダクトを開発したいという想いを持つ人同士を繋げる活動も行っています。
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src="/gtech_pro.webp"
            alt="G-Tech Tokyoのイメージ画像"
            fill
          />
        </div>
      </div>
      <div className={styles['about--sp']}>
        <p>
          G-Tech Tokyoは、IT系の仕事に携わる人々が集うLGBTコミュニティです。
        </p>
        <a onClick={handleExpandClick} className={aboutExpandLinkClasses}>↓もっとみる</a>
        <p className={`${aboutExpandedClasses} ${styles.divided}`}>
          テクノロジーを基盤にして、多様なアイデンティティを持った人と人が本当に心から繋がることが出来るコミュニティを作ることを目指しています。
        </p>
        <p className={aboutExpandedClasses}>
          プログラマーやシステムエンジニア、プロダクトマネージャーなどシステム開発に関わる仕事をしている皆さん、ぜひお気軽に参加してみてください。普段の仕事に関するお話や技術的な知識の交換の機会を作ったり、イチからプロダクトを開発したいという想いを持つ人同士を繋げる活動も行っています。
        </p>
      </div>

      <h2 className={`${styles['header-2']} ${anton.className}`}>G-Tech Tokyo の活動内容</h2>
      <div className={styles['activity-container']}>
        <div className={styles['activity-item']}>
          <Image
            src="/hamii.png"
            alt="ハミーのイメージ画像"
            width={482}
            height={271}
          />
          <div className={styles.title}>
            Hamii - Gay Community Hub -
          </div>
          <div className={styles.description}>
            LGBTコミュニティ紹介サイトを運営しています
          </div>
        </div>
        <div className={styles['activity-item']}>
          <Image
            src="/mokumoku.png"
            alt="もくもく会のイメージ画像"
            width={482}
            height={271}
          />
          <div className={styles.title}>
            もくもく会
          </div>
          <div className={styles.description}>
            毎週金曜日に新宿の貸し会議室で開催しています（不定期休み有り）
          </div>
        </div>
        <div className={styles['activity-item']}>
          <Image
            src="/boardgame.png"
            alt="月一交流会のイメージ画像"
            width={482}
            height={271}
          />
          <div className={styles.title}>
            月１交流会
          </div>
          <div className={styles.description}>
            食事+ボードゲームを通してコミュニティメンバーでの親睦を深める会です
          </div>
        </div>
        <div className={styles['activity-item']}>
          <Image
            src="/gtech_pro.webp"
            alt="GTech Proのイメージ画像"
            width={482}
            height={271}
          />
          <div className={styles.title}>
            G-Tech Pro
          </div>
          <div className={styles.description}>
            開発に興味があるメンバー同士でお互いの経験を活かしつつゼロからプロダクト開発を行っています
          </div>
        </div>
      </div>

      <div className={styles['join-discord-box']}>
        <div className={styles['join-discord-box__title']}>
          <Image
            src="/discord.png"
            alt="Discordのアイコン"
            width={80}
            height={81}
          />
          <div className={`${styles.text} ${anton.className}`}>Join our Discord!</div>
        </div>
        <div>コミュニケーションは基本的にDiscord上でわいわい交流しています。</div>
        <div>興味のある方は下のボタンからお気軽にご参加ください！​</div>
        <a
          href="https://discord.com/invite/xSDd9qvZB7"
          target="_blank"
          rel="noopener noreferrer"
          className={styles['join-discord-box__button']}>
          Discordに参加する
        </a>
      </div>
    </main>
  )
}
