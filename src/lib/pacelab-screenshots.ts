import type { ImageMetadata } from 'astro';

import enPaceCalculatorImage from '../assets/pacelab/en/pace-calculator.png';
import enRacePaceImage from '../assets/pacelab/en/race-pace.png';
import enRaceSplitsImage from '../assets/pacelab/en/race-splits.png';
import enPaceSpeedConverterImage from '../assets/pacelab/en/pace-speed-converter.png';
import enLap400mImage from '../assets/pacelab/en/lap-400m.png';
import enTrainingPaceImage from '../assets/pacelab/en/training-pace.png';
import enHeartRateZonesImage from '../assets/pacelab/en/heart-rate-zones.png';
import enRacePredictorImage from '../assets/pacelab/en/race-predictor.png';
import enEnergyGelImage from '../assets/pacelab/en/energy-gel.png';
import jaPaceCalculatorImage from '../assets/pacelab/ja/pace-calculator.png';
import jaRacePaceImage from '../assets/pacelab/ja/race-pace.png';
import jaRaceSplitsImage from '../assets/pacelab/ja/race-splits.png';
import jaPaceSpeedConverterImage from '../assets/pacelab/ja/pace-speed-converter.png';
import jaLap400mImage from '../assets/pacelab/ja/lap-400m.png';
import jaTrainingPaceImage from '../assets/pacelab/ja/training-pace.png';
import jaHeartRateZonesImage from '../assets/pacelab/ja/heart-rate-zones.png';
import jaRacePredictorImage from '../assets/pacelab/ja/race-predictor.png';
import jaEnergyGelImage from '../assets/pacelab/ja/energy-gel.png';
import paceCalculatorImage from '../assets/pacelab/ko/pace-calculator.png';
import racePaceImage from '../assets/pacelab/ko/race-pace.png';
import raceSplitsImage from '../assets/pacelab/ko/race-splits.png';
import paceSpeedConverterImage from '../assets/pacelab/ko/pace-speed-converter.png';
import lap400mImage from '../assets/pacelab/ko/lap-400m.png';
import trainingPaceImage from '../assets/pacelab/ko/training-pace.png';
import heartRateZonesImage from '../assets/pacelab/ko/heart-rate-zones.png';
import racePredictorImage from '../assets/pacelab/ko/race-predictor.png';
import energyGelImage from '../assets/pacelab/ko/energy-gel.png';

type ScreenshotItem = {
  image: ImageMetadata;
  alt: string;
  caption?: string;
};

const paceLabKoFeatureScreenshots: Record<string, ScreenshotItem[]> = {
  'pace-calculator': [
    {
      image: paceCalculatorImage,
      alt: 'Pace Lab 속도 계산기 화면',
      caption: '속도 계산 결과를 한눈에 확인할 수 있습니다.',
    },
  ],
  'race-pace-calculator': [
    {
      image: racePaceImage,
      alt: 'Pace Lab 목표 페이스 계산기 화면',
      caption: '목표 기록 기준 레이스 페이스를 바로 계산합니다.',
    },
    {
      image: raceSplitsImage,
      alt: 'Pace Lab 통과 시간표 화면',
      caption: '계산한 페이스로 통과 시간표를 자세히 확인할 수 있습니다.',
    },
  ],
  'pace-speed-converter': [
    {
      image: paceSpeedConverterImage,
      alt: 'Pace Lab 페이스-속도 변환 화면',
      caption: '페이스와 시속을 빠르게 변환할 수 있습니다.',
    },
  ],
  '400m-lap-calculator': [
    {
      image: lap400mImage,
      alt: 'Pace Lab 400m 랩 계산기 화면',
      caption: '트랙 훈련에 맞는 400m 랩 기록을 쉽게 계산합니다.',
    },
  ],
  'training-pace-calculator': [
    {
      image: trainingPaceImage,
      alt: 'Pace Lab 훈련 페이스 계산기 화면',
      caption: '훈련 강도별 추천 페이스를 한 번에 정리해 줍니다.',
    },
  ],
  'heart-rate-zone-calculator': [
    {
      image: heartRateZonesImage,
      alt: 'Pace Lab 심박존 계산기 화면',
      caption: '훈련 목적에 맞는 심박 구간을 손쉽게 확인할 수 있습니다.',
    },
  ],
  'race-time-predictor': [
    {
      image: racePredictorImage,
      alt: 'Pace Lab 대회 기록 예측 화면',
      caption: '최근 기록을 바탕으로 예상 기록을 바로 확인할 수 있습니다.',
    },
  ],
  'energy-gel-calculator': [
    {
      image: energyGelImage,
      alt: 'Pace Lab 에너지젤 보급 계산기 화면',
      caption: '페이스와 목표 기록에 맞춰 보급 전략을 세울 수 있습니다.',
    },
  ],
};

const paceLabEnFeatureScreenshots: Record<string, ScreenshotItem[]> = {
  'pace-calculator': [
    {
      image: enPaceCalculatorImage,
      alt: 'Pace Lab pace calculator screen',
      caption: 'Check pace and speed at a glance.',
    },
  ],
  'race-pace-calculator': [
    {
      image: enRacePaceImage,
      alt: 'Pace Lab race pace calculator screen',
      caption: 'Set a goal time and get your target race pace instantly.',
    },
    {
      image: enRaceSplitsImage,
      alt: 'Pace Lab race splits screen',
      caption: 'Review detailed splits generated from your target pace.',
    },
  ],
  'pace-speed-converter': [
    {
      image: enPaceSpeedConverterImage,
      alt: 'Pace Lab pace-speed converter screen',
      caption: 'Convert pace and speed quickly for road or treadmill runs.',
    },
  ],
  '400m-lap-calculator': [
    {
      image: enLap400mImage,
      alt: 'Pace Lab 400m lap calculator screen',
      caption: 'Translate your pace into 400m lap targets for track sessions.',
    },
  ],
  'training-pace-calculator': [
    {
      image: enTrainingPaceImage,
      alt: 'Pace Lab training pace calculator screen',
      caption: 'See recommended paces for easy runs, marathon pace, threshold, and intervals.',
    },
  ],
  'heart-rate-zone-calculator': [
    {
      image: enHeartRateZonesImage,
      alt: 'Pace Lab heart rate zone calculator screen',
      caption: 'View heart rate zones for different training efforts.',
    },
  ],
  'race-time-predictor': [
    {
      image: enRacePredictorImage,
      alt: 'Pace Lab race time predictor screen',
      caption: 'Estimate future race times from a recent result.',
    },
  ],
  'energy-gel-calculator': [
    {
      image: enEnergyGelImage,
      alt: 'Pace Lab energy gel calculator screen',
      caption: 'Plan fueling by pace, distance, and goal time.',
    },
  ],
};

const paceLabJaFeatureScreenshots: Record<string, ScreenshotItem[]> = {
  'pace-calculator': [
    {
      image: jaPaceCalculatorImage,
      alt: 'Pace Lab ペース計算機画面',
      caption: '距離と時間から、ペースと速度をすぐに確認できます。',
    },
  ],
  'race-pace-calculator': [
    {
      image: jaRacePaceImage,
      alt: 'Pace Lab レースペース計算画面',
      caption: '目標タイムからレースペースをすばやく計算できます。',
    },
    {
      image: jaRaceSplitsImage,
      alt: 'Pace Lab 通過タイム表画面',
      caption: '計算したペースをもとに、詳細な通過タイム表を確認できます。',
    },
  ],
  'pace-speed-converter': [
    {
      image: jaPaceSpeedConverterImage,
      alt: 'Pace Lab ペース・速度変換画面',
      caption: 'ペースと速度をすばやく相互変換できます。',
    },
  ],
  '400m-lap-calculator': [
    {
      image: jaLap400mImage,
      alt: 'Pace Lab 400mラップ計算画面',
      caption: 'トラック練習向けに400mラップの目安を簡単に確認できます。',
    },
  ],
  'training-pace-calculator': [
    {
      image: jaTrainingPaceImage,
      alt: 'Pace Lab トレーニングペース計算画面',
      caption: '目的別のおすすめトレーニングペースを一覧で確認できます。',
    },
  ],
  'heart-rate-zone-calculator': [
    {
      image: jaHeartRateZonesImage,
      alt: 'Pace Lab 心拍ゾーン画面',
      caption: 'トレーニング強度に合わせた心拍ゾーンを確認できます。',
    },
  ],
  'race-time-predictor': [
    {
      image: jaRacePredictorImage,
      alt: 'Pace Lab レース予想タイム画面',
      caption: '最近の記録から次のレースタイムを予測できます。',
    },
  ],
  'energy-gel-calculator': [
    {
      image: jaEnergyGelImage,
      alt: 'Pace Lab エナジージェル計算画面',
      caption: '距離と目標タイムに合わせて補給計画を立てられます。',
    },
  ],
};

const screenshotMaps = {
  ko: paceLabKoFeatureScreenshots,
  en: paceLabEnFeatureScreenshots,
  ja: paceLabJaFeatureScreenshots,
} as const;

export function getPaceLabFeatureScreenshots(lang: 'ko' | 'en' | 'ja', slug: string) {
  return screenshotMaps[lang]?.[slug] ?? [];
}
