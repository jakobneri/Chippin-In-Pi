# Hardware Shopping List 🛒

> Complete hardware guide for building a portable Raspberry Pi security toolkit (Flipper Zero alternative)

This guide provides a comprehensive shopping list with prices from German retailers to transform your Raspberry Pi into a portable hacking and security testing device with Bluetooth, WiFi, and other wireless capabilities.

**Note**: This list assumes you already have a Raspberry Pi 5. Components are listed for adding to your existing Pi.

## 🎯 Project Goals

- **Portable**: Battery-powered for on-the-go use
- **Wireless**: Bluetooth, WiFi, and RF capabilities
- **Compact**: Small form factor, headless operation
- **Budget-friendly**: Affordable options with premium alternatives
- **Web-based Interface**: Control via locally hosted webpage, no display needed

## 📋 Complete Shopping List

### Core Components (for Raspberry Pi 5)

#### Option 1: Budget-Friendly Setup (~€70-95)

| Component | Model | Price (€) | Retailer | Notes |
|-----------|-------|-----------|----------|-------|
| **SD Card** | SanDisk Ultra 64GB Class 10 | €10-12 | Amazon.de, MediaMarkt | For Pi 5 |
| **Power Bank** | Anker PowerCore 20000mAh PD | €35-45 | Amazon.de | USB-C PD for Pi 5 |
| **LED Array** | WS2812B LED Strip (8 LEDs) | €3-5 | Amazon.de, BerryBase | Status indicators |
| **USB Hub** | Ugreen USB Hub 4-Port | €12-15 | Amazon.de | For peripherals |
| **Cables** | USB-C cables | €5-8 | Amazon.de | Various adapters |
| **Accessories** | GPIO headers, heatsinks | €5-10 | BerryBase | - |

**Total: ~€70-95**
**Interface**: Web-based (connect via WiFi)

#### Option 2: Balanced Setup (~€134-190)

| Component | Model | Price (€) | Retailer | Notes |
|-----------|-------|-----------|----------|-------|
| **SD Card** | Samsung PRO Plus 128GB | €18-25 | Amazon.de, MediaMarkt | High-speed |
| **Power Bank** | RAVPower 26800mAh PD 30W | €45-60 | Amazon.de | Extended runtime |
| **LED Array** | NeoPixel 8 LED Stick | €5-8 | Amazon.de, BerryBase | RGB status display |
| **Case** | Argon NEO 5 Case | €25-35 | Amazon.de | Aluminum, good cooling |
| **USB Hub** | Anker 7-Port USB 3.0 Hub | €25-35 | Amazon.de | Powered hub |
| **Cables** | Premium USB-C cables | €8-12 | Amazon.de | - |
| **Accessories** | Active cooling fan | €8-15 | BerryBase | For Pi 5 |

**Total: ~€134-190**
**Interface**: Web-based (connect via WiFi)

#### Option 3: Premium Setup with Storage (~€228-305)

| Component | Model | Price (€) | Retailer | Notes |
|-----------|-------|-----------|----------|-------|
| **SD Card** | Samsung PRO Endurance 256GB | €35-45 | Amazon.de | Maximum endurance |
| **Power Supply** | Official Pi 5 27W USB-C PSU | €12-15 | BerryBase | Required for Pi 5 |
| **Battery** | PiSugar 3 Plus | €65-80 | Amazon.de, AliExpress | UPS functionality |
| **LED Array** | Pimoroni Blinkt! (8 RGB LEDs) | €6-10 | Pimoroni, BerryBase | Status indicators |
| **Case** | Argon NEO 5 M.2 Case | €35-45 | Amazon.de | M.2 SSD support |
| **Storage** | 512GB M.2 NVMe SSD | €35-50 | Amazon.de | Fast storage |
| **USB Hub** | Powered 7-Port USB 3.0 Hub | €25-35 | Amazon.de | - |
| **Accessories** | Premium GPIO kit, cooling | €15-25 | BerryBase | - |

**Total: ~€228-305**
**Interface**: Web-based (connect via WiFi)

### Wireless & RF Modules

These modules extend wireless capabilities for security testing:

#### WiFi Adapters for Penetration Testing (WiFi Pineapple-style)

**Essential for packet injection, monitor mode, and WiFi attacks:**

| Module | Chipset | Price (€) | Retailer | Capabilities |
|--------|---------|-----------|----------|--------------|
| **Alfa AWUS036ACH** | Realtek RTL8812AU | €45-60 | Amazon.de | Dual-band, monitor mode, packet injection |
| **Alfa AWUS036ACHM** | MediaTek MT7612U | €55-70 | Amazon.de | Better monitor mode, dual-band |
| **Alfa AWUS036ACM** | MediaTek MT7612U | €50-65 | Amazon.de | Long-range, monitor mode |
| **TP-Link TL-WN722N v1** | Atheros AR9271 | €15-25 | eBay.de | Budget option (v1 ONLY! v2/v3 lack monitor mode) |
| **Panda PAU09 N600** | Ralink RT5572 | €25-35 | Amazon.de | Dual-band, good compatibility |
| **WiFi Pineapple Nano** | Complete kit | €100-120 | Hak5 (ships to DE) | Ready-to-use pentest platform |
| **WiFi Pineapple Mark VII** | Complete kit | €200-250 | Hak5 (ships to DE) | Professional WiFi auditing |

**Recommended for Pi 5**: Alfa AWUS036ACH or AWUS036ACHM (excellent Linux support, powerful)

#### Bluetooth Modules for Security Testing

| Module | Purpose | Price (€) | Retailer | Capabilities |
|--------|---------|-----------|----------|--------------|
| **Ubertooth One** | Bluetooth sniffing/analysis | €120-150 | Great Scott Gadgets | BLE/Bluetooth monitoring |
| **Bluetooth CSR 4.0 USB** | Basic BT adapter | €8-15 | Amazon.de | External BT for testing |
| **nRF52840 Dongle** | BLE development | €10-15 | Amazon.de, Mouser | Packet sniffing, jamming |
| **CrazyRadio PA** | 2.4GHz research | €30-40 | Bitcraze | Nordic nRF24 protocol |

#### Software Defined Radio (SDR)

| Module | Purpose | Price (€) | Retailer | Notes |
|--------|---------|-----------|----------|-------|
| **RTL-SDR v3** | Software Defined Radio | €30-40 | Amazon.de | Frequency reception |
| **HackRF One** | Full-duplex SDR | €300-350 | Passion Radio | TX/RX capability |
| **Yard Stick One** | Sub-1GHz RF | €100-120 | Great Scott Gadgets | 300-928MHz |

#### Other RF Modules

| Module | Purpose | Price (€) | Retailer | Notes |
|--------|---------|-----------|----------|-------|
| **NRF24L01+** | 2.4GHz transceiver | €3-8 | Amazon.de, eBay | Cheap RF module |
| **CC1101** | Sub-1GHz transceiver | €5-12 | Amazon.de, eBay | 315/433/868/915MHz |
| **ESP32 Module** | WiFi/BT development | €8-15 | Amazon.de, BerryBase | Dual-mode, programmable |

### Additional Accessories

| Item | Price (€) | Retailer | Purpose |
|------|-----------|----------|---------|
| WS2812B LED strip (8-16 LEDs) | €3-8 | Amazon.de, BerryBase | Status indicators |
| NeoPixel LED stick | €5-10 | Adafruit, BerryBase | RGB status display |
| Pimoroni Blinkt! (8 RGB LEDs) | €6-10 | Pimoroni, BerryBase | Pre-soldered status LEDs |
| Individual LEDs (red/green/blue) | €2-5 | Amazon.de, Reichelt | Simple status indicators |
| Jumper wires (120pcs) | €5-8 | Amazon.de, BerryBase | GPIO connections |
| Breadboard | €5-10 | Amazon.de, Reichelt | Prototyping |
| USB WiFi adapter | €10-20 | Amazon.de | Additional interface |
| USB Bluetooth adapter | €8-15 | Amazon.de | External BT |
| GPIO breakout board | €8-15 | BerryBase | Easier access |
| Heat sinks set | €5-10 | Amazon.de | Cooling |
| Active cooling fan | €8-15 | BerryBase | Pi 4/5 cooling |

## 🛍️ German Retailers

### Primary Retailers

1. **BerryBase** (https://www.berrybase.de)
   - Specialized Raspberry Pi shop
   - Wide selection of HATs and accessories
   - German-based, fast shipping
   - Expert support

2. **Reichelt Elektronik** (https://www.reichelt.de)
   - Electronics components
   - Good prices on Pi boards
   - Large inventory
   - Business and private customers

3. **Amazon.de** (https://www.amazon.de)
   - Quick Prime shipping
   - Wide selection
   - Easy returns
   - Competitive prices

4. **Conrad Electronic** (https://www.conrad.de)
   - Professional electronics
   - Physical stores available
   - Reliable quality
   - Business options

5. **eBay.de** (https://www.ebay.de)
   - Budget options
   - Used/refurbished parts
   - International sellers
   - Auction deals

### Specialized Retailers

- **Pimoroni** (ships to DE): High-quality HATs and accessories
- **Adafruit** (ships to DE): Unique modules and sensors
- **Passion Radio**: SDR and RF equipment
- **Welectron**: Electronics components

## 💡 Recommended Build Configurations

**Note**: These configurations assume you're using your Raspberry Pi 5.

### Configuration A: "WiFi Pentester" - Budget Setup (€120-165)

**Perfect for**: WiFi security testing, packet injection, monitor mode attacks

- WS2812B LED strip (8 LEDs) for status codes
- Anker PowerCore 20000mAh PD
- Samsung 64GB SD card
- **Alfa AWUS036ACH** WiFi adapter (~€50) - **Essential for WiFi Pineapple-style attacks**
- RTL-SDR v3 (~€35)
- NRF24L01+ module (~€5)
- USB Hub (4-port)

**Interface**: Web-based dashboard (access via smartphone/laptop WiFi)
**Pros**: Excellent WiFi pentesting, portable, good battery life
**Cons**: Single WiFi adapter (consider adding second for dual-interface attacks)

### Configuration B: "WiFi Pineapple Pro" - Advanced (€280-380)

**Perfect for**: Professional WiFi auditing, dual-band attacks, BLE testing

- NeoPixel 8 LED Stick for RGB status display
- RAVPower 26800mAh PD 30W
- Samsung PRO 128GB SD card
- **Alfa AWUS036ACHM** WiFi adapter (~€60) - **Dual-band, superior monitor mode**
- **Second Alfa AWUS036ACH** (~€50) - **For dual-interface attacks**
- **Ubertooth One** (~€135) - **Bluetooth Low Energy sniffing**
- RTL-SDR v3 (~€35)
- CC1101 module (~€8)
- Argon NEO 5 case
- Powered USB hub (7-port)

**Interface**: Web-based dashboard (access via smartphone/laptop/tablet WiFi)
**Pros**: Dual WiFi adapters for MITM attacks, BLE sniffing, professional setup
**Cons**: Higher cost, more power consumption with multiple adapters

### Configuration C: "Full Spectrum" - Ultimate Capability (€650-850)

**Perfect for**: Complete wireless security research, SDR, all protocols

- Pimoroni Blinkt! (8 RGB LEDs) for status display
- PiSugar 3 Plus battery (UPS functionality)
- 512GB NVMe SSD (fast packet storage)
- **WiFi Pineapple Mark VII** (~€225) - **Professional WiFi auditing platform**
- **Or: 2x Alfa AWUS036ACHM** (~€110-140) - **If building custom solution**
- **HackRF One** (~€325) - **Full-duplex SDR, TX/RX**
- **Ubertooth One** (~€135) - **Bluetooth analysis**
- **Yard Stick One** (~€110) - **Sub-1GHz attacks**
- Argon NEO 5 M.2 case
- Powered USB hub (7-port)

**Interface**: Web-based dashboard (access via any device with web browser)
**Pros**: Complete wireless testing toolkit, professional SDR, all frequency ranges
**Cons**: Expensive, requires significant power, complex setup

## 🌐 Web-Based Interface & LED Status

### Accessing the Device

The Chippin-In-Pi runs in **headless mode** (no display required). All control is done through a locally hosted web interface:

1. **Connect to Pi's WiFi**
   - The Pi creates its own WiFi hotspot (or connects to your network)
   - Connect your smartphone, laptop, or tablet to the Pi's network

2. **Access Web Dashboard**
   - Open a web browser on your device
   - Navigate to `http://chippin.local:3000` or `http://192.168.x.x:3000`
   - Use the web interface to control all security tools

3. **Mobile-First Design**
   - Responsive web interface works on any device
   - Perfect for smartphone control while portable
   - No need for keyboard or mouse

### LED Status Codes

The LED array provides visual feedback without needing to check the web interface:

#### Common Status Patterns

| LED Pattern | Meaning |
|-------------|---------|
| **Solid Green** | System ready, idle |
| **Pulsing Blue** | WiFi/network activity |
| **Blinking Yellow** | Tool running/scanning |
| **Solid Red** | Error or critical alert |
| **Rainbow** | Boot sequence/initialization |
| **Alternating LEDs** | Data transfer in progress |
| **Quick Flash** | Command received |

#### LED Hardware Options

- **WS2812B Strip**: Cheapest option, requires soldering, fully programmable RGB
- **NeoPixel Stick**: Easy to use, pre-soldered headers, RGB
- **Pimoroni Blinkt!**: Premium option, HAT format, library support
- **Individual LEDs**: Simplest option, separate red/green/blue LEDs

### GPIO Pin Connections for LEDs

```
WS2812B/NeoPixel:
- Data Pin: GPIO 18 (Pin 12)
- 5V Power: Pin 2 or 4
- Ground: Pin 6, 9, 14, 20, 25, 30, 34, 39

Individual LEDs (with 220Ω resistors):
- Status LED 1 (Green): GPIO 17 (Pin 11)
- Status LED 2 (Yellow): GPIO 27 (Pin 13)
- Status LED 3 (Red): GPIO 22 (Pin 15)
```

## 🔧 Assembly Tips

### Basic Assembly Steps

1. **Prepare the Pi**
   - Install heat sinks on CPU/RAM
   - Insert SD card with OS
   - Attach GPIO headers if needed

2. **Install LED Status Array**
   - Connect WS2812B/NeoPixel to GPIO 18 (Pin 12)
   - Or wire individual LEDs to GPIO 17, 27, 22
   - Use 220Ω resistors for individual LEDs
   - Secure LEDs to case or front panel

3. **Power Setup**
   - Choose appropriate power bank
   - Use quality USB cables
   - Consider UPS solutions like PiSugar

4. **Add RF Modules**
   - Connect USB-based modules (RTL-SDR, WiFi)
   - Wire GPIO-based modules (NRF24, CC1101)
   - Organize cables neatly

5. **Case Integration**
   - Ensure proper ventilation
   - LED visibility from front/top
   - GPIO access for modules
   - Consider custom 3D printed cases

### Power Consumption Guide

| Configuration | Idle | Active | Runtime (10000mAh) |
|---------------|------|--------|--------------------|
| Pi Zero 2 W | 0.4W | 1.5W | ~18-20 hours |
| Pi 4B (4GB) | 3W | 7W | ~4-5 hours |
| Pi 5 (8GB) | 4W | 10W | ~3-4 hours |

*Add 0.5-1W for LED array and 2-5W for RF modules*

## 📱 Software Setup

After assembling hardware, you'll need to:

1. **Install Raspberry Pi OS (Lite)**
   ```bash
   # Download Raspberry Pi Imager
   # Flash Raspberry Pi OS Lite (no desktop needed for headless)
   # Enable SSH and WiFi during setup
   # Set hostname to "chippin" in Imager advanced options (Ctrl+Shift+X)
   #   or later via 'sudo raspi-config' -> System Options -> Hostname
   ```

2. **Install Chippin-In-Pi**
   ```bash
   git clone https://github.com/jakobneri/Chippin-In-Pi.git
   cd Chippin-In-Pi
   npm install
   
   # Optional: Make CLI globally available as 'chippin' command
   # (requires 'bin' entry in package.json)
   sudo npm link
   ```

3. **Configure Hardware**
   - Enable SPI/I2C in raspi-config (for LED arrays and sensors)
   - Install LED control libraries (rpi-ws281x-native for WS2812B)
   - Set up WiFi adapter drivers and monitor mode support
   - Install wireless security tools (aircrack-ng, hostapd, dnsmasq, etc.)
   - Set up RF module software (rtl-sdr, hackrf, etc.)

4. **WiFi Adapter Setup for Penetration Testing**
   ```bash
   # Install wireless tools
   sudo apt install aircrack-ng hostapd dnsmasq wireshark
   
   # Check WiFi adapter monitor mode support
   sudo airmon-ng
   
   # Enable monitor mode on wlan1 (external adapter)
   sudo airmon-ng start wlan1
   
   # For WiFi Pineapple-style attacks, also install:
   sudo apt install hcxtools hcxdumptool
   ```

5. **Start the Web Interface**
   ```bash
   # If you ran 'npm link', use:
   chippin server start
   
   # Otherwise, use one of these:
   node cli/index.js server start
   npm run server
   
   # Server runs on port 3000
   # Access from another device: http://chippin.local:3000
   # Or use IP address: http://192.168.x.x:3000
   ```

6. **Access from Your Device**
   - Connect smartphone/laptop to same WiFi as Pi
   - Open web browser
   - Navigate to `http://chippin.local:3000`
   - Control all tools from the web dashboard

## 🔐 WiFi Pineapple-Style Capabilities

### What You Can Do

With the right WiFi adapters (like Alfa AWUS036ACH/ACHM), your Pi 5 becomes a powerful WiFi penetration testing platform:

#### Evil Twin Attacks
- Create fake access points that mimic legitimate networks
- Capture credentials and monitor traffic
- Perform MITM (Man-in-the-Middle) attacks

#### Packet Injection
- Deauthentication attacks
- Beacon flooding
- Custom packet crafting

#### Monitor Mode Operations
- Capture WiFi handshakes (WPA/WPA2)
- Network reconnaissance
- Hidden SSID discovery
- Client probing

#### Recommended Software Stack

**WiFi Pineapple alternatives for Raspberry Pi:**
- **Wifiphisher**: Automated phishing attacks
- **Fluxion**: WPA/WPA2 security testing
- **Airgeddon**: All-in-one wireless auditing
- **Bettercap**: Swiss army knife for network attacks
- **Kismet**: Wireless network detector

**Installation options:**

```bash
# Option 1: Use Kali Linux for Raspberry Pi (RECOMMENDED)
# All tools come pre-installed and properly configured
# Download from: https://www.kali.org/get-kali/#kali-arm

# Option 2: Install on Raspberry Pi OS
# Some tools may need additional dependencies or source installation

# Install Bettercap
sudo apt update
sudo apt install bettercap

# Install Aircrack-ng suite (already installed in step 4)
sudo apt install aircrack-ng

# Install Kismet
wget -O - https://www.kismetwireless.net/repos/kismet-release.gpg.key | sudo apt-key add -
echo 'deb https://www.kismetwireless.net/repos/apt/release/buster buster main' | sudo tee /etc/apt/sources.list.d/kismet.list
sudo apt update
sudo apt install kismet

# For Wifiphisher and Fluxion, install from GitHub
# git clone https://github.com/wifiphisher/wifiphisher
# git clone https://github.com/FluxionNetwork/fluxion
```

### Dual WiFi Adapter Setup

For advanced attacks, use two WiFi adapters:
- **Adapter 1 (built-in Pi 5 WiFi)**: Connect to internet/control network
- **Adapter 2 (Alfa AWUS036ACH)**: Monitor mode, packet injection, AP mode

This allows you to:
- Run attacks while maintaining internet connection
- Create evil twin while monitoring real AP
- Simultaneous dual-band operations

## 🔒 Security Considerations

⚠️ **Legal Notice**: Only use these tools on networks and systems you own or have explicit permission to test.

- **RF Equipment**: Some frequencies require licenses
- **WiFi Testing**: Monitor mode may be restricted
- **Export Controls**: Check regulations for SDR devices
- **Responsible Use**: Follow ethical hacking guidelines

## 🌐 Additional Resources

### Communities
- Raspberry Pi Forums (https://forums.raspberrypi.com)
- r/raspberry_pi on Reddit
- r/hacking and r/HowToHack on Reddit
- Hak5 Forums (WiFi Pineapple community)
- DEF CON groups

### Learning Resources
- **WiFi Security**:
  - Aircrack-ng documentation
  - Wifiphisher GitHub
  - Fluxion tutorials
  - WiFi Pineapple University (Hak5)
- **SDR**:
  - RTL-SDR.com blog
  - Great Scott Gadgets tutorials
  - GNU Radio tutorials
- **General**:
  - Hackaday projects
  - GitHub awesome-raspberry-pi
  - Kali Linux documentation

### Software Tools
- **Kali Linux for Raspberry Pi** - Pre-configured with security tools
- **Parrot Security OS** - Alternative security-focused OS
- **Aircrack-ng suite** - WiFi security auditing
- **Bettercap** - Network attack and monitoring
- **Wireshark** - Packet analysis
- **GNU Radio** - SDR software
- **Kismet** - Wireless network detector

## 📞 Support

If you need help with hardware selection or compatibility:
- Open an issue on GitHub
- Ask in Raspberry Pi forums
- Contact retailers for technical questions
- Join security research communities

## 🎓 Upgrade Path

**For Raspberry Pi 5 users** - Start with essentials and expand:

1. **WiFi Basics** (€60-100): LED array + Power bank + Alfa AWUS036ACH
2. **WiFi Pro** (€120-180): Add second WiFi adapter + RTL-SDR + Better power solution
3. **Multi-Protocol** (€250-350): Add Ubertooth One + Yard Stick One + NVMe storage
4. **Full Spectrum** (€500-800): Add HackRF One + WiFi Pineapple or multiple adapters

**Note**: All configurations are headless - control via web interface from your smartphone or laptop!

---

**Last Updated**: January 2026
**Currency**: Euro (€)
**Region**: Germany

*Prices are approximate and may vary. Always check current prices and availability.*
