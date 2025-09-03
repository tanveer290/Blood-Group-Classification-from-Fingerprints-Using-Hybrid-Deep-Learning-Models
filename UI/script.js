const uploadInput = document.getElementById('fingerprintImage');
const previewImage = document.getElementById('previewImage');
const resultCard = document.getElementById('result');
const bloodGroupDiv = document.getElementById('bloodGroup');
const confidenceDiv = document.getElementById('confidence');

// Show image preview
uploadInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Handle Analyze Now button click
async function uploadImage() {
    const file = uploadInput.files[0];
    if (!file) {
        alert('Please select a fingerprint image first!');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('/detect', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.error) {
            alert(result.error);
            return;
        }

        bloodGroupDiv.innerHTML = `<i class="fas fa-tint"></i> Blood Group: <strong>${result.blood_group}</strong>`;
        confidenceDiv.innerHTML = `<i class="fas fa-chart-line"></i> Confidence: <strong>${result.confidence}%</strong>`;
        resultCard.style.display = 'block';
    } catch (error) {
        console.error('Error:', error);
        alert('Analysis failed. Please try again.');
    }
}
