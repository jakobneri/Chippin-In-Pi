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

#### WiFi/Wireless HATs for Raspberry Pi

**Note**: WiFi HATs provide additional wireless connectivity but **cannot replace** USB WiFi adapters for penetration testing due to driver and monitor mode limitations.

| HAT | Purpose | Price (€) | Retailer | Capabilities |
|-----|---------|-----------|----------|--------------|
| **Waveshare SX1262 LoRa HAT** | Long-range wireless | €20-30 | Amazon.de, BerryBase | LoRa 868MHz, GPIO-based |
| **Waveshare ESP32-C3 HAT** | WiFi/BLE expansion | €12-18 | Amazon.de, Waveshare | AT commands, UART control |
| **Adafruit AirLift FeatherWing** | WiFi co-processor | €15-25 | Adafruit (ships to DE) | ESP32-based, SPI interface |
| **PiJuice HAT** | UPS + connectivity | €45-55 | Amazon.de, Pimoroni | Battery + optional WiFi module |

**Why WiFi HATs are NOT suitable for pentesting:**
- GPIO/UART/SPI WiFi HATs lack direct kernel driver access needed for monitor mode
- No packet injection support (requires specific chipsets + kernel drivers)
- Limited to station/AP mode only
- Best used for: Additional connectivity, IoT projects, LoRa communication

**For WiFi Pineapple capabilities, always use USB WiFi adapters (Alfa recommended)**

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

### Configuration A: "Compact WiFi Pentester" - Budget (€104-141)

**Perfect for**: WiFi security testing, portable, minimal footprint

- **Raspberry Pi Sense HAT** (8x8 LED matrix) - €30-40
- Anker PowerCore 10000mAh PD - €20-28
- Samsung 32GB SD card - €6-8
- **Alfa AWUS036ACH** WiFi adapter - €45-60 - **Essential for WiFi Pineapple-style attacks**
- Compact cables - €3-5

**Setup**: WiFi adapter plugs directly into Pi 5 USB port (no hub needed)
**Interface**: Web-based dashboard (access via smartphone/laptop WiFi)
**Pros**: Ultra-compact, excellent WiFi pentesting, very portable, Sense HAT provides 64 LEDs for rich status display
**Cons**: Single WiFi adapter, limited to 1-2 USB devices at once

### Configuration B: "WiFi HAT Multi-Tool" - Balanced (€155-216)

**Perfect for**: WiFi + RF testing with integrated WiFi HAT, compact, versatile

- **Waveshare SX1262 LoRa HAT** or **ESP32 WiFi HAT** - €12-30 - **GPIO-based wireless**
- **Simple LED indicators** (3x LEDs: red/yellow/green) - €2-5
- Anker PowerCore 20000mAh PD - €35-45
- Samsung PRO 64GB SD card - €12-18
- **Alfa AWUS036ACHM** WiFi adapter - €55-70 - **Dual-band, superior monitor mode**
- **RTL-SDR v3** - €30-40 - **Software Defined Radio**
- Compact case - €8-18

**Setup**: WiFi HAT for additional wireless capabilities, Alfa adapter for pentesting
**Interface**: Web-based dashboard (access via smartphone/laptop/tablet WiFi)
**Pros**: Integrated WiFi HAT, versatile, WiFi + SDR + LoRa capabilities, simple LED status
**Cons**: WiFi HATs limited to basic operations (not suitable for monitor mode/injection)

**Note**: WiFi HATs like ESP32-based or Waveshare modules provide additional wireless connectivity but **cannot replace** dedicated USB WiFi adapters (like Alfa) for penetration testing due to driver and monitor mode limitations.

### Configuration C: "Premium Dual-WiFi" - Advanced (€278-368)

**Perfect for**: Professional WiFi testing with dual adapters, maximum capability

- **NeoPixel 8 LED Stick** or **Pimoroni Blinkt!** - €5-10 - **RGB status display**
- **PiSugar 3 Plus** battery (UPS functionality) - €65-80
- Samsung PRO Endurance 64GB SD card - €15-20
- **Two Alfa AWUS036ACH** WiFi adapters - €90-120 - **Dual-interface attacks**
- **Ubertooth One** - €120-150 - **Bluetooth Low Energy sniffing**
- PiSugar compatible compact case - €8-23
- Small 2-port USB-C hub - €8-12 - **For simultaneous devices**

**Setup**: Dual WiFi adapters for MITM attacks, one for AP mode, one for monitor mode
**Interface**: Web-based dashboard (access via any device with web browser)
**Pros**: Dual WiFi adapters enable advanced attacks, integrated UPS, professional BLE testing, flexible LED display
**Cons**: Higher cost, requires compact USB hub for all devices simultaneously

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

### LED Status Display Options

Depending on your configuration, you can use different LED displays for visual feedback:

#### Option 1: Raspberry Pi Sense HAT (Configuration A)

The **Raspberry Pi Sense HAT** provides an 8x8 LED matrix (64 RGB LEDs) for rich visual feedback:

**Capabilities:**
- **Text scrolling**: Display status messages, IP addresses, tool names
- **Icons and symbols**: WiFi signal strength, battery level, attack type
- **Color-coded zones**: Different quadrants for different statuses
- **Animations**: Progress bars, loading indicators, activity patterns

**Common Status Patterns:**

| LED Pattern | Meaning |
|-------------|---------|
| **Green smiley face** | System ready, idle |
| **Blue WiFi icon** | WiFi/network activity |
| **Yellow scanning animation** | Tool running/scanning |
| **Red X or warning** | Error or critical alert |
| **Rainbow sweep** | Boot sequence/initialization |
| **Scrolling text** | Tool name or status message |

**Sense HAT Features:**
- **8x8 RGB LED matrix** - 64 individually addressable LEDs
- **5-button joystick** - Optional local control (up/down/left/right/center)
- **Environmental sensors** - Temperature, humidity, pressure (useful for field work)
- **Motion sensors** - Gyroscope, accelerometer, magnetometer
- **Easy mounting** - Direct GPIO connection, no wiring needed

**Python Library Support:**

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

#### Option 2: Simple LED Indicators (Configuration B)

For a minimalist setup with WiFi HATs, use **3 basic LEDs**:

**Components:**
- 3x LEDs (red, yellow, green) - €2-5
- 3x 220Ω resistors
- Jumper wires

**GPIO Connections:**
- Green LED: GPIO 17 (Pin 11) - System ready
- Yellow LED: GPIO 27 (Pin 13) - Activity/scanning
- Red LED: GPIO 22 (Pin 15) - Error/alert

**Status Patterns:**
- Green solid: System idle, ready
- Yellow blinking: WiFi scanning/tool active
- Red solid: Error condition
- All off: System booting/shutdown

**Python Control:**
```python
import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)
GPIO.setup(17, GPIO.OUT)  # Green
GPIO.setup(27, GPIO.OUT)  # Yellow
GPIO.setup(22, GPIO.OUT)  # Red

# Turn on green LED
GPIO.output(17, GPIO.HIGH)
```

#### Option 3: RGB LED Stick (Configuration C)

For compact RGB status display, use **NeoPixel or Blinkt!**:

**Options:**
- **NeoPixel 8 LED Stick** (€5-10) - Adafruit compatible, 8 RGB LEDs
- **Pimoroni Blinkt!** (€6-10) - HAT format, 8 RGB LEDs, easier to mount

**Features:**
- 8 individually addressable RGB LEDs
- Single GPIO pin control (GPIO 18)
- Python library support (rpi-ws281x or blinkt)
- Compact form factor

**Status Display:**
- Each LED can show different status (network, power, activity, etc.)
- Color-coded feedback (green=good, yellow=warning, red=error)
- Animation support for scanning/loading

## 🔧 Assembly Tips

### Basic Assembly Steps

1. **Prepare the Pi**
   - Install heat sinks on CPU/RAM (optional for compact build)
   - Insert SD card with OS (32-64GB sufficient)

2. **Install LED Display (depends on configuration)**
   
   **For Sense HAT (Config A):**
   - Align Sense HAT GPIO pins with Pi 5 GPIO header
   - Press down firmly to ensure good connection
   - Secure with standoffs (usually included with Sense HAT)
   - No wiring needed - direct GPIO connection

   **For Simple LEDs (Config B):**
   - Connect LEDs with 220Ω resistors to GPIO 17, 27, 22
   - Use jumper wires from GPIO pins to breadboard
   - Connect LED cathodes (short leg) to ground

   **For RGB LED Stick (Config C):**
   - NeoPixel: Connect to GPIO 18, 5V power, and ground
   - Blinkt!: Mounts directly on GPIO header (pins 1-40)

3. **Install WiFi HAT (if using Config B)**
   - Align HAT with GPIO pins (Waveshare SX1262 or ESP32 HAT)
   - **Check GPIO conflicts**: Waveshare SX1262 uses SPI (GPIO 7-11), ESP32 HAT uses UART (GPIO 14-15)
   - Simple LEDs on GPIO 17, 27, 22 are compatible (no conflict)
   - Secure with standoffs

4. **Power Setup**
   - For maximum compactness: Use compact power bank (10000-20000mAh)
   - For UPS functionality: Use PiSugar 3 Plus (integrated solution)
   - Use short USB-C cables (15-30cm) to minimize bulk

5. **Add WiFi Adapter (compact setup)**
   - Plug Alfa WiFi adapter directly into Pi 5 USB port
   - No hub needed for single adapter + LED display setup
   - Config C: Use small USB-C hub (€8-12) for dual WiFi adapters + Ubertooth

6. **Case Integration**
   - **Config A (Sense HAT)**: Choose case compatible with Sense HAT, ensure LED matrix visibility
   - **Config B (WiFi HAT)**: Case must accommodate WiFi HAT and simple LEDs
   - **Config C (Dual WiFi)**: Compact case with USB-C hub space
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

**Note on Runtime Calculations:**  
*These are ideal estimates. Real-world runtimes are typically 15-25% lower due to:*
- *USB-C power bank efficiency (~80-85%)*
- *DC-DC conversion losses*
- *Variable PD voltage negotiation (5V, 9V, 12V, 20V)*
- *Battery degradation and ambient temperature*

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
   # Note: Using hostname "chippin" allows access at http://chippin.local
   #       (used in web interface instructions below)
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

# Install Kismet (modern method - auto-detect OS version)
CODENAME=$(. /etc/os-release 2>/dev/null && echo "$VERSION_CODENAME" || echo "bookworm")
wget -O - https://www.kismetwireless.net/repos/kismet-release.gpg.key | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/kismet.gpg
echo "deb https://www.kismetwireless.net/repos/apt/release/${CODENAME} ${CODENAME} main" | sudo tee /etc/apt/sources.list.d/kismet.list
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

1. **Ultra-Compact Start**: Sense HAT (€30-40) + Power bank (€20-28) + 32GB SD (€6-8) = €56-76
2. **WiFi Pentesting**: Add Alfa AWUS036ACH (€45-60) = €101-136 total
3. **Multi-Protocol**: Add RTL-SDR v3 (€30-40) = €131-176 total
4. **Premium Compact**: Upgrade to PiSugar UPS (€65-80) + Ubertooth One (€120-150) = €296-406 total

**Note**: All configurations are ultra-compact and headless - control via web interface!
**Compact Philosophy**: No USB hubs, minimal cables, integrated components like Sense HAT

---

**Last Updated**: January 2026
**Currency**: Euro (€)
**Region**: Germany

*Prices are approximate and may vary. Always check current prices and availability.*
