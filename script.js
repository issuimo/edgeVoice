function speech() {
    // 检查浏览器是否支持Web Speech API
    if ('speechSynthesis' in window) {
        // 创建SpeechSynthesisUtterance对象
        var utterance = new SpeechSynthesisUtterance();

        // 设置要朗读的文字
        utterance.text = document.getElementById('inputText').value;

        utterance.volume = document.getElementById('ttsvolume').value; // 声音的音量，区间范围是0到1，默认是1。
        utterance.rate = document.getElementById('ttsRate').value; // 设置播放语速，范围：0.1 - 10之间    正常为1倍播放
        utterance.pitch = document.getElementById('ttsPitch').value; // 表示说话的音高，数值，范围从0（最小）到2（最大）。默认值为1。
        utterance.lang = 'zh-cn'; // 使用的语言，字符串， 例如："zh-cn"

        utterance.onend = (event) => { //语音合成结束时候的回调（语音读完后触发）
            document.getElementById('speech').disabled = false;
            document.getElementById('speech').style.backgroundColor = '#4285F4';
            document.getElementById('pause').disabled = true;
            document.getElementById('pause').style.backgroundColor = 'gray';
            document.getElementById('clear').disabled = true;
            document.getElementById('clear').style.backgroundColor = 'gray';
        }

        document.getElementById('speech').disabled = true;
        document.getElementById('speech').style.backgroundColor = 'gray';
        document.getElementById('pause').disabled = false;
        document.getElementById('pause').style.backgroundColor = '#d1ad37';
        document.getElementById('clear').disabled = false;
        document.getElementById('clear').style.backgroundColor = '#f44242';

        // 调用浏览器的朗读功能
        speechSynthesis.speak(utterance);
    } else {
        alert('浏览器不支持Web Speech API');
    }
}

function cancel() {
    document.getElementById('speech').disabled = false;
    document.getElementById('speech').style.backgroundColor = '#4285F4';
    document.getElementById('pause').disabled = true;
    document.getElementById('pause').style.backgroundColor = 'gray';
    document.getElementById('resume').disabled = true;
    document.getElementById('resume').style.backgroundColor = 'gray';
    document.getElementById('clear').disabled = true;
    document.getElementById('clear').style.backgroundColor = 'gray';
    speechSynthesis.cancel();
}

function pause() {
    document.getElementById('pause').disabled = true;
    document.getElementById('pause').style.backgroundColor = 'gray';
    document.getElementById('resume').disabled = false;
    document.getElementById('resume').style.backgroundColor = '#17ca44';
    speechSynthesis.pause();
}

function resume() {
    document.getElementById('resume').disabled = true;
    document.getElementById('resume').style.backgroundColor = 'gray';
    document.getElementById('pause').disabled = false;
    document.getElementById('pause').style.backgroundColor = '#d1ad37';
    speechSynthesis.resume();
}

function gotoUrl(url) {
    location.href = url;
}