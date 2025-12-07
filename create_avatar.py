#!/usr/bin/env python3
"""
아바타 생성 스크립트
얼굴 사진을 분석하고 파츠를 조합하여 아바타를 생성합니다.
"""

from PIL import Image
import json
import os

# 파츠 데이터베이스 로드
with open('avatar-parts-database.json', 'r', encoding='utf-8') as f:
    parts_db = json.load(f)

def create_avatar(hair_id, eyebrows_id, eyes_id, nose_id, mouth_id, beard_id, output_path='avatar_output.png'):
    """
    선택된 파츠들을 조합하여 아바타 이미지를 생성합니다.

    Args:
        hair_id: 헤어 파츠 ID (예: "C_Ava_H_001")
        eyebrows_id: 눈썹 파츠 ID (예: "C_Ava_B_001")
        eyes_id: 눈 파츠 ID (예: "C_Ava_E_001")
        nose_id: 코 파츠 ID (예: "C_Ava_N_001")
        mouth_id: 입 파츠 ID (예: "C_Ava_M_001")
        beard_id: 수염 파츠 ID (예: "C_Ava_W_001")
        output_path: 출력 파일 경로
    """

    # 파츠 파일 경로 설정
    parts_dir = 'public/parts'

    # 파츠 로드
    parts = {
        'hair': f'{parts_dir}/{hair_id}.png',
        'eyebrows': f'{parts_dir}/{eyebrows_id}.png',
        'eyes': f'{parts_dir}/{eyes_id}.png',
        'nose': f'{parts_dir}/{nose_id}.png',
        'mouth': f'{parts_dir}/{mouth_id}.png',
        'beard': f'{parts_dir}/{beard_id}.png'
    }

    # 첫 번째 이미지(헤어)를 베이스로 사용
    # 헤어에 얼굴이 포함되어 있으므로 베이스 레이어로 사용
    base = Image.open(parts['hair']).convert('RGBA')
    width, height = base.size

    # 새로운 캔버스 생성
    canvas = Image.new('RGBA', (width, height), (0, 0, 0, 0))

    # 레이어 순서대로 합성 (뒤에서 앞으로)
    # 1. 헤어 (베이스 - 얼굴 포함)
    canvas.paste(base, (0, 0), base)

    # 2. 수염 (얼굴 위에, 헤어 아래)
    beard = Image.open(parts['beard']).convert('RGBA')
    canvas.paste(beard, (0, 0), beard)

    # 3. 눈썹
    eyebrows = Image.open(parts['eyebrows']).convert('RGBA')
    canvas.paste(eyebrows, (0, 0), eyebrows)

    # 4. 눈
    eyes = Image.open(parts['eyes']).convert('RGBA')
    canvas.paste(eyes, (0, 0), eyes)

    # 5. 코
    nose = Image.open(parts['nose']).convert('RGBA')
    canvas.paste(nose, (0, 0), nose)

    # 6. 입
    mouth = Image.open(parts['mouth']).convert('RGBA')
    canvas.paste(mouth, (0, 0), mouth)

    # 결과 저장
    canvas.save(output_path, 'PNG')
    print(f"아바타가 생성되었습니다: {output_path}")

    return output_path

def analyze_face_and_select_parts(face_image_path):
    """
    얼굴 이미지를 분석하여 적합한 파츠를 선택합니다.

    현재는 간단한 샘플 선택을 수행합니다.
    실제로는 AI 비전 모델을 사용하여 얼굴 특징을 분석해야 합니다.
    """

    # TODO: 실제 얼굴 분석 로직 구현
    # 현재는 샘플 파츠 선택

    # face.jfif를 기반으로 수동 선택한 파츠들
    # (실제 이미지를 보고 선택해야 하지만, 여기서는 다양한 파츠를 조합한 샘플을 만듭니다)

    selected_parts = {
        'hair': 'C_Ava_H_007',      # 보브 스타일
        'eyebrows': 'C_Ava_B_010',  # 부드러운 곡선 눈썹
        'eyes': 'C_Ava_E_002',      # 사실적인 아몬드형 눈
        'nose': 'C_Ava_N_001',      # 유일한 코 파츠
        'mouth': 'C_Ava_M_015',     # 부드러운 입술
        'beard': 'C_Ava_W_001'      # 수염 없음
    }

    return selected_parts

if __name__ == '__main__':
    # face.jfif 분석하여 파츠 선택
    face_path = 'face.jfif'

    if os.path.exists(face_path):
        print(f"얼굴 이미지 분석 중: {face_path}")
        selected = analyze_face_and_select_parts(face_path)

        print("\n선택된 파츠:")
        for part_type, part_id in selected.items():
            print(f"  {part_type}: {part_id}")

        # 아바타 생성
        print("\n아바타 생성 중...")
        output = create_avatar(
            hair_id=selected['hair'],
            eyebrows_id=selected['eyebrows'],
            eyes_id=selected['eyes'],
            nose_id=selected['nose'],
            mouth_id=selected['mouth'],
            beard_id=selected['beard'],
            output_path='generated_avatar.png'
        )

        print(f"\n완료! 생성된 아바타: {output}")
    else:
        print(f"에러: {face_path} 파일을 찾을 수 없습니다.")
