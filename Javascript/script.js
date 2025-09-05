function printingpatterns() {
    let count = 0;
    console.log(`\n🖨️🖨️🖨️🖨️🖨️🖨️🖨️🖨️ Patterns Printing Start 🖨️🖨️🖨️🖨️🖨️🖨️🖨️🖨️🖨️🖨️🖨️🖨️\n\n\n`);
    let space = " ".repeat(10);

    let details = {
        firstName: "Chandermani",
        lastName: "Mishra",
        dob: "24-07-2005",
        phoneNumber: 8607653657,
        gender: "Male",
    };

    let links = {
        github: "https://github.com/Chandermani-web",
        linkedin: "https://linkedin.com/in/chandermani-mishra-a25473304",
        gmail: "himanshu124509@gmail.com",
        anotherGmail: "chandermanimishra91@gmail.com",
        instagram: "chandermani234",
    };

    let detailKeys = Object.keys(details);
    let detailValues = Object.values(details);
    let linkValues = Object.values(links);

    // Step 1: Left-aligned pyramid growing
    let step1 = setInterval(() => {
        console.log(space,"🐼".repeat(count + 1),"    ".repeat(5 - count)," ".repeat(19),"🐼".repeat(count + 1),space,`${detailKeys[count] || ""}: ${detailValues[count] || ""}`
        );
        count++;
        if (count === detailKeys.length) {
            clearInterval(step1);
            count = 0;

            // Step 2: Reverse shrinking
            let step2 = setInterval(() => {
                console.log(space,"  ".repeat(count),"🐼".repeat(6 - count)," ".repeat(8 - count),"🐼".repeat(count)," ".repeat(9 - count),"🐼".repeat(6 - count)
                );
                count++;
                if (count === 6) {
                    clearInterval(step2);
                    count = 0;

                    // Step 3: Left-aligned growing (links)
                    let step3 = setInterval(() => {
                        console.log(space,"🐼".repeat(count + 1),"  ".repeat(6 - count)," ".repeat(count + 1),"🐼".repeat(5 - count)," ".repeat(count + 1),"  ".repeat(7 - count),"🐼".repeat(count + 1),space,`${linkValues[count] || ""}`
                        );
                        count++;
                        if (count === linkValues.length) {
                            clearInterval(step3);
                            count = 0;

                            // Step 4: Diagonal growing
                            let step4 = setInterval(() => {
                                console.log(space,
                                    "  ".repeat(count),"🐼".repeat(6 - count),"🐼".repeat(10),"🐼".repeat(6 - count)
                                );
                                count++;
                                if (count === 5) {
                                    clearInterval(step4);
                                    console.log("\n✅ Pattern Printing Complete!");
                                }
                            }, 50);
                        }
                    }, 50);
                }
            }, 50);
        }
    }, 50);
}

printingpatterns();
