
        document.addEventListener('DOMContentLoaded', () => {
            // --- DOM Element References ---
            const passwordDisplay = document.getElementById('password-display');
            const copyBtn = document.getElementById('copy-btn');
            const lengthSlider = document.getElementById('length');
            const lengthValue = document.getElementById('length-value');
            const generateBtn = document.getElementById('generate-btn');

            const includeUppercase = document.getElementById('include-uppercase');
            const includeLowercase = document.getElementById('include-lowercase');
            const includeNumbers = document.getElementById('include-numbers');
            const includeSymbols = document.getElementById('include-symbols');

           
            const charSets = {
                uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                lowercase: 'abcdefghijklmnopqrstuvwxyz',
                numbers: '0123456789',
                symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
            };

            lengthSlider.addEventListener('input', () => {
                lengthValue.textContent = lengthSlider.value;
            });

            
            generateBtn.addEventListener('click', () => {
                const length = parseInt(lengthSlider.value);
                let characterPool = '';
                let generatedPassword = '';
                
                const selectedOptions = [];

                if (includeUppercase.checked) {
                    characterPool += charSets.uppercase;
                    selectedOptions.push('uppercase');
                }
                if (includeLowercase.checked) {
                    characterPool += charSets.lowercase;
                     selectedOptions.push('lowercase');
                }
                if (includeNumbers.checked) {
                    characterPool += charSets.numbers;
                     selectedOptions.push('numbers');
                }
                if (includeSymbols.checked) {
                    characterPool += charSets.symbols;
                     selectedOptions.push('symbols');
                }

                if (characterPool === '') {
                    alert('Please select at least one character type.');
                    return;
                }
                
                for(const option of selectedOptions) {
                    generatedPassword += getRandomChar(charSets[option]);
                }

                for (let i = generatedPassword.length; i < length; i++) {
                    generatedPassword += getRandomChar(characterPool);
                }
                
                passwordDisplay.value = shuffleString(generatedPassword);
            });
            
            
            copyBtn.addEventListener('click', () => {
                if (passwordDisplay.value === '') return;
                
                passwordDisplay.select();
                document.execCommand('copy');
                
                // Visual feedback
                const originalIcon = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i data-lucide="check" class="w-6 h-6 text-green-500"></i>';
                lucide.createIcons();

                setTimeout(() => {
                    copyBtn.innerHTML = originalIcon;
                    lucide.createIcons();
                }, 1500);
            });
            
           
            function getRandomChar(str) {
                const randomIndex = Math.floor(Math.random() * str.length);
                return str[randomIndex];
            }
            
            
            function shuffleString(str) {
                const arr = str.split('');
                for (let i = arr.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
                }
                return arr.join('');
            }

            // --- Initial Setup ---
            lucide.createIcons();
            generateBtn.click(); // Generate a password on page load
        });
    