let words = [];
let currentIndex = 0;

document.getElementById('startBtn').addEventListener('click', startReview);
document.getElementById('nextBtn').addEventListener('click', showNextWord);
document.getElementById('endBtn').addEventListener('click', endReview);

function startReview() {
    const input = document.getElementById('wordInput').value;
    words = input.split('\n').filter(word => word.trim() !== '');
    
    if (words.length === 0) {
        alert('请至少输入一个单词');
        return;
    }
    
    words = words.sort(() => Math.random() - 0.5);
    currentIndex = 0;
    
    const inputSection = document.querySelector('.input-section');
    const reviewSection = document.getElementById('reviewSection');
    
    inputSection.style.opacity = '0';
    inputSection.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        inputSection.style.display = 'none';
        reviewSection.style.display = 'block';
        setTimeout(() => {
            reviewSection.classList.add('active');
        }, 50);
    }, 300);
    
    showCurrentWord();
}

function showCurrentWord() {
    const wordDisplay = document.getElementById('wordDisplay');
    wordDisplay.style.opacity = '0';
    wordDisplay.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        wordDisplay.textContent = words[currentIndex];
        wordDisplay.style.opacity = '1';
        wordDisplay.style.transform = 'translateY(0)';
    }, 300);
}

function showNextWord() {
    currentIndex = (currentIndex + 1) % words.length;
    showCurrentWord();
}

function endReview() {
    const inputSection = document.querySelector('.input-section');
    const reviewSection = document.getElementById('reviewSection');
    
    reviewSection.classList.remove('active');
    setTimeout(() => {
        reviewSection.style.display = 'none';
        inputSection.style.display = 'block';
        inputSection.style.opacity = '1';
        inputSection.style.transform = 'translateY(0)';
        document.getElementById('wordInput').value = '';
    }, 300);
} 