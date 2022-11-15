# Barcode Views for CrossCompute

Scan barcodes in your CrossCompute automations. Here are the views included in this package:

- barcode

Please see https://github.com/crosscompute/crosscompute for more information about the CrossCompute Analytics Automation Framework.

## Usage

```bash
# Upgrade package
pip install crosscompute-views-barcode

# Update configuration
vim automate.yml
  input:
    variables:
      - id: x
        view: barcode
  output:
    variables:
      - id: y
        view: barcode
```
