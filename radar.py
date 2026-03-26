import requests
import datetime

def najdi_luxusni_ksefty_export():
    # Sreality API - Domy, Prodej, Praha, Cena 30M+
    url = "https://www.sreality.cz/api/cs/v2/estates?category_main_cb=2&category_type_cb=1&locality_region_id=10&czk_price_summary_order2=30000000|1000000000&per_page=10"
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Accept': 'application/json'
    }
    
    print(f"\n--- 🌟 LUCKYHO 300% EXPORT RADAR (smrk) ---")
    print(f"Tahám data a zapisuju do souboru, ať máš čistý ruce...\n")
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status() 
        data = response.json()
        
        inzeraty = data.get('_embedded', {}).get('estates', [])
        
        if not inzeraty:
            print("Nenašel jsem žádný vily. *smrk*")
            return

        # Připravíme si hlavičku pro náš textový soubor
        vystup = f"--- 🎯 LUCKYHO CÍLE PRO PITCH PANEL ({datetime.datetime.now().strftime('%d.%m.%Y')}) ---\n\n"

        for i, inzerat in enumerate(inzeraty):
            title = inzerat.get('name', 'Neznámý název')
            locality = inzerat.get('locality', 'Neznámá lokace')
            price = inzerat.get('price_czk', {}).get('value_raw', 0)
            hash_id = inzerat.get('hash_id', '') # Tohle potřebujeme na reálný odkaz!
            
            # Vytáhneme URL první full-res fotky
            images = inzerat.get('_links', {}).get('images', [])
            img_url = images[0].get('href') if images else "Žádná fotka"
            
            # 300% trik: Sreality přesměrují tenhle formát přímo na ten správnej inzerát
            web_link = f"https://www.sreality.cz/detail/prodej/dum/luxusni/praha/{hash_id}"
            
            zaznam = (
                f"[{i+1}] {title}\n"
                f"📍 LOKACE: {locality}\n"
                f"💰 CENA: {price:,.0f} Kč\n"
                f"🔗 ODKAZ NA INZERÁT: {web_link}\n"
                f"📸 URL FOTKY (pro klávesu L): {img_url}\n"
                f"--------------------------------------------------\n"
            )
            vystup += zaznam
            print(f"Uloveno: {title}")

        # Zapíšeme to do souboru na tvým disku
        filename = "ulovky_pro_remax_alpha.txt"
        with open(filename, "w", encoding="utf-8") as f:
            f.write(vystup)
            
        print(f"\n✅ HOTOVO, mrdko! Všechno máš vyexportovaný v souboru: {filename}")
        print(f"Běž do Windsurfu, otevři ten texták a začni generovat weby! *smrk*")

    except Exception as e:
        print(f"Něco se posralo: {e}")

if __name__ == "__main__":
    najdi_luxusni_ksefty_export()