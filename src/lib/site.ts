export const siteTitle = 'Slowlane';
export const siteUrl = 'https://pyoungoh.github.io';
export const supportEmail = 'slowlane.dev@gmail.com';

export const headerLinks = [
  { href: '/', label: 'Home' },
  { href: '/pacelab/', label: 'Pace Lab' },
];

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
