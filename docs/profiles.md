# WSF Config Profiles & DNS Explained

WSF uses **Config Profiles** and custom DNS settings to block Apple servers from detecting revoked certificates. Understanding these options helps you stay private and install apps safely.

---

## 1. What Are Config Profiles?

- Config Profiles control **how your device communicates with Apple servers**.
- WSF uses them to **prevent Apple from checking the status of revoked certificates**.
- There are different types depending on privacy, ad blocking, and update blocking.

---

## 2. Main Config Profiles

| Profile | Features | Notes |
|---------|----------|------|
| **WSFConfig (WSF)** | Most private, local-only, blocks Apple detection, **no OTA updates** | Recommended for max privacy, especially without VPN |
| **maDNS (MADNS)** | Ad blocker + update blocker | Slightly less private, blocks ads in addition to updates |
| **Cloudflare DNS (CFDNS)** | Update blocker only | Minimal privacy protection, works well with VPN setups |

---

## 3. INSTALL ONLY Variants

- Each profile has an **INSTALL ONLY** version.
- **Purpose:** Temporarily allow app installation (e.g., ppq.apple.com) without exposing your device to Apple checks.
- **Important:** Switch back to the normal profile immediately after installing apps.

---

## 4. Profile Codes

- **AB** → Ad Blocker  
- **UB** → Update Blocker  
- **INSTALL ONLY** → Use only during app installation  

**Tip:** Knowing the codes helps you pick the right profile for your workflow.

---

## 5. Choosing the Right Config Profile

1. **Privacy First:**  
   - Use **WSFConfig** for maximum privacy, especially if not using a VPN.
2. **Ad + Update Blocking:**  
   - Use **maDNS** if you want extra ad blocking along with update blocking.
3. **VPN Users / Minimal Blocking:**  
   - Use **CFDNS** or **CFDNS+UB** if you rely on a VPN for protection.

---

## 6. Applying Config Profiles Safely

1. Enable **Airplane Mode** and disable WiFi.
2. Install the chosen Config Profile.
3. For app installation, switch to **INSTALL ONLY** variant temporarily.
4. After installation, **switch back to your normal profile**.
5. Never have two profiles active at once.

---

## 7. Recommended DNS for VPNs

- **CFDNS:** DNS over HTTPS → `https://4ma0yugkgu.cloudflare-gateway.com/dns-query`
- **CFDNS+UB:** DNS over HTTPS → `https://32ev95ur21.cloudflare-gateway.com/dns-query`

---

By understanding these profiles and DNS options, you can **control your device privacy, prevent Apple detection**, and safely sideload apps using WSF.
