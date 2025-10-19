   document.addEventListener('DOMContentLoaded', () => {
            // Get our HTML elements
            const titleEl = document.getElementById('session-title');
            const timerEl = document.getElementById('timer');
            const startBtn = document.getElementById('start-pause-btn');
            const resetBtn = document.getElementById('reset-btn');

            // Timer settings
            const WORK_MINUTES = 25;
            const BREAK_MINUTES = 5;

            // State variables to keep track of everything
            let minutes = WORK_MINUTES;
            let seconds = 0;
            let isWorkMode = true;
            let intervalId = null; // Will store the setInterval ID

            function updateTimerDisplay() {
                // Format the time to always have two digits
                const formattedMinutes = String(minutes).padStart(2, '0');
                const formattedSeconds = String(seconds).padStart(2, '0');
                
                timerEl.textContent = `${formattedMinutes}:${formattedSeconds}`;
                document.title = `${formattedMinutes}:${formattedSeconds} - ${isWorkMode ? 'Work' : 'Break'}`;
            }

            function handleStartPause() {
                // If intervalId has a value, it means the timer is running
                if (intervalId) {
                    clearInterval(intervalId);
                    intervalId = null;
                    startBtn.textContent = 'Start';
                } else {
                    // Timer is paused or just starting, so let's run it
                    startBtn.textContent = 'Pause';
                    
                    intervalId = setInterval(() => {
                        // Main countdown logic
                        if (seconds === 0) {
                            if (minutes === 0) {
                                // Timer finished, switch modes!
                                isWorkMode = !isWorkMode; // flip from work to break, or break to work
                                
                                if (isWorkMode) {
                                    // It's time to work
                                    minutes = WORK_MINUTES;
                                    titleEl.textContent = 'Work Session';
                                    titleEl.classList.add('text-red-600');
                                    titleEl.classList.remove('text-green-600');
                                } else {
                                    // It's break time
                                    minutes = BREAK_MINUTES;
                                    titleEl.textContent = 'Break Time!';
                                    titleEl.classList.add('text-green-600');
                                    titleEl.classList.remove('text-red-600');
                                }
                            } else {
                                // We're not at 0 minutes yet, so just roll over the seconds
                                minutes--;
                                seconds = 59;
                            }
                        } else {
                            seconds--;
                        }
                        
                        updateTimerDisplay();
                    }, 1000);
                }
            }

            function resetCurrentTimer() {
                // Stop the timer completely
                clearInterval(intervalId);
                intervalId = null;
                startBtn.textContent = 'Start';
                
                // Reset time to the start of whichever session type we're in
                minutes = isWorkMode ? WORK_MINUTES : BREAK_MINUTES;
                seconds = 0;
                
                updateTimerDisplay();
            }

            // Hook up the buttons to our functions
            startBtn.addEventListener('click', handleStartPause);
            resetBtn.addEventListener('click', resetCurrentTimer);

            // Show the initial time when the page loads
            updateTimerDisplay();
        });
    