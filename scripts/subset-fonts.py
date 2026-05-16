#!/usr/bin/env python3
"""
Font Subset Script

This script extracts all text from the website and creates subset fonts
containing only the characters used + common Chinese characters.

Usage: npm run subset-fonts

Requirements: pip install fonttools brotli
"""

import subprocess
import sys
from pathlib import Path

# Project paths
SCRIPT_DIR = Path(__file__).parent
PROJECT_DIR = SCRIPT_DIR.parent
FONTS_DIR = PROJECT_DIR / "app" / "styles" / "fonts"

# Common Chinese characters (top ~500 most frequently used + psychology related terms)
COMMON_CHARS = """
的一是不了在人有我他這個們中來上大為和國地到以說時要就出會可也你對生能而子那得於著下自之年過發後作裡如家多都同行成方面能己把會從去又給它被走很看過人之使進著把和會讓都自己最現動前還那等被好新從下對已經過他因感覺方式什麼感讓才能成為意義重要自我其他個人如何心理真正過程一個所以因此需要時候事情其實可能經驗感到問題世界關係面對並且認為這樣透過生活或者成長一樣理解擁有目前探索但是開始情緒處理角色思考議題認同接受工作深度原生議題關心長期當然人際家庭性別多元提供知道親身體會這些瞭解並非方法學習女性身份自身哪些發現發展幫助不同尋找安全安心溫暖空間任何陪伴支持正在想要更多屬於每一內在真實價值選擇部分同時知識資訊體驗諮商治療分析心情情感精神狀態困難挫折不安脆弱害怕恐懼焦慮憂鬱傷痛複雜衝突矛盾整合連結好奇嘗試變化改變療癒健康實踐專業服務創造力量希望獨特獨一無二現在過去未來終於慢慢逐漸踏步文章閱讀更保留權利版所製作設計開發技術使用科科技大學諮商中心實習師專長經歷聯絡合台北市社區行據點團體帶領者基隆看守毒品方案台灣私執業臨床訓練督導背景清華醫療照護法劃精神官能症狀態認命遊戲規則脈絡框架輪廓系統適應性面向背景年齡層工具主軸教育培訓專欄
"""

# Basic characters
BASIC_CHARS = """
0123456789
abcdefghijklmnopqrstuvwxyz
ABCDEFGHIJKLMNOPQRSTUVWXYZ
。，、；：？！""''（）【】《》—…·
@#$%&*_+-=/\\|~`^
.,:;?!'"()[]{}
"""

# Original font files
ORIGINAL_FONTS = [
    "TaipeiSansTCBeta-Regular.ttf",
    "TaipeiSansTCBeta-Light.ttf", 
    "TaipeiSansTCBeta-Bold.ttf",
    "GenWanMin-Regular.ttf",
]


def extract_chars_from_files():
    """Extract all characters from .tsx files in the app directory."""
    chars = set()
    app_dir = PROJECT_DIR / "app"
    
    for tsx_file in app_dir.rglob("*.tsx"):
        try:
            content = tsx_file.read_text(encoding="utf-8")
            # Extract Chinese characters and common symbols
            for char in content:
                # Only include valid Unicode characters (no surrogates)
                if char and ord(char) < 0x10000 and not (0xD800 <= ord(char) <= 0xDFFF):
                    chars.add(char)
        except Exception as e:
            print(f"  Warning: Could not read {tsx_file}: {e}")
    
    return chars


def get_all_chars():
    """Get all characters needed for the subset fonts."""
    chars = set()
    
    # Add characters from website
    print("Extracting text from website...")
    website_chars = extract_chars_from_files()
    chars.update(website_chars)
    
    # Add common Chinese characters
    for char in COMMON_CHARS:
        if char.strip() and ord(char) < 0x10000 and not (0xD800 <= ord(char) <= 0xDFFF):
            chars.add(char)
    
    # Add basic characters
    for char in BASIC_CHARS:
        if char.strip() and ord(char) < 0x10000 and not (0xD800 <= ord(char) <= 0xDFFF):
            chars.add(char)
    
    # Add space
    chars.add(' ')
    
    return ''.join(sorted(chars))


def subset_font(input_path, output_path, chars, font_number=None):
    """Create a subset font with only the specified characters."""
    cmd = [
        sys.executable, "-m", "fontTools.subset",
        str(input_path),
        f"--text={chars}",
        f"--output-file={output_path}",
        "--flavor=woff2",
        "--layout-features=*",
        "--no-hinting",
        "--desubroutinize",
    ]
    
    # For font collections (TTC files), specify font number
    if font_number is not None:
        cmd.append(f"--font-number={font_number}")
    
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"    Error: {result.stderr}")
        return False
    return True


def format_size(size_bytes):
    """Format file size in human readable format."""
    for unit in ['B', 'KB', 'MB']:
        if size_bytes < 1024:
            return f"{size_bytes:.1f} {unit}"
        size_bytes /= 1024
    return f"{size_bytes:.1f} GB"


def main():
    # Get all characters
    chars = get_all_chars()
    print(f"Found {len(chars)} unique characters")
    
    print("\nCreating subset fonts...")
    
    for font_name in ORIGINAL_FONTS:
        input_path = FONTS_DIR / font_name
        output_name = font_name.replace(".ttf", "-subset.woff2")
        output_path = FONTS_DIR / output_name
        
        if not input_path.exists():
            print(f"  Warning: {font_name} not found, skipping...")
            continue
        
        print(f"  Processing {font_name} -> {output_name}")
        
        original_size = input_path.stat().st_size
        
        # GenWanMin is a font collection (TTC), need to specify font number
        font_number = 0 if "GenWanMin" in font_name else None
        
        if subset_font(input_path, output_path, chars, font_number):
            new_size = output_path.stat().st_size
            reduction = (1 - new_size / original_size) * 100
            print(f"    {format_size(original_size)} -> {format_size(new_size)} ({reduction:.1f}% smaller)")
        else:
            print(f"    Failed to create subset")
    
    print("\nDone!")
    print("\nNext step: Update app/styles/fonts.ts to use the new -subset.woff2 files")


if __name__ == "__main__":
    main()
