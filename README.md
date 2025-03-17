# Python Webpage Alt Tag Test

## Overview
This Python script uses Selenium to check if all `<img>` tags on a webpage have `alt` attributes, improving accessibility and compliance with WCAG standards.

## Prerequisites
- **Python 3.x** installed
- **Google Chrome** (or another browser)
- **Chromedriver** (or appropriate WebDriver for your browser)
- **Selenium** installed

## Installation

### 1. Install Python (if not already installed)
If Python is not installed, install it via Homebrew:
```sh
brew install python
```

### 2. Install Selenium
Run the following command:
```sh
python3 -m pip install selenium
```

### 3. Download the WebDriver
- Download the appropriate WebDriver for your browser:
  - **Chrome:** [ChromeDriver](https://sites.google.com/chromium.org/driver/)
  - **Firefox:** [GeckoDriver](https://github.com/mozilla/geckodriver/releases)
- Place it in your system `PATH` or specify its location in the script.

## Running the Script

Save the following script as `check_alt_tags.py`:

```python
from selenium import webdriver
from selenium.webdriver.common.by import By

# Replace with your webpage URL
URL = "https://www.exmaple.com"

# Set up Selenium WebDriver (Ensure chromedriver is in your PATH)
driver = webdriver.Chrome()

driver.get(URL)

# Find all <img> tags
images = driver.find_elements(By.TAG_NAME, "img")

# Check for missing or empty alt attributes
missing_alt = []
for img in images:
    alt_text = img.get_attribute("alt")
    if not alt_text:
        missing_alt.append(img.get_attribute("src"))

# Output results
if missing_alt:
    print("❌ Images missing alt attributes:")
    for src in missing_alt:
        print(f"- {src}")
else:
    print("✅ All images have alt attributes!")

# Close the browser
driver.quit()
```

### Run the script:
```sh
python3 check_alt_tags.py
```

## Using a Virtual Environment (Recommended)
Instead of installing system-wide dependencies, create a virtual environment:
```sh
python3 -m venv venv
source venv/bin/activate
pip install selenium
```
After use, deactivate it:
```sh
deactivate
```

## Why This Test is Important
**Enhances accessibility** – Helps visually impaired users using screen readers.
**Improves SEO** – Search engines use alt text for indexing images.
**Ensures compliance** – Meets WCAG and ADA accessibility standards.

## Additional Resources
- [Selenium Documentation](https://www.selenium.dev/documentation/)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Why Alt Text Matters](https://webaim.org/techniques/alttext/)

## License
This project is licensed under the MIT License.

