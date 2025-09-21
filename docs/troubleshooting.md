# WSF ## Common Issues

## Step-by-Step Solutions

### Issue 1: App Shows "Unverified"**App shows "Unverified"**
2. **App crashes immediately after opening**
3. **"Integrity could not be verified" error**
4. **Certificates not working**
5. **Problems switching Config Profiles**
6. **VPN issues**hooting Guide

# WSF Troubleshooting Guide

If you encounter issues while using WSF, this guide will help you identify the problem and fix it safely.

> **⚠️ Warning:** Always backup your device before attempting any troubleshooting steps.

---

## 1. Common Issues

1. **App shows “Unverified”**
2. **App crashes immediately after opening**
3. **Integrity could not be verified**
4. **Certificates not working**
5. **Problems switching Config Profiles**
6. **VPN issues**

---

## 2. Step-by-Step Solutions

### Issue 1: App Shows “Unverified”

**Cause:** Apple has detected the certificate, or it has expired or been revoked.  

**Solution:**
1. Ensure the correct certificate is imported in the Portal App (password: **`WSF`**).
2. Try using a different certificate from the Portal.
3. Use the **INSTALL ONLY profile** when reinstalling.
4. Switch back to the normal profile after installation.

---

### Issue 2: App Crashes

**Cause:** App was not signed correctly, or the certificate has been revoked.  

**Solution:**
1. Re-sign the app using a valid certificate.
2. Ensure you are using only **one Config Profile** at a time.
3. Make sure the VPN (if required) is properly configured.
4. If needed, restart the device with **Airplane Mode** enabled and **WiFi off**.

---

### Issue 3: "Integrity Could Not Be Verified" Error

**Cause:** Apple server detected certificate issues during installation.  

**Solution:**
1. Use the **INSTALL ONLY profile** during installation.
2. Re-sign the app with a different certificate.
3. If the issue persists, use a **computer-based sideloading method** as a last resort.

---

### Issue 4: Certificates Not Working

**Cause:** Incorrect import, wrong password, or expired or revoked certificate.  

**Solution:**
1. Open eSign or Feather and make sure you use the certificates you installed from our website.
2. Re-import the `.p12` and `.mobileprovision` files.
3. Enter the password: **`WSF`** (all caps).
4. Use a fresh certificate if available.

> **💡 Note:** Always use certificates downloaded from the official WSF website only.

---

### Issue 5: Config Profile Problems

**Cause:** Multiple profiles are active, or profiles are being switched incorrectly.  

**Solution:**
1. Enable **Airplane Mode** and disable WiFi.
2. Switch to the desired Config Profile.
3. **Do not enable two profiles at the same time.**
4. For installations, use the **INSTALL ONLY profile**, then revert to your normal profile.

---

### Issue 6: VPN Issues

**Cause:** VPN is not configured correctly or is interfering with DNS.  

**Solution:**
1. Use the recommended DNS servers:
   - **CFDNS**: `https://4ma0yugkgu.cloudflare-gateway.com/dns-query`
   - **CFDNS+UB**: `https://32ev95ur21.cloudflare-gateway.com/dns-query`
2. Follow the Portal App VPN setup guide exactly.
3. Re-enable VPN **before** switching profiles or installing apps.

---

## Preventing Issues in the Future

> **⚠️ Important:** Following these best practices will help prevent most common WSF issues.

- **Always backup your device** before sideloading apps.
- Use the **INSTALL ONLY profile** for installations only.
- **Never enable multiple Config Profiles** simultaneously.
- Follow the **Airplane Mode + WiFi off** rules when switching profiles or restarting.
- Only use official WSF certificates and methods.

---

> **💡 Tip:** By following these troubleshooting steps and best practices, most common WSF issues can be resolved safely and efficiently.
