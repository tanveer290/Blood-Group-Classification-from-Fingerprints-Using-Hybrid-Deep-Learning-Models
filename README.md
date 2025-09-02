# Blood-Group-Classification-from-Fingerprints-Using-Hybrid-Deep-Learning-Models
Predict human blood groups from fingerprint images by combining CNN-based image features with dermatoglyphic pattern distributions. Uses ResNet50, DenseNet121, MobileNetV2, and EfficientNetB0 with an ensemble approach achieving 89% accuracy and strong performance on rare blood groups.

# Fingerprint-Based Blood Group Prediction

This repository contains the implementation of a novel system for predicting human blood groups using fingerprint images by combining visual features with dermatoglyphic (ridge pattern) information.

## Overview

The approach extracts both **image-based features** and **local ridge patterns** (Arch, Loop, Whorl) from fingerprint scans. The fingerprints are preprocessed for clarity using **denoising, contrast enhancement, sharpening, and resizing** techniques. A custom module analyzes localized ridge orientation to compute **pattern distributions**, enabling **feature-level fusion** with image features.

## Methodology

* Statistical analysis (Chi-square test and Cramér’s V) was conducted to investigate correlations between fingerprint patterns and blood groups, revealing a moderate relationship.
* Multiple **Convolutional Neural Networks (CNNs)**—ResNet50, DenseNet121, MobileNetV2, and EfficientNetB0—were trained independently using hybrid inputs (fingerprint images + pattern distribution vectors).
* The **ensemble model** combines EfficientNetB0, DenseNet121, and MobileNetV2 with weighted soft voting (\[0.34, 0.33, 0.33]), improving overall performance and particularly helping low-support classes (A⁻, AB⁻).

## Performance

* Best individual model: EfficientNetB0 — **86% accuracy**
* Ensemble model: **89% accuracy** and **F1-score of 0.90**
* Demonstrated strong performance in predicting underrepresented blood groups

## Applications

This system can potentially be used for:

* Non-invasive medical diagnostics
* Forensic investigations
* Public health screening

