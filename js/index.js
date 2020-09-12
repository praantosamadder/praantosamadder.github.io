function everything() {
    const input = document.getElementById('terminal-input')

    let doskeyList = []

    const getDeviceTypeJS = () => {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return "tablet";
        }
        if (
            /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
                ua
            )
        ) {
            return "mobile";
        }
        return "desktop";
    };

    if (getDeviceTypeJS().toLowerCase() === "desktop") {

        const usage = "  Usage: port <command><br><br>where <command> is one of:" +
            "<br>[list-projects, view-details, help]";

        const helpString = "Welcome to this fake interactive shell.<br><br> " +
            "This works somewhat like a Windows command prompt <br><br>" +
            "You can change directory using 'cd <directory name>' or use " +
            "'dir' to see a list of files<br> and sub-folders in the current directory." +
            "<br><br>Use command 'port' to navigate know more about the author.<br><br>" + usage + "<br>";

        const name = "Praanto Samadder";

        const fullDetails = "Name: Praanto Samadder<br><br>" +
            "School: Oxford International School <br><br>" +
            "Grade: A2 (12^^th)";

        let divTagTerminalLine = document.getElementById("terminal-line");

        input.addEventListener("focusout", function (){
            input.focus()
        })


        let iterator = 0;
        let currentDirectory = "praantosamadder.github.io/about "
        let bombPlanted = false;
        let hasBombPlanted = false;

        input.addEventListener("keydown", function (e) {
            if (e.key.toLowerCase() === "enter") {
                e.preventDefault();
                doskeyList.push(input.value)
                validator();
                input.value = "";
            } else if (e.key.toLowerCase() === "c" && e.ctrlKey){
                e.preventDefault()
                println(input.value, "", currentDirectory, 0);
                input.value = "";
            }
        })

        function validator() {

            let randomNum = (Math.random() * 4) * 1000;

            input.disabled = true;

            // <summary>
            // value is printed on screen and is case-sensitive
            // v1 is not printed on screen and is not case-sensitive. v1 is used for argument checking 
            // </summary>

            let value = input.value
            let v1 = value.toLowerCase()

            const argumentSplit = v1.split(" ")
            
            if (v1 === "cd") {
                println(value, currentDirectory, currentDirectory, 0)
            } else if (v1 === "exit"){
                window.close()
            } else if(v1 === "doskey") {
                println(value, "", currentDirectory, randomNum)
            } else if (v1 === "download firefox"){
                println(value, "~ Ever heard of Chrome before?", currentDirectory, 2000)
                setTimeout(function () {
                    window.open("https://www.google.com/chrome/")
                }, 4000)
            } else if (v1 === "npm install xterm") {
                println(value, "~ I tried doing that. Worked on my Windows machine. Didn't work here.", currentDirectory, randomNum)
            } else if (v1 === "pmsl") {
                println(value, "~ Don't worry. That plan is still active. " +
                    "PUBG Mobile School League is still gonna happen!!", currentDirectory, randomNum)
            } else if (v1 === "oxford international school") {
                println("🤐", "", currentDirectory, randomNum)
            } else if (v1 === "harvard university") {
                println(value, "~ Please take me in!😍😍", currentDirectory, 0)

            } else if (v1 === "harvard") {
                println(value, "~ Psst. This website was made keeping \"Impress Harvard\" in mind.", currentDirectory, 0)

            } else if (v1 === "massachusetts institute of technology") {
                println(value, "~ Looking for a geek? Well, count me in!😍😍", currentDirectory, 0)

            } else if (v1 === "mit") {
                println(value, "~ Please take me in!😍😍", currentDirectory, 0)

            } else if (v1 === "google inc") {
                println(value, "~ Yeah I'd love working there.😍😍", currentDirectory, 0)

            } else if (v1 === "google") {
                println(value, "~ Allow me, my good sir/ma'am", currentDirectory, 1000)
                window.open("https://google.com")

            } else if (v1 === "email") {
                println(value, "My email: praantox.samadder@gmail.com", currentDirectory, 1000)
                window.open("mailto:praantoxsamadder@gmail.com")

            } else {
                switch (argumentSplit[0]) {
                    case "port": {
                        // if (typeof argumentSplit[1] === "string") {
                        //     argumentSplit[1] = argumentSplit[1].toLowerCase()
                        // } // check done because toLowerCase cannot be called on type UNDEFINED
                        switch (argumentSplit[1]) {
                            case "help": {
                                println(value, helpString, currentDirectory, randomNum);
                                break;
                            }
                            case "list-projects": {
                                listProjects(value, currentDirectory);
                                break;
                            } case undefined : {
                                println(value, usage, currentDirectory, randomNum)
                                break;
                            } case "": {
                                println(value, usage, currentDirectory, randomNum)
                                break
                            } case "view-details": {
                                // if (typeof argumentSplit[2] === "string") {
                                //     argumentSplit[2] = argumentSplit[2].toLowerCase()
                                // }
                                switch (argumentSplit[2]) {
                                    case "school": {
                                        println(value, "~ Oxford International School", currentDirectory, randomNum)
                                        break
                                    } case "name": {
                                        println(value, "~ " + name, currentDirectory, randomNum)
                                        break;
                                    } case "grade": {
                                        println(value, "~ A2(12th)", currentDirectory, randomNum)
                                        break;
                                    } case undefined: {
                                        println(value, fullDetails, currentDirectory, randomNum)
                                        break
                                    } default:{
                                        println(value, fullDetails, currentDirectory, randomNum)
                                        break
                                    }
                                }
                                break
                            }
                            default: {
                                println(value, "Handle \'" + value.split(" ")[1] + "\' was not recognised.<br><br>" + usage,
                                    currentDirectory, randomNum);
                            }
                        }
                        break;
                    } case "dir": {
                        if (currentDirectory === "praantosamadder.github.io/about ") {
                            printRootDirTable(value, currentDirectory)

                        } else if (currentDirectory === "praantosamadder.github.io/js "){
                            printJsDirTable(value, currentDirectory)

                        } else if (currentDirectory === "praantosamadder.github.io/css "){
                            printCssDirTable(value, currentDirectory)

                        } else if (currentDirectory === "praantosamadder.github.io/test ") {
                            printTestDirTable(value, currentDirectory);

                        } else if (currentDirectory === "praantosamadder.github.io/audio ") {
                            printAudioDirTable(value, currentDirectory);

                        } else if (currentDirectory === "praantosamadder.github.io/fonts ") {
                            printFontsDir(value, currentDirectory);

                        } else {
                            println(value, "Unexpected error", currentDirectory, randomNum)

                        }
                        break
                    } case "cd": {
                        if (argumentSplit[1] === "js" && currentDirectory === "praantosamadder.github.io/about ") {
                            currentDirectory = currentDirectory.replace("about ", "") + "js "
                            println(value, "", currentDirectory, randomNum)
                            break
                        } else if (argumentSplit[1] === "css" && currentDirectory === "praantosamadder.github.io/about ") {
                            currentDirectory = currentDirectory.replace("about ", "") + "css "
                            println(value, "", currentDirectory, randomNum)
                            break
                        } else if (argumentSplit[1] === "..") {
                            currentDirectory = "praantosamadder.github.io/about "
                            println(value, "", currentDirectory, randomNum)
                            break
                        } else if (argumentSplit[1] === "test" && currentDirectory === "praantosamadder.github.io/about ") {
                            currentDirectory = currentDirectory.replace("about ", "") + "test "
                            println(value, "", currentDirectory, randomNum)
                            break;
                        } else if (argumentSplit[1] === "audio" && currentDirectory === "praantosamadder.github.io/about ") {
                            currentDirectory = currentDirectory.replace("about ", "") + "audio "
                            println(value, "", currentDirectory, randomNum)
                            break;
                        } else if (argumentSplit[1] === "fonts" && currentDirectory === "praantosamadder.github.io/about ") {
                            currentDirectory = currentDirectory.replace("about ", "") + "fonts "
                            println(value, "", currentDirectory, randomNum)
                            break;
                        } else if (argumentSplit[1] === undefined || argumentSplit[1] === "") {
                            println(value, "", currentDirectory, 0)
                            break
                        } else {
                            println(value, "Directory \'" + argumentSplit[1] + "\' does not exist",
                                currentDirectory, randomNum)
                            break;
                        }
                    } case "cd.": {
                        println(value, "", currentDirectory, randomNum)
                        break;
                    } case "index.html": {
                        if (currentDirectory === "praantosamadder.github.io/about ") {
                            println(value, "", currentDirectory, randomNum)
                            window.open("https://raw.githubusercontent.com/praantosamadder/praantosamadder.github.io/master/index.html")
                        } else {
                            println(value, "\'index.html\. was not recognized", currentDirectory, randomNum)
                        }
                        break
                    } case "favicon.jpg": {
                        if (currentDirectory === "praantosamadder.github.io/about ") {
                            println(value, "", currentDirectory, randomNum)
                            window.open("https://raw.githubusercontent.com/praantosamadder/praantosamadder.github.io/master/favicon.jpg")
                        } else {
                            println(value, "\'favicon.jpg\. was not recognized", currentDirectory, randomNum)
                        }
                        break
                    } case "index.js" : {
                        if (currentDirectory === "praantosamadder.github.io/js ") {
                            println(value, "", currentDirectory, randomNum)
                            window.open("https://raw.githubusercontent.com/praantosamadder/praantosamadder.github.io/master/js/index.js")
                        } else {
                            println(value, "\'index.js\. was not recognized", currentDirectory, randomNum)
                        }
                        break
                    } case "center.html": {
                        if (currentDirectory === "praantosamadder.github.io/test ") {
                            println(value, "", currentDirectory, randomNum)
                            window.open("https://raw.githubusercontent.com/praantosamadder/praantosamadder.github.io/master/test/center.html")
                        } else {
                            println(value, "\'center.html\. was not recognized", currentDirectory, randomNum)
                        }
                        break;
                    } case "audio.html": {
                        if (currentDirectory === "praantosamadder.github.io/test ") {
                            println(value, "", currentDirectory, randomNum)
                            window.open("https://raw.githubusercontent.com/praantosamadder/praantosamadder.github.io/master/test/audio.html")
                        } else {
                            println(value, "\'center.html\. was not recognized", currentDirectory, randomNum)
                        }
                        break;
                    } case "defusing_bomb_csgo.mp3": {
                        if (currentDirectory === "praantosamadder.github.io/audio ") {
                            println(value, "~ I can't open that file yet. Sorry about that.", currentDirectory, randomNum)
                        } else {
                            println(value, "\'defusing_bomb_csgo.mp3\. was not recognized", currentDirectory, randomNum)
                        }
                        break;
                    } case "csgo_awp_effect.mp3.mp3": {
                        if (currentDirectory === "praantosamadder.github.io/audio ") {
                            println(value, "~ I can't open that file yet. Sorry about that.", currentDirectory, randomNum)
                        } else {
                            println(value, "\'csgo_awp_effect.mp3\. was not recognized", currentDirectory, randomNum)
                        }
                        break;
                    } case "csgo_bomb_plant.mp3": {
                        if (currentDirectory === "praantosamadder.github.io/audio ") {
                            println(value, "~ I can't open that file yet. Sorry about that.", currentDirectory, randomNum)
                        } else {
                            println(value, "\'csgo_bomb_plant.mp3\. was not recognized", currentDirectory, randomNum)
                        }
                        break;
                    } case "gsgo_bomb.mp3": {
                        if (currentDirectory === "praantosamadder.github.io/audio ") {
                            println(value, "~ I can't open that file yet. Sorry about that.", currentDirectory, randomNum)
                        } else {
                            println(value, "\'gsgo_bomb.mp3\. was not recognized", currentDirectory, randomNum)
                        }
                        break;
                    } case "table.html": {
                        if (currentDirectory === "praantosamadder.github.io/test ") {
                            println(value, "", currentDirectory, randomNum)
                            window.open("https://raw.githubusercontent.com/praantosamadder/praantosamadder.github.io/master/test/table.html")
                        } else {
                            println(value, "\'table.html\. was not recognized", currentDirectory, randomNum)
                        }
                        break;
                    } case "index.css" : {
                        if (currentDirectory === "praantosamadder.github.io/css ") {
                            println(value, "", currentDirectory, randomNum)
                            window.open("https://raw.githubusercontent.com/praantosamadder/praantosamadder.github.io/master/css/index.css")
                        } else {
                            println(value, "\'index.css\. was not recognized", currentDirectory, randomNum)
                        }
                        break
                    } case "c.woff" : {
                        if (currentDirectory === "praantosamadder.github.io/fonts ") {
                            println(value, "~ Your browser can't open that file yet. Sorry about that.", currentDirectory, randomNum)
                        } else {
                            println(value, "\'c.woff\' was not recognized", currentDirectory, randomNum)
                        }
                        break
                    } case "cascadiacode.woff2" : {
                        if (currentDirectory === "praantosamadder.github.io/fonts ") {
                            println(value, "~ Chrome can't open that file yet. Sorry about that.", currentDirectory, randomNum)
                        } else {
                            println(value, "\'CascadiaCode.woff2\'. was not recognized", currentDirectory, randomNum)
                        }
                        break
                    } case "cascadiacodepl.woff2" : {
                        if (currentDirectory === "praantosamadder.github.io/fonts ") {
                            println(value, "~ Chrome can't open that file yet. Sorry about that.", currentDirectory, randomNum)
                        } else {
                            println(value, "\'CascadiaCodePL.woff2\'. was not recognized", currentDirectory, randomNum)
                        }
                        break
                    } case "cascadiamono.woff2" : {
                        if (currentDirectory === "praantosamadder.github.io/fonts ") {
                            println(value, "~ Your browser can't open that file yet. Sorry about that.", currentDirectory, randomNum)
                        } else {
                            println(value, "\'CascadiaMono.woff2\'. was not recognized", currentDirectory, randomNum)
                        }
                        break
                    } case "cascadiamonopl.woff2" : {
                        if (currentDirectory === "praantosamadder.github.io/fonts ") {
                            println(value, "~ Your browser can't open that file yet. Sorry about that.", currentDirectory, randomNum)
                        } else {
                            println(value, "\'CascadiaMonoPL.woff\'. was not recognized", currentDirectory, randomNum)
                        }
                        break
                    } case "cd..": {
                        currentDirectory = "praantosamadder.github.io/about "
                        println(value, "", currentDirectory, 0)
                        break
                    } case "": {
                        println(value, "" , currentDirectory, 0)
                        break
                    } case "mkdir": {
                        println(value, "~ Hey! This isn't a real web-based cmd, you know. Github Pages don't work that way." +
                            " It's all fake! 😁", currentDirectory, randomNum)
                        break
                    } case "fuck": {
                        println("🤐", "", currentDirectory, 0)
                        break;
                    } case "faggot": {
                        println("🤐", "", currentDirectory, 0)
                        break;
                    } case "motherfucker": {
                        println("🤐", "", currentDirectory, 0)
                        break;
                    } case "asshole": {
                        println("🤐", "", currentDirectory, 0)
                        break;
                    } case "cunt": {
                        println("🤐", "", currentDirectory, 0)
                        break;
                    } case "shithole": {
                        println("🤐", "", currentDirectory, 0)
                        break;
                    } case "nigga": {
                        println("🤐", "", currentDirectory, 0)
                        break;
                    } case "chmod": {
                        println(value, "Runtime Error: What do script can you run on a web-browser? 😑",
                            currentDirectory, randomNum)
                        break
                    } case "python": {
                        println(value, "print(\"~ Oh, I'm so sorry. Github Pages doesn't support Python. Oh how easy my " +
                            "work would've been creating this if it did. 😣\")", currentDirectory, randomNum)
                        break
                    } case "7355608": {
                        if (bombPlanted === false && hasBombPlanted === false) {
                            document.getElementById("audBombPlanting").play()
                            document.getElementById("audBombPlanted").play()
                            bombPlanted = true;
                            hasBombPlanted = true;
                            println(value, "", currentDirectory, 4000)
                        } else {
                            println(value, "", currentDirectory, randomNum)
                        }
                        break
                    } case "doskey": {
                        switch (argumentSplit[1]){
                            case "/history": {
                                printDoskey(value, doskeyList, currentDirectory)
                                break
                            } default: {
                                println(value, "", currentDirectory, randomNum)
                                break
                            }
                        }
                        break
                    } case "defuse": {
                        if (bombPlanted === true && hasBombPlanted === true) {
                            document.getElementById("audDefusing").play()
                            document.getElementById("audCTWin").play()
                            bombPlanted = false;
                            hasBombPlanted = false;
                            println(value, "", currentDirectory, 4000)
                        } else {
                            println(value, "", currentDirectory, randomNum)
                        }
                        break
                    } case undefined: {
                        println(value, "", currentDirectory, 0)
                        break;
                    } case "cls": {
                        // HAPPENS INSTANTLY ie. NO FAKE NETWORK DELAY
                        while (divTagTerminalLine.firstChild) {
                            divTagTerminalLine.removeChild(divTagTerminalLine.firstChild)
                        }
                        document.getElementById("admissions").innerText = ""
                        initialization()
                        input.disabled = false;
                        input.focus()
                        break;
                    } default: {
                        println(value, "Command \'" + value.split(" ")[0] + "\' not recognized. Use \'port help\' " +
                            "to see help", currentDirectory, randomNum)
                    }
                }
            }
        }

        function dollaSignIdGenerator(iterator) {
            const baseId = "dolla-sign-";
            return baseId + (iterator).toString()
        }

        function terminalOutputIdGenerator(iterator) {
            const baseId = "terminal-output-"
            return baseId + iterator.toString()
        }

        function terminalInputTextIdGenerator(iterator) {
            const baseId = "terminal-input-"
            return baseId + iterator.toString()
        }

        function initialization() {
            // CREATES A NEW DOLLA SIGN INSIDE terminal-line DIV TAG
            let p = document.createElement("p");
            p.className = "dolla-sign";
            p.id = dollaSignIdGenerator(iterator);
            p.appendChild(document.createTextNode(currentDirectory + "> "))
            divTagTerminalLine.appendChild(p);

            // CREATE A NEW TERMINAL INPUT TEXT INSIDE terminal-line DIV TAG
            let p1 = document.createElement("p");
            p1.className = "terminal-input-text";
            p1.id = terminalInputTextIdGenerator(iterator);
            p1.appendChild(document.createTextNode(""));
            divTagTerminalLine.appendChild(p1);

            // CREATE A NEW TERMINAL OUTPUT TEXT INSIDE terminal-line DIV TAG
            let p2 = document.createElement("p");
            p2.className = "terminal-input-text";
            p2.id = terminalOutputIdGenerator(iterator);
            p2.appendChild(document.createTextNode(""));
            divTagTerminalLine.appendChild(p2);
        }

        initialization();

        function println(value, msg, dir, randomNum) {
            let p1 = document.getElementById(terminalInputTextIdGenerator(iterator))
            p1.style.display = "inline";
            let msg1 = document.createTextNode(value);
            p1.appendChild(msg1);

            let p2 = document.getElementById(terminalOutputIdGenerator(iterator))
            p2.style.display = "block";


            setTimeout(function () {
                let msgSplit = msg.split("<br>")
                if (msgSplit.length > 1) {
                    for (let i = 0; i < msgSplit.length; i++) {
                        let msg2 = document.createTextNode(msgSplit[i]);
                        p2.appendChild(msg2)
                        p2.style.paddingLeft = "10px"
                        p2.appendChild(document.createElement("br"))
                    }
                } else {
                    let msg2 = document.createTextNode(msg);
                    p2.style.paddingLeft = "5px"
                    p2.appendChild(msg2)
                }

                iterator++

                let p90 = document.createElement("p");
                p90.className = "dolla-sign";
                p90.appendChild(document.createTextNode(dir + "> "))
                p90.id = dollaSignIdGenerator(iterator);
                divTagTerminalLine.appendChild(p90);

                let p4 = document.createElement("p")
                p4.className = "terminal-input-text";
                p4.id = terminalInputTextIdGenerator(iterator);
                p4.appendChild(document.createTextNode(""));
                p4.style.display = "inline"
                divTagTerminalLine.appendChild(p4);

                let p5 = document.createElement("p");
                p5.className = "terminal-input-text";
                p5.id = terminalOutputIdGenerator(iterator);
                p5.appendChild(document.createTextNode(""));
                p5.style.display = "inline"
                divTagTerminalLine.appendChild(p5);
                input.disabled = false;
                input.focus()
            }, randomNum)
        }

        function printRootDirTable(value, dir) {

            let l = document.getElementById(terminalInputTextIdGenerator(iterator))
            l.style.display = "inline";
            let msg1 = document.createTextNode(value);
            l.appendChild(msg1);

            let p2 = document.getElementById(terminalOutputIdGenerator(iterator))
            p2.style.display = "block";

            let randomNum = (Math.random() * 4) * 1000;

            setTimeout(function () {
                let date = new Date().toString().split(" ")
                let currentTime = date[4]
                let currentDate = date[2] + "-" + date[1] + "-" + date[3]

                let table = document.createElement("table")
                let tableRow1 = document.createElement("tr")

                let dirDet = document.createElement("p")
                dirDet.appendChild(document.createTextNode("Directory of praantosamadder.github.io/about"))

                addTableData(tableRow1, currentDate)
                addTableData(tableRow1, currentTime)
                addTableData(tableRow1, "<DIR>")
                addTableData(tableRow1, "")
                addTableData(tableRow1, ".")

                let tableRow2 = document.createElement("tr");
                addTableData(tableRow2, currentDate)
                addTableData(tableRow2, currentTime)
                addTableData(tableRow2, "<DIR>")
                addTableData(tableRow2, "")
                addTableData(tableRow2, "..")


                let tableRow3 = document.createElement("tr");
                addTableData(tableRow3, currentDate)
                addTableData(tableRow3, currentTime)
                addTableData(tableRow3, "<DIR>")
                addTableData(tableRow3, "")
                addTableData(tableRow3, "css")
                
                let fontTableRow = document.createElement("tr");
                addTableData(fontTableRow, currentDate)
                addTableData(fontTableRow, currentTime)
                addTableData(fontTableRow, "")
                addTableData(fontTableRow, "21,732")
                addTableData(fontTableRow, "favicon.jpg")

                let tableRow4 = document.createElement("tr");
                addTableData(tableRow4, currentDate)
                addTableData(tableRow4, currentTime)
                addTableData(tableRow4, "<DIR>")
                addTableData(tableRow4, "")
                addTableData(tableRow4, "js")

                let tableRow5 = document.createElement("tr");
                addTableData(tableRow5, currentDate)
                addTableData(tableRow5, currentTime)
                addTableData(tableRow5, "<DIR>")
                addTableData(tableRow5, "")
                addTableData(tableRow5, "fonts")

                let tableRow6 = document.createElement("tr");
                addTableData(tableRow6, currentDate)
                addTableData(tableRow6, currentTime)
                addTableData(tableRow6, "")
                addTableData(tableRow6, "1,707")
                addTableData(tableRow6, "index.html")


                let tableRow7 = document.createElement("tr");
                addTableData(tableRow7, currentDate)
                addTableData(tableRow7, currentTime)
                addTableData(tableRow7, "<DIR>")
                addTableData(tableRow7, "")
                addTableData(tableRow7, "test")


                let tableRowM = document.createElement("tr");
                addTableData(tableRowM, currentDate)
                addTableData(tableRowM, currentTime)
                addTableData(tableRowM, "<DIR>")
                addTableData(tableRowM, "")
                addTableData(tableRowM, "audio")


                table.append(tableRow1, tableRow2, tableRow3, fontTableRow, tableRow5, tableRow6, tableRow4, tableRow7)

                p2.append(dirDet, table)

                iterator = iterator + 1

                let p9035 = document.createElement("p");
                p9035.className = "dolla-sign";
                p9035.appendChild(document.createTextNode(dir + "> "))
                p9035.id = dollaSignIdGenerator(iterator);
                divTagTerminalLine.appendChild(p9035);

                let p4 = document.createElement("p")
                p4.className = "terminal-input-text";
                p4.id = terminalInputTextIdGenerator(iterator);
                p4.appendChild(document.createTextNode(""));
                p4.style.display = "inline"
                divTagTerminalLine.appendChild(p4);

                let p5 = document.createElement("p");
                p5.className = "terminal-input-text";
                p5.id = terminalOutputIdGenerator(iterator);
                p5.appendChild(document.createTextNode(""));
                p5.style.display = "inline"
                divTagTerminalLine.appendChild(p5);
                input.disabled = false;
                input.focus()
            }, randomNum)
        }

        function addTableData(tableRow, msg){
            let tableData = document.createElement("td")
            tableData.className = "table-data"
            let data = document.createTextNode(msg)
            tableData.appendChild(data)

            tableRow.appendChild(tableData)
        }

        function addTableDataWithWidth(tableRow, msg, width) {
            tableRow.style.maxWidthidth = width
            let tableData = document.createElement("td")
            tableData.className = "table-data"
            let data = document.createTextNode(msg)
            tableData.appendChild(data)

            tableRow.appendChild(tableData)
        }

        function printJsDirTable(value, dir) {
            let l = document.getElementById(terminalInputTextIdGenerator(iterator))
            l.style.display = "inline";
            let msg1 = document.createTextNode(value);
            l.appendChild(msg1);

            let p2 = document.getElementById(terminalOutputIdGenerator(iterator))
            p2.style.display = "block";


            let randomNum = (Math.random() * 4) * 1000;
            setTimeout(function () {
                let date = new Date().toString().split(" ")
                let currentTime = date[4]
                let currentDate = date[2] + "-" + date[1] + "-" + date[3]

                let table = document.createElement("table")
                let tableRow1 = document.createElement("tr")

                let dirDet = document.createElement("p")
                dirDet.appendChild(document.createTextNode("Directory of praantosamadder.github.io/js"))

                addTableData(tableRow1, currentDate)
                addTableData(tableRow1, currentTime)
                addTableData(tableRow1, "<DIR>")
                addTableData(tableRow1, "")
                addTableData(tableRow1, ".")

                let tableRow2 = document.createElement("tr");
                addTableData(tableRow2, currentDate)
                addTableData(tableRow2, currentTime)
                addTableData(tableRow2, "<DIR>")
                addTableData(tableRow2, "")
                addTableData(tableRow2, "..")


                let tableRow3 = document.createElement("tr");
                addTableData(tableRow3, currentDate)
                addTableData(tableRow3, currentTime)
                addTableData(tableRow3, "<DIR>")
                addTableData(tableRow3, "")
                addTableData(tableRow3, "css")

                let tableRow4 = document.createElement("tr");
                addTableData(tableRow4, currentDate)
                addTableData(tableRow4, currentTime)
                addTableData(tableRow4, "<DIR>")
                addTableData(tableRow4, "")
                addTableData(tableRow4, "js")

                let tableRow5 = document.createElement("tr");
                addTableData(tableRow5, currentDate)
                addTableData(tableRow5, currentTime)
                addTableData(tableRow5, "<DIR>")
                addTableData(tableRow5, "")
                addTableData(tableRow5, "fonts")

                let tableRow6 = document.createElement("tr");
                addTableData(tableRow6, currentDate)
                addTableData(tableRow6, currentTime)
                addTableData(tableRow6, "")
                addTableData(tableRow6, "1,707")
                addTableData(tableRow6, "index.html")


                let tableRow7 = document.createElement("tr");
                addTableData(tableRow7, currentDate)
                addTableData(tableRow7, currentTime)
                addTableData(tableRow7, "")
                addTableData(tableRow7, "13,869")
                addTableData(tableRow7, "index.js")

                table.append(tableRow1, tableRow2, tableRow7)

                p2.append(dirDet, table)

                iterator = iterator + 1

                let p9035 = document.createElement("p");
                p9035.className = "dolla-sign";
                p9035.appendChild(document.createTextNode(dir + "> "))
                p9035.id = dollaSignIdGenerator(iterator);
                divTagTerminalLine.appendChild(p9035);

                let p4 = document.createElement("p")
                p4.className = "terminal-input-text";
                p4.id = terminalInputTextIdGenerator(iterator);
                p4.appendChild(document.createTextNode(""));
                p4.style.display = "inline"
                divTagTerminalLine.appendChild(p4);

                let p5 = document.createElement("p");
                p5.className = "terminal-input-text";
                p5.id = terminalOutputIdGenerator(iterator);
                p5.appendChild(document.createTextNode(""));
                p5.style.display = "inline"
                divTagTerminalLine.appendChild(p5);
                input.disabled = false;
                input.focus()
            }, randomNum);
        }

        function printCssDirTable(value, dir) {
            let l = document.getElementById(terminalInputTextIdGenerator(iterator))
            l.style.display = "inline";
            let msg1 = document.createTextNode(value);
            l.appendChild(msg1);

            let p2 = document.getElementById(terminalOutputIdGenerator(iterator))
            p2.style.display = "block";

            let randomNum = (Math.random() * 4) * 1000;
            setTimeout(function () {

                let date = new Date().toString().split(" ")
                let currentTime = date[4]
                let currentDate = date[2] + "-" + date[1] + "-" + date[3]

                let table = document.createElement("table")
                let tableRow1 = document.createElement("tr")

                let dirDet = document.createElement("p")
                dirDet.appendChild(document.createTextNode("Directory of praantosamadder.github.io/css"))

                addTableData(tableRow1, currentDate)
                addTableData(tableRow1, currentTime)
                addTableData(tableRow1, "<DIR>")
                addTableData(tableRow1, "")
                addTableData(tableRow1, ".")

                let tableRow2 = document.createElement("tr");
                addTableData(tableRow2, currentDate)
                addTableData(tableRow2, currentTime)
                addTableData(tableRow2, "<DIR>")
                addTableData(tableRow2, "")
                addTableData(tableRow2, "..")


                let tableRow3 = document.createElement("tr");
                addTableData(tableRow3, currentDate)
                addTableData(tableRow3, currentTime)
                addTableData(tableRow3, "<DIR>")
                addTableData(tableRow3, "")
                addTableData(tableRow3, "css")

                let tableRow4 = document.createElement("tr");
                addTableData(tableRow4, currentDate)
                addTableData(tableRow4, currentTime)
                addTableData(tableRow4, "<DIR>")
                addTableData(tableRow4, "")
                addTableData(tableRow4, "js")

                let tableRow5 = document.createElement("tr");
                addTableData(tableRow5, currentDate)
                addTableData(tableRow5, currentTime)
                addTableData(tableRow5, "<DIR>")
                addTableData(tableRow5, "")
                addTableData(tableRow5, "fonts")

                let tableRow6 = document.createElement("tr");
                addTableData(tableRow6, currentDate)
                addTableData(tableRow6, currentTime)
                addTableData(tableRow6, "")
                addTableData(tableRow6, "1,655")
                addTableData(tableRow6, "index.css")


                let tableRow7 = document.createElement("tr");
                addTableData(tableRow7, currentDate)
                addTableData(tableRow7, currentTime)
                addTableData(tableRow7, "")
                addTableData(tableRow7, "4,911")
                addTableData(tableRow7, "table.html")

                table.append(tableRow1, tableRow2, tableRow6)

                p2.append(dirDet, table)

                iterator = iterator + 1

                let p9035 = document.createElement("p");
                p9035.className = "dolla-sign";
                p9035.appendChild(document.createTextNode(dir + "> "))
                p9035.id = dollaSignIdGenerator(iterator);
                divTagTerminalLine.appendChild(p9035);

                let p4 = document.createElement("p")
                p4.className = "terminal-input-text";
                p4.id = terminalInputTextIdGenerator(iterator);
                p4.appendChild(document.createTextNode(""));
                p4.style.display = "inline"
                divTagTerminalLine.appendChild(p4);

                let p5 = document.createElement("p");
                p5.className = "terminal-input-text";
                p5.id = terminalOutputIdGenerator(iterator);
                p5.appendChild(document.createTextNode(""));
                p5.style.display = "inline"
                divTagTerminalLine.appendChild(p5);
                input.disabled = false;
                input.focus()
            }, randomNum)
        }

        function printTestDirTable(value, dir) {
            let l = document.getElementById(terminalInputTextIdGenerator(iterator))
            l.style.display = "inline";
            let msg1 = document.createTextNode(value);
            l.appendChild(msg1);

            let p2 = document.getElementById(terminalOutputIdGenerator(iterator))
            p2.style.display = "block";

            let randomNum = (Math.random() * 4) * 1000;
            setTimeout(function () {

                let date = new Date().toString().split(" ")
                let currentTime = date[4]
                let currentDate = date[2] + "-" + date[1] + "-" + date[3]

                let table = document.createElement("table")
                let tableRow1 = document.createElement("tr")

                let dirDet = document.createElement("p")
                dirDet.appendChild(document.createTextNode("Directory of praantosamadder.github.io/test"))

                addTableData(tableRow1, currentDate)
                addTableData(tableRow1, currentTime)
                addTableData(tableRow1, "<DIR>")
                addTableData(tableRow1, "")
                addTableData(tableRow1, ".")

                let tableRow2 = document.createElement("tr");
                addTableData(tableRow2, currentDate)
                addTableData(tableRow2, currentTime)
                addTableData(tableRow2, "<DIR>")
                addTableData(tableRow2, "")
                addTableData(tableRow2, "..")


                let tableRow3 = document.createElement("tr");
                addTableData(tableRow3, currentDate)
                addTableData(tableRow3, currentTime)
                addTableData(tableRow3, "<DIR>")
                addTableData(tableRow3, "")
                addTableData(tableRow3, "css")

                let tableRow4 = document.createElement("tr");
                addTableData(tableRow4, currentDate)
                addTableData(tableRow4, currentTime)
                addTableData(tableRow4, "<DIR>")
                addTableData(tableRow4, "")
                addTableData(tableRow4, "js")

                let tableRow5 = document.createElement("tr");
                addTableData(tableRow5, currentDate)
                addTableData(tableRow5, currentTime)
                addTableData(tableRow5, "<DIR>")
                addTableData(tableRow5, "")
                addTableData(tableRow5, "fonts")

                let tableRow6 = document.createElement("tr");
                addTableData(tableRow6, currentDate)
                addTableData(tableRow6, currentTime)
                addTableData(tableRow6, "")
                addTableData(tableRow6, "1,655")
                addTableData(tableRow6, "center.html")


                let tableRow7 = document.createElement("tr");
                addTableData(tableRow7, currentDate)
                addTableData(tableRow7, currentTime)
                addTableData(tableRow7, "")
                addTableData(tableRow7, "1,784")
                addTableData(tableRow7, "table.html")

                table.append(tableRow1, tableRow2, tableRow6, tableRow7)

                p2.append(dirDet, table)

                iterator = iterator + 1

                let p9035 = document.createElement("p");
                p9035.className = "dolla-sign";
                p9035.appendChild(document.createTextNode(dir + "> "))
                p9035.id = dollaSignIdGenerator(iterator);
                divTagTerminalLine.appendChild(p9035);

                let p4 = document.createElement("p")
                p4.className = "terminal-input-text";
                p4.id = terminalInputTextIdGenerator(iterator);
                p4.appendChild(document.createTextNode(""));
                p4.style.display = "inline"
                divTagTerminalLine.appendChild(p4);

                let p5 = document.createElement("p");
                p5.className = "terminal-input-text";
                p5.id = terminalOutputIdGenerator(iterator);
                p5.appendChild(document.createTextNode(""));
                p5.style.display = "inline"
                divTagTerminalLine.appendChild(p5);
                input.disabled = false;
                input.focus()
            }, randomNum)
        }
        function printFontsDir(value, dir) {
            let l = document.getElementById(terminalInputTextIdGenerator(iterator))
            l.style.display = "inline";
            let msg1 = document.createTextNode(value);
            l.appendChild(msg1);

            let p2 = document.getElementById(terminalOutputIdGenerator(iterator))
            p2.style.display = "block";

            let randomNum = (Math.random() * 4) * 1000;
            setTimeout(function () {

                let date = new Date().toString().split(" ")
                let currentTime = date[4]
                let currentDate = date[2] + "-" + date[1] + "-" + date[3]

                let table = document.createElement("table")
                let tableRow1 = document.createElement("tr")

                let dirDet = document.createElement("p")
                dirDet.appendChild(document.createTextNode("Directory of praantosamadder.github.io/fonts"))

                addTableData(tableRow1, currentDate)
                addTableData(tableRow1, currentTime)
                addTableData(tableRow1, "<DIR>")
                addTableData(tableRow1, "")
                addTableData(tableRow1, ".")

                let tableRow2 = document.createElement("tr");
                addTableData(tableRow2, currentDate)
                addTableData(tableRow2, currentTime)
                addTableData(tableRow2, "<DIR>")
                addTableData(tableRow2, "")
                addTableData(tableRow2, "..")


                let tableRow3 = document.createElement("tr");
                addTableData(tableRow3, currentDate)
                addTableData(tableRow3, currentTime)
                addTableData(tableRow3, "")
                addTableData(tableRow3, "55,040")
                addTableData(tableRow3, "c.woff")

                let tableRow4 = document.createElement("tr");
                addTableData(tableRow4, currentDate)
                addTableData(tableRow4, currentTime)
                addTableData(tableRow4, "")
                addTableData(tableRow4, "109,528")
                addTableData(tableRow4, "CascadiaCode.woff2")

                let tableRow5 = document.createElement("tr");
                addTableData(tableRow5, currentDate)
                addTableData(tableRow5, currentTime)
                addTableData(tableRow5, "")
                addTableData(tableRow5, "120,648")
                addTableData(tableRow5, "CascadiaCodePL.woff2")

                let tableRow6 = document.createElement("tr");
                addTableData(tableRow6, currentDate)
                addTableData(tableRow6, currentTime)
                addTableData(tableRow6, "")
                addTableData(tableRow6, "102,868")
                addTableData(tableRow6, "CascadiaMono.woff2")


                let tableRow7 = document.createElement("tr");
                addTableData(tableRow7, currentDate)
                addTableData(tableRow7, currentTime)
                addTableData(tableRow7, "")
                addTableData(tableRow7, "114,108")
                addTableData(tableRow7, "CascadiaMonoPL.woff2")

                table.append(tableRow1, tableRow2, tableRow3, tableRow4, tableRow5, tableRow6, tableRow7)

                p2.append(dirDet, table)

                iterator = iterator + 1

                let p9035 = document.createElement("p");
                p9035.className = "dolla-sign";
                p9035.appendChild(document.createTextNode(dir + "> "))
                p9035.id = dollaSignIdGenerator(iterator);
                divTagTerminalLine.appendChild(p9035);

                let p4 = document.createElement("p")
                p4.className = "terminal-input-text";
                p4.id = terminalInputTextIdGenerator(iterator);
                p4.appendChild(document.createTextNode(""));
                p4.style.display = "inline"
                divTagTerminalLine.appendChild(p4);

                let p5 = document.createElement("p");
                p5.className = "terminal-input-text";
                p5.id = terminalOutputIdGenerator(iterator);
                p5.appendChild(document.createTextNode(""));
                p5.style.display = "inline"
                divTagTerminalLine.appendChild(p5);
                input.disabled = false;
                input.focus()
            }, randomNum)
        }

        function printAudioDirTable(value, dir) {
            let l = document.getElementById(terminalInputTextIdGenerator(iterator))
            l.style.display = "inline";
            let msg1 = document.createTextNode(value);
            l.appendChild(msg1);

            let p2 = document.getElementById(terminalOutputIdGenerator(iterator))
            p2.style.display = "block";

            let randomNum = (Math.random() * 4) * 1000;
            setTimeout(function () {

                let date = new Date().toString().split(" ")
                let currentTime = date[4]
                let currentDate = date[2] + "-" + date[1] + "-" + date[3]

                let table = document.createElement("table")
                let tableRow1 = document.createElement("tr")

                let dirDet = document.createElement("p")
                dirDet.appendChild(document.createTextNode("Directory of praantosamadder.github.io/audio"))

                addTableData(tableRow1, currentDate)
                addTableData(tableRow1, currentTime)
                addTableData(tableRow1, "<DIR>")
                addTableData(tableRow1, "")
                addTableData(tableRow1, ".")

                let tableRow2 = document.createElement("tr");
                addTableData(tableRow2, currentDate)
                addTableData(tableRow2, currentTime)
                addTableData(tableRow2, "<DIR>")
                addTableData(tableRow2, "")
                addTableData(tableRow2, "..")


                let tableRow3 = document.createElement("tr");
                addTableData(tableRow3, currentDate)
                addTableData(tableRow3, currentTime)
                addTableData(tableRow3, "")
                addTableData(tableRow3, "77,459")
                addTableData(tableRow3, "csgo_awp_effect.mp3")

                let tableRow4 = document.createElement("tr");
                addTableData(tableRow4, currentDate)
                addTableData(tableRow4, currentTime)
                addTableData(tableRow4, "")
                addTableData(tableRow4, "28,153")
                addTableData(tableRow4, "csgo_bomb_plant.mp3")

                let tableRow5 = document.createElement("tr");
                addTableData(tableRow5, currentDate)
                addTableData(tableRow5, currentTime)
                addTableData(tableRow5, "")
                addTableData(tableRow5, "31,763")
                addTableData(tableRow5, "counter_terrorist_wi.mp3")

                let tableRow6 = document.createElement("tr");
                addTableData(tableRow6, currentDate)
                addTableData(tableRow6, currentTime)
                addTableData(tableRow6, "")
                addTableData(tableRow6, "18,058")
                addTableData(tableRow6, "defusing_bomb_csgo.mp3")


                let tableRow7 = document.createElement("tr");
                addTableData(tableRow7, currentDate)
                addTableData(tableRow7, currentTime)
                addTableData(tableRow7, "")
                addTableData(tableRow7, "1,784")
                addTableData(tableRow7, "table.html")

                table.append(tableRow1, tableRow2, tableRow3, tableRow4, tableRow5, tableRow6);

                p2.append(dirDet, table)

                iterator = iterator + 1

                let p9035 = document.createElement("p");
                p9035.className = "dolla-sign";
                p9035.appendChild(document.createTextNode(dir + "> "))
                p9035.id = dollaSignIdGenerator(iterator);
                divTagTerminalLine.appendChild(p9035);

                let p4 = document.createElement("p")
                p4.className = "terminal-input-text";
                p4.id = terminalInputTextIdGenerator(iterator);
                p4.appendChild(document.createTextNode(""));
                p4.style.display = "inline"
                divTagTerminalLine.appendChild(p4);

                let p5 = document.createElement("p");
                p5.className = "terminal-input-text";
                p5.id = terminalOutputIdGenerator(iterator);
                p5.appendChild(document.createTextNode(""));
                p5.style.display = "inline"
                divTagTerminalLine.appendChild(p5);
                input.disabled = false;
                input.focus()
            }, randomNum)
        }

        function listProjects(value, dir) {
            let l = document.getElementById(terminalInputTextIdGenerator(iterator))
            l.style.display = "inline";
            let msg1 = document.createTextNode(value);
            l.appendChild(msg1);

            let p2 = document.getElementById(terminalOutputIdGenerator(iterator))
            p2.style.display = "block";

            let randomNum = (Math.random()*4) * 1000;
            setTimeout(function () {
                let table = document.createElement("table")
                table.style.paddingRight = 20;
                let tableRow1 = document.createElement("tr")

                addTableDataWithWidth(tableRow1, "Project Name", "140px")
                addTableDataWithWidth(tableRow1, "Language", "240px")
                addTableDataWithWidth(tableRow1, "Description", "320px")
                addTableDataWithWidth(tableRow1, "Charts", "40px")
                addTableDataWithWidth(tableRow1, "Progress", "140px")


                let tableRow2 = document.createElement("tr");
                addTableDataWithWidth(tableRow2, "This", "140px")
                addTableDataWithWidth(tableRow2, "JS, CSS, HTML", "240px")
                addTableDataWithWidth(tableRow2, "A fake interactive shell that serves as a portfolio. Use port help" +
                    " for usage.", "320px")
                addTableDataWithWidth(tableRow2, "", "40px")
                addTableDataWithWidth(tableRow2, "Experimental", "140px")


                let tableRow3 = document.createElement("tr");
                addTableDataWithWidth(tableRow3, "Clicker", "140px")
                addTableDataWithWidth(tableRow3, "Kotlin, XML, Java, XAML, C++", "240px")
                addTableDataWithWidth(tableRow3, "An experimental app that turns your Android phone into a clicker.", "320px")
                addTableDataWithWidth(tableRow3, "", "40px")
                addTableDataWithWidth(tableRow3, "Experimental", "140px")

                let tableRow4 = document.createElement("tr");
                addTableDataWithWidth(tableRow4, "Voices", "140px")
                addTableDataWithWidth(tableRow4, "Kotlin, XML, Java, Python", "240px")
                addTableDataWithWidth(tableRow4, "An experimental Android app for Android that uses your device's front " +
                    "camera to translate sign language to speech, similar to how a speech recognizer does speech-to-text.", "320px")
                addTableDataWithWidth(tableRow4, "", "40px")
                addTableDataWithWidth(tableRow4, "Experimental", "140px")

                let tableRow5 = document.createElement("tr");
                addTableDataWithWidth(tableRow5, "Rush", "140px")
                addTableDataWithWidth(tableRow5, "Android Sdk, Python", "240px")
                addTableDataWithWidth(tableRow5, "An experimental Android app based on Tensorflow and TfLite. This app " +
                    "utilizes uses ML to detect if your water in running somewhere. Basically, this is an Android version of " +
                    "the iOS app but it's open source. Only the idea has been taken inspiration from the iOS service. I used my " +
                    "own dataset to train an open-source model.", "320px")
                addTableDataWithWidth(tableRow5, "", "40px")
                addTableDataWithWidth(tableRow5, "Experimental", "140px")

                let tableRow6 = document.createElement("tr");
                addTableDataWithWidth(tableRow6, "Dataset: Waters", "140px")
                addTableDataWithWidth(tableRow6, "Python", "240px")
                addTableDataWithWidth(tableRow6, "A labelled dataset comprised of 10 second .mp3 sound files. Labels: " +
                    "With water sound in bg; Without water sound in bg.", "320px")
                addTableDataWithWidth(tableRow6, "", "40px")
                addTableDataWithWidth(tableRow6, "Working", "140px")

                table.append(tableRow1, tableRow2, tableRow3, tableRow4, tableRow5, tableRow6)

                p2.appendChild(table)

                iterator = iterator + 1

                let p9035 = document.createElement("p");
                p9035.className = "dolla-sign";
                p9035.appendChild(document.createTextNode(dir + "> "))
                p9035.id = dollaSignIdGenerator(iterator);
                divTagTerminalLine.appendChild(p9035);

                let p4 = document.createElement("p")
                p4.className = "terminal-input-text";
                p4.id = terminalInputTextIdGenerator(iterator);
                p4.appendChild(document.createTextNode(""));
                p4.style.display = "inline"
                divTagTerminalLine.appendChild(p4);

                let p5 = document.createElement("p");
                p5.className = "terminal-input-text";
                p5.id = terminalOutputIdGenerator(iterator);
                p5.appendChild(document.createTextNode(""));
                p5.style.display = "inline"
                divTagTerminalLine.appendChild(p5);
                input.disabled = false;
                input.focus()
            }, randomNum)
        }

        function printDoskey(value, list, dir) {
            let l = document.getElementById(terminalInputTextIdGenerator(iterator))
            l.style.display = "inline";
            let msg1 = document.createTextNode(value);
            l.appendChild(msg1);

            let p2 = document.getElementById(terminalOutputIdGenerator(iterator))
            p2.style.display = "block";

            let randomNum = (Math.random() * 4) * 1000;
            setTimeout(function () {

                // let date = new Date().toString().split(" ")
                // let currentTime = date[4]
                // let currentDate = date[2] + "-" + date[1] + "-" + date[3]

                let table = document.createElement("table")
                // let tableRow1 = document.createElement("tr")

                // let dirDet = document.createElement("p")
                // dirDet.appendChild(document.createTextNode("Directory of praantosamadder.github.io/audio"))

                for (itemIndex in list ){
                    let tableRow = document.createElement("tr")
                    addTableData(tableRow, list[itemIndex])
                    table.appendChild(tableRow)
                }

                // addTableData(tableRow1, currentDate)
                // addTableData(tableRow1, currentTime)
                // addTableData(tableRow1, "<DIR>")
                // addTableData(tableRow1, "")
                // addTableData(tableRow1, ".")

               
                // table.append(tableRow1, tableRow2, tableRow3, tableRow4, tableRow5, tableRow6);

                p2.append(table)

                iterator = iterator + 1

                let p9035 = document.createElement("p");
                p9035.className = "dolla-sign";
                p9035.appendChild(document.createTextNode(dir + "> "))
                p9035.id = dollaSignIdGenerator(iterator);
                divTagTerminalLine.appendChild(p9035);

                let p4 = document.createElement("p")
                p4.className = "terminal-input-text";
                p4.id = terminalInputTextIdGenerator(iterator);
                p4.appendChild(document.createTextNode(""));
                p4.style.display = "inline"
                divTagTerminalLine.appendChild(p4);

                let p5 = document.createElement("p");
                p5.className = "terminal-input-text";
                p5.id = terminalOutputIdGenerator(iterator);
                p5.appendChild(document.createTextNode(""));
                p5.style.display = "inline"
                divTagTerminalLine.appendChild(p5);
                input.disabled = false;
                input.focus()
            }, randomNum)
        }
    }
}

window.onload = () => {
    everything();
}