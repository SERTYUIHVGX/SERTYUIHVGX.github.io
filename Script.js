const form = document.getElementById('commandForm');
const input = document.getElementById('commandInput');
const output = document.getElementById('output');
const terminal = document.getElementById('terminal');
const clockElement = document.getElementById('clock');

// Clock Functionality
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

const database = {
    "awp": ["https://lessons.axsetubal.pt/", "https://useawp.developer.li//"],
    "truffled": ["https://truffled.lol/", "https://ee.rxtech.cl/"],
    "void.network": ["https://strange.martinwguy.net/?/"],
    "quasar": ["https://epic.tomaszu.com/"],
    "vapour": ["https://watervapor.space/"],
    "boredom": ["https://wispserver.dev/"],
    "koopbin": ["https://koopbin.site/", "https://learnster.online/"],
    "nebula": ["https://math.school.dovereducation.org/"],
    "afilite": ["https://readinghelpforelementary.online/"],
    "splash": ["https://splashstudy.b-cdn.net/"]
};

function printLine(text) {
    const div = document.createElement('div');
    div.textContent = text;
    output.appendChild(div);
    terminal.scrollTop = terminal.scrollHeight;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const rawVal = input.value;
    const cmd = rawVal.trim().toLowerCase();
    input.value = '';
    
    printLine('guest@terminal:~$ ' + rawVal);

    if (cmd === 'proxylist') {
        printLine("\n[ DIRECTORY ]");
        Object.keys(database).forEach(key => printLine("- " + key.toUpperCase()));
    } 
    else if (cmd === 'speedtest.cli') {
        printLine("\n[ RUNNING SPEEDTEST.CLI ]");
        printLine("LATENCY: " + (Math.floor(Math.random() * 30) + 5) + "ms");
        printLine("DOWNLOAD: " + (Math.random() * 450 + 50).toFixed(2) + " Mbps");
        printLine("UPLOAD: " + (Math.random() * 90 + 10).toFixed(2) + " Mbps");
        printLine("[ TEST COMPLETE ]\n");
    }
    else if (database[cmd]) {
        printLine("\nRETRIEVING [" + cmd.toUpperCase() + "]...");
        database[cmd].forEach(link => printLine("> " + link));
    } 
    else if (cmd === 'help') {
        printLine("\nCOMMANDS: proxylist, speedtest.cli, clear, help\n");
    } 
    else if (cmd === 'clear') {
        output.innerHTML = '';
    } 
    else if (cmd !== '') {
        printLine("ERR: '" + rawVal + "' not found.");
    }

    terminal.scrollTop = terminal.scrollHeight;
});
