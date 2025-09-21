# WSF Post Install Notes

After installing apps with WSF, it’s crucial to follow these steps to prevent issues like blacklisting, certificate revocation, or app crashes.  

---

## 1. Always Use INSTALL ONLY Profiles for Installation

- When installing apps, use the **INSTALL ONLY** variant of your Config Profile.
- **Switch back** to your normal profile immediately after installation.
- **Reason:** INSTALL ONLY profiles temporarily allow app installation without exposing your device to Apple server checks.

---

## 2. Never Enable Two Profiles at Once

- Only one Config Profile should be active at any time.
- **Do not stack WSFConfig + maDNS + CFDNS.**
- **Consequence:** Multiple active profiles can confuse the device and trigger Apple checks, risking certificate revocation.

---

## 3. Airplane Mode & WiFi

- When switching profiles or restarting the device:
  1. **Enable Airplane Mode**
  2. **Disable WiFi**
- This prevents the device from contacting Apple servers during vulnerable moments.

---

## 4. VPN Use

- If using VPNs, follow the **Portal App guide exactly**.
- Make sure the VPN is configured **before switching profiles or installing apps**.
- Recommended VPN DNS setups:
  - CFDNS: `https://4ma0yugkgu.cloudflare-gateway.com/dns-query`
  - CFDNS+UB: `https://32ev95ur21.cloudflare-gateway.com/dns-query`

---

## 5. Avoid Rebooting or Interrupting Installations

- **Do not restart your device** during an app installation or profile switch.
- **Do not disable a profile** while an app is installing.
- **Consequence:** Rebooting or improper profile handling can trigger Apple’s detection and revoke certificates.

---

## 6. Backup Your Device

- Always **backup your device** before installing new apps.
- This ensures you can recover if something goes wrong.

---

## 8. Key Reminders

- Only use official **WSF methods**.
- Follow all steps carefully—especially **INSTALL ONLY**, Airplane Mode, and single-profile rules.
- These precautions maintain **device privacy**, prevent blacklisting, and allow apps to run smoothly.

---