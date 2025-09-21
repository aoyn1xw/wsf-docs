# WSF Troubleshooting Guide

If you encounter issues while using WSF, this guide will help you identify the problem and fix it safely.

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

**Cause:** Apple has detected the certificate, or it has expired/revoked.  

**Solution:**
1. Ensure the correct certificate is imported in the Portal App (password: **`WSF`**).
2. Try a different certificate from the Portal.
3. Use **INSTALL ONLY profile** when reinstalling.
4. Switch back to normal profile after installation.

---

### Issue 2: App Crashes

**Cause:** App was not signed correctly, or the certificate is revoked.  

**Solution:**
1. Re-sign the app using a valid certificate.
2. Ensure you are using only **one Config Profile** at a time.
3. Make sure VPN (if required) is properly configured.
4. Restart the device using **Airplane Mode** and **WiFi off** if needed.

---

### Issue 3: Integrity Could Not Be Verified

**Cause:** Apple server detected certificate issues during installation.  

**Solution:**
1. Use **INSTALL ONLY profile** during installation.
2. Re-sign the app with a different certificate.
3. If persistent, use a **computer-based sideloading method** as a last resort.

---

### Issue 4: Certificates Not Working

**Cause:** Incorrect import, wrong password, or expired/revoked certificate.  

**Solution:**
1. Open esign or feahter and make sure you use the certifatces you installed from OUR website 
2. Re-import the `.p12` and `.mobileprovision` files.
3. Enter the password: **`WSF`** (all caps).
4. Use a fresh certificate if available.

---

### Issue 5: Config Profile Problems

**Cause:** Multiple profiles active, or switching profiles incorrectly.  

**Solution:**
1. Enable **Airplane Mode** and disable WiFi.
2. Switch to the desired Config Profile.
3. **Do not enable two profiles at once.**
4. For installations, use the **INSTALL ONLY profile**, then revert.

---

### Issue 6: VPN Issues

**Cause:** VPN not configured correctly or interfering with DNS.  

**Solution:**
1. Use the recommended DNS:
   - CFDNS: `https://4ma0yugkgu.cloudflare-gateway.com/dns-query`
   - CFDNS+UB: `https://32ev95ur21.cloudflare-gateway.com/dns-query`
2. Follow the Portal App VPN setup guide exactly.
3. Re-enable VPN **before switching profiles or installing apps**.

---

## 3. Preventing Issues in the Future

- **Always backup your device** before sideloading apps.
- Use **INSTALL ONLY profiles** for installations.
- **Never enable multiple Config Profiles** simultaneously.
- Follow **Airplane Mode + WiFi off** rules when switching profiles or restarting.
- Only use official WSF certificates and methods.

---

By following these troubleshooting steps and best practices, most common WSF issues can be resolved safely and efficiently.
