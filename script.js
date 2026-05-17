function calculateAttendance() {

    let total = parseInt(document.getElementById("totalnumber").value);

    let attend = parseInt(document.getElementById("attended").value);

    let target = parseFloat(document.getElementById("percent").value);

    let result = document.getElementById("result");


    if (
        isNaN(total) ||
        isNaN(attend) ||
        isNaN(target) ||
        total <= 0 ||
        attend < 0 ||
        target <= 0
    ) {

        result.innerHTML = "⚠️ Please Enter Valid Details";
        return;
    }
    if (attend>total){
        result.innerHTML="🚨Error:Attended classes cannot be greater than conducted classes";
        return;
    }



    let currentattendance = ((attend / total) * 100).toFixed(2);

    let message = ` 📊 Current Attendance: ${currentattendance}% <br><br>`;


    if (currentattendance >= target) {

        let bunk = Math.floor((attend * 100 / target) - total);

        message += ` 🎉 You can bunk ${bunk} more classes safely.`;

    } else {

        let extraclasses = 0;

        while (
            ((attend + extraclasses) / (total + extraclasses)) * 100 < target
        ) {

            extraclasses++;
        }

        message += ` 📚 Attend next ${extraclasses} classes to reach ${target}%`;
    }


    if (currentattendance < target) {

        message += `<br><br> 🚨Warning: Your attendance is below ${target}%`;
    }


    result.innerHTML = message;
}
