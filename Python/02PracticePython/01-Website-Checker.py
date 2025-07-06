print("="*40)
print("🔍WEBSITE URL CHECKER🔍")
print("="*40)

for i in range(1,20):
    url = input("\nEnter a Website URL: ")

    if url.startswith("https://") and url.endswith(".com"):
        print("🔏 This website uses HTTPS (secure))")
    elif url.startswith("http://") and url.endswith(".com"):
        print("👀 This website uses HTTP (not secure)")
    else:
        print("❌ This doesn't look like a complete URL")
    
    print("="*40)