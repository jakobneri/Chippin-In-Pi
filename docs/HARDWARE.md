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

#### Option 1: Ultra-Compact Budget Setup (~€59-81)

| Component | Model | Price (€) | Retailer | Notes |
|-----------|-------|-----------|----------|-------|
| **SD Card** | SanDisk Ultra 32GB Class 10 | €6-8 | Amazon.de, MediaMarkt | Sufficient for OS + tools |
| **Power Bank** | Anker PowerCore 10000mAh PD | €20-28 | Amazon.de | Compact, USB-C PD |
| **LED Array** | Raspberry Pi Sense HAT | €30-40 | BerryBase, Pimoroni | 8x8 LED matrix + sensors |
| **Cables** | Short USB-C cable | €3-5 | Amazon.de | Compact cables |

**Total: ~€59-81**
**Interface**: Web-based (connect via WiFi)
**Compact Factor**: No USB hub needed - use Pi 5's built-in ports

#### Option 2: Compact Performance Setup (~€98-135)

| Component | Model | Price (€) | Retailer | Notes |
|-----------|-------|-----------|----------|-------|
| **SD Card** | Samsung PRO Plus 64GB | €12-18 | Amazon.de, MediaMarkt | Faster speeds |
| **Power Bank** | Anker PowerCore 20000mAh PD | €35-45 | Amazon.de | Good runtime |
| **LED Array** | Raspberry Pi Sense HAT | €30-40 | BerryBase, Pimoroni | 8x8 LED matrix + sensors |
| **Case** | Official Pi 5 Case | €8-12 | BerryBase, Reichelt | Compact protection |
| **Cables** | Premium USB-C cables | €5-8 | Amazon.de | - |
| **Accessories** | Heatsinks, thermal pads | €8-12 | BerryBase | Passive cooling |

**Total: ~€98-135**
**Interface**: Web-based (connect via WiFi)
**Compact Factor**: No USB hub - direct WiFi adapter connection to Pi 5 ports

#### Option 3: Compact Premium with UPS (~€138-182)

| Component | Model | Price (€) | Retailer | Notes |
|-----------|-------|-----------|----------|-------|
| **SD Card** | Samsung PRO Endurance 64GB | €15-20 | Amazon.de | High endurance |
| **Power Supply** | Official Pi 5 27W USB-C PSU | €12-15 | BerryBase | For charging |
| **Battery** | PiSugar 3 Plus | €65-80 | Amazon.de, AliExpress | Compact UPS |
| **LED Array** | Raspberry Pi Sense HAT | €30-40 | BerryBase, Pimoroni | 8x8 LED matrix + sensors |
| **Case** | PiSugar Compatible Case | €8-15 | Amazon.de | Compact with UPS |
| **Accessories** | Thermal management | €8-12 | BerryBase | Heatsinks |

**Total: ~€138-182**
**Interface**: Web-based (connect via WiFi)
**Compact Factor**: Integrated UPS, no external power bank needed

### Wireless & RF Modules

These modules extend wireless capabilities for security testing:

#### WiFi Adapters for Penetration Testing (WiFi Pineapple-style)

**Essential for packet injection, monitor mode, and WiFi attacks:**

| Module | Chipset | Price (€) | Retailer | Capabilities |
|--------|---------|-----------|----------|--------------|
| **Alfa AWUS036ACH** | Realtek RTL8812AU | €45-60 | Amazon.de | Dual-band, monitor mode, packet injection |
| **Alfa AWUS036ACHM** | MediaTek MT7612U | €55-70 | Amazon.de | Better monitor mode, dual-band |
| **Alfa AWUS036ACM** | MediaTek MT7612U | €50-65 | Amazon.de | Long-range, monitor mode |
| **TP-Link TL-WN722N v1** | Atheros AR9271 | €15-25 | eBay.de | Budget (v1 ONLY! Check FCC ID: TE7WN722NV1) |
| **Panda PAU09 N600** | Ralink RT5572 | €25-35 | Amazon.de | Dual-band, good compatibility |
| **WiFi Pineapple Nano** | Complete kit | €100-120 | Hak5 (ships to DE) | Ready-to-use (may have import fees) |
| **WiFi Pineapple Mark VII** | Complete kit | €200-250 | Hak5 (ships to DE) | Professional (may have import fees) |

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
| **Raspberry Pi Sense HAT** | €30-40 | BerryBase, Pimoroni | 8x8 LED matrix, sensors (recommended) |
| Jumper wires (40pcs) | €3-5 | Amazon.de, BerryBase | GPIO connections |
| Compact USB-C cables (15cm) | €5-8 | Amazon.de | Space-saving cables |
| USB WiFi adapter (compact) | €10-20 | Amazon.de | Additional interface |
| USB Bluetooth adapter (nano) | €8-12 | Amazon.de | External BT (if needed) |
| Heat sinks set | €5-10 | Amazon.de | Passive cooling |
| Low-profile heatsink case | €10-15 | Amazon.de | Compact thermal solution |

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

**Note**: These configurations assume you're using your Raspberry Pi 5 with **ultra-compact** design (no USB hubs).

### Configuration A: "Compact WiFi Pentester" - Budget (€90-135)

**Perfect for**: WiFi security testing, portable, minimal footprint

- **Raspberry Pi Sense HAT** (8x8 LED matrix) - €35
- Anker PowerCore 10000mAh PD
- Samsung 32GB SD card
- **Alfa AWUS036ACH** WiFi adapter (~€50) - **Essential for WiFi Pineapple-style attacks**
- Compact cables

**Setup**: WiFi adapter plugs directly into Pi 5 USB port (no hub needed)
**Interface**: Web-based dashboard (access via smartphone/laptop WiFi)
**Pros**: Ultra-compact, excellent WiFi pentesting, very portable, Sense HAT provides 64 LEDs for rich status display
**Cons**: Single WiFi adapter, limited to 1-2 USB devices at once

### Configuration B: "Compact Multi-Tool" - Balanced (€180-250)

**Perfect for**: WiFi + RF testing, compact, versatile

- **Raspberry Pi Sense HAT** (8x8 LED matrix) - €35
- Anker PowerCore 20000mAh PD
- Samsung PRO 64GB SD card
- **Alfa AWUS036ACHM** WiFi adapter (~€60) - **Dual-band, superior monitor mode**
- **RTL-SDR v3** (~€35) - **Software Defined Radio**
- Compact case

**Setup**: Rotate between WiFi adapter and RTL-SDR as needed (Pi 5 has multiple USB ports)
**Interface**: Web-based dashboard (access via smartphone/laptop/tablet WiFi)
**Pros**: Compact yet versatile, Sense HAT 8x8 display, WiFi + SDR capabilities
**Cons**: Can't use both WiFi adapter and SDR simultaneously without careful port management

### Configuration C: "Compact Premium" - Advanced (€280-350)

**Perfect for**: Professional WiFi testing with UPS, maximum portability

- **Raspberry Pi Sense HAT** (8x8 LED matrix) - €35
- **PiSugar 3 Plus** battery (UPS functionality) - €70
- Samsung PRO Endurance 64GB SD card
- **Alfa AWUS036ACHM** WiFi adapter (~€60) - **Dual-band, superior monitor mode**
- **Ubertooth One** (~€135) - **Bluetooth Low Energy sniffing**
- PiSugar compatible compact case

**Setup**: Ultra-compact with integrated UPS, swap between Ubertooth and WiFi adapter as needed
**Interface**: Web-based dashboard (access via any device with web browser)
**Pros**: Integrated UPS for true portability, Sense HAT 8x8 matrix, professional WiFi & BLE testing, very compact
**Cons**: Can only use one USB tool at a time (WiFi OR Bluetooth), higher initial cost

**Note**: If you need simultaneous WiFi + Bluetooth, consider a small 2-port powered USB-C hub (€8-12)

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

The **Raspberry Pi Sense HAT** provides an 8x8 LED matrix (64 RGB LEDs) for rich visual feedback without needing to check the web interface:

#### Sense HAT Status Display Capabilities

The 8x8 LED matrix allows for:
- **Text scrolling**: Display status messages, IP addresses, tool names
- **Icons and symbols**: WiFi signal strength, battery level, attack type
- **Color-coded zones**: Different quadrants for different statuses
- **Animations**: Progress bars, loading indicators, activity patterns

#### Common Status Patterns

| LED Pattern | Meaning |
|-------------|---------|
| **Green smiley face** | System ready, idle |
| **Blue WiFi icon** | WiFi/network activity |
| **Yellow scanning animation** | Tool running/scanning |
| **Red X or warning** | Error or critical alert |
| **Rainbow sweep** | Boot sequence/initialization |
| **Scrolling text** | Tool name or status message |
| **Pulsing center** | Command received/processing |

#### Sense HAT Features

The Raspberry Pi Sense HAT includes:
- **8x8 RGB LED matrix** - 64 individually addressable LEDs
- **5-button joystick** - Optional local control (up/down/left/right/center)
- **Environmental sensors** - Temperature, humidity, pressure (useful for field work)
- **Motion sensors** - Gyroscope, accelerometer, magnetometer
- **Easy mounting** - Direct GPIO connection, no wiring needed

#### Python Library Support

```python
from sense_hat import SenseHat
sense = SenseHat()

# Display text
sense.show_message("WiFi Scan", text_colour=[0, 255, 0])

# Show icons (64-element list for 8x8 display)
wifi_icon = [
    0,0,0,0,0,0,0,0,
    0,0,1,1,1,1,0,0,
    0,1,0,0,0,0,1,0,
    # ... define your 8x8 pattern
]
sense.set_pixels(wifi_icon)

# Set individual pixels
sense.set_pixel(x, y, r, g, b)  # x,y in range 0-7
```

## 🔧 Assembly Tips

### Basic Assembly Steps

1. **Prepare the Pi**
   - Install heat sinks on CPU/RAM (optional for compact build)
   - Insert SD card with OS (32-64GB sufficient)

2. **Install Sense HAT**
   - Align Sense HAT GPIO pins with Pi 5 GPIO header
   - Press down firmly to ensure good connection
   - Secure with standoffs (usually included with Sense HAT)
   - No wiring needed - direct GPIO connection

3. **Power Setup**
   - For maximum compactness: Use compact power bank (10000-20000mAh)
   - For UPS functionality: Use PiSugar 3 Plus (integrated solution)
   - Use short USB-C cables (15-30cm) to minimize bulk

4. **Add WiFi Adapter (compact setup)**
   - Plug Alfa WiFi adapter directly into Pi 5 USB port
   - No hub needed for single adapter + Sense HAT setup
   - Pi 5 has enough power for Sense HAT + 1 WiFi adapter

5. **Case Integration**
   - Choose compact case compatible with Sense HAT
   - Ensure Sense HAT LED matrix is visible through case top
   - Some cases have transparent tops or cutouts for Sense HAT
   - Maintain proper ventilation for passive cooling

### Compact Setup Notes

**For Ultra-Compact Builds:**
- Sense HAT connects directly to GPIO (no cables)
- Use Pi 5's built-in USB ports (no hub needed for 1-2 devices)
- Choose compact power bank or integrated UPS (PiSugar)
- Short cables reduce bulk significantly
- Optional: Compact 2-port USB-C hub (~€8) if you need WiFi + Bluetooth simultaneously

### Power Consumption Guide

| Configuration | Idle | Active | Runtime (10000mAh) | Runtime (20000mAh) |
|---------------|------|--------|--------------------|--------------------|
| Pi 5 + Sense HAT | 4.5W | 8W | ~3.5-4 hours | ~7-8 hours |
| Pi 5 + Sense HAT + WiFi adapter | 5W | 11W | ~3 hours | ~6 hours |
| Pi 5 + Sense HAT + WiFi + RTL-SDR | 7W | 13W | ~2.5 hours | ~5 hours |

*Sense HAT adds ~0.5W, WiFi adapters add 1-3W, RTL-SDR adds 2W*

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
   - Enable I2C in raspi-config (required for Sense HAT)
   - Set up WiFi adapter drivers and monitor mode support
   - Install wireless security tools (aircrack-ng, hostapd, dnsmasq, etc.)
   - Set up RF module software (rtl-sdr, hackrf, etc.) if using

4. **Sense HAT Setup**
   ```bash
   # Install Sense HAT support
   sudo apt install sense-hat python3-sense-hat
   
   # Enable I2C
   sudo raspi-config
   # Navigate to: Interface Options -> I2C -> Enable
   
   # Test Sense HAT
   python3 -c "from sense_hat import SenseHat; s = SenseHat(); s.show_message('Ready!')"
   
   # The 8x8 LED matrix is now ready for status display
   ```

5. **WiFi Adapter Setup for Penetration Testing**
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

6. **Start the Web Interface**
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

7. **Access from Your Device**
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

# Install Kismet (modern method)
wget -O - https://www.kismetwireless.net/repos/kismet-release.gpg.key | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/kismet.gpg
echo 'deb https://www.kismetwireless.net/repos/apt/release/bullseye bullseye main' | sudo tee /etc/apt/sources.list.d/kismet.list
sudo apt update
sudo apt install kismet

# For Wifiphisher - install from source
git clone https://github.com/wifiphisher/wifiphisher
cd wifiphisher
sudo python3 setup.py install

# For Fluxion - install from source
git clone https://github.com/FluxionNetwork/fluxion
cd fluxion
# Follow repository instructions for dependencies
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

**For Raspberry Pi 5 users with compact builds** - Start minimal and expand:

1. **Ultra-Compact Start** (€60-90): Sense HAT + Power bank + 32GB SD card
2. **WiFi Pentesting** (€110-140): Add Alfa AWUS036ACH WiFi adapter
3. **Multi-Protocol** (€145-180): Add RTL-SDR v3 for SDR capabilities
4. **Premium Compact** (€210-280): Upgrade to PiSugar UPS + Ubertooth One for Bluetooth

**Note**: All configurations are ultra-compact and headless - control via web interface!
**Compact Philosophy**: No USB hubs, minimal cables, integrated components like Sense HAT

---

**Last Updated**: January 2026
**Currency**: Euro (€)
**Region**: Germany

*Prices are approximate and may vary. Always check current prices and availability.*
