# Getting Started with WSF

Welcome! This guide will walk you through setting up WSF, a privacy-focused sideloading method for iOS. WSF uses **DNS blocking** to prevent Apple from detecting revoked enterprise certificates, allowing you to safely install apps on your device.

---

## 1. Understanding WSF

WSF uses **revoked enterprise certificates** to install apps outside the App Store. These certificates mostly come from Vietnamese companies like Toyota Vietnam, Vietnam Bank, and Vietnam Electric.

### Key Concepts

- **Config Profiles**: Control privacy and app installation behavior.
  - **WSFConfig (WSF)** – Most private, local, blocks all Apple detection, **no OTA updates**.
  - **maDNS (madns)** – Blocks ads **and** updates.
  - **Cloudflare DNS (CFDNS)** – Blocks updates only.
- **INSTALL ONLY variants**: Temporary profiles needed for safe app installation (e.g., ppq.apple.com). **Switch back to your normal profile after installing.**
- **Certificate Import**: Certificates come as `.p12` and `.mobileprovision` files with the password **`WSF`** (all caps).

---

## 2. Choosing a Config Profile

Pick based on your needs:

| Profile | Pros | Cons |
|---------|------|-----|
| WSFConfig | Maximum privacy, blocks all Apple detection | No OTA updates, must manage manually |
| maDNS | Ad blocker + update blocker | Slightly less private than WSFConfig |
| CFDNS | Update blocker only | Minimal privacy, best for VPN users |

**Tip:** Always use the recommended profile for your device and workflow.

---

## 3. Config Profile Codes

- **AB** = Ad Blocker  
- **UB** = Update Blocker  
- **INSTALL ONLY** = Required for safe app installation; **switch back afterward**

---

## 4. Post Install Notes

- Use **INSTALL ONLY profiles** during app installation.
- **Switch back** to your normal profile after installation.
- **Never disable profiles or enable two at once**.
- When switching or restarting:
  - Use **Airplane Mode**
  - Disable **WiFi**
- Follow VPN setup instructions if needed.

---

## 5. VPN Setup

- **CFDNS:** DNS over HTTPS → `https://4ma0yugkgu.cloudflare-gateway.com/dns-query`
- **CFDNS+UB:** DNS over HTTPS → `https://32ev95ur21.cloudflare-gateway.com/dns-query`
- **Note** please be aware that most free VPN wont work and also sell mostly your data to other 3-parties
**Follow the Portal guide for VPN integration.**

---

## 6. Troubleshooting Common Issues

- **Unverified / Crashing Apps / Integrity could not be verified**
  1. Try a different certificate
  2. Wait for a new certificate
  3. Use a computer-based sideloading method as a last resort
- Tools like **AltStore, Sideloadly, SideStore**: compatible, may need VPN setup
- Always **backup your device** before sideloading.

---

## 7. Downloading Apps

- Access downloads via the **#links channel** in the WSF Discord.
- All downloads are safe and privacy-focused; **do not use unofficial sources**.

---

## 8. Key Reminders

- WSF is **privacy-focused** and works directly on-device.
- No app limits; you can install multiple apps safely.
- Follow all steps carefully to prevent issues with certificates or profiles.

---

By following this guide, you’ll be able to safely sideload apps while maintaining privacy and device integrity. Always pay attention to the **INSTALL ONLY** steps and certificate passwords—they are critical for a smooth experience.
