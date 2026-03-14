

document.getElementById("rrhReferralForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {};

    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    const body = encodeURIComponent(`
Referral Form Submission

CLIENT INFORMATION
Name: ${data.clientName}
DOB: ${data.dob}
Household Size: ${data.householdSize}
Shelter/Drop-in: ${data.shelterStatus}

HOMELESS STATUS
Where they slept last night: ${data.currentLocation}
Duration Homeless: ${data.homelessDuration}
Meets HUD Definition: ${data.hudDefinition}
Explanation: ${data.hudExplain}

HOUSING CRISIS
Details: ${data.evictionDetails}

INCOME & FINANCIAL STABILITY
Has Income: ${data.hasIncome}
Source of Income: ${data.incomeSource}
Monthly Income: ${data.monthlyIncome}
Income Plan if None: ${data.incomePlan}

HOUSING PLAN
How they will retain housing: ${data.retainHousing}
Self-Sufficiency Plan: ${data.selfSufficiency}

BARRIERS / RISKS
Barriers: ${data.barriers}

ADDITIONAL QUESTIONS
Why referring this client: ${data.rrhFit}
Extension request: ${data.extensionNeed}
Past Assistance: ${data.pastAssistance}
Additional info: ${data.additionalInfo}

STAFF SIGNATURE
Name: ${data.staffSignature}
Agency: ${data.agency}
Date: ${data.signatureDate}

Submitted: ${new Date().toLocaleString()}
`.trim());

    const subject = encodeURIComponent(`Referral - ${data.clientName}`);

    window.location.href = `mailto:patty.james@switchpointcrc.org?subject=${subject}&body=${body}`;

    document.getElementById("successMessage").style.display = "block";
});