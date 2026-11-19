export const siteTitle = 'Slowlane';
export const siteUrl = 'https://pyoungoh.github.io';
export const supportEmail = 'slowlane.dev@gmail.com';

export const headerLinks = [
  { href: '/', label: 'Home' },
  { href: '/pacelab/', label: 'Pace Lab' },
  { href: '/dosebutler/', label: 'DoseButler' },
];

export const paceLabStoreLinks = {
  ko: [
    { href: 'https://apps.apple.com/kr/app/pace-lab-running-calculator/id6759136568', label: 'App Store' },
    { href: 'https://play.google.com/store/apps/details?id=com.kr.slowlane.pacelab', label: 'Google Play' },
  ],
  en: [
    { href: 'https://apps.apple.com/us/app/pace-lab-running-calculator/id6759136568', label: 'App Store' },
    { href: 'https://play.google.com/store/apps/details?id=com.kr.slowlane.pacelab', label: 'Google Play' },
  ],
  ja: [
    { href: 'https://apps.apple.com/jp/app/pace-lab-running-calculator/id6759136568', label: 'App Store' },
    { href: 'https://play.google.com/store/apps/details?id=com.kr.slowlane.pacelab', label: 'Google Play' },
  ],
} as const;

export const paceLabDownloadCta = {
  ko: {
    landing: {
      title: '앱 다운로드',
      description: '아이폰과 안드로이드에서 Pace Lab을 무료로 사용할 수 있습니다.',
      links: paceLabStoreLinks.ko,
    },
    detail: {
      title: '앱 다운로드',
      description: 'Pace Lab 앱에서는 통과 시간표, 대회 기록 예측, 심박존, 보급 전략 같은 더 많은 기능을 함께 사용할 수 있습니다.',
      links: paceLabStoreLinks.ko,
    },
  },
  en: {
    landing: {
      title: 'Get the app',
      description: 'Available free on iPhone and Android.',
      links: paceLabStoreLinks.en,
    },
    detail: {
      title: 'Get the app',
      description: 'Use the full Pace Lab app for more features like split charts, race prediction, heart rate zones, and fueling planning.',
      links: paceLabStoreLinks.en,
    },
  },
  ja: {
    landing: {
      title: 'Get the app',
      description: 'Pace Labをダウンロード:',
      links: paceLabStoreLinks.ja,
    },
    detail: {
      title: 'アプリをダウンロード',
      description: 'Pace Labアプリでは、通過タイム表、レース予想タイム、心拍ゾーン、補給戦略など、さらに多くの機能を利用できます。',
      links: paceLabStoreLinks.ja,
    },
  },
} as const;

export const paceLabFeatures = {
  ko: [
    { href: '/pacelab/pace-calculator/', title: '속도 계산기', description: '거리와 시간을 기준으로 러닝 페이스 및 시속을 계산합니다.' },
    { href: '/pacelab/race-pace-calculator/', title: '목표 페이스 계산기', description: '목표 기록과 거리를 기준으로 목표 페이스를 계산하고, 자세한 통과 시간표를 확인합니다.' },
    { href: '/pacelab/pace-speed-converter/', title: '페이스-속도 변환', description: '도로 러닝, 러닝머신, 트랙 훈련에서 페이스 및 시속을 서로 변환합니다.' },
    { href: '/pacelab/400m-lap-calculator/', title: '400m 랩 계산기', description: '트랙 훈련을 위해 페이스를 400m 랩 기록으로, 또는 400m 랩 기록을 페이스로 변환합니다.' },
    { href: '/pacelab/training-pace-calculator/', title: '훈련 페이스 계산기', description: 'Easy Run, Marathon Pace, Tempo (LT), Interval (VO2)에 대한 권장 훈련 페이스를 확인합니다.' },
    { href: '/pacelab/heart-rate-zone-calculator/', title: '심박존 계산기', description: '나이, 최대 심박수, 안정 시 심박수, 역치 심박수를 기준으로 심박존을 계산합니다.' },
    { href: '/pacelab/race-time-predictor/', title: '대회 기록 예측', description: '최근 기록을 바탕으로 기록 기반 예측과 VDOT 기반 예측으로 대회 기록을 추정합니다.' },
    { href: '/pacelab/energy-gel-calculator/', title: '에너지젤 보급 계산기', description: '대회 거리, 페이스, 목표 기록을 바탕으로 권장 에너지젤 개수와 섭취 시점을 계획합니다.' },
  ],
  en: [
    { href: '/pacelab/en/pace-calculator/', title: 'Pace calculator', description: 'Calculate running pace and speed from your distance and time.' },
    { href: '/pacelab/en/race-pace-calculator/', title: 'Race pace calculator', description: 'Calculate the target pace for your goal time and distance, then view detailed race splits.' },
    { href: '/pacelab/en/pace-speed-converter/', title: 'Pace-speed converter', description: 'Convert between running pace and speed for road, treadmill, and track sessions.' },
    { href: '/pacelab/en/400m-lap-calculator/', title: '400m lap calculator', description: 'Convert pace to 400m lap time, or lap time to pace, for track workouts.' },
    { href: '/pacelab/en/training-pace-calculator/', title: 'Training pace calculator', description: 'Get recommended training paces for easy runs, marathon pace, threshold, and intervals.' },
    { href: '/pacelab/en/heart-rate-zone-calculator/', title: 'Heart rate zone calculator', description: 'Calculate heart rate zones using age, max HR, resting HR, or lactate threshold HR.' },
    { href: '/pacelab/en/race-time-predictor/', title: 'Race time predictor', description: 'Predict race times from a recent result with record-based and VDOT-based estimates.' },
    { href: '/pacelab/en/energy-gel-calculator/', title: 'Energy gel calculator', description: 'Plan gel count and intake timing based on your race distance, pace, and goal time.' },
  ],
  ja: [
    { href: '/pacelab/ja/pace-calculator/', title: 'ペース計算機', description: '距離と時間から、ランニングのペースと速度を計算します。' },
    { href: '/pacelab/ja/race-pace-calculator/', title: 'レースペース計算', description: '目標タイムと距離から目標ペースを計算し、詳細な通過タイム表を確認できます。' },
    { href: '/pacelab/ja/pace-speed-converter/', title: 'ペース・速度変換', description: 'ロード、トレッドミル、トラック練習向けに、ペースと速度を相互に変換します。' },
    { href: '/pacelab/ja/400m-lap-calculator/', title: '400mラップ計算', description: 'トラック練習向けに、ペースを400mラップタイムへ、またはラップタイムをペースへ変換します。' },
    { href: '/pacelab/ja/training-pace-calculator/', title: 'トレーニングペース計算', description: 'イージーラン、マラソンペース、閾値走、インターバルの推奨トレーニングペースを確認できます。' },
    { href: '/pacelab/ja/heart-rate-zone-calculator/', title: '心拍ゾーン', description: '年齢、最大心拍数、安静時心拍数、乳酸閾値心拍数をもとに心拍ゾーンを計算します。' },
    { href: '/pacelab/ja/race-time-predictor/', title: 'レース予想タイム', description: '最近の記録から、記録ベースの予測とVDOT予測でレースタイムを予測します。' },
    { href: '/pacelab/ja/energy-gel-calculator/', title: 'エナジージェル計算', description: 'レース距離、ペース、目標タイムをもとに、推奨ジェル本数と補給タイミングを計画します。' },
  ],
} as const;

export const paceLabRelatedTools = {
  ko: {
    title: '관련 도구',
    tools: paceLabFeatures.ko,
  },
  en: {
    title: 'Related tools',
    tools: paceLabFeatures.en,
  },
  ja: {
    title: '関連ツール',
    tools: paceLabFeatures.ja,
  },
} as const;

export function getPaceLabRelatedTools(lang: keyof typeof paceLabRelatedTools, currentSlug: string) {
  const tools = paceLabRelatedTools[lang].tools.filter((tool) => !tool.href.endsWith(`/${currentSlug}/`));
  return {
    title: paceLabRelatedTools[lang].title,
    tools,
  };
}

// DoseButler (약당번)
// 스토어 링크는 출시 후 채운다. 비어 있으면 다운로드 CTA에 배지 없이 안내 문구만 표시된다.
export const doseButlerStoreLinks = {
  ko: [],
  en: [],
  ja: [],
} as const satisfies Record<'ko' | 'en' | 'ja', ReadonlyArray<{ href: string; label: string }>>;

export const doseButlerDownloadCta = {
  ko: {
    landing: {
      title: '앱 다운로드',
      description: '약당번은 iOS와 Android 앱으로 곧 출시됩니다.',
      links: doseButlerStoreLinks.ko,
    },
    detail: {
      title: '앱 다운로드',
      description: '약당번 앱은 곧 출시됩니다. 복약 알림, 오늘 복약 체크, 복약 기록을 한 앱에서 사용할 수 있습니다.',
      links: doseButlerStoreLinks.ko,
    },
  },
  en: {
    landing: {
      title: 'Get the app',
      description: 'DoseButler is coming soon to iOS and Android.',
      links: doseButlerStoreLinks.en,
    },
    detail: {
      title: 'Get the app',
      description: 'DoseButler is coming soon. Medication reminders, a daily checklist, and dose history, all in one app.',
      links: doseButlerStoreLinks.en,
    },
  },
  ja: {
    landing: {
      title: 'アプリをダウンロード',
      description: 'おくすり番はiOSとAndroidで近日公開予定です。',
      links: doseButlerStoreLinks.ja,
    },
    detail: {
      title: 'アプリをダウンロード',
      description: 'おくすり番は近日公開予定です。服薬リマインダー、今日の服薬チェック、服薬記録をひとつのアプリで使えます。',
      links: doseButlerStoreLinks.ja,
    },
  },
} as const;

export const doseButlerFeatures = {
  ko: [
    { href: '/dosebutler/medication-reminder/', title: '복약 알림', description: '정해진 시간에 알림을 받고, 알림에서 바로 복용 완료·10분 뒤 다시 알림·건너뛰기를 선택합니다.' },
    { href: '/dosebutler/daily-medication-checklist/', title: '오늘 복약 체크', description: '오늘 먹을 약을 시간순으로 확인하고 탭 한 번으로 복용을 체크합니다.' },
    { href: '/dosebutler/medication-schedule/', title: '복약 일정 등록', description: '매일, 요일 반복, N일 간격으로 하루 여러 번의 복용 시간을 등록합니다.' },
    { href: '/dosebutler/medication-history/', title: '복약 기록과 복용률', description: '이번 주와 이번 달 복용률을 확인하고, 달력에서 날짜별 복약 기록을 살펴봅니다.' },
    { href: '/dosebutler/pill-organizer/', title: '약장 관리', description: '약의 이름, 복용량, 모양과 색상을 정리하고, 잠시 쉬는 약은 기록을 보존한 채 비활성화합니다.' },
  ],
  en: [
    { href: '/dosebutler/en/medication-reminder/', title: 'Medication reminders', description: 'Get reminders on time and mark a dose as taken, snooze for 10 minutes, or skip it right from the notification.' },
    { href: '/dosebutler/en/daily-medication-checklist/', title: 'Daily medication checklist', description: "See today's doses in time order and check each one off with a tap." },
    { href: '/dosebutler/en/medication-schedule/', title: 'Medication schedule', description: 'Set up daily, weekday, or every-N-days schedules with multiple dose times per day.' },
    { href: '/dosebutler/en/medication-history/', title: 'Dose history and adherence', description: 'Review weekly and monthly adherence and browse your dose history by date on a calendar.' },
    { href: '/dosebutler/en/pill-organizer/', title: 'Pill organizer', description: 'Keep each medication organized by name, dose, shape, and color, and pause one without losing its history.' },
  ],
  ja: [
    { href: '/dosebutler/ja/medication-reminder/', title: '服薬リマインダー', description: '決まった時間に通知。通知から「服用済み」「10分後に再通知」「スキップ」をすぐに選べます。' },
    { href: '/dosebutler/ja/daily-medication-checklist/', title: '今日の服薬チェック', description: '今日飲むお薬を時間順に確認し、ワンタップで服用をチェックできます。' },
    { href: '/dosebutler/ja/medication-schedule/', title: '服薬スケジュール', description: '毎日、曜日指定、N日おきのスケジュールを、1日に複数回の服用時間で登録できます。' },
    { href: '/dosebutler/ja/medication-history/', title: '服薬記録と服用率', description: '今週・今月の服用率を確認し、カレンダーで日ごとの服薬記録を見られます。' },
    { href: '/dosebutler/ja/pill-organizer/', title: 'お薬の管理', description: 'お薬の名前、服用量、形、色を整理。お休み中のお薬は記録を残したまま無効にできます。' },
  ],
} as const;

export const doseButlerRelatedTools = {
  ko: { title: '관련 기능', tools: doseButlerFeatures.ko },
  en: { title: 'Related features', tools: doseButlerFeatures.en },
  ja: { title: '関連機能', tools: doseButlerFeatures.ja },
} as const;

export function getDoseButlerRelatedTools(lang: keyof typeof doseButlerRelatedTools, currentSlug: string) {
  const tools = doseButlerRelatedTools[lang].tools.filter((tool) => !tool.href.endsWith(`/${currentSlug}/`));
  return {
    title: doseButlerRelatedTools[lang].title,
    tools,
  };
}
