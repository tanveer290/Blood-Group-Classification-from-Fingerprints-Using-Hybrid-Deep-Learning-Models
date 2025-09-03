# Results – Blood Group Classification from Fingerprints

## Overview
We evaluated multiple CNN architectures (ResNet50, DenseNet121, MobileNetV2, EfficientNetB0) on fingerprint images combined with ridge pattern distributions (Arch, Loop, Whorl).  
A weighted ensemble of EfficientNetB0, DenseNet121, and MobileNetV2 achieved the best results.

---


## Individual CNN Model Performance

| Model          | Accuracy | Macro F1-Score |
|----------------|----------|----------------|
| ResNet50       | 84%      | 0.84           |
| MobileNetV2    | 85%      | 0.85           |
| DenseNet121    | 84%      | 0.84           |
| EfficientNetB0 | **86%**  | **0.86**       |

---

## Ensemble Model (EfficientNetB0 + DenseNet121 + MobileNetV2)
- **Accuracy:** 89%  
- **F1-score:** 0.90  
- **Weights:** [0.34, 0.33, 0.33]  
- **Benefit:** Improved classification for low-support groups (A⁻, AB⁻).  

---

## Confusion Matrix
![Confusion Matrix](confusion_matrix.png)

---

## Key Insights
- Feature-level fusion (fingerprint + ridge pattern distributions) improved discrimination.  
- Ensemble method reduced misclassification for visually similar groups (e.g., A⁻ vs AB⁻).  
- Statistical tests confirmed a **moderate correlation** between fingerprint ridge patterns and blood groups (Cramér’s V ≈ 0.31).  

---

## Conclusion
- **Ensemble model outperformed individual models**, achieving **89% accuracy** and strong balance across all blood groups.  
- The method is **lightweight, explainable, and deployable** on modest hardware, making it useful for **non-invasive diagnostics, forensic, and healthcare applications**.  
