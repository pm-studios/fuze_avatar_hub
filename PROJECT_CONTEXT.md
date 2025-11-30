# 프로젝트 컨텍스트 - 아바타 사진 분석 시스템

## 📋 프로젝트 목표

**최종 목표:**
- 사용자가 사진을 업로드하면 얼굴을 분석하여 3D 아바타 파라미터 JSON을 자동 생성
- 3D 아바타 커스터마이징 시스템에 자동 적용

**흐름:**
```
사진 업로드
→ AI 얼굴 분석
→ JSON 파라미터 추출
→ 3D 아바타 자동 조정
```

---

## 🎯 현재 진행 상황

### ✅ 완료된 작업

1. **2D 파츠 기반 POC 완료**
   - `avatar-parts-database.json`: 파츠 데이터베이스 생성 (눈썹 32개, 눈 38개, 헤어 32개 등)
   - `create-avatar.cjs`: 파츠 조합 이미지 생성 스크립트
   - 테스트 완료: face.png 분석 → 2D 아바타 생성

2. **Claude Vision 얼굴 분석 검증**
   - Claude가 사진에서 얼굴 특징 분석 가능 확인
   - 얼굴형, 눈썹 각도, 눈 크기, 수염 유무 등 분석 가능

3. **AI API 가격 조사 완료**
   - Claude Haiku: 1회 $0.002 (추천)
   - AWS Rekognition: 1회 $0.001
   - Azure Face API: 1회 $0.001
   - 결론: Claude Haiku가 유연성/가격 밸런스 최적

### 🔄 현재 단계

**2D 파츠 시스템은 POC용:**
- 실제 목적은 사진 분석 → JSON 데이터 추출
- 이미 3D 아바타 커스터마이징 시스템 존재
- 2D 테스트는 개념 검증용

**다음 단계:**
- 3D 아바타 시스템의 파라미터 스펙 확인 필요
- 그 형식에 맞춰 JSON 출력 구현

---

## 📁 파일 구조

```
fuze_avatar_hub/
├── avatar-parts-database.json    # 2D 파츠 데이터베이스 (POC용)
├── create-avatar.cjs              # 파츠 조합 테스트 스크립트
├── face.png                       # 테스트용 얼굴 사진 (남성, 수염, 중간 헤어)
├── face.jfif                      # 원본 (PNG로 변환됨)
├── generated_avatar.png           # 생성된 2D 아바타 결과
├── public/parts/                  # 2D 아바타 파츠 이미지들
│   ├── C_Ava_B_*.png             # 눈썹 (32개)
│   ├── C_Ava_E_*.png             # 눈 (38개)
│   ├── C_Ava_H_*.png             # 헤어 (32개)
│   ├── C_Ava_M_*.png             # 입 (37개)
│   ├── C_Ava_N_*.png             # 코 (1개)
│   └── C_Ava_W_*.png             # 수염 (9개)
└── PROJECT_CONTEXT.md             # 이 파일
```

---

## 🧠 Claude Vision 얼굴 분석 능력

### ✅ 분석 가능한 항목

**얼굴 윤곽:**
- 얼굴형 (둥근형, 계란형, 각진형, 긴형, 하트형)
- 턱 각도 (뾰족함/둥글음)
- 광대뼈 위치

**눈썹:**
- 각도 (±10도 범위)
- 두께 (0~1 스케일)
- 모양 (아치형, 직선, S자)
- 길이
- 눈과의 거리

**눈:**
- 크기 (상대적)
- 모양 (아몬드, 둥근, 가늘 등)
- 각도 (올라감/내려감)
- 간격 (좁음/넓음)
- 쌍꺼풀 유무

**코:**
- 크기
- 콧등 높이
- 콧볼 넓이
- 길이

**입:**
- 크기
- 입술 두께
- 모양

**기타:**
- 헤어 스타일, 길이, 질감
- 수염 유무, 스타일
- 피부톤
- 성별, 나이대

### 📊 정확도

- **높음**: 얼굴형 대분류, 수염/헤어 유무, 눈썹 두께
- **중간**: 정확한 각도 (±5도), 비율 (±0.1)
- **한계**: 픽셀 단위 정밀 측정 불가, 사진 각도/조명에 영향받음

---

## 💡 중요 결정사항

### 1. AI API 선택
**Claude Haiku 사용 결정**
- 가격: 1회 $0.002
- 장점: 자연어 질문 가능, 유연한 분석
- 얼굴 윤곽, 눈썹 각도 등 디테일 분석 가능

### 2. 2D 파츠 시스템의 한계 인식
**2D 파츠로는 실제 얼굴과 닮은 아바타 불가능:**
- 파츠가 너무 만화적/단순함
- 조정 불가능한 요소 많음 (위치, 크기, 각도, 색상)
- 실제 목적: JSON 파라미터 추출

### 3. 실제 구현 방향
**3D 아바타 시스템 활용:**
- 이미 커스터마이징 가능한 3D 아바타 있음
- 사진 → JSON → 3D 아바타 자동 조정
- Claude API로 분석 후 JSON 출력

---

## 📝 face.png 분석 결과 예시

**테스트 사진 특징:**
- 남성, 25-35세
- 얼굴형: 계란형-각진형 혼합
- 헤어: 짧은~중간 길이, 옆으로 넘긴 스타일
- 눈썹: 두껍고 직선형
- 눈: 중간 크기, 아몬드형
- 수염: 풀비어드 (턱수염 + 입 주변)

**JSON 출력 예시 (임시 형식):**
```json
{
  "face": {
    "shape": "oval-square",
    "width": 0.65,
    "jawlineSharpness": 0.6
  },
  "eyebrows": {
    "angle": 2,
    "thickness": 0.75,
    "archCurve": 0.2
  },
  "eyes": {
    "size": 0.5,
    "shape": "almond",
    "angle": -2,
    "distance": 0.55
  },
  "nose": {
    "size": 0.6,
    "bridgeHeight": 0.5
  },
  "mouth": {
    "size": 0.55,
    "lipThickness": 0.5
  },
  "hair": {
    "style": "short-medium",
    "texture": "straight"
  },
  "facialHair": {
    "beard": 0.8,
    "mustache": 0.7,
    "style": "full-beard"
  },
  "skinTone": 0.6,
  "gender": "male"
}
```

---

## 🔧 기술 스택

- **Node.js** (v22.11.0)
- **Canvas** (이미지 처리)
- **Claude API** (얼굴 분석 예정)
- **React + Unity WebGL** (3D 아바타 시스템 - 기존)

---

## 🚀 다음 작업 단계

### Step 1: 3D 아바타 파라미터 스펙 확인
**필요한 정보:**
- 3D 아바타 시스템이 받는 JSON 형식
- 파라미터 이름, 타입, 범위
- 예시 JSON

**예상 파라미터 (확인 필요):**
```json
{
  "faceWidth": 0.5,
  "jawWidth": 0.6,
  "eyeSize": 0.5,
  "eyeAngle": -2,
  "eyebrowThickness": 0.7,
  "noseSize": 0.6,
  "mouthSize": 0.5,
  "hairStyle": "short",
  "beardStyle": "full",
  "skinColor": "#F5D6C6"
}
```

### Step 2: Claude API 연동
**구현 내용:**
1. Anthropic API 키 설정
2. 이미지 업로드 → Claude API 전송
3. 프롬프트 엔지니어링 (정확한 JSON 형식 출력)

**예상 코드 구조:**
```javascript
async function analyzeface(imagePath, avatarParamsSpec) {
  const response = await anthropic.messages.create({
    model: "claude-3-haiku-20240307",
    messages: [{
      role: "user",
      content: [
        { type: "image", source: { ... } },
        { type: "text", text: `분석해서 이 JSON 형식으로 출력: ${avatarParamsSpec}` }
      ]
    }]
  });

  return JSON.parse(response.content);
}
```

### Step 3: 프론트엔드 통합
- 사진 업로드 UI
- Claude API 호출
- JSON 받아서 3D 아바타에 적용

---

## 💰 비용 예상

**Claude Haiku 기준:**
- 월 100명: $0.20
- 월 1,000명: $2
- 월 10,000명: $20

→ 초기에는 거의 무료 수준

---

## ⚠️ 주의사항

1. **2D 파츠는 버릴 것**
   - POC용으로만 사용
   - 실제 프로덕션은 3D 아바타 시스템 사용

2. **정확도 기대치**
   - 100% 정확한 분석은 불가능
   - 사용자가 미세 조정 가능한 UI 필요

3. **사진 품질**
   - 정면 사진 권장
   - 조명 양호
   - 얼굴 가림 없음

---

## 📞 회사에서 이어서 작업하는 법

**Claude에게 이렇게 말하기:**

```
"PROJECT_CONTEXT.md 파일을 읽고 이해해줘.
우리는 얼굴 사진을 분석해서 3D 아바타 파라미터 JSON을 뽑는 시스템을 만들고 있어.
3D 아바타 시스템의 파라미터 스펙은 [여기에 스펙 붙여넣기]야.
face.png를 분석해서 이 형식에 맞는 JSON을 뽑아줘."
```

또는 간단히:

```
"이 프로젝트에서 face.png를 분석해서
{ faceWidth, eyeSize, ... } 형식의 JSON 뽑아줘"
```

---

## 🔗 참고 링크

- Anthropic API Docs: https://docs.anthropic.com/claude/reference/messages_post
- Claude Vision 가이드: https://docs.anthropic.com/claude/docs/vision

---

**마지막 업데이트:** 2025-11-30
**작업자:** 집에서 작업 → 회사에서 이어서 작업 예정
