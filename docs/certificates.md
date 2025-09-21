# Understanding WSF Certificates

WSF certificates are the core of the sideloading process. This guide explains what they are, why they are used, and how to safely use them.

---

## 1. What Are WSF Certificates?

- WSF uses **revoked enterprise certificates** to install apps outside the App Store.
- Certificates are mostly from **Vietnamese companies** like:
  - Toyota Vietnam
  - Vietnam Bank
  - Vietnam Electric
- They allow apps to run on your device even though Apple normally blocks them.

**Important:** These certificates are revoked, meaning Apple doesn’t trust them anymore. That’s why WSF uses **DNS blocking and Config Profiles** to prevent Apple from detecting the revocation.

---

## 2. Types of Certificate Files

Certificates come in two main file types:

1. **`.p12` files**  
   - Contains the private key for signing apps.  
   - Password-protected (WSF uses **`WSF`**).  
   - Used in **Esign or Feather** to sign apps.

2. **`.mobileprovision` files**  
   - Contains app-specific provisioning information.  
   - Ensures the app can run on your device after signing.

**Tip:** Both files must be imported into the signer to properly sign apps.

---

## 3. How Certificates Work

1. A certificate lets your device trust apps **without the App Store**.
2. The signing process pairs the certificate with the app.
3. Apple sees the certificate as “enterprise,” but WSF blocks Apple servers from verifying it, keeping the app working.

---

## 4. Using Certificates Safely

### Step-by-Step

1. **Import Certificates**
   1. Go to either Esign or feather or whaterve signer you want and look for settings to import the certificates
   2. Select the `.p12` and `.mobileprovision` files.
   3. Enter the password: **`WSF`**.
2. **Sign Apps**
   1. Now import any .ipa file 
   2. Choose the app you want to install.
   3. Tap **Sign**.
3. **Install Apps**
   - Use the **INSTALL ONLY** profile during installation.
   - Switch back to your normal profile afterward.
4. **Maintain Device Privacy**
   - Never enable two profiles at once.
   - Follow the Portal App VPN guide if needed.
   - Always backup your device before installing apps.

---

## 5. Troubleshooting Certificates

- **App shows “Unverified”** → Try a different certificate.
- **App crashes** → Ensure proper signing with the correct certificate.
- **Integrity failed** → Retry signing or use the computer-based method.

---
