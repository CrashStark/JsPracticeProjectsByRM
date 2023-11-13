const convert = document.getElementById('click_to_convert');
        const convertedText = document.getElementById('convert_text');

        convert.addEventListener('click', () => {
            var speech = true;

            // Check if SpeechRecognition is supported
            if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
                window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                const recognition = new SpeechRecognition();
                recognition.interimResults = true;

                recognition.addEventListener('result', e => {
                    const transcript = Array.from(e.results)
                        .map(result => result[0])
                        .map(result => result.transcript);

                    convertedText.innerHTML = transcript;
                });

                if (speech === true) {
                    recognition.start();
                }
            } else {
                alert("Speech recognition is not supported in your browser");
            }
        });